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

export const Register = () => {
  const [input, setInput] = useState({
    nombre:'',
    email: '',
    password: '',
    password2: '',
    error: '',
  });
  const [submit, setSubmit] = useState({});
  const [error, setError] = useState(false);
  console.log(submit)
  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, password, password2 } = input;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidEmail = re.test(email)


    // validacion de nombre
    if (nombre.length < 2 || nombre.length > 20) {
      setInput({
        ...input,
       error: "Ingrese un nombre entre 2 y 20 carácteres"
      });
      return setError(true)
    }

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

    // doble password
    if(password !== password2){
      setInput({
        ...input,
       error: "Los passwords deben ser iguales"
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
        <TitleForm>Nuevo Usuario</TitleForm>
        <BoxForm>
          <LabelForm htmlFor="name">Nombre</LabelForm>
          <InputForm
            id="name"
            type="text"
            onChange={handleChange}
            name="nombre"
          />

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

          <LabelForm htmlFor="password2">Confirmar Password</LabelForm>
          <InputForm
            id="password2"
            type="password"
            onChange={handleChange}
            name="password2"
          />

          <FormButton>Registrarme!</FormButton>
        </BoxForm>

        <Box>
          <BoxSapan>
            Si ya tenés una cuenta, click en
            <Link to="/login">
              <BoldSapan> Iniciar Sesión!</BoldSapan>
            </Link>
          </BoxSapan>
          {error && <ErrorMessageForm>{input.error}</ErrorMessageForm>}
        </Box>
      </ContainerForm>
    </>
  );
};