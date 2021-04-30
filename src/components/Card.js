import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import cardBack from "../cardBack.png";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const styles = {
  img: {
    maxWidth: "100%",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: "5px",
  },
  cardFront: {},
  cardBack: {},
};
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
          <FrontSide style={{ padding: "0px" }}>
            <img src={imgUrl} alt="" className={classes.img} />
          </FrontSide>

          <BackSide
            style={{
              padding: "0px",
            }}
          >
            <img src={cardBack} alt="" className={classes.img} />
          </BackSide>
        </Flippy>
      </div>
    );
  }
}

export default withStyles(styles)(Card);
