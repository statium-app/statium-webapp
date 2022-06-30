// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

type CreateSubscriberProps = {
  email: string;
};

const createSubscriber = (props: CreateSubscriberProps) => {
  const isUsingFake = process.env.BUTTONDOWN_FAKE === 'true';
  const endpoint = isUsingFake
    ? 'http://localhost:3000/api/fakeButtondown'
    : 'https://api.buttondown.email/v1/subscribers';

  return fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(props),
  })
    .then((response) => {
      const { status } = response;
      return status < 400;
    })
    .catch((error) => {
      console.error('Error:', error);
      return false;
    });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Invalid method.' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Invalid payload.' });
    }

    const isSuccess = await createSubscriber(req.body);
    if (isSuccess) {
      return res.status(201).json({ message: 'Subscription OK.' });
    } else {
      return res.status(500).json({ message: 'Unexpected Buttondown error.' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Unexpected error.' });
  }
}
