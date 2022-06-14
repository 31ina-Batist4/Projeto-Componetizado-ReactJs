import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #363636;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }


`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
    color:#363636;
    font-weight: 400;
  }
  span {
    color:#225ed8;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  

  h3 {
    margin-right: 8px;
    color: #363636;
  }

  a {
    font-size: 18px;
    color:#363636;
    font-weight: 200;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
  box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
`;
