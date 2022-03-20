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
    const allCompanies = await prisma.company.findMany({
      select: {
        category: { select: { name: true } },
        description: true,
        gab: true,
        images: true,
        logo: true,
        name: true,
        uuid: true,
        website: true,
      },
      where: { publishState: { equals: 'PUBLISHED' } },
    });

    res.status(200).json(allCompanies);
  } catch (error) {
    res.status(500).send(error);
  }
});

handler.post(async (req, res) => {
  try {
    const {
      body: {
        categoryId,
        description,
        email,
        gab,
        images,
        logo,
        name,
        notes,
        phone,
        userId,
        website,
      },
    } = req;
    
    const newCompany = await prisma.company.create({
      data: {
        categoryId,
        description,
        email,
        gab,
        images,
        logo,
        name,
        notes,
        phone,
        publishState: 'PENDING',
        userId,
        website,
      },
    });

    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).send(JSON.stringify(error, Object.getOwnPropertyNames(error)));
  }
});

export default handler;
