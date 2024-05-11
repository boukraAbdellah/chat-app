import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation"

function Conversations() {
  const {isLoading,conversations:users} = useGetConversations()
  return (
    <div className=" flex flex-col py-2 overflow-auto">
      {isLoading? (
        <span className="loading loading-spinner"></span>
      ) : (
        users.map((user,index) => (
          <Conversation
            key={user._id}
            conversation={user}
            lastIndex={index === users.length - 1 } />
          ))
          
      )}
    </div>
  );
}

export default Conversations
