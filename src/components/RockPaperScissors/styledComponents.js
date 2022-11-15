import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  background-color: #223a5f;
  min-height: 100vh;
  font-family: 'Roboto';
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 45px;

  @media screen and (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

export const Cards = styled.ul`
  margin: auto;
  padding-left: 0;
  list-style-type: none;
  max-width: 400px;
  min-height: 380px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    min-height: 330px;
  }
`

export const RulesButton = styled.button`
  align-self: flex-end;
  border: none;
  cursor: pointer;
  font-family: 'Bree Serif';
  color: #223a5f;
  background-color: #ffffff;
  font-weight: 500;
  margin-right: 15px;
  border-radius: 4px;
  padding: 8px 18px 8px 18px;
`

export const CloseModal = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 9px;
  border: none;
  margin-left: auto;
  cursor: pointer;
`

export const Rules = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 530px;
  margin: auto;
  padding-top: 5px;
  padding-bottom: 15px;

  @media screen and (max-width: 767px) {
    width: 220px;
  }
`
