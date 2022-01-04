import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-left: 0;
`;

export const UploadButton = styled(Button)`
  margin-bottom: 5px;
  color: white;
`;
