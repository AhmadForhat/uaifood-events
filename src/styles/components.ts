import React from 'react'
import styled from 'styled-components'

type TextProps = React.HtmlHTMLAttributes<HTMLParagraphElement>
type TitleProps = React.HtmlHTMLAttributes<HTMLHeadingElement>

export const Text = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.font.familly.openSans};
  font-weight: light;
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.colors.ink};
`

export const Title = styled.h2<TitleProps>`
  font-family: ${({ theme }) => theme.font.familly.openSans};
  font-weight: semi-bold;
  font-size: ${({ theme }) => theme.font.size.large};
  color: white;

  @media (max-width: 600px) {
    font-size: 38px;
  }
`
