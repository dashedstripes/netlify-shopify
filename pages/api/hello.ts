// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { shopifyFetch } from '@/utils/shopifyFetch'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const products = await shopifyFetch({
    query: `
      query {
        products {
          id
        }
      }
    `,
    variables: ''
  })
  res.status(200).json({ name: 'John Doe' })
}
