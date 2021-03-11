import Employee from '../models/Employee';

// Date transfer Object
interface CreateEmployeeDTO {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    salary: number;
    taxAmount: number;
}

class EmployeesRepository {
    private employees: Employee[];

    constructor() {
        this.employees = [];
    }

    public all(): Employee[] {
        return this.employees;
    }

    public findByEmail(email: string): Employee | null {
        const findEmployee = this.employees.find(
            employee => employee.email === email,
        );

        return findEmployee || null;
    }

    public findById(id: string): Employee | null {
        const findEmployee = this.employees.find(
            employee => employee.id === id,
        );

        return findEmployee || null;
    }

    public delete(id: string): void {
        const employees = this.employees.filter(employee => employee.id !== id);

        this.employees = employees;
    }

    public update({
        id,
        email,
        firstName,
        lastName,
        salary,
        taxAmount,
    }: CreateEmployeeDTO): Employee {
        const employeeIndex = this.employees.findIndex(
            employee => employee.id === id,
        );

        const employee = {
            id,
            email,
            firstName,
            lastName,
            salary,
            taxAmount,
        };

        this.employees[employeeIndex] = employee;

        return employee;
    }

    public create({
        email,
        firstName,
        lastName,
        salary,
        taxAmount,
    }: Omit<CreateEmployeeDTO, 'id'>): Employee {
        const employee = new Employee({
            email,
            firstName,
            lastName,
            salary,
            taxAmount,
        });

        this.employees.push(employee);

        return employee;
    }
}

export default EmployeesRepository;
