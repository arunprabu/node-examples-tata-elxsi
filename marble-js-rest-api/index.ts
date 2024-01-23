// File 1
import { createServer } from "@marblejs/http";
import { IO } from "fp-ts/lib/IO";
import {listener} from './http-listener';

const server = createServer({
  port: 3001,
  hostname: "127.0.0.1",
  listener
  // listener is needed
});

// main fn which returns a promise, plays significant role starting marble.js app
const main: IO<void> = async () => {
  console.log('Inside Main');
  return await (await server)();
}

main();
