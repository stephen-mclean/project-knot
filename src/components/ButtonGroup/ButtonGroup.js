import React from "react";
import styled from "styled-components";

const ButtonGroupItem = styled.div``;

const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: ${props => (props.left ? "flex-start" : "flex-end")};
  margin-bottom: 1rem;

  ${ButtonGroupItem} {
    margin-right: 0.5rem;

    :last-child {
      margin-right: 0;
    }
  }
`;

const VerticalButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.center ? "center" : "flex-start")};
  margin-bottom: 1rem;

  ${ButtonGroupItem} {
    margin-bottom: 1rem;

    :last-child {
      margin-bottom: none;
    }
  }
`;

const btnGroupContainerWithWrappedChildren = (
  Container,
  { children, ...otherProps }
) => {
  return (
    <Container {...otherProps}>
      {React.Children.map(children, child => {
        return (
          <ButtonGroupItem>
            {React.cloneElement(child, child.props)}
          </ButtonGroupItem>
        );
      })}
    </Container>
  );
};

const ButtonGroup = props =>
  btnGroupContainerWithWrappedChildren(ButtonGroupContainer, props);

const VerticalButtonGroup = props =>
  btnGroupContainerWithWrappedChildren(VerticalButtonGroupContainer, props);

export { ButtonGroup, VerticalButtonGroup };
