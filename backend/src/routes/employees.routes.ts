import { Router } from 'express';
import EmployeesRepository from '../repositories/EmployeesRepository';
import CreateEmployeeService from '../services/CreateEmployeeService';
import DeleteEmployeeService from '../services/DeleteEmployeeService';
import UpdateEmployeeService from '../services/UpdateEmployeeService';

const employeesRouter = Router();

const employeesRepository = new EmployeesRepository();

employeesRouter.get('/', (request, response) => {
    try {
        const employee = employeesRepository.all();

        return response.json(employee);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

employeesRouter.get('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const employee = employeesRepository.findById(id);

        return response.json(employee);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

employeesRouter.post('/', (request, response) => {
    try {
        const { email, firstName, lastName, salary } = request.body;

        const createEmployee = new CreateEmployeeService(employeesRepository);

        const employee = createEmployee.execute({
            email,
            firstName,
            lastName,
            salary,
        });

        return response.json(employee);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

employeesRouter.delete('/:id', (request, response) => {
    const { id } = request.params;

    try {
        const deleteEmployee = new DeleteEmployeeService(employeesRepository);

        const employee = deleteEmployee.execute({ id });

        return response.json(employee);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

employeesRouter.put('/:id', (request, response) => {
    const { email, firstName, lastName, salary } = request.body;
    const { id } = request.params;

    try {
        const updateEmployee = new UpdateEmployeeService(employeesRepository);

        const employee = updateEmployee.execute({
            id,
            email,
            firstName,
            lastName,
            salary,
        });

        return response.json(employee);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
export default employeesRouter;
