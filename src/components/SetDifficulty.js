import React, { Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = {
  SetDifficulty: {
    position: "absolute",
    top: "20%",
    width: "90%",
    maxWidth: "280px",
    padding: "1rem",
    borderRadius: "6px",
    background: "rgb(22, 124, 178)",
    color: "rgb(245,234,214)",
    // background:
    //   "linear-gradient(128deg, rgba(144,202,249,1) 0%, rgba(187,222,251,1) 100%)",
    boxShadow: "0 5px 8px rgba(0, 0, 0, 0.3)",
    // height: "50%",
    // top: "25%",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
  },
  label: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "30px",
    color: "rgb(245,234,214)",
    marginBottom: "1.5rem",
    textAlign: "center",
    borderBottom: ".5px solid #1976d2",
  },
  item: {
    // marginBottom: "-10px",
    color: "rgb(245,234,214)",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "20px",
  },
  easy: {
    color: "rgba(255, 250, 242, .9)",
    "&$checked": {
      color: "rgba(255, 250, 242, 1)",
    },
  },
  moderate: {
    color: "rgba(210, 193, 162, .9)", // D2C1A2
    "&$checked": {
      color: "rgba(210, 193, 162, 1)",
    },
  },
  hard: {
    color: "rgba(178, 155, 114, 0.9)",
    "&$checked": {
      color: "rgba(178, 155, 114, 1)",
    },
  },
  checked: {},
};

class SetDifficulty extends Component {
  render() {
    const { handleChange, difficulty, classes } = this.props;
    return (
      <div className={classes.SetDifficulty}>
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
    );
  }
}

export default withStyles(styles)(SetDifficulty);
