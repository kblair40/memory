import React, { Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Fab from "@material-ui/core/Fab";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  optionsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    maxWidth: "280px",
    padding: "1rem",
    borderRadius: "6px",
    background: "#fff",
    color: "#fff",
    boxShadow: "0 5px 8px rgba(0, 0, 0, 0.3)",
  },
  label: {
    fontWeight: "500",
    fontSize: "30px",
    color: "rgb(55, 70, 74)",
    marginBottom: "1rem",
    textAlign: "center",
    borderBottom: ".5px solid rgba(55, 70, 74, .8)",
  },
  item: {
    color: "rgb(55, 70, 74)",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "20px",
  },

  playBtn: {
    backgroundColor: "#fff",
    color: "rgb(55, 70, 74)",
    fontFamily: "Roboto",
    fontSize: "22px",
    width: "100%",
    maxWidth: "300px",
    marginTop: "5%",
    transitionDuration: ".3s",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,1)",
    },
  },
  easy: {
    color: "rgba(119, 144, 121, 1)",
    "&$checked": {
      color: "rgba(119, 144, 121, 1)",
    },
  },
  moderate: {
    color: "rgba(243, 196, 109, .9)", // D2C1A2
    "&$checked": {
      color: "rgba(243, 196, 109, 1)",
    },
  },
  hard: {
    color: "rgba( 176, 101, 93, 1)",
    "&$checked": {
      color: "rgba( 176, 101, 93, .9)",
    },
  },
  checked: {},
};

class SetDifficulty extends Component {
  render() {
    const { handleChange, difficulty, classes } = this.props;
    return (
      <div className={classes.mainContainer}>
        <div className={classes.optionsContainer}>
          <FormLabel classes={{ root: classes.label }}>
            Select Difficulty
          </FormLabel>
          <RadioGroup
            onChange={handleChange}
            aria-label="Difficulty"
            name="difficulty"
          >
            <FormControlLabel
              classes={{ label: classes.item }}
              value="easy"
              control={
                <Radio
                  classes={{
                    root: classes.easy,
                    checked: classes.checked,
                  }}
                />
              }
              label="Easy"
              checked={difficulty === "easy"}
            />
            <FormControlLabel
              classes={{ label: classes.item }}
              value="moderate"
              control={
                <Radio
                  classes={{
                    root: classes.moderate,
                    checked: classes.checked,
                  }}
                />
              }
              label="Moderate"
              checked={difficulty === "moderate"}
            />
            <FormControlLabel
              classes={{ label: classes.item }}
              value="hard"
              control={
                <Radio
                  classes={{
                    root: classes.hard,
                    checked: classes.checked,
                  }}
                />
              }
              label="Hard"
              checked={difficulty === "hard"}
            />
          </RadioGroup>
        </div>
        <Fab
          className={classes.playBtn}
          onClick={this.props.handleClick}
          variant="extended"
          color="primary"
        >
          Play!
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(SetDifficulty);
