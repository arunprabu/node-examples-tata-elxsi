// This effects file is for home endpoint
import { r } from "@marblejs/http";
import { mapTo } from "rxjs/operators";

export const home$ = r.pipe(
  r.matchPath("/"), // api endpoint is /
  r.matchType("GET"), // handling GET Method
  r.useEffect((req$) => { // receiving req obj
    console.log("Inside useEffect");
    // returning the res
    return req$.pipe(mapTo({ body: "Welcome to my Home Page" }))
  })
);

// Refer: http-listener.ts for mapping the effect
