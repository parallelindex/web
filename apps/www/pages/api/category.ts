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
  try {
    const sortedCategories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        company: true,
      },
      orderBy: { name: 'asc' },
    });

    res.status(200).json(sortedCategories);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default handler;
