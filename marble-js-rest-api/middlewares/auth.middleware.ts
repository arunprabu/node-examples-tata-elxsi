import {
  HttpRequest,
  HttpError,
  HttpStatus,
  HttpMiddlewareEffect,
} from "@marblejs/http";
import { iif, of, throwError } from "rxjs";
import { switchMap } from "rxjs/operators";


// To get the token from req header
/*
const getTokenFromHeaders = (req) => {
  const { headers: { authorization } } = req;
  
  if(authorization && authorization.split(' ')[0] === 'Bearer') {
    return authorization.split(' ')[1];
  }
  
  return null
};
*/

const isAuthorized = (request: HttpRequest) =>
  request.headers.authorization || request.url.includes("?token")
    ? request.headers.authorization === "Bearer QpwL5tke4Pnpja7X4" ||
      request.url.includes("?token=QpwL5tke4Pnpja7X4")
    : false;

export const authorize$: HttpMiddlewareEffect = (req$) =>
  req$.pipe(
    switchMap((req) =>
      iif(
        () => !isAuthorized(req),
        throwError(
          () => new HttpError("Unauthorized", HttpStatus.UNAUTHORIZED)
        ),
        of(req)
      )
    )
  );


  // using it in users.effects.ts 
