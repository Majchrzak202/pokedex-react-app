import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  box: {
    display: "flex",
    alignItems: "center",
  },
  categoryTitle: {
    width: "30%",
    color: "#b4b6b7",
    textAlign: "left",
    padding: 5,
  },
});

const About = ({ pokemon }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.box}>
        <Typography className={classes.categoryTitle}>Species:</Typography>

        <Typography>{pokemon.chain.species.name}</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.categoryTitle}>Height:</Typography>

        <Typography>{pokemon.height}</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.categoryTitle}>Weight:</Typography>

        <Typography>{pokemon.weight}</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.categoryTitle}>Abilities:</Typography>
        {pokemon.abilities.map((item) => (
          <Typography key={item.ability.name}>{item.ability.name}</Typography>
        ))}
      </Box>
      <Box style={{ display: "flex" }}>
        <Typography className={classes.categoryTitle}>Habitat:</Typography>

        <Typography>{pokemon.habitat.name}</Typography>
      </Box>
    </>
  );
};

export default About;
