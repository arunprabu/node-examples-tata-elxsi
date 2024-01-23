// This effects file is for users endpoint
import { combineRoutes, r } from "@marblejs/http";
import { map, mapTo, mergeMap } from "rxjs/operators";
import {
  createUserInDb,
  fetchUserByIdFromDb,
  listUsersFromDb,
  updateUserByIdInDb,
} from "../controllers/users.controllers";
import { requestValidator$ } from "@marblejs/middleware-io";
import { UserDto } from "../dto/users.dto";
import { authorize$ } from "../middlewares/auth.middleware";

const validateRequest = requestValidator$({
  body: UserDto
});

// Let's develop APIs for CRUD App
// getting all users
const getUsers$ = r.pipe(
  r.matchPath("/"), // api endpoint is /api/v1/users
  r.matchType("GET"), // handling GET Method
  r.useEffect((req$): any => {
    return req$.pipe(
      map((req) => req),
      mergeMap(listUsersFromDb),
      map((result) => ({ body: result }))
    );
  })
);

// Create user
const createUser$ = r.pipe(
  r.matchPath("/"), // api endpoint is /api/v1/users
  r.matchType("POST"), // handling GET Method
  r.useEffect((req$) => {
    console.log(req$);
    // receiving req obj
    // returning the res
    return req$.pipe(
      validateRequest,
      map((req) => {
        console.log(req.body);
        return req.body as UserDto
      }),
      mergeMap(createUserInDb), // req.body will be passed into the createUserInDb fn
      map((result) => ({ body: result }))
    );
  })
);

// get user by id
const getUserById$ = r.pipe(
  r.matchPath("/:userId"), // api endpoint is /api/v1/users/:userId   (userId is url param)
  r.matchType("GET"),
  r.useEffect((req$): any => {
    // receiving req obj
    // returning the res
    return req$.pipe(
      map((req: any) => {
        console.log(req.params.userId);
        return req.params.userId;
      }),
      mergeMap(fetchUserByIdFromDb), // req.params.id will be passed into the fetchUserByIdFromDb fn
      map((result) => ({ body: result }))
    );
  })
);

// update user by id
const updateUserById$ = r.pipe(
  r.matchPath("/:userId"), // api endpoint is /api/v1/users/:userId   (userId is url param)
  r.matchType("PATCH"), // for update
  r.useEffect((req$): any => {
    // receiving req obj
    return req$.pipe(
      map((req: any) => {
        // getting the url param
        console.log(req.params.userId);
        // getting the req.body
        console.log(req.body);
        const data = {
          id: req.params.userId,
          ...req.body,
        };
        return data;
      }),
      mergeMap(updateUserByIdInDb),
      map((result) => ({ body: result }))
    );
  })
);

// TODO: Implement delete user by id
const deleteUserById$ = r.pipe(
  r.matchPath("/:userId"), // api endpoint is /api/v1/users/:userId   (userId is url param)
  r.matchType("DELETE"),
  r.useEffect((req$): any => {
    // receiving req obj
    // returning the res
    return req$.pipe(
      map((req: any) => {
        console.log(req.params.userId);
        // TODO: have the controller logic for delete
        return {
          id: req.params.userId,
          message: "Deleted Successfully!",
        };
      }),
      map((result) => ({ body: result }))
    );
  })
);

// Let's combine all routes and export
export const users$ = combineRoutes("/api/v1/users", {
  middlewares: [authorize$], // it will verify token
  effects: [
    getUsers$,
    createUser$,
    getUserById$,
    updateUserById$,
    deleteUserById$,
  ],
});


// Refer: http-listener.ts for mapping the effect
