import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  BgContainer,
  Container,
  Cards,
  Rules,
  RulesButton,
  CloseModal,
} from './styledComponents'
import Score from '../Score'
import ChoiceItem from '../ChoiceItem'
import GameResult from '../GameResult'
import 'reactjs-popup/dist/index.css'

class RockPaperScissors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      gameResultPage: false,
      activeChoiceItemId: '',
      selectedChoiceImageUrl: '',
      opponentChoiceImageUrl: '',
      gameStatus: '',
    }
  }

  getGameStatus = () => {
    const {activeChoiceItemId} = this.state
    const {choicesList} = this.props

    const selectedChoiceImageUrl = choicesList.filter(
      eachChoice => eachChoice.id === activeChoiceItemId,
    )[0].imageUrl

    console.log(selectedChoiceImageUrl)

    this.setState({selectedChoiceImageUrl})

    const opponentChoiceIndex = Math.floor(Math.random() * choicesList.length)

    const opponentChoiceImageUrl = choicesList[opponentChoiceIndex].imageUrl

    console.log(opponentChoiceImageUrl)

    this.setState({opponentChoiceImageUrl})

    const opponentChoiceId = choicesList[opponentChoiceIndex].id

    let gameStatus = null

    if (activeChoiceItemId === 'ROCK' && opponentChoiceId === 'PAPER') {
      gameStatus = 'YOU LOSE'
    } else if (activeChoiceItemId === 'PAPER' && opponentChoiceId === 'ROCK') {
      gameStatus = 'YOU WON'
    } else if (
      activeChoiceItemId === 'SCISSORS' &&
      opponentChoiceId === 'ROCK'
    ) {
      gameStatus = 'YOU LOSE'
    } else if (
      activeChoiceItemId === 'ROCK' &&
      opponentChoiceId === 'SCISSORS'
    ) {
      gameStatus = 'YOU WON'
    } else if (
      activeChoiceItemId === 'PAPER' &&
      opponentChoiceId === 'SCISSORS'
    ) {
      gameStatus = 'YOU LOSE'
    } else if (
      activeChoiceItemId === 'SCISSORS' &&
      opponentChoiceId === 'PAPER'
    ) {
      gameStatus = 'YOU WON'
    } else if (activeChoiceItemId === opponentChoiceId) {
      gameStatus = 'IT IS DRAW'
    }

    this.setState({gameStatus})

    if (gameStatus === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (gameStatus === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  clickChoice = activeChoiceItemId =>
    this.setState(
      {activeChoiceItemId, gameResultPage: true},
      this.getGameStatus,
    )

  onPlayAgain = () => this.setState({gameResultPage: false})

  render() {
    const {
      gameResultPage,
      score,
      selectedChoiceImageUrl,
      opponentChoiceImageUrl,
      gameStatus,
    } = this.state

    const {choicesList} = this.props

    return (
      <BgContainer>
        <Container>
          <Score score={score} />
          {!gameResultPage && (
            <Cards>
              {choicesList.map(eachChoiceItem => (
                <ChoiceItem
                  key={eachChoiceItem.id}
                  choiceItemDetails={eachChoiceItem}
                  clickChoice={this.clickChoice}
                />
              ))}
            </Cards>
          )}
          {gameResultPage && (
            <GameResult
              selectedChoiceImageUrl={selectedChoiceImageUrl}
              opponentChoiceImageUrl={opponentChoiceImageUrl}
              gameStatus={gameStatus}
              onPlayAgain={this.onPlayAgain}
            />
          )}
          <Popup
            modal
            contentStyle={{minWidth: '300px'}}
            trigger={<RulesButton>RULES</RulesButton>}
          >
            {close => (
              <>
                <CloseModal type="button" onClick={close}>
                  <RiCloseLine />
                </CloseModal>

                <Rules
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </>
            )}
          </Popup>
        </Container>
      </BgContainer>
    )
  }
}

export default RockPaperScissors
