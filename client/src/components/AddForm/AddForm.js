import React from 'react'
import styled from 'styled-components'
import { magenta, orange } from '../../Styles/colors'
import { Title } from '../../Styles/Title'


const DivForm = styled.div `
display: flex;
justify-content: center;
`

const AgregaForm = styled.form`
margin-top: 200px;
display: flex;
flex-direction: column;
`

const AddLabel = styled.label `
    margin-bottom: 1rem;
`

const AddInput = styled.input `
    margin-left: 1rem;
`

const AddSelect = styled.select `
    margin-left: 1rem;
`

const AddButton = styled(Title)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 40px;
  width: 100%;
  color: #fff;
  cursor: pointer;
  text-align: center;
  background: linear-gradient(135deg, ${orange} 0%, ${magenta} 100%);
  border-radius: 7px;
  opacity: 1;
  transition: all 50ms linear;
  user-select: none;

  :hover {
    filter: saturate(1.1);
  }

  :active {
    transform: scale(0.98);
  }
`;

const AddForm = () => {
    return (
        <DivForm>
            <AgregaForm>
                <AddLabel htmlFor="product">Producto
                <AddInput id='product' type="text" />
                    </AddLabel>
                <AddLabel htmlFor="img">Imagen
                <AddInput type="file" id="img"  /></AddLabel>
            
                <AddLabel htmlFor="price">Precio
                <AddInput type="number" id="price" /></AddLabel>
            
            
                <AddLabel htmlFor="description">Descripcion
                <AddInput type="text" id="description" /></AddLabel>
            
                <AddLabel htmlFor="category">Categoria
                <AddSelect>
                <option value='0' id="category">Nombre</option> 
                </AddSelect>
            </AddLabel>
            <AddButton type='submit'>Agregar producto</AddButton>
            </AgregaForm>
        </DivForm>
    )
}

export default AddForm
