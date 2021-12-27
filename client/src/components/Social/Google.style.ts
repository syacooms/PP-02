import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const LogoutButton = styled(Button)`
  margin-bottom: 5px;
`;

export const LoginButton = styled.div`
  cursor: pointer;
  display: flex;
  width: 150px;
  padding: 15px 25px;
  margin-top: 15px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  background-color: #df4930;
  align-items: center;

  :hover {
    box-shadow: 2px 3px 3px black;
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
