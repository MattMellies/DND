import { useState, useEffect } from "react";
import { Box, Button, TextField, Grid } from "@mui/material";
import { rollDice } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import styles from "./DiceRoller.module.scss";

const DiceRoller = () => {
  const [diceAmount, setDiceAmount] = useState(1);
  const [diceSides, setDiceSides] = useState(20);
  const [resultArray, setResultArray] = useState([0]);
  const [resultTotal, setResultTotal] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const handleDiceAmount = (value) => {
    setDiceAmount(value);
  };

  const handleDiceSides = (value) => {
    setDiceSides(value);
  };

  const handleDiceRoll = (diceAmount, diceSides) => {
    setResultArray(rollDice(diceAmount, diceSides));
  };

  useEffect(() => {
    setResultTotal(resultArray.reduce((a, b) => a + b, 0));
  }, [resultArray]);

  useEffect(() => {
    if (
      diceSides > 1000 ||
      diceAmount > 5000 ||
      diceSides < 1 ||
      diceAmount < 1
    ) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [diceAmount, diceSides]);

  return (
    <div>
      <h2>Dice Roller</h2>
      <Box
        component="form"
        autoComplete="off"
        sx={{ maxWidth: "100%" }}
        noValidate
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              className={styles.diceField}
              fullWidth
              required
              error={diceAmount > 5000 || diceAmount < 1}
              helperText={
                diceAmount > 5000 || diceAmount < 1 ? "Min 1, Max 5000" : ""
              }
              id="outlined-required"
              label="Dice Amount"
              defaultValue={1}
              onChange={(event) => handleDiceAmount(event.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={styles.diceField}
              fullWidth
              required
              error={diceSides > 1000 || diceSides < 1}
              helperText={
                diceSides > 1000 || diceSides < 1 ? "Min 1, Max 1000" : ""
              }
              id="outlined-required"
              label="Dice Sides"
              defaultValue={20}
              onChange={(event) => handleDiceSides(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              disabled={disableButton}
              onClick={() => handleDiceRoll(diceAmount, diceSides)}
            >
              <FontAwesomeIcon icon={faDiceD20} />
              &nbsp;Roll Em!&nbsp;
              <FontAwesomeIcon icon={faDiceD20} />
            </Button>
          </Grid>
        </Grid>
      </Box>
      <br />
      Result:{" "}
      {resultArray.map((result) => {
        return (
          <span>
            <FontAwesomeIcon icon={faDiceD20} />
            {result} &nbsp;
          </span>
        );
      })}
      <br />
      <strong>Total: {resultTotal}</strong>.
    </div>
  );
};

export default DiceRoller;
