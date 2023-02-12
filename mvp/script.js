let commentbox = document.getElementById("comment");

commentbox.addEventListener("blur", function () {
  comment.innerHTML = "What are your thoughts?";
});
commentbox.addEventListener("focus", function () {
  comment.innerHTML = "";
});

//get all user data
var xhr1 = new XMLHttpRequest();
xhr1.open("GET", "http://localhost:5000/users", true);
xhr1.onreadystatechange = function () {
  if (xhr1.readyState === XMLHttpRequest.DONE && xhr1.status === 200) {
    var response = JSON.parse(xhr1.responseText);
    console.log("username response: " + response);
    var usernames = response.map(function (user) {
      return user.name;
    });

    var select = document.createElement("select");
    select.id = "username-select";
    usernames.forEach(function (username) {
      var option = document.createElement("option");
      option.value = username;
      option.text = username;
      select.appendChild(option);
    });
    document.getElementById("username-container").appendChild(select);
  }
};
xhr1.send();

//create comment list on UI
var commentSection = document.getElementById("commentSection");
var xhr2 = new XMLHttpRequest();
xhr2.open("GET", "http://localhost:5000/comments", true);
xhr2.onreadystatechange = function () {
  if (xhr2.readyState === XMLHttpRequest.DONE && xhr2.status === 200) {
    var data = JSON.parse(xhr2.responseText);
    console.log("comment response: " + data);
    var comments = data.map(function (cmnt) {
      console.log(cmnt.body);
    });

    var allcomments = data.forEach(function (cmnt) {
      var commentContainer = document.createElement("div");
      commentContainer.classList.add("singlecomment");

      var avatar = document.createElement('img');
      avatar.src = cmnt.userprofile; // todo:
      avatar.alt =cmnt.userprofile;
      avatar.classList.add('avatar');
      commentContainer.appendChild(avatar);

      var commentText = document.createElement("div");
      var username = document.createElement("div");
      username.classList.add("username");
      username.innerHTML = cmnt.creator;
      commentText.appendChild(username);

      var singlecomment = document.createElement("div");
      singlecomment.classList.add("comment-text");
      singlecomment.innerHTML = cmnt.body;
      commentText.appendChild(singlecomment);

      commentContainer.appendChild(commentText);

      commentSection.appendChild(commentContainer);
    });
  }
};
xhr2.send();

document.getElementById("submit-button").addEventListener("click", function () {
  var username = document.getElementById("username-select").value;
  var comment = document.getElementById("comment").value;
  submitComment(username, comment);
});

function submitComment(username, comment) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:5000/comments", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log("Comment submitted!");
    }
  };
  xhr.send(JSON.stringify({ creator: username, body: comment, upvotes: 0 }));
}
