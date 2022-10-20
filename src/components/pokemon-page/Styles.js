import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "50%",
    padding: 40,
    justifyContent: "center",
    height: "100vh",
    [theme.breakpoints.up(1200)]: {
      width: "40%",
    },
    [theme.breakpoints.up(1400)]: {
      width: "30%",
      height: "80vh",
    },
    [theme.breakpoints.up(1600)]: {
      width: "25%",
      height: "70vh",
    },
    [theme.breakpoints.up(2000)]: {
      width: "20%",
      height: "60vh",
    },
    [theme.breakpoints.up(2500)]: {
      width: "18%",
      height: "50vh",
    },
  },
  mainCard: {
    minWidth: "100%",
    borderRadius: 10,
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
    paddingTop: 40,
  },
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  pokemonName: {
    paddingLeft: 20,
    fontSize: 32,
    color: "white",
    fontWeight: 800,
  },
  pokemonTypeText: {
    backgroundColor: "rgba(8, 8, 8, 0.2)",
    fontSize: 20,
    color: "white",
    padding: 5,
    borderRadius: 15,
    width: "3em",
    margin: 3,
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  tabBox: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
    height: "60%",
    paddingBottom: 80,
  },
}));

export default useStyles;