import { useEffect } from "react"
import { useConversationContext } from "../context/ConversationContext"
import { useSocketContext } from "../context/SocketContext"

const useListenMessages = () => {
  const { socket } = useSocketContext()
  const { messages, setMessages } = useConversationContext()
  
  useEffect(() => {
    socket.on('newMessage', (message) => {
      setMessages([...messages, message])
    })
    return () => {
      socket.off('newMessage')
    }
  },[messages, setMessages, socket])
}

export default useListenMessages