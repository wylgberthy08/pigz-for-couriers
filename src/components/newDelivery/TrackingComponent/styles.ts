import styled from "styled-components/native";

export const Container = styled.View`
 width:100%;
`;

export const Circle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: red;
  position: absolute;
  left: 48%;
  bottom: -60px;
  /* transform: translate(-50%, -50%); */
`;

export const Line = styled.View`
  width: 2px;
  height: 100px;
  background-color: black;
  position: absolute;
  top: 60px;
  left: 50%;
  /* transform: translateX(-50%); */
`;
