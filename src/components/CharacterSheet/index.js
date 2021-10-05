import { useEffect, useState } from "react";
import _ from "lodash";
import { Box, TextField, Grid, FormControlLabel, Checkbox } from "@mui/material";

const CharacterSheet = () => {
  //Character
  const [character, setCharacter] = useState(
    {
      name: localStorage.characterName !== undefined ? localStorage.characterName : '',
      className: localStorage.className !== undefined ? localStorage.className : '',
      level: 0,
      race: "",
      background: "",
      alignment: "",
      xp: 0,
    },
  );

  //Stats
  const [stats, setState] = useState([
    { name: "str", val: 0 },
    { name: "dex", val: 0 },
    { name: "con", val: 0 },
    { name: "int", val: 0 },
    { name: "wis", val: 0 },
    { name: "cha", val: 0 },
  ]);

  //Saving Throw val/exp
  const [savingThrows, setSavingThrows] = useState([
    { name: "str", val: 0, exp: false },
    { name: "dex", val: 0, exp: false },
    { name: "con", val: 0, exp: false },
    { name: "int", val: 0, exp: false },
    { name: "wis", val: 0, exp: false },
    { name: "cha", val: 0, exp: false },
  ]);

  //Skills val/exp
  const [skills, setSkill] = useState([
    { name: "acrobatics", val: 0, exp: false },
    { name: "animalHandling", val: 0, exp: false },
    { name: "arcana", val: 0, exp: false },
    { name: "athletics", val: 0, exp: false },
    { name: "deception", val: 0, exp: false },
    { name: "history", val: 0, exp: false },
    { name: "insight", val: 0, exp: false },
    { name: "intimidation", val: 0, exp: false },
    { name: "investigation", val: 0, exp: false },
    { name: "investigation", val: 0, exp: false },
    { name: "medicine", val: 0, exp: false },
    { name: "nature", val: 0, exp: false },
    { name: "perception", val: 0, exp: false },
    { name: "performance", val: 0, exp: false },
    { name: "religion", val: 0, exp: false },
    { name: "sleightOfHand", val: 0, exp: false },
    { name: "stealth", val: 0, exp: false },
    { name: "survival", val: 0, exp: false },
  ]);

  //Other
  const [proficiencyBonus, setProficiencyBonus] = useState(0);
  const [inspiration, setInspiration] = useState(false);
  const [initiative, setInitiative] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [hitPointMax, setHitPointMax] = useState(0);
  const [currentHP, setCurrentHP] = useState(0);
  const [tempHP, setTempHP] = useState(0);
  const [hitDiceTotal, setHitDiceTotal] = useState(0);
  const [hitDiceCurrent, setHitDiceCurrent] = useState(0);
  const [hitDiceType, setHitDiceType] = useState(8);
  const [passivePerception, setPassivePerception] = useState(0);

  const handleIspiration = () => {
    if (inspiration) {
      setInspiration(false)
    } else {
      setInspiration(true)
    }
  }

  const handleNameChange = (event) => {
    setCharacter(prevState => ({
      ...prevState,
      name: event.target.value
    }))

    localStorage.characterName = event.target.value
  }

  const handleClassNameChange = (event) => {
    setCharacter(prevState => ({
      ...prevState,
      className: event.target.value
    }))

    localStorage.className = event.target.value
  }

  return (
    <div className="characterSheet">


      <Box component="div" sx={{ border: '1px solid #333', padding: '1em' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField variant={"standard"} label="Name" value={character.name} onChange={handleNameChange} />
            <TextField variant={"standard"} label="Class" value={character.className} onChange={handleClassNameChange} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CharacterSheet;
