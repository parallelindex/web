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
    const companyData = await prisma.company.findFirst({
      select: {
        category: { select: { name: true } },
        description: true,
        email: true,
        gab: true,
        images: true,
        logo: true,
        name: true,
        phone: true,
        uuid: true,
        website: true,
      },
      where: {
        AND: [
          { uuid: { equals: String(uuid) } },
          { publishState: { equals: 'PUBLISHED' } },
        ],
      },
    });

    res.status(200).json(companyData);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default handler;
