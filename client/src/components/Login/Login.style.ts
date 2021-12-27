import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
`;

export const AvatarFix = styled(Avatar)`
  margin-bottom: 5px;
`;
