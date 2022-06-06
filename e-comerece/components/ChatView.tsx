import { Key, useContext } from 'react'
import { DiscordContext } from '../context/context'
import ChatHeader from './ChatHeader'
import MessageCard from './MessageCard'
import MessageForm from './MessageForm'
export default function ChatView() {
  const { state } = useContext(DiscordContext)

  const formattedMessagesArray = () => {
    const uniqueArray = state.messages.filter((value: any, index: any) => {
      const _value = JSON.stringify(value)

      return (
        index ===
        state.messages.findIndex((obj: any) => {
          return JSON.stringify(obj) === _value
        })
      )
    })

    return uniqueArray
  }

  return (
    <div className="h-screen  overflow-y-auto w-full bg-[#2f3136] text-white ">
      <ChatHeader />
      <div className="p-5   flex-[6]  pb-[30px]">
        {formattedMessagesArray().map((message: { avatar: any; sender: any; createdAt: any; content: any }, index: Key | null | undefined) => { return <MessageCard 
            key={index}
            avatar={message.avatar}
            sender={message.sender}
            timestamp={message.createdAt}
            content={message.content} /> })}
      </div>
      <MessageForm/>
    </div>
  )
}
