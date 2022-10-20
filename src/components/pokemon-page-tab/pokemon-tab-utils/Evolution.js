import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  box: { display: "flex", alignItems: "center" },
  categoryTitle: {
    width: "30%",
    color: "#b4b6b7",
    textAlign: "left",
    padding: 5,
  },
});

const Evolution = ({ pokemon }) => {
  const classes = useStyles();

  console.log(pokemon.species.name);

  return (
    <>
    <Typography style={{fontSize: 20, textAlign: 'left', fontWeight: 800, paddingBottom: 10 }}>Evolution details</Typography>
      <Box className={classes.box}>
        <Typography className={classes.categoryTitle}>First form :</Typography>

        <Typography> {pokemon.chain.species.name}</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.categoryTitle}>Second form:</Typography>

        <Typography>{pokemon.chain.evolves_to[0].species.name}</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.categoryTitle}>Final form:</Typography>

        <Typography>
          {pokemon.chain.evolves_to[0].evolves_to[0].species.name}
        </Typography>
      </Box>
    </>
  );
};

export default Evolution;
