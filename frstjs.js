let username;

document.getElementById("submit_butt").onclick = function () {
  username = document.getElementById("input_tag").value;
  document.getElementById("Heading").textContent = `Hello youngin ${username}`;
  document.getElementById("input_tag").value = "";
};

a = [1, 2, 4, 3];

for (const i in a) {
  console.log(a[i]);
}

let apples = ["golden", "brown"];

let foods = [...apples];

console.log(foods);

document.addEventListener("DOMContentLoaded", function () {
  let currUrl = window.location.href;
  console.log(currUrl);

  let homeButton = document.getElementById("Home-button");

  // Listen for click events on the "Home" button
  if (homeButton) {
    homeButton.addEventListener("click", function () {
      // Check if the user is already on the home page
      if (window.location.href === currUrl) {
        alert("On Home page already");
      }
    });
  }
});

let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to: ")
);

console.log(answer);
