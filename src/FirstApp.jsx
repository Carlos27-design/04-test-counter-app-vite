import PropTypes from 'prop-types';

// const newMessage = {
//   message: 'Hola Mundo',
//   name: 'Carlos',
// };

//Se puede pero si la funcion no es asincrona
// const saludar = () => {
//   return 'Hola Mundo';
// };

// const mensaje = () => {
//   return 'Hola manito, Como estas Espero que estes bien no más ';
// };

// const numero = (a, b) => {
//   return a + b;
// };
export const FirstApp = ({
  title,
  subtitle = 'Todo el mundo explota po loco',
  name,
}) => {
  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      {/*<code>{JSON.stringify(newMessage)}</code>*/}
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

// Esto ayuda para ver como funciona nuestro component por sus Propertys
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

// Estos son Props por defecto
FirstApp.defaultProps = {
  //title: 'No hay titulos',
  subtitle: 'No hay subtitulo',
  name: 'Carlos Coronado',
};
