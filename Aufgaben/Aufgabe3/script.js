"use strict";
/*
Aufgabe: <Aufgabe3>
Name: <Simon Bachhaeubl>
Matrikel: <265386>
Datum: <29.10.2022>
Quellen: <Inspiration/Hilfe --> Bastian Aberle>
*/
var Einkaufsliste;
(function (Einkaufsliste) {
    window.addEventListener("load", handleList);
    function handleList() {
        let addButton = document.querySelector("#add");
        let deleteButton = document.querySelector("#delete");
        let checkButton = document.querySelector("#check");
        let editButton = document.querySelector("#edit");
        addButton.addEventListener("click", add);
        deleteButton.addEventListener("click", deleteItem);
        checkButton.addEventListener("click", check);
        editButton.addEventListener("click", edit);
    }
})(Einkaufsliste || (Einkaufsliste = {}));
function add() {
    console.log("Hinzufügen");
}
function check() {
    console.log("markieren");
}
function edit() {
    console.log("bearbeiten");
}
function deleteItem() {
    console.log("Eintrag löschen");
}
//# sourceMappingURL=script.js.map