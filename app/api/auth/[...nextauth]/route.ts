import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import EmailProvider from "next-auth/providers/email";

import customVerificationRequest from "@/lib/customVerificationRequest";
import prisma from "@/lib/utils/prisma-client";
import { generateRandomString } from "@/lib/utils/utils";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      generateVerificationToken: () => {
        return generateRandomString(6, "digits");
      },
      sendVerificationRequest: customVerificationRequest,
    }),
  ],
  jwt: {
    async encode(params: {
      token: JWT;
      secret: string;
      maxAge: number;
    }): Promise<string> {
      console.log(params);
      // return a custom encoded JWT string
      return "123";
    },
    async decode(params: {
      token: string;
      secret: string;
    }): Promise<JWT | null> {
      // return a `JWT` object, or `null` if decoding failed
      return {};
    },
  },
  callbacks: {
    // see https://next-auth.js.org/configuration/callbacks
  },
  pages: {
    signIn: "/sign-in",
  },
} as AuthOptions;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
