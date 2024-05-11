import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import { ConversationContextProvider } from "./context/ConversationContext";

export default function App() {
  // const [isAuth,setIsAuth] = useState(false)

  const { authUser } = useAuthContext();
  return (
    <div className=" p-4 min-h-screen flex items-center justify-center">
      <ConversationContextProvider>
        <Routes>
          {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} /> */}
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to={"/"} /> : <Signup />}
          />
        </Routes>
        <Toaster />
      </ConversationContextProvider>
    </div>
  );
}
