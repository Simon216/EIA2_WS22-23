"use strict";
/*
Aufgabe 4
Name: Simon Bachhaeubl
Matrikel: 265386
Datum: 05.11.2022
Quellen: EIA2 Classroom / W3S / Basti Aberle (zu 90% seine Arbeit - für mich sonst leider unmöglich Umzusetzen)
*/
var shoppinglistA04;
(function (shoppinglistA04) {
    //Anlegen der globalen Variablen -> System hat immer Zugriff
    let item;
    let amount;
    let dateData;
    let comment;
    let nextPurchase;
    let amountItems = 0;
    window.addEventListener("load", loadList);
    function loadList() {
        document.querySelector("h2").addEventListener("click", loadInput);
        loadData();
    }
    //Data.ts Inhalte werden in die Liste geladen
    function loadData() {
        for (let counter = 0; counter < shoppinglistA04.savedInputs.length; counter++) {
            item = shoppinglistA04.savedInputs[counter].savedItem;
            amount = shoppinglistA04.savedInputs[counter].savedAmount;
            dateData = shoppinglistA04.savedInputs[counter].savedDate;
            comment = shoppinglistA04.savedInputs[counter].savedComment;
            let nextPurchaseString = shoppinglistA04.savedInputs[counter].savedPurchase.toString();
            if (nextPurchaseString == "false") {
                nextPurchase = "";
            }
            else {
                nextPurchase = " buy";
            }
            loadItem();
        }
    }
    function loadInput() {
        let formData = new FormData(document.forms[0]);
        item = formData.get("Item").toString();
        amount = Number(formData.get("Amount"));
        dateData = new Date().toLocaleDateString();
        comment = formData.get("Area").toString();
        let nextPurchaseString = formData.get("Checkbox");
        if (nextPurchaseString == null) {
            nextPurchase = "";
        }
        else {
            nextPurchase = " buy";
        }
        loadItem();
    }
    //Funktion zum hinzufügen eines neuen Eintrags
    function loadItem() {
        let newElement = document.createElement("div");
        newElement.innerHTML = dateData + " " + amount + " " + item + " " + comment + " " + nextPurchase;
        let getElement = document.querySelector("#output");
        getElement.appendChild(newElement);
        newElement.className = "outputItem" + amountItems;
        newElement.id = amountItems.toString();
        newElement.style.marginTop = "-10px";
        //neue Checkbox 
        let newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.name = "CheckboxName" + amountItems;
        getElement = document.querySelector("#output");
        getElement.appendChild(newCheckbox);
        newCheckbox.className = "checkbox" + amountItems;
        newCheckbox.id = "checkbox" + amountItems.toString();
        newCheckbox.name = "Checkbox" + amountItems.toString();
        newCheckbox.style.position = "relative";
        newCheckbox.style.left = "-85px";
        newCheckbox.style.top = "-14px";
        //neues bearbeiten icon 
        let newEdit = document.createElement("div");
        newEdit.innerHTML = "<i class='fa-solid fa-pen fa-lg'></i>";
        getElement.appendChild(newEdit);
        newEdit.className = "edit" + amountItems;
        newEdit.id = "edit" + amountItems.toString();
        //stylet erzeugte Elemente
        newEdit.style.position = "relative";
        newEdit.style.top = "-41px";
        newEdit.style.width = "20px";
        newEdit.style.left = "165px";
        //neues Mülleimer icon
        let newTrash = document.createElement("div");
        newTrash.innerHTML = "<img id='" + amountItems + "' " + "Trash.svg'>";
        newElement.appendChild(newTrash);
        newTrash.className = "trash" + amountItems;
        //styled das erzeugte Element
        newTrash.style.width = "15px";
        newTrash.style.position = "relative";
        newTrash.style.left = "250px";
        newTrash.style.top = "7px";
        //listener
        document.querySelector(".trash" + amountItems).addEventListener("click", deleteItem);
        document.querySelector(".checkbox" + amountItems).addEventListener("click", checkboxNextPurchase);
        document.querySelector(".edit" + amountItems).addEventListener("click", editEntry);
        //zähle den Counter der Gesamtzahl der erzeugten Items um 1 hoch
        amountItems++;
    }
    //Funktion zum löschen eines Eintrags über die ID
    function deleteItem(_event) {
        console.log("delete");
        let x = _event.target.id;
        let outputElementId = document.getElementById(x);
        let editElementId = document.getElementById("edit" + x);
        let checkboxElementId = document.getElementById("checkbox" + x);
        checkboxElementId.remove();
        outputElementId.remove();
        editElementId.remove();
    }
})(shoppinglistA04 || (shoppinglistA04 = {}));
//# sourceMappingURL=Aufgabe4.js.map