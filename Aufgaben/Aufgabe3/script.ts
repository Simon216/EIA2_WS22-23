/*
Aufgabe: <Aufgabe3>
Name: <Simon Bachhaeubl>
Matrikel: <265386>
Datum: <29.10.2022>
Quellen: <Inspiration/Hilfe --> Bastian Aberle>
*/

namespace Einkaufsliste {

    window.addEventListener("load", handleList);

  
    function handleList(): void {
        let addButton: Element = document.querySelector("#add");
        let deleteButton: Element = document.querySelector("#delete");
        let checkButton: Element = document.querySelector("#check");
        let editButton: Element=document.querySelector("#edit")

        addButton.addEventListener("click", add);
        deleteButton.addEventListener("click", deleteItem);
        checkButton.addEventListener("click", check);
        editButton.addEventListener("click", edit)
    }

    }
    function add(): void {
        console.log("Hinzufügen");
    }
    function check(): void {
        console.log("markieren");
    }
    function edit(): void {
        console.log("bearbeiten");
    }
    function deleteItem(): void {
        console.log("löschen");
    }