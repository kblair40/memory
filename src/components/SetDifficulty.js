import React, { Component } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { green, red, orange } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = {
  SetDifficulty: {
    width: "100%",
    // border: "1px solid black",
    padding: "1rem",
    borderRadius: "8px",
    background: "rgb(144,202,249)",
    background:
      "linear-gradient(128deg, rgba(144,202,249,1) 0%, rgba(187,222,251,1) 100%)",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)",
    // height: "50%",
    // position: "absolute",
    // top: "25%",
    // display: "flex",
    // flexDirection: "column",
    // marginBottom: "10px",
    // alignItems: "center",
    // justifyContent: "center",
  },
  label: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: "30px",
    color: "#0d47a1",
    marginBottom: "1.5rem",
    textAlign: "center",
    borderBottom: ".5px solid #1976d2",
  },
  item: {
    // marginBottom: "-10px",
    color: "#0d47a1",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "20px",
  },
  easy: {
    color: green[500],
    "&$checked": {
      color: green[400],
    },
  },
  moderate: {
    color: orange[500],
    "&$checked": {
      color: orange[400],
    },
  },
  hard: {
    color: red[500],
    "&$checked": {
      color: red[400],
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
