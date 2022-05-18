import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      <Toaster toastOptions={{ duration: 3000 }}></Toaster>
      <Home></Home>
    </div>
  );
}

export default App;
