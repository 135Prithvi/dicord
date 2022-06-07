import { FormEvent, useContext } from 'react'
import { DiscordContext } from '../context/context'
import plusFilled from '../public/icons/plus-filled.svg'
import sticker from '../public/icons/sticker.svg'
import smiley from '../public/icons/smiley.svg'
import gift from '../public/icons/gift.svg'
import gif from '../public/icons/gif.svg'
import Image from 'next/image'

export default function MessageForm() {
  var today = new Date()

  var time = today.getHours() + ':' + today.getMinutes()
  const {
    messageText,
    setMessageText,
    placeholder,
    gun,
    roomName,
    currentAccount,
    currentUser,
  } = useContext(DiscordContext)

  const sendMessage = async (e: any) => {
    e.preventDefault()
    if (messageText.trim() === '') return
    if (!currentUser) return
    const messagesRef = await gun.get(roomName)


    const newMessage = {
      sender: currentUser?.name,
      avatar: currentUser.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU',
      content: messageText.trim(),
      createdAt: Date().substring(4, 11),
      time: time,
      messageId: Date.now(),
    }

    await messagesRef.set(newMessage)
    setMessageText('')
  }

  return (
    <>
      <form
        onSubmit= {sendMessage}
        className=" container fixed  bottom-0 flex  px-4 py-4   "
      >
        <div className=" flex h-11 w-screen items-center rounded-sm bg-[rgb(64,68,75)] py-3 px-0  ">
          <div className={`mr-3 flex items-center pl-3 `}>
            <Image
              height={25}
              width={25}
              src={plusFilled}
              className={'w-6 cursor-pointer opacity-60 filter '}
            />
          </div>
          <input
            type="text"
            id="text"
            className=" mt-[3px]  mr-3 h-[90%] w-1/2 rounded-lg p-4 text-sm text-gray-900 "
            required={true}
            value={messageText}
            disabled={currentAccount.name}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder={placeholder}
          />
          <div className={`mr-3 flex items-center`}>
            <Image
              height={25}
              width={25}
              src={gift}
              className={`w-6 cursor-pointer opacity-60 filter`}
            />
          </div>
          <div className={`mr-3 flex items-center`}>
            <Image
              height={25}
              width={25}
              src={gif}
              className={`w-6 cursor-pointer opacity-60 filter`}
            />
          </div>
          <div className={`mr-3 flex items-center`}>
            <Image
              height={25}
              width={25}
              src={sticker}
              className={`w-6 cursor-pointer opacity-60 filter`}
            />
          </div>
          <div className={`mr-3 flex items-center`}>
            <Image
              height={25}
              width={25}
              src={smiley}
              className={`w-6 cursor-pointer opacity-60 filter`}
            />
          </div>
        </div>
      </form>
    </>
  )
}
