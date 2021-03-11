import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import formatValue from '../utils/formatValue';

interface Employee {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    salary: number;
    taxAmount: number;
}

interface EmployeeFormData {
    email: string;
    firstName: string;
    lastName: string;
    salary: string;
}

interface EmployeeData {
    employeeList: Employee[];
    handleDeleteEmployee: (id: string) => void;
    handleSubmit: (data: EmployeeFormData) => void;
}

export const EmployeeContext = createContext<EmployeeData>({} as EmployeeData);

export const EmployeeProvider: React.FC = ({ children }) => {
    const [employeeList, setEmployeeList] = useState<Employee[]>([]);

    useEffect(() => {
        async function loadEmployeeList(): Promise<void> {
            const response = await api.get('/employee');

            const employeeListFormatted = response.data.map(
                (employee: Employee) => ({
                    ...employee,
                    salary: formatValue(employee.salary),
                    taxAmount: formatValue(employee.taxAmount),
                }),
            );

            setEmployeeList(employeeListFormatted);
        }

        loadEmployeeList();
    }, []);

    async function handleDeleteEmployee(id: string): Promise<void> {
        const employees = employeeList.filter(employee => employee.id !== id);

        const alertResponse = window.confirm('Do you really want to Sign Out?');
        if (alertResponse) {
            await api.delete(`/employee/${id}`);
            setEmployeeList(employees);
        }
    }

    const history = useHistory();
    async function handleSubmit(data: EmployeeFormData): Promise<void> {
        await api.post('/employee', data).then(response => {
            const employeeListFormatted = {
                ...response.data,
                salary: formatValue(response.data.salary),
                taxAmount: formatValue(response.data.taxAmount),
            };

            setEmployeeList([...employeeList, employeeListFormatted]);

            const url = `/employee/${response.data.id}`;
            history.push(url);
        });
    }

    return (
        <EmployeeContext.Provider
            value={{ employeeList, handleDeleteEmployee, handleSubmit }}
        >
            {children}
        </EmployeeContext.Provider>
    );
};
