"use strict";
document.addEventListener("DOMContentLoaded", function () {
    let eauDeVie = document.querySelector("#strong");
    let liquorSirupElement = document.querySelector("#sweet");
    const button = document.querySelector("#generate-button");
    const listEDV = [
        "Calvados",
        "Cachaca",
        "Cognac",
        "Gin",
        "Grappa",
        "Kirsch",
        "Pear Spirit",
        "Pisco",
        "Rum",
        "Tequila",
        "Vodka",
        "Whisky",
    ];
    const listLiquorSirup = [
        "Amaretto",
        "Basil Syrup",
        "Benedictine",
        "Blackcurrant Liqueur",
        "Blackcurrant Syrup",
        "Blue Curaçao",
        "Caramel Syrup",
        "Chambord",
        "Chartreuse",
        "Cherry Syrup",
        "Coffee Syrup",
        "Grenadine Syrup",
        "Hazelnut Syrup",
        "Hibiscus Syrup",
        "Kiwi Syrup",
        "Lillet",
        "Limoncello",
        "Melon Liqueur",
        "Mint Syrup",
        "Orgeat Syrup",
        "Passion Fruit Liqueur",
        "Peach Liqueur",
        "Peach Syrup",
        "Pineapple Syrup",
        "Red Vermouth",
        "Rose Syrup",
        "Ruby Port",
        "Saint Germain",
        "Strawberry Syrup",
        "Triple Sec",
        "Vanilla Syrup",
        "Violet Syrup",
        "White Port",
        "White Vermouth",
    ];
    function getRandomLiquorSirup() {
        const randomNumberForSweet = Math.floor(Math.random() * listLiquorSirup.length);
        return listLiquorSirup[randomNumberForSweet];
    }
    function getRandomEDV() {
        const randomNumberForEDV = Math.floor(Math.random() * listEDV.length);
        return listEDV[randomNumberForEDV];
    }
    function generateNewCocktail() {
        const edv = getRandomEDV();
        const liquorSirup = getRandomLiquorSirup();
        eauDeVie.textContent = edv;
        liquorSirupElement.textContent = liquorSirup;
    }
    button.onclick = function () {
        generateNewCocktail();
    };
    // Définir une fonction pour le défilement fluide vers une ancre spécifique
    function smoothScrollTo(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    // Gérer le clic sur le bouton "Get started" pour déclencher le défilement fluide vers l'ancre2
    const getStartedButton = document.querySelector('#get-started-button');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', () => {
            smoothScrollTo('#ancre2');
        });
    }
});
