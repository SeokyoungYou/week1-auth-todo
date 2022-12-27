import styled from 'styled-components';
import { theme } from '../theme';
import { SIGN_UP, SIGN_IN, TOGGLE_TEXT } from '../utils/constants';

export default function SignToggleBtn({ signState, setSignState }) {
  const handleToggleClick = () => {
    setSignState((prevState) => {
      return prevState === SIGN_UP ? SIGN_IN : SIGN_UP;
    });
  };

  return (
    <ToggleBtn bgColor={theme.btnColor} onClick={handleToggleClick}>
      <ToggleText>{TOGGLE_TEXT[signState]}</ToggleText>
    </ToggleBtn>
  );
}

const ToggleBtn = styled.button`
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
const ToggleText = styled.span`
  font-size: 14px;
  color: white;
`;
