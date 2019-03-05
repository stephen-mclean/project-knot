import React from "react";
import styled from "styled-components";
import { ALERT_TYPES } from "react-very-simple-alerts";

const getBackgroundColor = (theme, alertType) => {
  switch (alertType) {
    case ALERT_TYPES.SUCCESS:
      return theme.colors.background.quaternary;
    case ALERT_TYPES.ERROR:
      return theme.colors.danger.default;
    case ALERT_TYPES.WARN:
      return theme.colors.warning.default;
    case ALERT_TYPES.DEFAULT:
    default:
      return theme.colors.background.default;
  }
};

const getFontColor = (theme, alertType) => {
  switch (alertType) {
    case ALERT_TYPES.SUCCESS:
      return theme.colors.background.default;
    case ALERT_TYPES.ERROR:
      return theme.colors.danger.verylight;
    case ALERT_TYPES.WARN:
      return theme.colors.warning.verylight;
    case ALERT_TYPES.DEFAULT:
    default:
      return theme.colors.foreground.default;
  }
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: ${props =>
    getBackgroundColor(props.theme, props.alertType)};
  color: ${props => getFontColor(props.theme, props.alertType)};
`;

export default ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);
