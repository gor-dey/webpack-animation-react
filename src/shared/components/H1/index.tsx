import styled from 'styled-components'

const TitleStyle = styled.div`
  & > * {
    color: #42567a;
    font-size: 56px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 6vw;
      margin-top: 20px;
    }
  }
`

export const H1 = () => {
  return (
    <TitleStyle>
      <span>Исторические</span>
      <br />
      <span>даты</span>
    </TitleStyle>
  )
}
