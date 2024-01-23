import { httpListener } from "@marblejs/http";
import { logger$ } from "@marblejs/middleware-logger";
import { bodyParser$ } from "@marblejs/middleware-body"; // body parser middleware

import { home$ } from "./effects/home.effects";
import { hello$ } from "./effects/hello.effects";
import { users$ } from "./effects/users.effects";
import { stream$ } from "./effects/stream.effects";
import { cors$ } from "./middlewares/cors.middleware";

// setting up middlewares
const middlewares = [
  logger$(), // you can see (colorful) logs in server side console
  bodyParser$(), // for req.body to be available in apis
  cors$
];

// Let's have effects here-- you can have the collection of api endpoints
const effects = [
  home$, // mapping the effect for api endpoint /
  hello$, // mapping the effect for api endpoint /hello
  users$, // mapping the effect for api endpoint /api/v1/users
  stream$, // mapping the effect for api endpoint /api/v1/stream
];

export const listener = httpListener({
  middlewares,
  effects,
});