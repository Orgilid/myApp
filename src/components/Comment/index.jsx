import { useState } from "react";
import "./style.css";

const Comment = () => {
  const [comment, setComment] = useState("");

  const wt = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="Comment">
      <span className="CommentText">{comment}</span>
      <br />

      <textarea className="CommentInput" onChange={wt}></textarea>
    </div>
  );
};

export default Comment;
