import React, { Component } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Card from "./Card";
import GameOver from "./GameOver";
import ScoreKeeper from "./ScoreKeeper";
import Fab from "@material-ui/core/Fab";
import { shuffle, getCards } from "../helpers";
import CircularProgress from "@material-ui/core/CircularProgress";
import classNames from "classnames";

const numberOfCards = {
  easy: 10,
  moderate: 24,
  hard: 40,
};

const styles = {
  Table: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    boxSizing: "border-box",
    maxWidth: "740px",
    minWidth: "320px",
    padding: "0 .5rem",
  },
  scoreContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  progress: {
    color: "rgb(141, 209, 205)",
  },
  cards: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "center",
  },
  cardContainer: {
    margin: ".1rem",
  },
  easy: {
    width: "19%",
    minWidth: "80px",
  },
  moderate: {
    width: "15%",
    minWidth: "60px",
  },
  hard: {
    width: "12%",
    minWidth: "55px",
  },
  fabContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: ".5rem 0",
  },
  fab: {
    width: "50%",
    backgroundColor: "#fff",
    color: "rgb(55, 70, 74)",
    fontSize: "22px",
    transitionDuration: ".3s",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  "@media screen and (max-width: 600px)": {
    easy: {},
  },
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
    // this.startGame = this.startGame.bind(this);
    // this.newDeck = this.newDeck.bind(this);
  }

  async componentDidMount() {
    const { difficulty } = this.props;
    const CARDS = getCards(difficulty);
    let deck = await axios.get(DECKURL);
    deck = deck.data;
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
    console.log("CARDS:", cards);

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
          console.log("card1:", card1, "\ncard2:", card2);
          if (card1[0] === card2[0]) {
            // RUNS IF A SECOND CARD WAS FLIPPED AND IT MATCHED THE FIRST CARD
            console.log("*********MATCH*********");
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
            // RUNS IF A SECOND CARD WAS FLIPPED, BUT NO MATCH WAS FOUND
            this.setState(
              {
                isDisabled: true,
                attempts: this.state.attempts + 1,
              },
              () => setTimeout(() => this.modifyDeck(matches), 700)
            );
          }
        } else {
          /// THIS RUNS ONLY IF IT IS THE FIRST OF THE TWO CARDS SELECTED ///
          let modifiedDeck = [...this.state.deck];

          modifiedDeck[cardId].isFaceDown = false;
          this.setState({ deck: [...modifiedDeck] });
        }
      }
    );
  }

  modifyDeck(matches) {
    console.log("DECK BEFORE:", this.state.deck);
    let newDeck = this.state.deck.map((card) => {
      if (!matches.includes(card.code)) {
        card.isFaceDown = true;
      }
      return card;
    });
    console.log("NEW DECK:", newDeck);

    this.setState(
      {
        deck: [...newDeck],
        flippedCards: [],
        isDisabled: false,
      },
      () => {
        console.log("DECK AFTER:", this.state.deck);
      }
    );
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
                className={classNames(classes.cardContainer, cardClass)}
                key={card.key}
              >
                <Card
                  handleFlip={this.handleFlip}
                  isFaceDown={card.isFaceDown}
                  isDisabled={isDisabled}
                  imgUrl={card.image}
                  id={card.key}
                  // key={card.key}
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

// const styles = {
//   Table: {
//     boxSizing: "border-box",
//     // overflow: "scroll",
//     // width: "95%",
//     maxWidth: "740px",
//     minWidth: "320px",
//     padding: "1rem",
//     display: "grid",
//     justifyContent: "center",
//     alignItems: "center",
//     justifyItems: "center",
//     gridColumnGap: ".2rem",
//     gridRowGap: ".1rem",
//     // border: "2px inset rgba(22, 124, 178, 0.3)",
//     // borderRadius: "8px",
//   },
//   diffEasy: {
//     gridTemplateColumns: "repeat(5, 19%)",
//     gridTemplateRows: "repeat(2, 1fr) .5fr",
//   },
//   diffMod: {
//     gridTemplateColumns: "repeat(6, 16.5%)",
//     gridTemplateRows: "repeat(4, 1fr) .5fr",
//     maxWidth: "700px",
//   },
//   diffHard: {
//     gridTemplateColumns: "repeat(8, minmax(auto, 12%))",
//     gridTemplateRows: "repeat(5, 18%) 10%",
//   },
//   // 245, 234, 214 #F5EAD6 - creme
//   // 22, 124, 178 #167CB2 - blue
//   fab: {
//     width: "50%",
//     gridColumn: "1/-1",
//     marginTop: "1rem",
//     marginBottom: "1rem",
//     backgroundColor: "#fff",
//     color: "rgb(55, 70, 74)",
//     fontSize: "22px",
//     letterSpacing: ".05rem",
//     transitionDuration: ".3s",
//     "&:hover": {
//       backgroundColor: "#fff",
//     },
//   },
