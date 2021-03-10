import Employee from '../models/Employee';
import EmployeesRepository from '../repositories/EmployeesRepository';

interface RequestDTO {
    email: string;
    firstName: string;
    lastName: string;
    salary: number;
}

class CreateEmployeeService {
    private employeesRepository: EmployeesRepository;

    constructor(employeesRepository: EmployeesRepository) {
        this.employeesRepository = employeesRepository;
    }

    public execute({
        email,
        firstName,
        lastName,
        salary,
    }: RequestDTO): Employee {
        let taxAmount = 0;
        if (salary > 180001) {
            taxAmount = 54097 + (salary - 180000) * 0.45;
        } else if (salary > 90001) {
            taxAmount = 20797 + (salary - 90000) * 0.37;
        } else if (salary > 37001) {
            taxAmount = 3572 + (salary - 37000) * 0.325;
        } else if (salary > 18201) {
            taxAmount = (salary - 18200) * 0.19;
        }

        const findEmployeeByEmail = this.employeesRepository.findByEmail(email);

        if (findEmployeeByEmail) {
            throw new Error('This employee already exist');
        }

        const employee = this.employeesRepository.create({
            email,
            firstName,
            lastName,
            salary,
            taxAmount,
        });

        return employee;
    }
}

export default CreateEmployeeService;
