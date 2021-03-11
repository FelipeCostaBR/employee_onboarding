import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiXCircle } from 'react-icons/fi';

import { EmployeeContext } from '../../context/EmployeeContext';

import { Header, TableContainer } from './styles';

const Dashboard: React.FC = () => {
    const { employeeList, handleDeleteEmployee } = useContext(EmployeeContext);

    return (
        <>
            <Header>
                <h1>Employee Onboarding</h1>
                <Link to="/employee.create">PLEASE CREATE AN EMPLOYEE</Link>
            </Header>

            <TableContainer>
                <h1>Employee Details</h1>
                <table>
                    <thead>
                        <tr>
                            <th>email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>View</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {employeeList.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.email}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>
                                    <Link to={`/employee/${employee.id}`}>
                                        details
                                    </Link>
                                </td>
                                <td>
                                    <FiXCircle
                                        size={20}
                                        onClick={() =>
                                            handleDeleteEmployee(employee.id)
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableContainer>
        </>
    );
};

export default Dashboard;
