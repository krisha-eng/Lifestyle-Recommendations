import React from "react";
import "./styles.css";
import { useState } from "react";

const oData = {
  Productivity: [
    { name: "Notion", category: "Databases, Kanban boards, Journaling etc." },
    { name: "Roam Research", category: "Note taking, Graph database" },
    { name: "Trello", category: "Kanban-style list-making" },
    { name: "Google Tables", category: "Workflow management tool" },
    { name: "Todoist", category: "To-Do List, Tasks & Reminders" }
  ],
  Shopping: [
    { name: "H&M", category: "Fast fashion" },
    { name: "Zara", category: "Fast fashion, High end, Luxury" },
    { name: "AJIO", category: "Indie" }
  ],
  HomeDecor: [
    { name: "Ikea", category: "World's largest, Home Furnishings" },
    { name: "Westside Home", category: "Contemporary designs" }
  ],
  Finance: [
    { name: "Splitwise", category: "Expense Splitter" },
    {
      name: "Walnut",
      category: "Expense Tracker, Automatic updates, SMS tracking"
    }
  ],
  Others: [{ name: "Library Genesis", category: "(Website, Books download)" }]
};

export default function App() {
  const [currentgenre, setGenre] = useState("Shopping");

  function getBg(index) {
    if (index === 0) {
      return { color: "rgba(247, 199, 128, 0.445)" };
    } else if (index === 1) {
      return { color: "rgba(247, 128, 194, 0.507)" };
    } else if (index === 2) {
      return { color: "rgba(128, 223, 247, 0.438)" };
    } else if (index === 3) {
      return { color: "rgba(128, 247, 148, 0.438)" };
    } else if (index === 4) {
      return { color: "rgba(247, 245, 128, 0.438)" };
    }
  }

  function onClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h2>theGoodLife</h2>
      <p>Select a genre to get started..</p>
      {Object.keys(oData).map((item) => (
        <button onClick={() => onClickHandler(item)}>{item}</button>
      ))}
      <ul>
        {oData[currentgenre].map((item, index) => (
          <li
            key={index}
            className="container"
            style={{ backgroundColor: getBg(index).color }}
          >
            <div className="name">{item.name}</div>
            <div className="detail">{item.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
