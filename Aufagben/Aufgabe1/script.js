"use strict";
/*
Aufgabe: <01 Zufallsgedicht>
Name: <Simon Bachhäubl>
Matrikel: <265386>
Datum: <14.10.2022>
Quellen: <inverted Classroom / W3S / Bastian Aberle -> Orientierung>
*/
var Gedicht;
(function (Gedicht) {
    let subjekte = [
        "Simon",
        "Anna",
        "Lea",
        "Lukas",
        "Siggi",
        "Katja"
    ];
    let praedikate = [
        "spielt",
        "läuft",
        "trinkt",
        "fliegt",
        "raucht",
        "kauft"
    ];
    let objekte = [
        "Bälle",
        "Kräuter",
        "Bier",
        "Tische",
        "Schränke",
        "Wiesen"
    ];
    for (let i = subjekte.length; i > 0; i--) {
        getVerse(subjekte, praedikate, objekte);
    }
    function getVerse(_sub, _pra, _obj) {
        let randomS = Math.floor(Math.random() * subjekte.length);
        let randomP = Math.floor(Math.random() * praedikate.length);
        let randomO = Math.floor(Math.random() * objekte.length);
        let randomSubjekt = _sub.splice(randomS, 1);
        let randomPraedikat = _pra.splice(randomP, 1);
        let randomObjekt = _obj.splice(randomO, 1);
        console.log(randomSubjekt + " " + randomPraedikat + " " + randomObjekt);
        return;
    }
})(Gedicht || (Gedicht = {}));
//# sourceMappingURL=script.js.map