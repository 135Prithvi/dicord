import dbConnect from '../../lib/dbconnect'
import Message from '../../models/Message'

export default async function handler(
  req: { body?: any; method?: any },
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      json: { (arg0: { success: boolean; data?: any }): void; new (): any }
    }
  }
) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()
  console.log(id);
  
  switch (method) {
    case 'GET':
      try {
        const users = await Message.find({})
        console.log(users)
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const user = await Message.create(req.body)
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    
    default:
      res.status(400).json({ success: false })
      break
  }
}
