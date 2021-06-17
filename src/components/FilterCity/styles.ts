import React from 'react'
import styled from 'styled-components'

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  widthSize?: 'large'
}

interface DropdoownProps extends React.HTMLAttributes<HTMLUListElement> {
  widthSize?: 'large'
}

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  heightSize?: 'small'
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  heightSize?: 'small'
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  align-items: center;
`

export const Form = styled.form<FormProps>`
  display: flex;
  width: ${({ widthSize }) => (widthSize === 'large' ? '100%' : '70%')};
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const Label = styled.label`
  width: 70%;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Input = styled.input<InputProps>`
  padding: ${({ heightSize }) => (heightSize === 'small' ? '10px' : '17px')};
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.small};
  border: 1px solid rgba(52, 60, 88, 0.4);

  &:focus {
    outline: none !important;
    border-color: #719ece;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 13px;
  }
`

export const Button = styled.button<ButtonProps>`
  padding: ${({ heightSize }) => (heightSize === 'small' ? '5px' : '12px')};
  width: 25%;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 2px rgba(52, 60, 88, 0.4);
  }

  &:active {
    transform: scale(0.99);
  }

  @media (max-width: 600px) {
    padding: 0;
    width: 100%;
    margin: 24px 0;
    padding: 8px;
    font-size: ${({ theme }) => theme.font.size.small};
  }
`

export const ContainerDropdown = styled.div`
  width: 70%;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: -109px;
  }
`

export const Dropdown = styled.ul<DropdoownProps>`
  width: ${({ widthSize }) => (widthSize === 'large' ? '100%' : '70%')};
  background-color: white;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 70%;
    margin: 20px auto;
  }
`

export const DropdownButton = styled.button`
  background-color: white;
  border: none;
  padding: 12px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.small};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`
