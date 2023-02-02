// showHome();
// showBlogs();
function showBlogs() {
  let token = JSON.parse(localStorage.getItem("token"));
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/blogs",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.token,
    },
    success: (blogs) => {
      let html = "";
      if (token.role === "admin") {
        blogs.map((item) => {
          html += `<tr>
            <td>${item.idBlog}</td>
            <td>${item.name}</td>
            <td>${item.content}</td>
            <td><img src="${item.image}" width = "100px"></td>
            <td>${item.nameTag}</td>
            <td><button onclick="removeBlog(${item.idBlog})">Delete</button></td>  
            <td><button onclick="showFormUpdate(${item.idBlog})">Edit</button></td>  
          </tr>`;
        });
      
      } else {
        blogs.map((item) => {
          html += `<tr>
                <td>${item.idBlog}</td>
                <td>${item.name}</td>
                <td>${item.content}</td>
                <td><img src="${item.image}" width = "100px"></td>
                <td>${item.nameTag}</td>
                <td><button onclick="">buy</button></td>  
                 

                     
              </tr>`;
        });
       
      }
       $("#tbody").html(html);
    },
  });
}
function showFormLogin() {
  $("#body").html(`<input type="text" id="username" placeholder="username">
  <input type="password" id="password" placeholder="password">
  <button onclick="login()">Login</button> `);
}
function showFormAdd() {
  $("#body").html(`<input type="text" id="name" placeholder="name">
    <input type="text" id="content" placeholder="content">
    <input type="file" id="fileButton" onchange="uploadImage(event)">
<div id="imgDiv"></div>
<select id="tag">
<option selected>Tag</option>
</select>
    <button onclick="add()">Add</button> `);
  getTagsCreate();
}
function showHome() {
  $("#body").html(`<table border="1">
    <thead>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Content</td>
        <td>Image</td>
        <td>Tag</td>
        <td colspan="2">Action</td>
      </tr>
    </thead>
    <tbody id="tbody"></tbody>
   
  </table>`);
  showBlogs();
}
function add() {
  let name = $("#name").val();
  let content = $("#content").val();
  let image = localStorage.getItem("image");
  let tag = $("#tag").val();
  let blog = {
    name: name,
    content: content,
    image: image,
    tag: tag,
  };

  $.ajax({
    type: "POST",
    url: "http://localhost:8080/blogs",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: JSON.stringify(blog),
    success: () => {
      showHome();
    },
  });
}
function removeBlog(idBlog) {
  $.ajax({
    type: "DELETE",
    url: `http://localhost:8080/blogs/${idBlog}`,
    headers: {
      "Content-Type": "application/json",

      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    success: () => {},
  });
  showHome();
}
function showFormUpdate(idBlog) {
  $.ajax({
    type: "GET",
    url: `http://localhost:8080/blogs/${idBlog}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    success: (blogs) => {
      $("#body")
        .html(`<input type="text" id="name" placeholder="name" value = "${blogs.name}">
    <input type="text" id="content" placeholder="content" value="${blogs.content}">
    <input type="file" id="fileButton" onchange="uploadImage(event)">
<div id="imgDiv"><img src= ${blogs.image} width= "50px"></div>

<select id="tag">
<option selected>Tag</option>

</select>
    <button onclick="update('${idBlog}')">Update</button> `);
      getTagsCreate();
    },
  });
}
function update(idBlog) {
  let name = $("#name").val();
  let content = $("#content").val();
  let image = localStorage.getItem("image");
  let tag = $("#tag").val();
  let blog = {
    name: name,
    content: content,
    image: image,
    tag: tag,
  };
  $.ajax({
    type: "PUT",
    url: `http://localhost:8080/blogs/${idBlog}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: JSON.stringify(blog),
    success: () => {},
  });
  showHome();
}

function uploadImage(e) {
  let fbBucketName = "images";
  let uploader = document.getElementById("uploader");
  let file = e.target.files[0];
  let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
  let uploadTask = storageRef.put(file);
  uploadTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED,
    function (snapshot) {
      uploader.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          break;
        case firebase.storage.TaskState.RUNNING:
          break;
      }
    },
    function (error) {
      switch (error.code) {
        case "storage/unauthorized":
          break;
        case "storage/canceled":
          break;
        case "storage/unknown":
          break;
      }
    },
    function () {
      let downloadURL = uploadTask.snapshot.downloadURL;
      document.getElementById(
        "imgDiv"
      ).innerHTML = `<img src="${downloadURL}" alt="">`;
      localStorage.setItem("image", downloadURL);
    }
  );
}

function getTagsCreate() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/tags",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    success: (tags) => {
      let Tags = ``;
      for (const tag of tags) {
        Tags += `
                  <option value=${tag.idTag}>${tag.nameTag}</option>
              `;
      }
      $("#tag").html(Tags);
    },
  });
}

function login() {
  let username = $("#username").val();
  let password = $("#password").val();
  let user = {
    username: username,
    password: password,
  };
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(user),
    success: (token) => {
      localStorage.setItem("token", JSON.stringify(token));
      console.log(token);
      showHome();
      showNavbar();
    },
  });
}

function logout() {
  localStorage.clear();
  showNavbar();
}
function showFormRegister() {
  $("#body").html(`<input type="text" id="username" placeholder="username">
  <input type="password" id="password" placeholder="password">
  <button onclick="register()">Register</button> `);
}

function register() {
  let username = $("#username").val();
  let password = $("#password").val();
  let user = {
    username: username,
    password: password,
  };
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/auth/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(user),
    success: () => {
      showFormLogin();
    },
  });
}
