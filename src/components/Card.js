import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import cardBack from "../cardBack.png";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const styles = {
  img: {
    maxWidth: "100%",
    backgroundColor: "transparent",
  },

  cardContainer: {
    // display: "flex",
    // boxSizing: "border-box",
    // flexDirection: "column",
    // alignItems: "stretch",
  },
};

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { handleFlip, id, code } = this.props;
    handleFlip(id);
  }

  render() {
    const { id, isFaceDown, isDisabled, classes, imgUrl } = this.props;

    return (
      <div
        key={id}
        onClick={isDisabled || !isFaceDown ? undefined : this.handleClick}
        className={classes.cardContainer}
      >
        <Flippy
          isFlipped={isFaceDown ? true : false}
          flipDirection="horizontal"
          style={{ padding: "0px" }}
        >
          <FrontSide style={{ padding: "0px" }}>
            <img src={imgUrl} className={classes.img} />
          </FrontSide>

          <BackSide style={{ padding: "0px" }}>
            <img src={cardBack} className={classes.img} />
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

export default withStyles(styles)(Card);

// {!isFaceDown ? (
//   <img src={imgUrl} className={classes.img} />
// ) : (
//   <img src={cardBack} className={classes.img} />
// )}

// const styles = {
//   Card: {
//     // position:
//     transition: "transform 1s",
//     transformStyle: "preserve-3d",
//     backfaceVisibility: "hidden",
//   },
//   img: {
//     maxWidth: "100%",
//     transform: "rotatey( 180deg )",
//   },
//   cardFront: {
//     maxWidth: "100%",
//     transform: "rotatey( 180deg )",
//     transition: "transform 0.5s",
//   },
//   cardBack: {
//     maxWidth: "100%",
//   },
// };

// class Card extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     const { handleFlip, id, code } = this.props;
//     handleFlip(id, code);
//   }
//   render() {
//     const { id, isFaceDown, isDisabled, classes, imgUrl } = this.props;
//     return (
//       <div
//         className={classes.Card}
//         key={id}
//         onClick={isDisabled || !isFaceDown ? undefined : this.handleClick}
//       >
//         <img src={isFaceDown ? cardBack : imgUrl} className={classes.img} />
//         {/* <img src={imgUrl} className={classes.cardFront} /> */}
//         {/* <img src={cardBack} className={classes.cardBack} /> */}
//       </div>
//     );
//   }
// }

// {/* <img src={imgUrl} className={classes.cardFront} /> */}
//         {/* <img src={cardBack} className={classes.cardBack} /> */}

// return (
//   <div
//     className={classes.Card}
//     key={id}
//     onClick={isDisabled || !isFaceDown ? undefined : this.handleClick}
//   >
//     <img src={isFaceDown ? cardBack : imgUrl} className={classes.img} />
//   </div>
// );

// return (
//   <Flippy
//     onClick={isDisabled || !isFaceDown ? undefined : this.handleClick}
//     flipOnClick={isFaceDown ? true : false}
//     flipDirection="horizontal"
//     ref={(r) => (this.flippy = r)}
//   >
//     <FrontSide>
//       <img src={cardBack} className={classes.img} />
//     </FrontSide>

//     <BackSide>
//       <img src={imgUrl} className={classes.img} />
//     </BackSide>
//   </Flippy>
// );
