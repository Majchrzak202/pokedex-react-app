import React from "react";
import { LinearProgress, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  box: { display: "flex", alignItems: "center" },
  categoryTitle: {
    width: "30%",
    color: "#b4b6b7",
    textAlign: "left",
    padding: 5,
  },
  secondText: {
    width: "10%",
    color: "black",
    textAlign: "left",
    padding: 5,
  },
  barroot: {
    backgroundColor: "green",
  },
  root: {
    backgroundColor: "#21466",
  },
});

const Stats = ({ pokemon }) => {
  const classes = useStyles();

  return (
    <>
      <Box style={{ width: "100%",  height: 200, overflow: "auto" }}>
        {pokemon.stats.map((stat) => (
          <Box className={classes.box}>
            <Typography className={classes.categoryTitle}>
              {stat.stat.name}
            </Typography>
            <Typography className={classes.secondText}>
              {stat.base_stat}
            </Typography>
            <LinearProgress
              value={stat.base_stat}
              variant="determinate"
              style={{ width: "100%"}}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Stats;
