import { swiperBlueColor, darkBlueColor } from '@/shared/cssConstants'
import styled from 'styled-components'

const Div = styled.div`
  width: 100%;
  height: 135px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  & > span:first-child {
    color: ${swiperBlueColor};
    font-family: 'Berbas Neue';
    font-weight: 700;
  }
  & > span:last-child {
    color: ${darkBlueColor};
  }
`

export const SwiperItem = ({ data, text }: { data: number; text: string }) => {
  return (
    <Div>
      <span>{data}</span>
      <span>{text}</span>
    </Div>
  )
}
