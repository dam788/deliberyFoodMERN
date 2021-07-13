import React, { useState } from 'react';
import styled from 'styled-components';
import { H1 } from '../../Styles/Title';

import { formatPrice } from '../../utils/formatPrice';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
import { useSelector } from 'react-redux';
import { TagImg, TagsMenu, TagCard } from './MenuTags';

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

export const Menu = ({ setOpenFood }) => {
  const [section, setSection] = useState(null);
  let Foods = useSelector((state) => state.products.foods);
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories);
 
  if (section) {
    Foods = Foods.filter((food) => food.section === section);
  }

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
            <TagCard key={category._id} onClick={() => setSection(category.section)}>
              <TagImg img={category.imgTag} />
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
