import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./configs/routes";
import { ToastContainer } from "react-toastify";
import i18n from "./configs/i18n";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(routes);
function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer stacked />
    </>
  );
}

export default App;
