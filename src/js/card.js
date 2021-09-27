// banner card script

function handleMouseover(e) {
    document.querySelector(".active").classList.remove("active");
    e.target.closest(".card").classList.add("active");
}

document.querySelectorAll(".card").forEach(card => card.addEventListener("mouseover", handleMouseover) );