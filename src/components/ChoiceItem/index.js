import {ChoiceImage, ListItem, ChoiceButton} from './styledComponents'

const ChoiceItem = props => {
  const {choiceItemDetails, clickChoice} = props
  const {imageUrl, id} = choiceItemDetails

  const testid = `${id.toLowerCase()}Button`

  const onClickChoice = () => clickChoice(id)

  return (
    <ChoiceButton data-testid={testid} onClick={onClickChoice}>
      <ListItem>
        <ChoiceImage src={imageUrl} alt={id} />
      </ListItem>
    </ChoiceButton>
  )
}

export default ChoiceItem
