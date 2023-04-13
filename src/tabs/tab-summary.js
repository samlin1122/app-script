import TableBasic from "../components/table";
const labelList = [
  { id: "name", title: "姓名" },
  { id: "tai", title: "台數" },
  { id: "di", title: "底數" },
  { id: "mo", title: "自摸" },
  { id: "gun", title: "放槍" },
];
function TabSummary({ list }) {
  return <TableBasic id="summary" list={list} label={labelList} />;
}

export default TabSummary;
