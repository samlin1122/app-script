import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioGrop({ value, list, handleChange }) {
  return (
    <FormControl>
      <FormLabel>胡牌</FormLabel>
      <RadioGroup
        row
        name="position"
        onClick={(event) => handleChange(event, "win")}
      >
        {list.map((e, i) => (
          <FormControlLabel
            key={"winer" + e.name + i}
            value={e.name}
            control={<Radio checked={e.name === value.win} />}
            labelPlacement="top"
            disabled={value.gun === e.name}
          />
        ))}
      </RadioGroup>
      <RadioGroup
        row
        name="position"
        onClick={(event) => handleChange(event, "gun")}
      >
        {list.map((e, i) => (
          <FormControlLabel
            key={"loser" + e.name + i}
            value={e.name}
            label={e.name}
            control={<Radio checked={e.name === value.gun} />}
            labelPlacement="top"
            disabled={value.win === e.name || value.mo}
          />
        ))}
      </RadioGroup>
      <FormLabel>放槍</FormLabel>
    </FormControl>
  );
}
