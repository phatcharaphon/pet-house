import styled from "styled-components";

export const Container = styled.div`
  background-color: #fafafa;
  height: 3rem;
  border-bottom: solid #3f3f3f50 1px;
  width: 100%;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: center;
  margin: 15px;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;

  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  margin-left: 15px;
  width: 35px;
  height: 35px;
`;

export const Profile = styled.img`
  margin-left: 15px;
  width: 50px;
  height: 50px;
`;
