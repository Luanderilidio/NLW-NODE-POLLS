import fastify from "fastify";
import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import { createPoll } from "./routes/create-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import { getPoll } from "./routes/get-polls";
import { pollResults } from "./ws/poll_results";

const app = fastify()

app.register(cookie, {
  secret: "polls-app-nlw",
  hook: 'onRequest',
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.register(pollResults)

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!")
})