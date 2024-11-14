import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    token?: string|null|undefined;
    message?: string;
  }

  interface Session {
    token?: string|null|undefined;
    message?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token?: string|null|undefined;
    message?: string;
  }
}
