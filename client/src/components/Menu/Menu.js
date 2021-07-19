import React, { useState } from 'react';
import styled from 'styled-components';
import { H1 } from '../../Styles/Title';
import { formatPrice } from '../../utils/formatPrice';
import {
  Food,
  FoodGrid,
  FoodLabel,
  FoodButton,
  FoodIcon,
  FoodButtonEdit
} from './FoodGrid';
import { TagsMenu, TagCard } from './MenuTags';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductToDB } from '../../redux/products/products-action';
import Swal from 'sweetalert2';

const MenuStyled = styled.div`
  padding: 20px 20px;
  z-index: 3;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

const Separator = styled.hr`
  border: 0.5px solid #c7c7c76e;
`;

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger',
  },
  buttonsStyling: true,
});

export const Menu = ({ setOpenFood }) => {
  const dispatch = useDispatch();
  const [section, setSection] = useState(null);
  let Foods = useSelector((state) => state.products.foods);
  const categories = useSelector((state) => state.categories.categories);

  if (section) {
    Foods = Foods.filter((food) => food.section === section);
  }

  const handleDelete = (event, id) => {
    event.stopPropagation();

    swalWithBootstrapButtons
      .fire({
        title: '¿Desea Borrar éste producto?',
        text: 'Si lo hace no podrá deshacerlo',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'SI',
        cancelButtonText: 'no',
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteProductToDB(id));
          swalWithBootstrapButtons.fire(
            'Borrado!',
            `Se ha quitado sactifactoriamente 🤗`,
            'success'
          );
        }
      });
  };

  const handleEdit = (event, id) => {
    event.stopPropagation();
    console.log(id);
  };

  return (
    <>
      <MenuStyled>
        <TagsMenu>
          <h3>Filtro</h3>

          {section && (
            <TagCard onClick={() => setSection(null)}>
              <p>Todo</p>
            </TagCard>
          )}

          {categories.map((category) => (
            <TagCard
              key={category._id}
              onClick={() => setSection(category.section)}
            >
              <p>{category.section}</p>
            </TagCard>
          ))}
        </TagsMenu>

        <Separator />

        <TitleContainer>
          <H1>{section ? section : 'Todo'}</H1>
        </TitleContainer>

        <FoodGrid>
          {Foods.map((food) => (
            <>
              <Food
                key={food._id}
                img={`data:image/jpeg;base64,${food.img}`}
                onClick={() => setOpenFood(food)}
              >
                <FoodButton onClick={(event) => handleDelete(event, food._id)}>
                  <FoodIcon className="fi-rs-trash"></FoodIcon>
                </FoodButton>

                <FoodButtonEdit
                  onClick={(event) => handleEdit(event, food._id)}
                >
                  <FoodIcon className="fi-rs-pencil"></FoodIcon>
                </FoodButtonEdit>

                <FoodLabel>
                  <div>{food.name}</div>
                  <div style={{ color: '#ec7538', fontWeight: 'bolder' }}>
                    {formatPrice(food.price)}
                  </div>
                </FoodLabel>
              </Food>
            </>
          ))}
        </FoodGrid>
      </MenuStyled>
    </>
  );
};
