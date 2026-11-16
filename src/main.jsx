import { StrictMode } from "react";
import { createRoot} from "react-dom/client";
import './index.css'
import App from "./App";
import Headinng from "./Headinng";
import Last from "./Last";
import Emm from "./Emm";

createRoot(document.getElementById('root')).render(

    <StrictMode>
        <App/>            
    </StrictMode>
  
)
