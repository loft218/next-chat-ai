import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
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
  callbacks: {
    // see https://next-auth.js.org/configuration/callbacks
  },
  pages: {
    signIn: "/sign-in",
  },
} as AuthOptions;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
