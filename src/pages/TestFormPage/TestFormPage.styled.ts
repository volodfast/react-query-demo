import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Modal = styled.div`
  width: 80vw;
  height: 80vh;
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
`;
