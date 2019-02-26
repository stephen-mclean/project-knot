import styled from "styled-components";

export const H3 = styled.h3`
  font-size: ${props => props.theme.fonts.h3.size};
  font-weight: ${props => props.theme.fonts.h3.weight};
  letter-spacing: ${props => props.theme.fonts.h3.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
`;

export const H4 = styled.h4`
  font-size: ${props => props.theme.fonts.h4.size};
  font-weight: ${props => props.theme.fonts.h4.weight};
  letter-spacing: ${props => props.theme.fonts.h4.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
`;

export const H5 = styled.h5`
  font-size: ${props => props.theme.fonts.h5.size};
  font-weight: ${props => props.theme.fonts.h5.weight};
  letter-spacing: ${props => props.theme.fonts.h5.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
`;

export const H6 = styled.h6`
  font-size: ${props => props.theme.fonts.h6.size};
  font-weight: ${props => props.theme.fonts.h6.weight};
  letter-spacing: ${props => props.theme.fonts.h6.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
`;

export const S1 = styled.p`
  font-size: ${props => props.theme.fonts.s1.size};
  font-weight: ${props => props.theme.fonts.s1.weight};
  letter-spacing: ${props => props.theme.fonts.s1.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
`;

export const S2 = styled.p`
  font-size: ${props => props.theme.fonts.s2.size};
  font-weight: ${props => props.theme.fonts.s2.weight};
  letter-spacing: ${props => props.theme.fonts.s2.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
`;

export const B1 = styled.p`
  font-size: ${props => props.theme.fonts.b1.size};
  font-weight: ${props => props.theme.fonts.b1.weight};
  letter-spacing: ${props => props.theme.fonts.b1.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
`;

export const B2 = styled.p`
  font-size: ${props => props.theme.fonts.b2.size};
  font-weight: ${props => props.theme.fonts.b2.weight};
  letter-spacing: ${props => props.theme.fonts.b2.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
`;

export const Button = styled.span`
  font-size: ${props => props.theme.fonts.button.size};
  font-weight: ${props => props.theme.fonts.button.weight};
  letter-spacing: ${props => props.theme.fonts.button.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
  text-transform: uppercase;
`;

export const Caption = styled.span`
  font-size: ${props => props.theme.fonts.caption.size};
  font-weight: ${props => props.theme.fonts.caption.weight};
  letter-spacing: ${props => props.theme.fonts.caption.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
`;

export const Overline = styled.span`
  font-size: ${props => props.theme.fonts.overline.size};
  font-weight: ${props => props.theme.fonts.overline.weight};
  letter-spacing: ${props => props.theme.fonts.overline.letterspacing};
  color: ${props => props.theme.colors.foreground.default};
  text-transform: uppercase;
`;
