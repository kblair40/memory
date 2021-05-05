import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import styles from "../styles/GameOverStyles";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

class GameOver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
    this.newGame = this.newGame.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

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
      <Dialog open={this.state.open} keepMounted onClose={this.handleClose}>
        <DialogTitle className={classes.EndGame}>{"Play Again?"}</DialogTitle>
        <DialogActions>
          <Button className={classes.nope} onClick={this.handleClose}>
            Nope!
          </Button>
          <Button className={classes.yup} onClick={this.newGame}>
            Yup!
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(GameOver);
