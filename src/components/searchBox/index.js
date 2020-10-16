import React from 'react';
import { Container, Input, Button } from './styles/searchBox';

export default function SearchBox({ children, ...restProps }){
  return <Container {...restProps}>{children}</Container>;
};

SearchBox.Input = function SearchBoxInput({...restProps}){
  return <Input {...restProps} />;
};

SearchBox.Button = function SearchBoxButton({ children, ...restProps }){
  return <Button {...restProps}>{children}</Button>;
};