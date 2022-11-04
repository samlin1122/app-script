// components
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectBase({
  list,
  id,
  label,
  value,
  handleChange,
  selectedItems = [],
}) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={handleChange}>
        {list.map((e) => (
          <MenuItem
            key={"MenuItem" + id + e.id}
            value={e.label}
            disabled={selectedItems.some((el) => e.id === el)}
          >
            {e.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectBase;
