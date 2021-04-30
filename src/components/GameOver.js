import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const styles = {
  EndGame: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "rgb(55, 70, 74)",
    // fontSize: "2rem",
    // letterSpacing: ".05rem",
    // justifyContent: "center",
  },
  yup: {
    color: "rgb(119, 144, 121)",
  },
  nope: {
    color: "rgb( 176, 101, 93)",
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class GameOver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
    this.newGame = this.newGame.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  state = {
    open: true,
  };

  handleClose() {
    this.setState({ open: false });
  }
  newGame() {
    this.setState({ open: false });
    this.props.endGame();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          className={classes.EndGame}
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
        >
          <DialogTitle>{"Play Again?"}</DialogTitle>
          <DialogActions>
            <Button className={classes.nope} onClick={this.handleClose}>
              Nope!
            </Button>
            <Button className={classes.yup} onClick={this.newGame}>
              Yup!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(GameOver);
