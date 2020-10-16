import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 1.5px 5px grey;
  max-width: 300px;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 900px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Label = styled.p`
  font-size: 16px;
  font-weight: normal;
  margin: 5px 0;
`;

export const Select = styled.select`
  border-radius: 5px;
  height: 30px;
  padding-left: 5px;
  border: 2px solid #3f3f3f50;
  color: #3f3f3f75;
  margin-top: 5px;
  font-size: 16px;
`;

export const Option = styled.option`
  font-size: 14px;

  &:first-of-type:selected option {
    color: #3f3f3f75;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  height: 30px;
  padding-left: 10px;
  border: 2px solid #3f3f3f50;
  color: #3f3f3f50;
  margin-top: 5px;
  font-size: 16px;
`;
