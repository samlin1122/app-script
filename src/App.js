import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
// components
import BasicTabs from "./components/tabs";

import TabSummary from "./tabs/tab-summary";
import TabDashboard from "./tabs/tab-dashboard";

const url = `https://script.google.com/macros/s/${process.env.REACT_APP_SPREAD_SHEET_ID}/exec`;
const tabList = ["summary", "dashboard"];

function App() {
  const [list, setList] = useState();

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    await axios
      .get(url)
      .then(({ data }) => setList(data.data))
      .catch((err) => console.log(err));
  };

  const update = async (payload) => {
    await axios
      .post(url, JSON.stringify(payload))
      .then(({ data }) => setList(data.data))
      .catch((err) => console.log(err));
  };
  console.log(list);
  return (
    <div className="App">
      {list ? (
        <BasicTabs list={tabList}>
          <TabSummary list={list} />
          <TabDashboard list={list} update={update} />
        </BasicTabs>
      ) : null}
    </div>
  );
}

export default App;
