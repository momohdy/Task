import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Attachment from "./views/Attachment";
import Home from "./views/Home";

// font-awesome usage
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

library.add(faDownload);
//

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/attachment" element={<Attachment />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
