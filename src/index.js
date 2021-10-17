import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        date="Today at 6:00PM"
        content="Woah what a nice face 👩‍❤️‍👩👩‍❤️‍👩👩‍❤️‍👩"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        date="Monday at 2:00PM"
        content="You look amazing!"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        date="Yesterday at 1:00AM"
        content="Hey girl heeeey! 🦝"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Lola"
        date="Sunday at 9:00AM"
        content="Bjutiful! 🎉"
        image={faker.image.avatar()}
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
