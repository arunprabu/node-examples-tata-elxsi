// This effects file is for hello endpoint
import { combineRoutes, r } from "@marblejs/http";
import { map } from "rxjs/operators";
import * as fs from "fs";
import * as path from "path";

const fileReadingStream$ = r.pipe(
  r.matchPath("/:dir"), // api endpoint is :filename of :dir
  r.matchType("GET"), // handling GET Method
  r.useEffect((req$): any => {
    return req$.pipe(
      map((req: any) => {
        console.log(req.params.dir);
        return req.params.dir;
      }),
      map((dir: string) => {
        console.log(dir);
        // TODO: handle invalid file name or path also
        return fs.createReadStream(path.resolve(dir));
      }),
      map((result) => ({ body: result }))
    );
  })
);

// Let's combine all routes and export
export const stream$ = combineRoutes("/api/v1/stream", [fileReadingStream$]);

// Refer: http-listener.ts for mapping the effect
