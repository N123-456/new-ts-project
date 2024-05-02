import { RouterProvider } from "react-router-dom";
import "./App.css";
import InfoState from "./contextapi/InfoState";
import { router } from "./router/Router";
function App() {
  return (
    <div>
      <InfoState>
        <RouterProvider router={router} />
      </InfoState>
    </div>
  );
}

export default App;
