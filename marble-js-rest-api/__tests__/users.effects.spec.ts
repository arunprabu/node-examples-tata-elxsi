import { pipe } from "fp-ts/lib/function";
// import { HttpStatus } from "@marblejs/http";
// import { ContentType } from "@marblejs/http/dist/+internal/contentType.util";
import { createHttpTestBed, createTestBedSetup } from "@marblejs/testing";
import { listener } from "../http-listener";

const useTestBedSetup = createTestBedSetup({
  testBed: createHttpTestBed({ listener }),
});

describe("Users API", () => {
  const testBedSetup = useTestBedSetup();

  afterEach(testBedSetup.cleanup);

  it('GET "/api/v1/foo" triggers 404 effect', async () => {
    const { request } = await testBedSetup.useTestBed();

    const response = await pipe(
      request("GET"),
      request.withPath("/api/v1/foo"),
      request.send
    );

    expect(response.statusCode).toEqual(404);
    expect(response.body.error).toEqual({
      message: "Route not found",
      status: 404,
    });
  });

  it('GET "/api/v1/users" returns collection', async () => {
    const { request } = await testBedSetup.useTestBed();

    const response = await pipe(
      request("GET"),
      request.withPath("/api/v1/users"),
      request.withHeaders({ Authorization: "Bearer QpwL5tke4Pnpja7X4" }),
      request.send
    );

    // expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveLength(8); // try mocking instead of this
  });

  it(`GET "/api/v1/users/1" returns single object`, async () => {
    const { request } = await testBedSetup.useTestBed();

    const response = await pipe(
      request("GET"),
      request.withPath("/api/v1/users/1"),
      request.withHeaders({ Authorization: "Bearer QpwL5tke4Pnpja7X4" }),
      request.send
    );

    // expect(response.statusCode).toEqual(200);
    expect(response.body.id).toEqual(1);
  });
});

// Refer: https://github.com/marblejs/marble/tree/master/packages/%40integration/test
