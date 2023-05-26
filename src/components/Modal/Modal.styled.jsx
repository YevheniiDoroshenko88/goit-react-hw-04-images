import styled from '@emotion/styled'

export const Overlay = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  
`;

export const Modal = styled.div`
max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  
`;

export const ImgModal = styled.img`
width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover{
    transform: scale(1.03);
  cursor: zoom-in;
  }
`;