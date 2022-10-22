"use strict";
/*
Aufgabe: <Aufgabe2_EventInspector>
Name: <Simon Bachhaeubl>
Matrikel: <265386>
Datum: <21.10.2022>
Quellen: <Inspiration/Hilfe --> Paula Jordans / Dennis Grützmacher >
*/
var Aufgabe2_EventInspector;
(function (Aufgabe2_EventInspector) {
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let button = document.getElementById("button");
    let infoBox = document.getElementById("box");
    let x;
    let y;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        div2.addEventListener("click", logInfo);
        button.addEventListener("click", triggerCustomEvent);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
        div2.addEventListener("keyup", logInfo);
        document.addEventListener("customEvent", catchCustomEvent);
    }
    function setInfoBox(_event) {
        x = _event.x;
        y = _event.y;
        infoBox.innerHTML = "  x Koordinate: " + x + " px <br>   y Koordinate : " + y + " px <br>   Target: " + _event.target;
        infoBox.style.left = _event.pageX + 10 + "px";
        infoBox.style.top = _event.pageY + 20 + "px";
    }
    function logInfo(_event) {
        console.log("Current Target:" + _event.currentTarget);
        console.log("Target: " + _event.target);
        console.log("Event-Phase: " + _event.eventPhase);
        console.log("Event-Type: " + _event.type);
        console.log(_event);
    }
    function triggerCustomEvent(_event) {
        let newCustomEvent = new CustomEvent("customEvent", { bubbles: true });
        button.dispatchEvent(newCustomEvent);
    }
    function catchCustomEvent(_event) {
        console.log("CustomEvent durch Klick auf Button ausgelöst, von Document abgefangen.");
        console.log("Current Target:" + _event.currentTarget);
        console.log("Target: " + _event.target);
        console.log("Event-Phase: " + _event.eventPhase);
        console.log("Event-Type: " + _event.type);
        console.log(_event);
    }
})(Aufgabe2_EventInspector || (Aufgabe2_EventInspector = {}));
//# sourceMappingURL=script.js.map