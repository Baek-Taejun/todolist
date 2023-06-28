import { styled } from "styled-components";

const CardLists = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 20px;
`;
const CardButton = styled.button`
  border: 1px solid ${({ color }) => color};
  border-radius: 5px;
  background-color: white;
  width: 150px;
  height: 30px;
  margin-right: 10px;
  font-size: 15px;
`;

export { CardLists, CardButton };
