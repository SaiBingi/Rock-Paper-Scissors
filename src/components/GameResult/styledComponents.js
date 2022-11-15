import styled from 'styled-components'

export const GameResultContainer = styled.div`
  text-align: center;
`

export const ChoicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 600px;

  @media screen and (max-width: 767px) {
    min-width: 330px;
  }
`

export const Choice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;

  @media screen and (max-width: 767px) {
    font-size: 19px;
    margin-bottom: 10px;
  }
`

export const SelectedImage = styled.img`
  width: 185px;

  @media screen and (max-width: 767px) {
    width: 150px;
  }
`

export const GameStatus = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: bolder;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 13px;

  @media screen and (max-width: 767px) {
    font-size: 26px;
    margin-top: 12px;
  }
`

export const PlayAgain = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  border: none;
  border-radius: 12px;
  padding: 11px 48px 11px 48px;
  font-weight: 500;

  @media screen and (max-width: 767px) {
    padding: 11px 37px 11px 37px;
  }
`
