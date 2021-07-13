import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {
  LogOrRegButton,
  ContainerForm,
  TitleForm,
  Box,
  BoxForm,
  LabelForm,
  InputForm,
  FormButton,
  BoxSapan,
  BoldSapan,
  ErrorMessageForm,
} from '../Styles/formStyles';

const Register = ({ setActiveUser, user, setUser, history }) => {
  const [isLogin, setIsLogin] = useState(true);

  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    password2: '',
    isAdmin: true,
    error: '',
  });

  const [error, setError] = useState(false);

  const handleChange = ({ target }) => {
    setUsuario({
      ...usuario,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, password, password2 } = usuario;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidEmail = re.test(email);

    // validación de email
    if (!isValidEmail) {
      setUsuario({
        ...usuario,
        error: 'Ingrese un e-mail válido',
      });
      setError(true);
      return 
    }

    // validacion de password
    if (password.length < 6 || password.length > 30) {
      setUsuario({
        ...usuario,
        error: 'Ingrese una clave entre 6 y 30 carácteres',
      });
      setError(true);
      return 
    }

    if (isLogin) {
      login();
    } else {
      // validacion de nombre
      if (nombre.length < 2 || nombre.length > 20) {
        setUsuario({
          ...usuario,
          error: 'Ingrese un nombre entre 2 y 20 carácteres',
        });
        setError(true);
        return 
      }
      // doble password
      if (password !== password2) {
        setUsuario({
          ...usuario,
          error: 'Los passwords deben ser iguales',
        });
        setError(true);
        return 
      }
      registrar();
    }

    // si pasa validación
  };

  const login = () => {
    setUser(JSON.parse(localStorage.getItem('usuario')));
    if (user.email !== usuario.email) {
      setUsuario({
        ...usuario,
        error: 'Usuario no registrado',
      });

      setError(true);
      return 
    }
    // si pasa validación
    console.log(user);
    setError(false);
    setUsuario({
      ...usuario,
      error: '',
    });
    setActiveUser(true);
    setUser(usuario);

    history.push('/');
  };
  const registrar = () => {
    setError(false);
    setUsuario({
      ...usuario,
      error: '',
    });
    setUser(usuario);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    setIsLogin(true);
  };

  const changeRegister = () => setIsLogin(!isLogin)

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error]);

  return (
    <>
      <ContainerForm onSubmit={handleSubmit}>
        {isLogin ? (
          <TitleForm>Iniciar Sesión</TitleForm>
        ) : (
          <TitleForm>Nuevo Usuario</TitleForm>
        )}

        <BoxForm>
          {isLogin ? null : (
            <>
              {' '}
              <LabelForm htmlFor="name">Nombre</LabelForm>
              <InputForm
                id="name"
                type="text"
                onChange={handleChange}
                name="nombre"
              />
            </>
          )}

          <LabelForm htmlFor="email">E-mail</LabelForm>
          <InputForm
            id="email"
            type="email"
            onChange={handleChange}
            name="email"
          />

          <LabelForm htmlFor="password">Password</LabelForm>
          <InputForm
            id="password"
            type="password"
            onChange={handleChange}
            name="password"
          />
          {isLogin ? null : (
            <>
              {' '}
              <LabelForm htmlFor="password2">Confirmar Password</LabelForm>
              <InputForm
                id="password2"
                type="password"
                onChange={handleChange}
                name="password2"
              />
            </>
          )}

          {isLogin ? (
            <FormButton>Acceder</FormButton>
          ) : (
            <FormButton>Registrarme!</FormButton>
          )}
        </BoxForm>

        <Box>
          {isLogin ? (
            <BoxSapan>
              Si no tenés una cuenta, click en
              <LogOrRegButton onClick={changeRegister}>
                <BoldSapan> Registrarme!</BoldSapan>
              </LogOrRegButton>
            </BoxSapan>
          ) : (
            <BoxSapan>
              Si ya tenés una cuenta, click en
              <LogOrRegButton onClick={changeRegister}>
                <BoldSapan> Iniciar Sesión!</BoldSapan>
              </LogOrRegButton>
            </BoxSapan>
          )}

          {error && <ErrorMessageForm>{usuario.error}</ErrorMessageForm>}
        </Box>
      </ContainerForm>
    </>
  );
};

export default withRouter(Register);
