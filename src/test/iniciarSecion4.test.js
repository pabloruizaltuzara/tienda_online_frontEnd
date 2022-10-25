import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';

describe('App componentes de inicio de sesion', () => {

    let Email_address;
    let password;
    beforeEach(() => {
        render(<App />);
        Email_address = screen.getByRole('Email_address', { name: 'Email_address' });
        password = screen.getByRole('password', { name: 'password' });
    })

    test('la caja de texto se encuentra en el documento', () => {
        expect(password).toBeInTheDocument();
    });

    test('prueba para envío de formulario', () => {

        const testData = { Email_address: 'admin@gmail.com', Password: 'admin' };

        const mockFn = jest.fn();
        render(<App createTask={mockFn} />);

        const inputTitle = screen.getByLabelText('Email_address');
        const inputText = screen.getByLabelText('Password');
        const button = screen.getByRole('button', {
            name: /iniciar secion/i
        });

        userEvent.clear(inputTitle);
        userEvent.type(inputTitle, testData.Email_address);

        userEvent.clear(inputText);
        userEvent.type(inputText, testData.Password);

        userEvent.click(button);

        const returnData = mockFn.mock.calls[0][0];

        expect(mockFn).toBeCalled();

        expect(returnData).toMatchObject(testData);

    });

});