import Employee from '../models/Employee';
import EmployeesRepository from '../repositories/EmployeesRepository';

interface RequestDTO {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    salary: number;
}

class UpdateEmployeeService {
    private employeesRepository: EmployeesRepository;

    constructor(employeesRepository: EmployeesRepository) {
        this.employeesRepository = employeesRepository;
    }

    public execute({
        id,
        email,
        firstName,
        lastName,
        salary,
    }: RequestDTO): Employee {
        const findEmployeeById = this.employeesRepository.findById(id);

        if (!findEmployeeById) {
            throw new Error('This employee does not exist');
        }

        let newTaxAmount = 0;
        if (salary > 180001) {
            newTaxAmount = 54097 + (salary - 180000) * 0.45;
        } else if (salary > 90001) {
            newTaxAmount = 20797 + (salary - 90000) * 0.37;
        } else if (salary > 37001) {
            newTaxAmount = 3572 + (salary - 37000) * 0.325;
        } else if (salary > 18201) {
            newTaxAmount = (salary - 18200) * 0.19;
        }

        const employee = this.employeesRepository.update({
            id: findEmployeeById.id,
            email,
            firstName,
            lastName,
            salary,
            taxAmount: newTaxAmount,
        });

        return employee;
    }
}

export default UpdateEmployeeService;
