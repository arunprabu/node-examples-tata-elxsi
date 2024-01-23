import { t } from "@marblejs/middleware-io"; // npm i @marblejs/middleware-io

// This is used for Validation Purpose in users.effects.ts - in POST Method
export const UserDto = t.type({
  id: t.undefined || t.number,
  name: t.string,
  phone: t.string,
  email: t.string
});

export type UserDto = t.TypeOf<typeof UserDto>;
