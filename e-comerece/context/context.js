import { createContext, useState, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import Gun from 'gun/gun'

export const DiscordContext = createContext()

const gun = Gun(['https://discord-gun-node.herokuapp.com/gun'])

const initialState = { messages: [] }

const reducer = (state, action) => {
  try {
    if (action.type == 'clear') return { messages: [] }
    if (action.type == 'add')
      return { messages: [...state.messages, action.data] }
  } catch (error) {
    console.error(error)
  }
}

export const DiscordProvider = ({ children }) => {
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState)
  const [currentAccount, setCurrentAccount] = useState('')
  const [roomName, setRoomName] = useState('')
  const [placeholder, setPlaceholder] = useState('Message...')
  const [messageText, setMessageText] = useState('')
  const [currentUser, setCurrentUser] = useState([])
  var today = new Date()
  var time = today.getHours() + ':' + today.getMinutes()



  try {
    window.ethereum.on('accountsChanged', function (accounts) {
      connectWallet()
    })
  } catch (err) {
    console.log('Oops, `window` is not defined')
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])


  const xyz = async () => {
    if (!currentAccount) return

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/getCurrentUserData?account=${currentAccount}`
      )

      const data = await response.json()

      setCurrentUser(data)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    xyz()
  }, [currentAccount])

  useEffect(() => {
    setRoomName(router.query.name)
    dispatch({ type: 'clear', data: {} })
    setPlaceholder(`Message ${router.query.name}`)
    setMessageText('')
    getMessages()
  }, [router.query])

  const getMessages = async () => {
    const _name = router.query.name
    const _roomId = router.query.id
    const messagesRef = gun.get(_name)

    messagesRef.map((message) => {
      dispatch({
        type: 'add',
        data: {
          sender: message?.sender,
          content: message?.content,
          avatar: message?.avatar,
          createdAt: message?.createdAt,
          time: time,
          messageId: message?.messageId,
        },
      })
    })
  }

  const createUserAccount = async (userAddress = currentAccount) => {
    if (!window.ethereum) return

    try {
      const data = {
        userAddress: userAddress,
        name: currentUser.name,
      }

      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/createUser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
      } catch (error) {
        console.error(error)
      }

      //     try {
      //       await fetch(`${process.env.NEXT_PUBLIC_API_URL}/createDm`, {
      //         method: 'POST',
      //         headers: {
      //           'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify(data),
      //       })
      //     } catch (error) {
      //       console.error(error)
      //     }
    } catch (error) {
      console.error(error)
    }
  }

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      if (addressArray.length > 0) {
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
      }
    } catch (error) {
      console.error(error)
    }
  }

  const connectWallet = async () => {
    if (!window.ethereum) return
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        console.log(addressArray[0])

        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DiscordContext.Provider
      value={{
        currentAccount,
        roomName,
        setRoomName,
        placeholder,
        messageText,
        setMessageText,
        state,
        gun,
        connectWallet,
        currentUser,
      }}
    >
      {children}
    </DiscordContext.Provider>
  )
}
