const selectionListPokedevs = document.querySelectorAll(".pokedev");

selectionListPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () =>{

        closedCard();

        const { pokedevSelectedCard, pokedevListId } = OpenCard(pokedev);

        pokedevSelectedCard.classList.add("open");

        disablePokedevList();

        openPokedevSelectionList(pokedevListId);
    })
});

function openPokedevSelectionList(pokedevListId) {
    const pokedevSelectedList = document.getElementById(pokedevListId);
    pokedevSelectedList.classList.add("active");
}

function disablePokedevList() {
    const pokedevActionList = document.querySelector(".active");
    pokedevActionList.classList.remove("active");
}

function OpenCard(pokedev) {
    const pokedevListId = pokedev.attributes.id.value;
    const pokedevCardId = "card-" + pokedevListId;
    const pokedevSelectedCard = document.getElementById(pokedevCardId);
    return { pokedevSelectedCard, pokedevListId };
}

function closedCard() {
    const pokedevOpenCard = document.querySelector(".open");
    pokedevOpenCard.classList.remove("open");
}

