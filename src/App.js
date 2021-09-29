import "./App.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

import DiceRoller from "./components/DiceRoller";
import CharacterSheet from "./components/CharacterSheet";

function App() {
  return (
    <div className="App">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
			<Typography>Dice Roller</Typography>
		</AccordionSummary>
		<AccordionDetails>
			<Typography>
				<DiceRoller />
			</Typography>
		</AccordionDetails>
      </Accordion>

	  <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
			<Typography>Character Sheet</Typography>
		</AccordionSummary>
		<AccordionDetails>
			<Typography>
				<CharacterSheet />
			</Typography>
		</AccordionDetails>
      </Accordion>
    </div>
  );
}

export default App;
