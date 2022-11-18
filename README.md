# Socket.io PoC implementation back and front

## How does it work?

Socket.io uses websocket connection, it means that the communication between server and client stays alive, otherwise, it would be necessary to make as many connections as the application needs what would be really bad as the application grows.

**_Server <== Websocket ==> Client_**
