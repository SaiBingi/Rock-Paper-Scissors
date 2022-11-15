import {
  ScoreContainer,
  Gamename,
  DisplayScore,
  ScoreText,
  ScoreValue,
} from './styledComponents'

const Score = props => {
  const {score} = props

  return (
    <ScoreContainer>
      <Gamename>
        ROCK <br />
        PAPER <br />
        SCISSORS
      </Gamename>
      <DisplayScore>
        <ScoreText>Score</ScoreText>
        <ScoreValue>{score}</ScoreValue>
      </DisplayScore>
    </ScoreContainer>
  )
}

export default Score
