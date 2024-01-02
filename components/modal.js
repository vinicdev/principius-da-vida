import styled from 'styled-components';

const StyledModal = styled.div`
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 20% auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: 500px;
  height: auto;

  @media(max-width: 600px) {
    width: 95%;
  }
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    span {
        font-weight: 600;
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 20px;
    }
    
    > a:first-child {
    margin-bottom: 10px;
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <StyledModal style={{ display: isOpen ? 'block' : 'none' }}>
            <ModalContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <Content>
                    {children}
                </Content>
            </ModalContent>
        </StyledModal>
    );
};

export default Modal;
