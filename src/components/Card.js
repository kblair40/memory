import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/CardStyles";
import cardBack from "../cardBack.png";
import Flippy, { FrontSide, BackSide } from "react-flippy";

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { handleFlip, id } = this.props;
    handleFlip(id);
  }

  render() {
    const { id, isFaceDown, isDisabled, classes, imgUrl } = this.props;

    return (
      <div
        key={id}
        onClick={isDisabled || !isFaceDown ? undefined : this.handleClick}
      >
        <Flippy
          isFlipped={isFaceDown ? true : false}
          flipDirection="horizontal"
        >
          <FrontSide className={classes.noPad}>
            <img src={imgUrl} alt="" className={classes.img} />
          </FrontSide>

          <BackSide className={classes.noPad}>
            <img src={cardBack} alt="" className={classes.img} />
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

export default withStyles(styles)(Card);
