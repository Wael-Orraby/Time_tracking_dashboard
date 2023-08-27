const date = document.querySelectorAll(".dateInfo");
date.forEach((el) => {
  el.onclick = () => {
    date.forEach((el) => {
      el.classList.remove("changeColor");
    });
    el.classList.add("changeColor");
    const filePath = "./data.json";
    fetch(filePath)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".cards").innerHTML = data
          .map(
            (activity) => `<div class="activityCard ${activity.title}">
        <div class="img">
          <img src="./images/icon-${activity.title}.svg" alt="" />
        </div>
        <div class="details">
          <div>
            <h2>${activity.title}</h2>
            <div>
              <img class="ellipsis" src="./images/icon-ellipsis.svg" alt="" />
            </div>
          </div>
          <div>
            <p>${
              activity["timeframes"][el.innerHTML.toLowerCase()]["current"]
            }hrs</p>
            <p>Last Week - ${
              activity["timeframes"][el.innerHTML.toLowerCase()]["previous"]
            }hrs</p>
          </div>
        </div>
      </div>`
          )
          .join("");
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };
});
