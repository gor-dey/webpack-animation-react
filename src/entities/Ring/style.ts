import {
  backgroundColor,
  borderColor,
  darkBlueColor
} from '@/shared/cssConstants'

import styled from 'styled-components'

export const Div = styled.div`
  height: 530px;
  width: 530px;
  border-radius: 50%;
  border: solid 1px ${borderColor};
`
export const DotBig = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${darkBlueColor};
  border: solid 1px ${borderColor};
  box-sizing: border-box;
  padding: 5px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  opacity: 0;
  transition: all 0.5s ease;

  &:hover,
  &.new-class {
    background-color: ${backgroundColor};
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    opacity: 1;
  }

  & :first-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${darkBlueColor};
    font-size: 20px;
  }
  & :last-child {
    position: absolute;
    transform: translate(60px, 10px);
    color: ${darkBlueColor};
    font-size: 20px;
  }
`

export const Dot = styled.div`
  position: absolute;
  background-color: ${darkBlueColor};
  width: 6px;
  height: 6px;
  border-radius: 50%;
  transform: translate(50%, 50%);
  cursor: pointer;

  &:hover {
    ${DotBig} {
      display: block;
    }
  }
`
