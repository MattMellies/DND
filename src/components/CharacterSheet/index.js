import { useEffect, useState } from "react";
import _ from "lodash";
import { Box, TextField, Grid, FormControlLabel, Checkbox } from "@mui/material";

const CharacterSheet = () => {
  //Character
  const [character, setCharacter] = useState(
    {
      name: localStorage.characterName !== undefined ? localStorage.characterName : '',
      class: "",
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

  return (
    <div className="characterSheet">


      <Box component="div" sx={{ border: '1px solid #333', padding: '1em' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField variant={"standard"} label="Name" value={character.name} onChange={handleNameChange} />
          </Grid>
        </Grid>
      </Box>




      {/* OLD */}
      {/* <Box component="div" sx={{ marginBottom: "2em" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <FormControlLabel control={<Checkbox checked={inspiration} onClick={handleIspiration} />} label="Inspiration" />  
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField fullWidth label={`HP (Max: ${hitPointMax})`} value={currentHP} />
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField fullWidth label={`Temp HP`} value={tempHP} />
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField fullWidth label={`Hit Dice (d${hitDiceType})`} value={`${hitDiceCurrent} / ${hitDiceTotal}`} />
          </Grid>
          <Grid item xs={6} md={2}>
            <TextField fullWidth label={'Passive Perception'} value={passivePerception} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>Character</h2>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField fullWidth label={"Name"} value={character.name} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TextField fullWidth label={"Class"} value={character.class} />
          </Grid>
          <Grid item xs={6} md={6} lg={4}>
            <TextField fullWidth label={"Level"} value={character.level} />
          </Grid>
          <Grid item xs={6} md={6} lg={3}>
            <TextField fullWidth label={"Race"} value={character.race} />
          </Grid>
          <Grid item xs={4} md={4} lg={3}>
            <TextField
              fullWidth
              label={"Background"}
              value={character.background}
            />
          </Grid>
          <Grid item xs={4} md={4} lg={3}>
            <TextField
              fullWidth
              label={"Alignment"}
              value={character.alignment}
            />
          </Grid>
          <Grid item xs={4} md={4} lg={3}>
            <TextField
              fullWidth
              label={"Experience"}
              value={character.experience}
            />
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField fullWidth label={"Proficiency"} value={proficiencyBonus} />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth label={"Intiative"} value={initiative} />
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth label={"Speed"} value={speed} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>Stats</h2>
        </Grid>
        <Grid item xs={12}>
          <Box
            component="form"
            autoComplete="off"
            sx={{ maxWidth: "100%" }}
            noValidate
          >
            <Grid container spacing={2}>
              {stats.map((i) => {
                return (
                  <Grid item xs={6} md={4} lg={2}>
                    <TextField
                      fullWidth
                      defaultValue={i.val}
                      label={_.upperCase(i.name)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs="12">
          <h2>Skills</h2>
        </Grid>
        {skills.map((i) => {
          return (
            <Grid item xs={6} md={4} lg={2}>
              <TextField
                fullWidth
                defaultValue={i.val}
                label={_.startCase(i.name)}
                className={i.exp ? "hasExpertise" : ""}
              />
            </Grid>
          );
        })}
      </Grid> */}
    </div>
  );
};

export default CharacterSheet;
