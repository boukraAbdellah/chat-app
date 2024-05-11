import { useEffect, useState } from "react"
import toast from "react-hot-toast";


const useGetConversations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const getConversations = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/user");
        const data = await res.json();
        if (!data) {
          throw new Error(data.error);
        }
        setConversations(data);
        console.log(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getConversations()
  },[]);
  return {isLoading,conversations}
}

export default useGetConversations;