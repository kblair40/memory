export default {
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
    color: "rgba(243, 196, 109, .9)",
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
