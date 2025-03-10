import { RouterProvider } from "react-router-dom";
import "./sass/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { router } from "./routes/router";

const App = () => {
  React.useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
