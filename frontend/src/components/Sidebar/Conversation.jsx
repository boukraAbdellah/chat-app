/* eslint-disable react/prop-types */
import { useConversationContext } from "../../context/ConversationContext";
import { useSocketContext } from "../../context/SocketContext";

function Conversation({conversation,lastIndex}) {
  const { selectedConversation, setSelectedConversation } = useConversationContext()
  const { onlineUsers } = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)
  const selected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div className={` flex gap-2 p-2 py-1 hover:bg-sky-500 rounded-[4px] cursor-pointer ${selected ? 'bg-sky-500' : ''}`}
      onClick={() => setSelectedConversation(conversation)}>
        <div className={` avatar ${isOnline ? 'online' : ''}`}>
          <div className=" w-12 rounded-full">
            <img
              src={conversation.profilePic}
              alt="user avatar"
            />
          </div>
        </div>
        <div className=" flex-1 flex flex-col">
          <div className=" flex gap-3 justify-between">
            <p className=" font-bold text-gray-200">{ conversation.fullName}</p>
            <span className=" text-xl">👽</span>
          </div>
        </div>
      </div>
      {!lastIndex && (
        <div className=" divider py-0 h-1 my-0"></div>
      )}
    </>
  );
}

export default Conversation
