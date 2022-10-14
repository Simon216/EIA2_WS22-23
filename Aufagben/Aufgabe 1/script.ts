/*
Aufgabe: <01 Zufallsgedicht>
Name: <Simon Bachhäubl>
Matrikel: <265386>
Datum: <14.10.2022>
Quellen: <inverted Classroom / W3S>
*/

namespace Gedicht {

    let subjekte: string[] =[

        "Simon",
        "Anna",
        "Lea",
        "Lukas",
        "Siggi",
        "Katja"
    ];

    let praedikate: string[] = [

        "spielt",
        "läuft", 
        "trinkt", 
        "fliegt",
        "raucht",
        "kauft"
    ];
    
    let objekte: string[] = [
        
        "Bälle",
        "Kräuter", 
        "Bier", 
        "Tische", 
        "Schränke", 
        "Wiesen"];




    for (let i: number = subjekte.length; i > 0; i--) {
        getVerse(subjekte, praedikate, objekte);
    }
    
    function getVerse(_sub: string[], _pra: string[], _obj: string[]): string {
    
        let randomS: number = Math.floor(Math.random() * subjekte.length);
        let randomP: number = Math.floor(Math.random() * praedikate.length);
        let randomO: number = Math.floor(Math.random() * objekte.length);
    
        let randomSubjekt: string[] = _sub.splice(randomS, 1);
        let randomPraedikat: string[] = _pra.splice(randomP, 1);
        let randomObjekt: string[] = _obj.splice(randomO, 1);
    
        console.log(randomSubjekt + " " + randomPraedikat + " " + randomObjekt);
        return;
    }
    }
