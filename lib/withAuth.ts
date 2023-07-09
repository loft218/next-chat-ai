import { IncomingMessage } from "http";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

type CustomIncomingMessage = IncomingMessage & {
  session?: Session | null;
};

export const withAuth = (getSSProps: any): GetServerSideProps => {
  return async (ctx) => {
    const session = await getServerSession(ctx.req, ctx.res, authOptions);

    console.log(session);

    if (!session) {
      return {
        redirect: {
          statusCode: 302,
          destination: `/sign-in?redirect=${encodeURIComponent(
            ctx.req.url ?? ""
          )}`,
        },
      };
    }

    (ctx.req as CustomIncomingMessage).session = session;

    return await getSSProps(ctx);
  };
};
