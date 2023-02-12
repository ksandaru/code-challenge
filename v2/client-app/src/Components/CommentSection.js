import React, { useState, useContext,useEffect } from "react";
import axios from "axios";


const CommentSection = ({option}) => {
  const [comment, setComment] = useState({
    body: ""
  });
  const {body} = comment;
  // const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const submitComment = async () => {
      try {
        const response = await axios.post('http://localhost:5001/comments', {
          creator: option ,
          body: body
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    submitComment();
  }, []);

  const handleSubmit = (event) => {
    setComment( event.target.value
    );
  }

  return (
    <>
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
            name="body"
            id="exampleFormControlTextarea1"
            rows="2"
            value={body}
            onChange={(e) => setComment({...comment, [e.target.name]:e.target.value})}
          ></textarea>
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      <p>Current User: {option}</p>
    </div>
    </>
    
  );
};

export default CommentSection;
