import { GlobalStyles } from "tss-react";

const styles = {
  body: {
    backgroundColor: "#f5f5f5",
  },

  "*": {
    "box-sizing": "border-box",
    margin: 0,
    padding: 0,
    fontFamily: "Nunito, sans-serif",
    listStyle: "none",
  },

  button: {
    fontSize: "1em",
    width: "10em",
    padding: "1.5em 0",
    border: "none",
    borderRadius: "0.5em",
    backgroundColor: "#008c45",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",

    "&:hover": {
      backgroundColor: "#006837",
    },
  },

  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "Chewy, cursive",
    letterSpacing: "0.2em",
  },

  h2: {
    borderBottom: "0.3em solid #008c45",
    marginBottom: "0.4em",
  },

  h1: {
    fontSize: "2.5em",
    borderBottom: "0.3em solid #cd212a",
  },
};

export default function GlobalAppicationStyles() {
  return <GlobalStyles styles={styles} />;
}
