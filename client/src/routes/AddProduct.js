import { useState } from 'react';
import {
  ContainerForm,
  TitleForm,
  BoxForm,
  Box,
  LabelForm,
  InputForm,
  FileForm,
  FormButton,
  TextareaForm,
  ErrorMessageForm,
} from '../Styles/formStyles';
import { useSelector } from 'react-redux';

const AddProduct = () => {
  const categories = useSelector((state) => state.categories.categories);
  const [input, setInput] = useState({
    name: '',
    img: '',
    price: '',
    description: '',
    category: '',
  });
  const [submit, setSubmit] = useState({});
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar nombre

    // validar imagen

    // validar precio

    // validar descripcion

    // validar categoria
  };

  return (
    <>
      <ContainerForm onSubmit={handleSubmit}>
        <TitleForm>Nuevo Producto</TitleForm>
        <BoxForm>
          <LabelForm htmlFor="name">Nombre</LabelForm>
          <InputForm
            id="name"
            type="text"
            onChange={handleChange}
            name="name"
          />

          <LabelForm htmlFor="img">Imagen</LabelForm>
          <FileForm id="img" type="file" onChange={handleChange} name="img" />

          <LabelForm htmlFor="price">Precio</LabelForm>
          <InputForm
            id="price"
            type="number"
            onChange={handleChange}
            name="price"
          />

          <LabelForm htmlFor="description">Descripción</LabelForm>
          <TextareaForm
            id="description"
            type="text area"
            onChange={handleChange}
            name="description"
          />

          <LabelForm htmlFor="category">Categoría</LabelForm>
          <InputForm type="text" list="category" onChange={handleChange} />
          <datalist id="category">
            {categories.map(({ section }, key) => (
              <option key={key} value={section} />
            ))}
          </datalist>

          <FormButton>Agregar</FormButton>
        </BoxForm>

        <Box>{error && <ErrorMessageForm>{errorMsg}</ErrorMessageForm>}</Box>
      </ContainerForm>
    </>
  );
};

export default AddProduct;
