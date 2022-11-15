import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #ffffff;
  border-radius: 14px;
  padding: 2px 34px 2px 34px;
  font-family: 'Bree Serif';
  width: 75%;

  @media screen and (max-width: 767px) {
    width: 95%;
    padding: 5px 25px 5px 25px;
  }
`

export const Gamename = styled.h1`
  color: #ffffff;
  font-weight: 500;
  font-size: 26px;

  @media screen and (max-width: 767px) {
    font-size: 23px;
  }
`

export const DisplayScore = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  width: 155px;
  text-align: center;
  color: #223a5f;

  @media screen and (max-width: 767px) {
    width: 100px;
  }
`

export const ScoreText = styled.p`
  font-size: 23px;
  font-weight: 500;
  margin: 0;
  margin-top: 10px;
`

export const ScoreValue = styled.p`
  font-weight: bolder;
  font-size: 42px;
  font-family: 'Roboto';
  margin: 0;
  margin-top: 5px;
  margin-bottom: 13px;
`
