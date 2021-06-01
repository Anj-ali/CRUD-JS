const api = `https://randomuser.me/api`;

const addUser = document.getElementById("user-id");
const mainApp = document.getElementById("app");

addUser.addEventListener("click", async () => {
  const userData = await fetch(api, {
    method: "GET"
  });

  const userJSON = await userData.json();
  console.log(userJSON.results[0]);
  const user = userJSON.results[0];
  const userEl = document.createElement("div");
  userEl.innerHTML = `<div>
  ${user.name.title} ${user.name.first} ${user.name.addEventListener}
  </div>`;
  mainApp.append(userEl);
});
