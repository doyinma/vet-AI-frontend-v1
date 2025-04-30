// randomly generates a number between the range of low and high
function getRandom(low:number = 1, high:number = 10) {
    let randomNumber:number;
    // calculate random number
    randomNumber = Math.round(Math.random() * (high - low)) + low;
    // returning value
    return randomNumber;
}

function addKey(functionToCall:Function, myCode:string = "Enter") {
    document.addEventListener("keydown", (e) => {
        // is the key released the specified key?
        if (e.code === myCode) {
            // pressing the enter key will force some browsers to refresh
            // this command stops the event from going further
            e.preventDefault();
            // call provided callback to do everything else that needs to be done
            functionToCall();
            // this also helps the event from propagating in some browsers
            return false;
        }
    });
}

function getJSONData(retrieveURL:string, success:Function, failure:Function, debug:boolean = false) {
    fetch(retrieveURL)
        .then(response => response.json())
        .then(data => success(data))
        .catch(error => {
            failure(error);
            if (debug) throw error;
        });
} 

function sendJSONData(sendURL:string, sendJSON:Object, success:Function, failure:Function, debug:boolean = false) {
    fetch(sendURL, 
        {
            method: "POST", 
            headers: {"content-type":"application/json"},
            body: JSON.stringify(sendJSON)
        })
        .then(response => response.text())
        .then(responseText => success(responseText))
        .catch(error => {
            failure(error);
            if (debug) throw error;
        });
}

export { getRandom, addKey, getJSONData, sendJSONData };