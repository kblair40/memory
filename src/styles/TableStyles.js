export default {
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
