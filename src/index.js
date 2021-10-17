import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        date="Today at 6:00PM"
        content="Woah what a nice face 👩‍❤️‍👩👵🏽👩‍❤️‍👩👩‍❤️‍👩👩‍❤️‍👩"
      />
      <CommentDetail
        author="Alex"
        date="Monday at 2:00PM"
        content="You look amazing!"
      />
      <CommentDetail
        author="Jane"
        date="Yesterday at 1:00AM"
        content="Hey girl heeeey! 🦝"
      />
      <CommentDetail
        author="Lola"
        date="Sunday at 9:00AM"
        content="Bjutiful! 🎉"
      />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
