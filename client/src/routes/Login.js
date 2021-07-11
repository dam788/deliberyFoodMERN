import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ContainerForm,
  TitleForm,
  Box,
  BoxForm,
  LabelForm,
  InputForm,
  FormButton,
  BoxSapan,
  BoldSapan,
  ErrorMessageForm
} from '../Styles/formStyles';

export const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    error: '',
  });
  const [submit, setSubmit] = useState({});
  const [error, setError] = useState(false);

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = input;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidEmail = re.test(email)

    // validación de email
    if(!isValidEmail){
            setInput({
        ...input,
       error: "Ingrese un e-mail válido"
      });
      return setError(true)
    }

    // validacion de password
    if (password.length < 6 || password.length > 30) {
      setInput({
        ...input,
       error: "Ingrese una clave entre 6 y 30 carácteres"
      });
      return setError(true)
    }

    // si pasa validación
    setError(false);
    setInput({
      ...input,
      error: '',
    });

    setSubmit(input);
  };

  useEffect(() => {
    if(error){
      setTimeout(() => {
         setError(false);
      }, 3000);
    }
  }, [error]);

  return (
    <>
      <ContainerForm onSubmit={handleSubmit}>
        <TitleForm>Iniciar Sesión</TitleForm>
        <BoxForm>
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

          <FormButton>Acceder</FormButton>
        </BoxForm>

        <Box>
          <BoxSapan>
            Si no tenés una cuenta, click en
            <Link to="/register">
              <BoldSapan> Registrarme!</BoldSapan>
            </Link>
          </BoxSapan>
          {error && <ErrorMessageForm>{input.error}</ErrorMessageForm>}
        </Box>
      </ContainerForm>
    </>
  );
};
