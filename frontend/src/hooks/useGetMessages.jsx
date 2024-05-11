import { useEffect, useState } from "react"
import { useConversationContext } from "../context/ConversationContext";
import axios from "axios";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [isLoading, setIsLoading] = useState();
  const { messages, setMessages, selectedConversation } = useConversationContext()

  useEffect(() => {
    const getMessages = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `/api/messages/${selectedConversation?._id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json", // Optional, only needed if your API expects it
            },
          }
        );
        const data = res.data;
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages()
  }, [selectedConversation._id, setMessages]);
  
  return { isLoading, messages }
}

export default useGetMessages;