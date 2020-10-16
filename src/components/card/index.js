import React from "react";
import {
  Item,
  Container,
  Image,
  Title,
  Location,
  PriceRate,
  Icon,
} from "./styles/card";

// import star from '../../assets/icons/star.png'
// import starBlank from '../../assets/icons/star-blank.png'

export default function Card({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
}

Card.Container = function CardContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Card.Image = function CardImage({ src, ...restProps }) {
  return <Image {...restProps} src={`/images/${src}.jpg`} />;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Location = function CardLocation({ children, ...restProps }) {
  return <Location {...restProps}>{children}</Location>;
};

Card.PriceRate = function CardPriceRate({ children, ...restProps }) {
  return <PriceRate {...restProps}>{children}</PriceRate>;
};

Card.Icon = function CardIcon({ ...restProps }) {
  return <Icon {...restProps} />;
};

// Card.Rating = function CardRating({ rating, ...restProps }) {

//   const rate = [1,2,3,4,5]

//   return (
//     <Rating {...restProps} >
//       {rate.map(s =>
//         s<=rating ?
//           <Card.Icon src={star}/>
//           :
//           <Card.Icon src={starBlank}/>
//       )}
//     </Rating>
//     <h1>rating</h1>
//   );
// };
