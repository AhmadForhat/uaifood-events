import React from 'react'
import styled from 'styled-components'

import { ReactComponent as TwoPeopleIcon } from '../../assets/images/user-friends-solid.svg'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'secondary'
}

export const Container = styled.div`
  margin-top: 12px;
  margin-right: 12px;
  background-color: white;
  height: 100%;
  box-shadow: 0 1px 2px rgba(52, 60, 88, 0.4);
  width: 100%;
  min-width: 300px;
`

export const Image = styled.img`
  width: 100%;
  min-width: 300px;
  height: 160px;
  object-fit: cover;
`

export const ContainerInfos = styled.div`
  padding: 12px;
`

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.familly.openSans};
  font-size: ${({ theme }) => theme.font.size.big};
  color: ${({ theme }) => theme.colors.inkDark};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

export const Text = styled.p`
  font-family: ${({ theme }) => theme.font.familly.openSans};
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ContainerBadges = styled.div`
  margin-top: 12px;
  display: flex;
`

export const Badge = styled.div<BadgeProps>`
  font-family: ${({ theme }) => theme.font.familly.openSans};
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme, type }) =>
    type === 'secondary' ? theme.colors.ink : 'white'};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  background-color: ${({ theme, type }) =>
    type === 'secondary' ? theme.colors.grayLight : theme.colors.secondary};
  padding: 6px 12px;
  margin-right: 8px;
`

export const BadgeIcon = styled(TwoPeopleIcon)`
  margin-right: 8px;
  width: ${({ theme }) => theme.font.size.medium};
`
