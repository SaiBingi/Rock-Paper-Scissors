import {
  ChoicesContainer,
  Choice,
  Text,
  SelectedImage,
  GameResultContainer,
  GameStatus,
  PlayAgain,
} from './styledComponents'

const GameResult = props => {
  const {
    selectedChoiceImageUrl,
    opponentChoiceImageUrl,
    gameStatus,
    onPlayAgain,
  } = props

  const onClickPlayAgain = () => onPlayAgain()

  return (
    <GameResultContainer>
      <ChoicesContainer>
        <Choice>
          <Text>YOU</Text>
          <SelectedImage src={selectedChoiceImageUrl} alt="your choice" />
        </Choice>
        <Choice>
          <Text>OPPONENT</Text>
          <SelectedImage src={opponentChoiceImageUrl} alt="opponent choice" />
        </Choice>
      </ChoicesContainer>
      <GameStatus>{gameStatus}</GameStatus>
      <PlayAgain type="button" onClick={onClickPlayAgain}>
        PLAY AGAIN
      </PlayAgain>
    </GameResultContainer>
  )
}

export default GameResult
