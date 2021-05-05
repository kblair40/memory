import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Card from "./Card";
import GameOver from "./GameOver";
import ScoreKeeper from "./ScoreKeeper";
import Fab from "@material-ui/core/Fab";
import { shuffle, getCards } from "../helpers";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "../styles/TableStyles";

const numberOfCards = {
  easy: 10,
  moderate: 24,
  hard: 40,
};
const DECKURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      deckId: "",
      matches: [],
      flippedCards: [],
      isDisabled: false,
      gameOver: false,
      attempts: 0,
      matchCount: 0,
      scoreNeeded: 0,
      loading: true,
    };
    this.handleFlip = this.handleFlip.bind(this);
  }

  async componentDidMount() {
    const { difficulty } = this.props;
    const CARDS = getCards(difficulty);
    let deck = await axios.get(DECKURL);
    deck = deck.data;

    // generates pile of cards to be used in game.  react throwing warning that 'pile' is unused.
    // ignore for now but look into suppressing warning.  game will not work without this.
    let pile = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deck.deck_id}/pile/cardPile/add/?cards=${CARDS}`
    );
    let cardList = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deck.deck_id}/pile/cardPile/list/`
    );
    let cards = shuffle(cardList.data.piles.cardPile.cards);
    for (let i = 0; i < cards.length; i++) {
      cards[i]["key"] = i;
      cards[i]["isFaceDown"] = true;
    }

    this.setState({
      deckId: deck.deck_id,
      deck: [...cards],
      scoreNeeded: numberOfCards[difficulty] / 2,
      loading: false,
    });
  }

  handleFlip(cardId) {
    const { flippedCards, deck, matches } = this.state;
    let flippedCard = [deck[cardId].code, deck[cardId].key];
    let newDeck = [...deck];
    newDeck[cardId].isFaceDown = false;
    this.setState(
      {
        flippedCards: [...flippedCards, flippedCard],
        deck: newDeck,
      },
      () => {
        if (this.state.flippedCards.length === 2) {
          let [card1, card2] = this.state.flippedCards;
          if (card1[0] === card2[0]) {
            // runs if a second card was flipped and it matched the first card
            this.setState(
              {
                matches: [...this.state.matches, card1[0]],
                flippedCards: [],
                attempts: this.state.attempts + 1,
                matchCount: this.state.matchCount + 1,
              },
              () => {
                this.modifyDeck([...this.state.matches]);
              }
            );
          } else {
            // runs if a second card was flipped and no match was found/made
            this.setState(
              {
                isDisabled: true,
                attempts: this.state.attempts + 1,
              },
              () => setTimeout(() => this.modifyDeck(matches), 700)
            );
          }
        } else {
          // runs only if it is the first of the two cards selected
          let modifiedDeck = [...this.state.deck];
          modifiedDeck[cardId].isFaceDown = false;
          this.setState({ deck: [...modifiedDeck] });
        }
      }
    );
  }

  modifyDeck(matches) {
    let newDeck = this.state.deck.map((card) => {
      if (!matches.includes(card.code)) {
        card.isFaceDown = true;
      }
      return card;
    });

    this.setState({
      deck: [...newDeck],
      flippedCards: [],
      isDisabled: false,
    });
  }

  render() {
    const {
      isDisabled,
      loading,
      matchCount,
      attempts,
      scoreNeeded,
    } = this.state;

    const { endGame, difficulty, classes } = this.props;
    let gameOver = scoreNeeded > matchCount;

    let cardClass;
    if (difficulty === "easy") cardClass = classes.easy;
    else if (difficulty === "moderate") cardClass = classes.moderate;
    else cardClass = classes.hard;

    return (
      <div className={classes.Table}>
        <div className={classes.scoreContainer}>
          {gameOver ? (
            <ScoreKeeper
              increment={100 / (numberOfCards[difficulty] / 2)}
              matchCount={matchCount}
              attempts={attempts}
            />
          ) : loading ? (
            <CircularProgress className={classes.progress} />
          ) : (
            <div>
              <ScoreKeeper
                increment={100 / (numberOfCards[difficulty] / 2)}
                matchCount={matchCount}
                attempts={attempts}
              />
              <GameOver endGame={endGame} />
            </div>
          )}
        </div>
        {!loading ? (
          <div className={classes.cards}>
            {this.state.deck.map((card, idx) => (
              <div
                className={`${classes.cardContainer} ${cardClass}`}
                key={card.key}
              >
                <Card
                  handleFlip={this.handleFlip}
                  isFaceDown={card.isFaceDown}
                  isDisabled={isDisabled}
                  imgUrl={card.image}
                  id={card.key}
                />
              </div>
            ))}
            <div className={classes.fabContainer}>
              <Fab
                className={classes.fab}
                onClick={endGame}
                variant="extended"
                color="secondary"
              >
                {gameOver ? "Quit" : "Play Again!"}
              </Fab>
            </div>
          </div>
        ) : (
          <CircularProgress className={classes.progress} />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Table);
