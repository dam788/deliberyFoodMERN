import { useState, useEffect } from 'react';
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
import { capitalizeAll, capitalizeOne } from '../utils/capitalize';

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
  const [pressKey, setPressKey] = useState(false)

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, img, price, description, category } = input;

    // validar nombre
    if (name.length < 2 || name.length > 20) {
      setErrorMsg('El nombre debe tener entre 2 y 20 carácteres');
      return setError(true);
    }

    // validar imagen
    if (img === '') {
      setErrorMsg('Debe cargar una imagen de producto');
      return setError(true);
    }

    // validar precio
    if (price === '') {
      setErrorMsg('El precio no debe estar vacío');
      return setError(true);
    }

    // validar descripcion
    if (description.length < 6 || description.length > 140) {
      setErrorMsg('La descripción debe tener entre 6 y 140 carácteres');
      return setError(true);
    }

    // validar categoria
    if (category === '') {
      setErrorMsg('Categoría no debe estar vacío');
      return setError(true);
    }

    // capitalize
    let capitalizeCategory = capitalizeAll(category);
    let nameCapitalize = capitalizeAll(name);
    let descriptionCapitalize = capitalizeOne(description);
    setInput({
      ...input,
      name: nameCapitalize,
      category: capitalizeCategory,
      description: descriptionCapitalize,
    });

    // si pasa todo esto...
    setError(false);
    setErrorMsg('');

    setSubmit(input);
  };
  console.log(submit);

  const handleKeyPress = (e) => {
    if(e.type === "keypress"){
      setPressKey(true);
    }
  }

  const handleKeyUp = (e) => {
    if(e.code === "Backspace"){
      setPressKey(false);
    }
  }

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
          <InputForm
            type="text"
            list="category"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            onKeyUp={handleKeyUp}
            name="category"
          />
          <datalist id="category">
            {categories.map(({ section }, key) => (
              <option key={key} value={section} />
            ))}
          </datalist>
          {
            pressKey &&
            (
              <>
                <LabelForm htmlFor="imgSection">Imagen Categoría</LabelForm>
                <FileForm id="imgSection" type="file" onChange={handleChange} name="imgSection" />
              </>
            )
            
          }

          <FormButton>Agregar</FormButton>
        </BoxForm>

        <Box>{error && <ErrorMessageForm>{errorMsg}</ErrorMessageForm>}</Box>
      </ContainerForm>
    </>
  );
};

export default AddProduct;
