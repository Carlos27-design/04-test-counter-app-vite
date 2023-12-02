import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas a <CounterApp />', () => {
  //Teest: debe hacer match con el snapshop
  const value = 10;
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  //test: debe mostrar el valor inicial de 100
  test('Debe mostrar el valor inicial de 100', () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
    // expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
    //   '100'
    // );
  });

  test('debe de incrementar con el boton Incrementar +', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('Incrementar +'));
    expect(screen.getByText('11')).toBeTruthy();
  });

  test('debe de decrementar con el boton Disminuir -', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('Disminuir -'));
    expect(screen.getByText('9')).toBeTruthy();
  });

  test('debe de funcionar el boton de reset', () => {
    render(<CounterApp value={340} />);
    fireEvent.click(screen.getByText('Incrementar +'));
    fireEvent.click(screen.getByText('Incrementar +'));
    fireEvent.click(screen.getByText('Resetear'));

    // expect(screen.getByText(value)).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(340)).toBeTruthy();
  });
});
