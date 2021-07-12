import { useEffect, useState } from 'react';
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
  const [product, setProduct] = useState({
    name: '',
    img: '',
    price: '',
    description: '',
    category: '',
    error: ''
  });
  const [submit, setSubmit] = useState({});
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = ({ target }) => {
    setError(true)
    setProduct({
      ...product,
      [target.name]: target.value,
    });
  };


  const {name, img, price, description, category} = product

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar nombre
    if(name.trim() === ''){
     setProduct({
       ...product,
       error: 'Debes ingresar un nombre'
     })
      return setError(true)
    }

    // validar imagen
    if(img.trim() === ''){
      setProduct({
        ...product,
        error: 'Debes ingresar una imagen'
      })
       return setError(true)
     }
     console.log(img);

    // validar precio
    if(price.trim() === ''){
      setProduct({
        ...product,
        error: 'Debes ingresar un precio para el producto'
      })
       return setError(true)
     }

    // validar descripcion
    if(description.trim() === ''){
      setProduct({
        ...product,
        error: 'Debes ingresar una descripcion'
      })
       return setError(true)
     }

    // validar categoria
    // if(category.trim() === ''){
    //   setProduct({
    //     ...product,
    //     error: 'Debes ingresar una categoria'
    //   })
    //    return setError(true)
    //  }

     setProduct({
      name,
      img,
      price,
      description,
      category,
      error: ''
     })
     console.log(`Paso todo: `, product);

   
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

        {error && <ErrorMessageForm>{product.error}</ErrorMessageForm>}
      </ContainerForm>
    </>
  );
};

export default AddProduct;
