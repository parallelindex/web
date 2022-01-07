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
    query: { userId },
  } = req;

  try {
    const allCompanies = await prisma.company.findMany({
      select: {
        category: { select: { name: true } },
        description: true,
        gab: true,
        images: true,
        logo: true,
        name: true,
        publishState: true,
        uuid: true,
        website: true,
      },
      where: { userId: { equals: Number(userId) } },
    });

    res.status(200).json(allCompanies);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default handler;
