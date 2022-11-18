# Socket.io PoC implementation back and front

## How does it work?

Socket.io uses websocket connection, it means that the communication between server and client stays alive, otherwise, it would be necessary to make as many connections as the application needs what would be really bad as the application grows.

**_Server <== Websocket ==> Client_**

## Great features:

- it´s possible to send messages to all users (broadcast) that aren´t delivered to who sent;
- it´s possible to open communication between client and server to pass some callback
- it´s possible to join multiple rooms and the socket.id is a room by itself (private messages)
- it´s possible to use namespaces to some auth strategy

## Interesting resources

- @socket.io/admin-ui - https://admin.socket.io/#/sockets - uses current application address

## How to run:

1. This project is using:

   - client: vite + yarn
   - server: nodemon + npm
   - why? just because it is... (no special reason for)

2. Client:

   - client folder
   - run `yarn`
   - run `yarn dev`
   - access: http://localhost:5173

3. Server

   - server folder
   - run `npm i`
   - run `npm start`
   - server running at port 3002

4. You can open as many clients that you want to test various scenarios

5. Enjoy!
