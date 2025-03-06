import { tss } from "tss-react";

const useStyles = tss.create({
  card: {
    display: "flex",
    width: "45em",
    marginBottom: "4em",
    boxShadow: "0 0.5em 1em rgba(0, 0, 0, 0.15)",
    padding: "1em",
    borderRadius: "0.5em",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-0.5em)",
      transition: "transform 0.3s",
    },
  },

  cardFooter: {
    marginTop: "auto",
    marginLeft: "auto",
  },

  cardImage: {
    width: "13em",
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
  },

  cardDescription: {
    fontSize: "1.1em",
  },
});

export default useStyles;
