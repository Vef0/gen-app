import {getSession} from "next-auth/react";
import {PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import { Session } from "next-auth";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).send('Method Not Allowed');
    return;
  }
  const session: Session | null = await getSession({req});

  if (!session) {
    res.status(401).send('Unauthorized');
    return;
  }

  if (req.method === 'GET') {
    const todos = await prisma.todos.findMany({
      where: {
        // @ts-ignore
        userId: session.user.userId,
      },
    })
    return res.json(todos);
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      error: 'Method not allowed',
    }));
  }
}

export default handler;