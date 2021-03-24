import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import get from "lodash/get";
import { propToStyle } from "../../../theme/util/propToStyle";
import { breakpointsMedia } from "../../../theme/util/breakpointsMedia";

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typography.paragraph1.fontSize};
    font-weight: ${theme.typography.paragraph1.fontWeight};
    line-height: ${theme.typography.paragraph1.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typography.smallestException.fontSize};
    font-weight: ${theme.typography.smallestException.fontWeight};
    line-height: ${theme.typography.smallestException.lineHeight};
  `}
`;

export const TextStyleVariants = {
  smallestException,
  paragraph1,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typography.titleXS.fontSize};
      font-weight: ${theme.typography.titleXS.fontWeight};
      line-height: ${theme.typography.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.title.fontSize};
          font-weight: ${theme.typography.title.fontWeight};
          line-height: ${theme.typography.title.lineHeight};
        `}
      `,
    })}
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}

  ${propToStyle("textAlign")}
  ${propToStyle("marginBottom")}
  ${propToStyle("margin")} {
    /*
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  */
  }
`;

export function Text({ variant, children, tag, ...props }) {
  return (
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "p", "li", "a", "span"]),
  variant: PropTypes.oneOf(["title", "paragraph1", "smallestException"]),
};
