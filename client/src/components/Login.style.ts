import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AvatarFix = styled(Avatar)`
  margin-bottom: 5px;
`;
