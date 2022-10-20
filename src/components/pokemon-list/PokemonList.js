import React from "react";
import { Card, Box, Typography, Paper } from "@material-ui/core";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useStyles from "./Styles";

const PokemonList = ({ pokemons, setSelectPokemon }) => {
  const classes = useStyles();
  const selectHandler = (pokemonUrl) => {
    setSelectPokemon(pokemonUrl);
  };

  if (pokemons.length === 0) {
    return null;
  }
  return (
    <Box className={classes.root}>
      <Card
        style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}
        className={classes.card}
      >
        <Box
          style={{
            backgroundColor: "#4ad1b1",
            height: "5%",
            marginTop: -40,
            paddingTop: 10,
            paddingBotton: 10,
            marginBottom: 0,
            paddingBottom: 10,
          }}
        >
          <Typography
            style={{ fontWeight: 800, fontSize: 20, color: "white" }}
            align="center"
          >
            Select Pokemon!
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <nav aria-label="secondary mailbox folders">
            <Paper style={{ height: "100vh", overflow: "auto" }}>
              <List
                style={{ maxHeight: "100%", overflow: "auto" }}
                sx={{
                  "& .MuiListItemButton-root:hover": {
                    bgcolor: "#4ad1b1",
                    "&, & .MuiListItemIcon-root": {
                      color: "white",
                    },
                  },
                }}
              >
                {pokemons.results.map((pokemon) => (
                  <div key={pokemon.name}>
                    <ListItem  disablePadding>
                      <ListItemButton
                        onClick={() => selectHandler(pokemon.url)}
                      >
                        <ListItemText
                          style={{ textAlign: "center" }}
                          primary={pokemon.name}
                        />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </div>
                ))}
              </List>
            </Paper>
          </nav>
        </Box>
      </Card>
    </Box>
  );
};

export default PokemonList;
