import { tss } from "tss-react";

const useStyles = tss.create({
  navbar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#008c45",
    borderBottom: "1em solid #cd212a",
  },

  logo: {
    width: "6em",
  },

  main: {
    margin: "8em",
  },
});

export default useStyles;
