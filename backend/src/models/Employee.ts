import { v4 as uuid } from 'uuid';

class Employee {
    id: string;

    email: string;

    firstName: string;

    lastName: string;

    salary: number;

    taxAmount: number;

    constructor({
        email,
        firstName,
        lastName,
        salary,
        taxAmount,
    }: Omit<Employee, 'id'>) {
        this.id = uuid();
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.taxAmount = taxAmount;
    }
}

export default Employee;
