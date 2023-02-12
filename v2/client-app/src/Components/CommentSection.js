import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  return (
    <div className="comment-section">
      <h3>Comment Section</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Add comment
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
