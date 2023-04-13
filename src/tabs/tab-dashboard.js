import { useState } from "react";
// components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import SelectBase from "../components/select";
import RadioGrop from "../components/radio-group";
import TableBasic from "../components/table";
const initialInfo = {
  name: "",
  tai: 0,
  di: 0,
  mo: 0,
  gun: 0,
};
const initialRecord = {
  win: "",
  gun: "",
  di: "",
  tai: 0,
  mo: false,
};
const initialPlayers = [initialInfo, initialInfo, initialInfo, initialInfo];
const labelList = [
  { id: "name", title: "姓名" },
  { id: "di", title: "底數" },
  { id: "tai", title: "台數" },
  { id: "mo", title: "自摸" },
  { id: "gun", title: "放槍" },
];
const selectList = [
  { id: "di", label: "底數", list: [1, 3] },
  {
    id: "tai",
    label: "台數",
    list: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
  },
];

function TabRecord({ list, update }) {
  const [players, setPlayers] = useState(initialPlayers);
  const [record, setRecord] = useState(initialRecord);
  const [isStart, setIsStart] = useState(false);

  const handleChange = (event, i) => {
    let temp = JSON.parse(JSON.stringify(players));
    temp[i].name = event.target.value;
    setPlayers(temp);
  };

  const handleRecordChange = (event, id) => {
    if (event.target.value === undefined) return;
    let temp = JSON.parse(JSON.stringify(record));
    temp[id] = event.target.value;
    if (id === "di") {
      if (event.target.value === 3) {
        temp.mo = true;
        temp.gun = "";
      } else {
        temp.mo = false;
      }
    }
    setRecord(temp);
  };
  const handleSave = () => {
    let temp = JSON.parse(JSON.stringify(players));
    temp.forEach((e) => {
      if (e.name === record.win) {
        e.tai += record.tai;
        e.di += record.di;
        e.mo += Number(record.mo);
      } else if (e.name === record.gun) {
        e.gun += 1;
      }
    });
    setPlayers(temp);
    setRecord(initialRecord);
  };
  const handleStartChange = () => {
    if (isStart) {
      update(players);
      setPlayers(initialPlayers);
      setRecord(initialRecord);
    }
    setIsStart(!isStart);
  };
  return (
    <>
      <Box>
        {players && !isStart
          ? players.map((player, index) => (
              <SelectBase
                id="name"
                key={"player" + (index + 1)}
                list={list.map(({ name }) => ({ id: name, label: name }))}
                label={"player" + (index + 1)}
                value={player.name}
                handleChange={(event) => handleChange(event, index)}
                selectedItems={players
                  .filter(({ name }) => name)
                  .map(({ name }) => name)}
              />
            ))
          : null}
      </Box>
      <Button
        sx={{ marginBottom: "20px" }}
        variant="contained"
        disableElevation
        onClick={handleStartChange}
        disabled={players.some(({ name }) => !name)}
      >
        {isStart ? "Finish & Upload" : "Start"}
      </Button>
      <Box
        sx={{
          pointerEvents: isStart ? "unset" : "none",
          opacity: isStart ? "1" : "0.5",
        }}
      >
        {selectList.map((e, index) => (
          <SelectBase
            id="score"
            key={"SelectBase" + e.id}
            list={e.list.map((el) => ({ id: e.label + el, label: el }))}
            label={e.label}
            value={record[e.id]}
            handleChange={(event) => handleRecordChange(event, e.id)}
          />
        ))}
        <Box>
          <RadioGrop
            value={record}
            list={players}
            handleChange={handleRecordChange}
          />
        </Box>
        <Button
          sx={{ marginBottom: "30px" }}
          variant="contained"
          disableElevation
          onClick={handleSave}
        >
          Save
        </Button>
        <TableBasic id="history" list={players} label={labelList} />
      </Box>
    </>
  );
}

export default TabRecord;
