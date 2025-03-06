import { tss } from "tss-react";

const useStyles = tss.create({
  pizzaForm: {
    display: "flex",
    fontSize: "1.2em",
    justifyContent: "space-around",
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },

  label: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "1em",
  },

  input: {
    padding: "1em",
    borderRadius: "0.5em",
    border: "none",
    fontSize: "1em",
  },

  buttons: {
    marginLeft: "auto",
  },

  deleteButton: {
    backgroundColor: "#cd212a",
    marginRight: "1em",
    transition: "background-color 0.3s",

    "&:hover": {
      backgroundColor: "#a6171f",
    },
  },

  pizzaImage: {
    display: "block",
  },
});

export default useStyles;
