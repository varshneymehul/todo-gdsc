import "./App.css";
import ListItem from "./components/ListItem";
import { useState } from "react";

function App() {
  const [listItemCurrent, setListItemCurrent] = useState("");
  const [listItems, setListItems] = useState([]);
  return (
    <section className="App">
      <div className="listParent">
        <h1 className="listHeading">
          <span
            style={{
              background:
                "-webkit-linear-gradient(180deg, #121FCF 0%, #CF1512 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's get something done today!
          </span>{" "}
          🎯
        </h1>

        <form
        className="listInputForm"
          onSubmit={(e) => {
            e.preventDefault();
            setListItems([...listItems, listItemCurrent]);
            setListItemCurrent("");
          }}
        >
          <input
          className="listInput"
            type="text"
            name="listItemCurrent"
            placeholder="What needs to be done?"
            value={listItemCurrent}
            onChange={(e) => setListItemCurrent(e.target.value)}
          />
          <button className="listInputButton" type="submit">Add</button>
        </form>

        {listItems.map((listItem, index) => {
          return (
            <ListItem
              key={index}
              id={index}
              listItem={listItem}
              removeItem={(key) => {
                setListItems(listItems.filter((item, index) => index !== key));
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

export default App;
