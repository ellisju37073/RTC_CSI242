let connectionStatus = document.getElementById("connectionStatus");
let btnConnect = document.getElementById("btnConnect");
let btnDisconnect = document.getElementById("btnDisconnect");
let btnSend = document.getElementById("btnSend");
let message = document.getElementById("message");
let response = document.getElementById("response");
connectionStatus.innerHTML = "Disconnected";

//Websockets are a protocol that allows for real-time communication between a client and a server.
//Before websockets, the client would have to poll the server for new information.
//Only used http to communicate with the server.
//this was a one way communication.
//Websockets allow for two way communication between the client and the server.
//websockets are particullarlly useful for real-time applications such as chat applications, games, and stock tickers.
//websockets work by establishing a connection between the client and the server.
//Once the connection is established, the client and the server can send messages to each other.
//The connection is kept open until either the client or the server closes the connection.

let webSocket = null;

btnConnect.addEventListener("click", function () {
    //assign a new WebSocket object to the webSocket variable.
    webSocket = new WebSocket('wss://echo.websocket.events');
    //wss is the secure version of ws.

    //set the onopen event handler to a function that will be called when the connection is established.
    webSocket.onopen = function () {
        connectionStatus.innerHTML = "Connected";
    };

    //set the onclose event handler to a function that will be called when the connection is closed.
    webSocket.onclose = function () {
        connectionStatus.innerHTML = "Disconnected";
    };

    //set the onmessage event handler to a function that will be called when a message is received from the server.
    webSocket.onmessage = function (e) {
        response.innerHTML = e.data;
    };
    //onerror event handler to a function that will be called when an error occurs.
    webSocket.onerror = function (e) {
        console.log(e);
    };
    console.log(webSocket);
    // 0 = connecting
    // 1 = open
    // 2 = closing
    // 3 = closed

});

btnDisconnect.addEventListener("click", function () {
    webSocket.close();
    connectionStatus.innerHTML = "Disconnected";
});

btnSend.addEventListener("click", function () {
    //console.log(message.value);
    //before we send lets make sure the connection is open.
    if (webSocket === null || webSocket.readyState !== 1) {
        alert("The connection is not established.");
    }
    else {
        webSocket.send(message.value);
    }
});


