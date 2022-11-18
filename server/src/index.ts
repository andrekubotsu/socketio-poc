import fastify from "fastify";
import fastifyIO from "fastify-socket.io";
import { instrument } from '@socket.io/admin-ui'

const server = fastify();
server.register(fastifyIO, {
  cors: {
    origin: ["http://localhost:5173", "https://admin.socket.io"],
    credentials: true
  },
});

server.get("/", (req, reply) => {
  server.io.emit("hello");
});

server.ready().then(() => {
  // we need to wait for the server to be ready, else `server.io` is undefined
  server.io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on('send-message', (message, room) => {
        if (room === "") {
          socket.broadcast.emit("receive-message", message);
        } else {
          socket.to(room).emit("receive-message", message);
        }
    })

    socket.on('join-room', (room, callback) => {
        socket.join(room)
        callback(`Joined ${room}!`)
    })
  });
  instrument(server.io, { auth:false })
});



server.listen({port:3002});