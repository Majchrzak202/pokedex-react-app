import React, { useEffect, useState } from "react";
import { Card, Typography, Box, CircularProgress } from "@material-ui/core";
import useStyles from "./Styles";
import TableDemo from "../pokemon-page-tab/TableDemo";


const PokemonPage = ({ selectPokemon }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#4ad1b1");
  const classes = useStyles();

  useEffect(() => {
    if (selectPokemon.length === 0) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(selectPokemon).then((res) => res.json());
      const response2 = await fetch(response.species.url).then((res) =>
        res.json()
      );
      const response3 = await fetch(response2.evolution_chain.url).then((res) =>
        res.json()
      );

      setPokemon({
        ...response,
        ...response2,
        ...response3,
      });

      setLoading(false);
    };

    fetchData();
  }, [selectPokemon]);

  useEffect(() => {
    if (pokemon === null) {
      return;
    }
    const backgroundChangeHandler = () => {
      const color = pokemon.color.name;

      switch (true) {
        case color === "red":
          setBackgroundColor("#fc6c6d");
          break;
        case color === "green":
          setBackgroundColor("#49d0b1");
          break;
        case color === "blue":
          setBackgroundColor("#76beff");
          break;
        case color === "brown":
          setBackgroundColor("#ab6a6c");
          break;
        case color === "yellow":
          setBackgroundColor("#ffd770");
          break;
        case color === "purple":
          setBackgroundColor("#764888");
          break;

        default:
          setBackgroundColor("");
      }
    };
    backgroundChangeHandler();
  }, [pokemon]);

  if (pokemon === null) {
    return (
      <Box className={classes.root}>
        <Card className={classes.mainCard}>
          <Box className={classes.mainBox}></Box>
        </Card>
        <Box className={classes.tabBox}></Box>
      </Box>
    );
  }

  return (
    <Box className={classes.root}>
      {loading ? (
        <Card
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            borderRadius: 10,
            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
            paddingTop: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: backgroundColor,
          }}
        >
          <Box>
            <CircularProgress />
          </Box>
        </Card>
      ) : (
        <Card
          style={{ backgroundColor: backgroundColor }}
          className={classes.mainCard}
        >
          <Box className={classes.mainBox}>
            <Typography
              component="div"
              align="left"
              style={{
                paddingLeft: 20,
                fontSize: 32,
                color: "white",
                fontWeight: 800,
              }}
            >
              {pokemon.name.toUpperCase()}
            </Typography>
            <div style={{ display: "flex" }}>
              {pokemon.types.map((type) => (
                <Typography
                  key={type.type.name}
                  align="center"
                  component="div"
                  className={classes.pokemonTypeText}
                >
                  {type.type.name}
                </Typography>
              ))}
            </div>
            <img
              className={classes.pokemonImage}
              src={pokemon.sprites.front_default}
              alt="pokemon"
            />
          </Box>
          <Box className={classes.tabBox}>
            <TableDemo pokemon={pokemon} />
          </Box>
        </Card>
      )}
    </Box>
  );
};

export default React.memo(PokemonPage);
