import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minWidth: "40%",
    padding: 40,
    justifyContent: "center",
    /* minHeight: "100vh", */
    maxHeight: "100vh",
    [theme.breakpoints.up(1200)]: {
      minWidth: "30%",
    },

    [theme.breakpoints.up(1400)]: {
      maxHeight: "80vh",
    },
    [theme.breakpoints.up(1600)]: {
      maxHeight: "70vh",
    },
    [theme.breakpoints.up(2000)]: {
      maxHeight: "60vh",
    },
    [theme.breakpoints.up(2500)]: {
      maxHeight: "50vh",
    },
  },
  card: {
    minWidth: "70%",
    maxWidth: "70%",
    borderRadius: 10,
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    paddingTop: 40,
  },
}));

export default useStyles;