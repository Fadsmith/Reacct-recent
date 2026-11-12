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
          <Headinng/>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
  <div className="flex-1">
    <Last />
  </div>
  <div className="flex-1">
    <Emm />
  </div>
</div>
            
    </StrictMode>
  
)
