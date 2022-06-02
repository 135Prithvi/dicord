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
    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedPet = await Message.deleteOne({ _id: id })
        if (!deletedPet) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
      case "PUT" /* Edit a model by its ID */:
        try {
          const pet = await Message.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
          });
          if (!pet) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: pet });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
    
    default:
      res.status(400).json({ success: false })
      break
  }
}