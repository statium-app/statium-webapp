// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log('The fake is being used!');

  if (req.method !== 'POST') {
    return res.status(500).json({ message: 'Invalid method.' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Invalid payload.' });
  }

  console.log(req.body);
  //return res.status(400).json({ message: 'Seems good.' });
  return res.status(201).json({ message: 'Seems good.' });
}
