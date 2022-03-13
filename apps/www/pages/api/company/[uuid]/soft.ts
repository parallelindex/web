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

handler.delete(async (req, res) => {
  const {
    query: { uuid }
  } = req;

  try {
    await prisma.company.update({
      data: {
        publishState: 'INACTIVE'
      },
      where: { uuid: String(uuid) }
    });

    res.status(200).end();
  } catch (error) {
    res.status(500).send(error);
  }
});

export default handler;