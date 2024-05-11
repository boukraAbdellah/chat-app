import { useState } from "react"
import { useConversationContext } from "../context/ConversationContext";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversationContext()
  
  const sendMessage = async (message) => {
    setIsLoading(true)
    try {
      const res = await axios.post(
        `/api/messages/send/${selectedConversation?._id}`,
        {
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.data

      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  return { sendMessage, isLoading }
}

export default useSendMessage;