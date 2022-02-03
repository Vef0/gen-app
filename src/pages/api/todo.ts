import {getSession} from "next-auth/react";
import {PrismaClient} from "@prisma/client";
import {NextApiRequest, NextApiResponse} from "next";
import {Session} from "next-auth";

const prisma = new PrismaClient();

//POST /api/todo
//PUT /api/todo/:id
//DELETE /api/todo/:id

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!["POST", "PUT", "DELETE"].includes(req.method as string)) {
    res.status(405).send('Method Not Allowed');
    return;
  }
  const session: Session | null = await getSession({req});

  if (!session) {
    res.status(401).send('Unauthorized');
    return;
  }

  if (req.method === 'POST') {
    console.log(">>> req.body", req.body);
    //POST /api/todo/:id -> Create a new todo
    const {title} = req.body;
    if (!title) {
      res.status(401).send('Unauthorized');
      return;
    }
    const userSession = session as Session;
    const todo = await prisma.todos.create({
      data: {
        title,
        userId: userSession.userId as string,
        isCompleted: false,
      }
    });
    console.log(">>> todo", todo);
    return res.json(todo);
  }

  if (req.method === 'PUT') {
    //PUT /api/todo/:id -> update todo
    return res
  }

  if (req.method === 'DELETE') {
    //DELETE /api/todo/:id -> delete todo
    return res
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      error: 'Method not allowed',
    }));
  }
}

export default handler;