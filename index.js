document.querySelector("button").addEventListener("click", e => {
  // Toggle menu
  e.target
    .closest("section")
    .querySelector("ul")
    .classList.toggle("selected");

  // Change button text
  const ul = document.querySelector("ul");
  const button = document.querySelector("button");
  if (ul.classList.contains("selected")) {
    button.innerText = "Hide destinations";
  } else {
    button.innerText = "Show destinations";
  }
});

const citiesArray = Array.from(document.querySelectorAll(".destination"));

citiesArray.map(city =>
  city.addEventListener("click", e => {
    e.target
      .closest("section")
      .querySelector(".selection")
      .classList.toggle("selected");

    // if (document.querySelector(".selection").contains("selected")) {}

    document.querySelector(".selection").innerText =
      "You selected " + e.target.innerText;
  })
);
