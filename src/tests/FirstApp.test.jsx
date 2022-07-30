import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp />', () => {
  /*test('debe hacer match con el snapshot', () => {
    const title = 'Hola, Soy Goku';
    const { container } = render(<FirstApp title={title} />);

    //console.log(container);
    expect(container).toMatchSnapshot();
  });*/

  test('debe de mostrar el título en un h1 ', () => {
    const title = 'Hola, Soy Goku';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    //const h1 = container.querySelector('h1');
    //console.log(h1.innerHTML);
    //expect(h1.innerHTML).toContain(title);

    //toBe: identico
    //toContain: Que lo contenga
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('debe de mostrar el subtitulo enviado por props ', () => {
    const title = 'Hola, Soy Goku';
    const subtitle = 'Soy un subtitulo';
    const { getAllByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );
    expect(getAllByText(subtitle).length).toBe(2);
  });
});
