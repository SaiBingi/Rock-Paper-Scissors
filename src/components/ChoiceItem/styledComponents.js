import styled from 'styled-components'

export const ChoiceButton = styled.button`
  cursor: pointer;
  width: 145px;
  height: 145px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  margin-right: 20px;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    width: 115px;
    height: 115px;
  }
`

export const ListItem = styled.li``

export const ChoiceImage = styled.img`
  width: 160px;

  @media screen and (max-width: 767px) {
    width: 130px;
  }
`
