import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const button = { text: "click!" };
  const label = "enter name:";

  return (
    <div>
      <label class="label" for="name">
        {label}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {button.text}
      </button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
