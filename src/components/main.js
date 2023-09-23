import styled from "styled-components";

export const Container = styled.div`
  
`;

export const Screen = styled.div`
  
`;

export const Prevoius = styled.div`
  
`;

export const Current = styled.div`
  
`;

export const Button = styled.button`
  
  ${function ({ gridspan }) {
    if (gridspan) {
      return ``;
    }
  }};
  ${({ operation }) => operation && ``};
  ${({ control }) => control && `background-color:skyBlue;`};
  ${({ equals }) =>
    equals && `background-color:gray;border-bottom-right-radius:10px;`};
  ${({ decimal }) =>
    decimal && `background-color:white;border-bottom-left-radius:10px;`};
`;
