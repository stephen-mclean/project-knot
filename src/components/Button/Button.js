import PropTypes from "prop-types";
import styled from "styled-components";

export const TYPES = {
  DEFAULT: "default",
  OUTLINE: "outline"
};

export const STYLES = {
  DEFAULT: "default",
  PRIMARY: "primary",
  ACCENT: "accent"
};

const getBackgroundColor = props => {
  if (props.buttonType === TYPES.OUTLINE) {
    return "none";
  }

  switch (props.buttonStyle) {
    case STYLES.DEFAULT:
      return props.theme.colors.foreground.quaternary;
    case STYLES.PRIMARY:
      return props.theme.colors.foreground.secondary;
    case STYLES.ACCENT:
      return props.theme.colors.background.quaternary;
    default:
      throw new Error(`Invalid button style: ${props.buttonStyle}`);
  }
};

const getDisabledBackgroundColor = props => {
  if (props.buttonType === TYPES.OUTLINE) {
    return "none";
  }

  switch (props.buttonStyle) {
    case STYLES.DEFAULT:
    case STYLES.PRIMARY:
      return props.theme.colors.foreground.quintenary;
    case STYLES.ACCENT:
      return props.theme.colors.background.secondary;
    default:
      throw new Error(`Invalid button style: ${props.buttonStyle}`);
  }
};

const getFontColor = props => {
  if (props.buttonType === TYPES.OUTLINE) {
    return props.theme.colors.foreground.secondary;
  }

  switch (props.buttonStyle) {
    case STYLES.DEFAULT:
      return props.theme.colors.foreground.default;
    case STYLES.PRIMARY:
      return props.theme.colors.foreground.quintenary;
    case STYLES.ACCENT:
      return props.theme.colors.background.default;
    default:
      throw new Error(`Invalid button style: ${props.buttonStyle}`);
  }
};

const getDisabledFontColor = props => {
  if (props.buttonType === TYPES.OUTLINE) {
    return props.theme.colors.foreground.quaternary;
  }

  switch (props.buttonStyle) {
    case STYLES.DEFAULT:
    case STYLES.PRIMARY:
      return props.theme.colors.foreground.tertiary;
    case STYLES.ACCENT:
      return props.theme.colors.background.quaternary;
    default:
      throw new Error(`Invalid button style: ${props.buttonStyle}`);
  }
};

const getBorder = props => {
  if (props.buttonType === TYPES.OUTLINE) {
    return `1px solid ${props.theme.colors.foreground.secondary}`;
  }

  return "none";
};

const getDisabledBorder = props => {
  if (props.buttonType === TYPES.OUTLINE) {
    return `1px solid ${props.theme.colors.foreground.quaternary}`;
  }

  return "none";
};

const StyledButton = styled.button`
  min-height: 2rem;
  border-radius: 1rem;
  font-size: ${props => props.theme.fonts.button.size};
  font-weight: ${props => props.theme.fonts.button.weight};
  letter-spacing: ${props => props.theme.fonts.button.letterspacing};
  font-family: "Rubik", sans-serif;
  text-transform: uppercase;
  background: ${props =>
    props.disabled
      ? getDisabledBackgroundColor(props)
      : getBackgroundColor(props)};
  color: ${props =>
    props.disabled ? getDisabledFontColor(props) : getFontColor(props)};
  padding-left: 1rem;
  padding-right: 1rem;
  border: ${props =>
    props.disabled ? getDisabledBorder(props) : getBorder(props)};
  cursor: pointer;

  :disabled {
    pointer-events: none;
  }
`;

StyledButton.propTypes = {
  buttonType: PropTypes.oneOf([TYPES.DEFAULT, TYPES.OUTLINE]),
  buttonStyle: PropTypes.oneOf([STYLES.DEFAULT, STYLES.PRIMARY, STYLES.ACCENT])
};

StyledButton.defaultProps = {
  buttonType: TYPES.DEFAULT,
  buttonStyle: STYLES.DEFAULT,
  type: "button"
};

export default StyledButton;
