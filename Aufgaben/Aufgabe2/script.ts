namespace Aufgabe2_EventInspector
{
    
    let div1: HTMLElement = document.getElementById("div1");
    let div2: HTMLElement = document.getElementById("div2");
    let button: HTMLElement = document.getElementById("button");
    let infoBox: HTMLElement = document.getElementById("box");
    let x: number;
    let y: number;

    window.addEventListener("load", handleLoad); 
    
    function handleLoad(): void
    {
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

    function setInfoBox(_event: MouseEvent): void
    {
        x = _event.x;
        y = _event.y;
        infoBox.innerHTML = "  x Position: " + x + " px <br>   y Position : " + y + " px <br>   Target: " + _event.target;
        infoBox.style.left = _event.pageX + 10 + "px";
        infoBox.style.top = _event.pageY + 20 + "px";
    }

    function logInfo(_event: Event): void
    {
        console.log("Current Target:" + _event.currentTarget);
        console.log("Target: " + _event.target);
        console.log("Event-Phase: " + _event.eventPhase);
        console.log("Event-Type: " + _event.type);
        console.log(_event);
    }

    function triggerCustomEvent(_event: Event): void
    {
        let newCustomEvent: CustomEvent = new CustomEvent("customEvent", {bubbles: true});
        button.dispatchEvent(newCustomEvent);
    }

    function catchCustomEvent(_event: CustomEvent): void 
    {
        console.log("CustomEvent durch Klick auf Button ausgelöst, von Document abgefangen.");
        console.log("Current Target:" + _event.currentTarget);
        console.log("Target: " + _event.target);
        console.log("Event-Phase: " + _event.eventPhase);
        console.log("Event-Type: " + _event.type);
        console.log(_event);
    }
}