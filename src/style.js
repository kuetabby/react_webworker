import styled from "styled-components";

export const Container = styled.div`
  margin: 1em;
  background-color: #28ebe1;
  min-height: 100vh;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const Box = styled.div`
  min-height: 10vh;
  border: 2px solid #eee;
  padding: 1rem;
  margin: 0.5rem;
  flex: 1 0 20%;
  text-align: center;
`;
