// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  sum: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { num1, num2 } = req.query;
  const sum = Number(num1) + Number(num2);
  res.status(200).json({ sum });
}