import { Icon, IconContainer, StyledInput, InputWrap } from './style';

export const Input = (props) => {
  const { icon, placeholder, name, value } = props;
  return (
    <InputWrap>
      <IconContainer>
        <Icon src={icon} />
      </IconContainer>
      <StyledInput placeholder={placeholder} name={name} />
    </InputWrap>
  );
};
