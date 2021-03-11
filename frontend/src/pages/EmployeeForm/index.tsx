import React, { useContext } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/Input';

import { Container } from './styles';
import { EmployeeContext } from '../../context/EmployeeContext';

const EmployeeForm: React.FC = () => {
    const { handleSubmit } = useContext(EmployeeContext);

    return (
        <>
            <Link to={'/'}>
                <FiChevronLeft size={30} />
            </Link>

            <h1>Bank Employee Onboarding Form</h1>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <p>Email:</p>
                    <Input name="email" type="text" placeholder="E-mail" />

                    <p>First Name:</p>
                    <Input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                    />

                    <p>Last Name:</p>
                    <Input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                    />

                    <p>Salary:</p>
                    <Input name="salary" type="number" placeholder="Salary" />

                    <button type="submit">SUBMIT</button>
                </Form>
            </Container>
        </>
    );
};

export default EmployeeForm;
