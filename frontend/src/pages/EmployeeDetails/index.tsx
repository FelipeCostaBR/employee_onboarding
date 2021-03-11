import React, { useContext } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { EmployeeContext } from '../../context/EmployeeContext';
import { Container } from './styles';

const EmployeeDetails: React.FC = () => {
    const { employeeList } = useContext(EmployeeContext);

    const [employeeId] = Object.values(useParams());

    const employeeDetails = employeeList.find(
        employee => employee.id === employeeId,
    );

    return (
        <Container>
            <Link to={'/'}>
                <FiChevronLeft size={30} />
            </Link>
            <h1>Employee Details</h1>
            <ul>
                <li>Employee ID:</li>
                <span>{employeeDetails?.id}</span>
                <li>Email:</li>
                <span>{employeeDetails?.email}</span>
                <li>First Name:</li>
                <span>{employeeDetails?.firstName}</span>
                <li>Last Name:</li>
                <span>{employeeDetails?.lastName}</span>
                <li>Current Salary:</li>
                <span>{employeeDetails?.salary}</span>
                <li>Tax Amount:</li>
                <span>{employeeDetails?.taxAmount}</span>
            </ul>
        </Container>
    );
};

export default EmployeeDetails;
