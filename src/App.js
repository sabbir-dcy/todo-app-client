import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./auth/ProtectedRoute";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";



function App() {
  return (
    <div className="App">
      <Toaster toastOptions={{ duration: 3000 }}></Toaster>

      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>

      </Routes>
    </div>
  );
}

export default App;
