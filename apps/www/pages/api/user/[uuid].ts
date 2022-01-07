import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import prisma from 'db';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res) => {
    res.status(500).end(`Error: ${err.message}`);
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Not found');
  },
});

handler.get(async (req, res) => {
  const {
    query: { uuid },
  } = req;

  try {
    const userData = await prisma.user.findUnique({
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
      where: { uuid: String(uuid) },
    });

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).send(error);
  }
});

handler.post(async (req, res) => {
  try {
    const {
      body: { firstName, lastName },
      query: { uuid },
    } = req;

    await prisma.user.create({
      data: {
        uuid: String(uuid),
        firstName: firstName,
        lastName: lastName,
      },
    });

    res.status(201);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default handler;
