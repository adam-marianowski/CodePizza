import { tss } from "tss-react";

const useStyles = tss.create({
  pizzasPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },

  addButton: {
    width: "10em",
  },

  pizzasList: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});

export default useStyles;
