# Socket.io PoC implementation back and front

## How does it work?

Socket.io uses websocket connection, it means that the communication between server and client stays alive, otherwise, it would be necessary to make as many connections as the application needs what would be really bad as the application grows.

**_Server <== Websocket ==> Client_**

## Great features:

- it´s possible to send messages to all users (broadcast) that aren´t delivered to who sent;
- it´s possible to open communication between client and server to pass some callback
- it´s possible to join multiple rooms and the socket.id is a room by itself (private messages)
