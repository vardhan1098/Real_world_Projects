import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Accord from "./According/Accord";


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <Accord/>
  </StrictMode>
);
{/* <Provider store={store}>
<Product />
</Provider> */}