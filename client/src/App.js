import "./App.css";

import AppRoutes from "./Routes/AppRoutes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar title={"NMS Cinemas"} />
      <div className="container my-3">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
