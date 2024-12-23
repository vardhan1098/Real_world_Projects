import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import Redux from "./Pratice";
import store from "./Pratice/Redux/Store/Store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <Provider store={store}>
    <Redux/>
   </Provider>
  </StrictMode>
);
