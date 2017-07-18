
let profile = {}

function reqListener () {
  let data = JSON.parse(this.responseText);
  let info = `Hi, my name is ${data.name} and I am from ${data.location}.`;
  console.log(data);
  console.log("----------------")
  console.log("name: " + data.name);
  console.log("avatar: " + data.avatar_url);
  console.log("url: " + data.url);
  console.log("email: " + data.email);
  console.log("company: " + data.company);
  console.log("blog: " + data.blog);
  console.log("bio: " + data.bio);

  document.querySelector("#name").innerText = data.name
  document.querySelector("#githubUrl").innerText = data.html_url
  document.querySelector("#email").innerText = data.email
  document.querySelector("#company").innerText = data.company
  document.querySelector("#website").innerText = data.blog
  document.querySelector("#story").innerText = data.bio

  let avatar = document.createElement("img")
  avatar.src = data.avatar_url
  avatar.style.width = "100%"
  avatar.classList.add("img-circle")
  document.querySelector("#ghAvatar > div").appendChild(avatar)

}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/mhazoldt");
req.addEventListener("load", reqListener);
req.send();
