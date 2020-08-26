fetch("actors.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    data.forEach(showData);
  });

//close the modal when clicked
const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
  modal.classList.add("hide");
});

function showData(e) {
  console.log(e);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("h1 span ").textContent = e.fullname;
  clone.querySelector("p span").textContent = e.movie;

  clone.querySelector("button").addEventListener("click", showModal);
  function showModal() {
    console.log(e + "test");
    modal.querySelector(".modal-name").textContent = e.fullname;
    modal.querySelector("p").textContent = e.movie;

    modal.classList.remove("hide");
  }

  let parent = document.querySelector("main");
  parent.appendChild(clone);
}
