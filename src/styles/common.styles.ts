import { tss } from "tss-react";

const useStyles = tss.create({
  goBackButton: {
    backgroundColor: "gray",
    borderRadius: "0.5em",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",

    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  },
});

export default useStyles;
