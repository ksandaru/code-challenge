import React from "react";

const CommentView = ({ creator, body, upvotes, userprofile, time }) => {
  return (
    <>
      <div class="card mb-3" style={{maxWidth: "500px"}}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={userprofile}
              class="img-fluid rounded-start"
              alt={creator}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" style={{fontWeight:"bold"}}>{creator}</h5>
              <p class="card-text">{body}</p>
              <p class="card-text">{upvotes}</p>
                <small class="text-muted">{time}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentView;
