import EmployeesRepository from '../repositories/EmployeesRepository';

interface RequestDTO {
    id: string;
}

class DeleteEmployeeService {
    private employeesRepository: EmployeesRepository;

    constructor(employeesRepository: EmployeesRepository) {
        this.employeesRepository = employeesRepository;
    }

    public execute({ id }: RequestDTO): void {
        const findEmployeeById = this.employeesRepository.findById(id);

        if (!findEmployeeById) {
            throw new Error('This employee ID does not exist');
        }

        this.employeesRepository.delete(id);
    }
}

export default DeleteEmployeeService;
