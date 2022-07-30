import PropTypes from 'prop-types';

/*const newMessage = { message: 'Hola Mundo', title: 'aaa' };

const getResult = (a, b) => {
  return a + b;
};*/

export const FirstApp = ({ title, subtitle, name }) => {
  //console.log(props);
  /*if (!title) {
    throw new Error('El title no existe');
  }*/

  return (
    <>
      {/*<code>{JSON.stringify(newMessage)}</code>*/}
      {/*<h1>{getResult(5, 6)}</h1>*/}
      <h1 data-testid="test-title"> {title} </h1>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

FirstApp.defaultProps = {
  //title: 'No hay Título',
  subtitle: 'No hay subtitulo',
  name: 'Lalo',
};
