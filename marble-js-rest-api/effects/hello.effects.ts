// This effects file is for hello endpoint
import { r } from "@marblejs/http";
import { mapTo } from "rxjs/operators";

export const hello$ = r.pipe(
  r.matchPath("/hello"), // api endpoint is /hello
  r.matchType("GET"), // handling GET Method
  r.useEffect((req$) => {
    // receiving req obj
    console.log("Inside useEffect");
    // returning the res
    return req$.pipe(mapTo({ body: "Hello, World!" }));
  })
);

// Refer: http-listener.ts for mapping the effect