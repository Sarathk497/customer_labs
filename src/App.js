import { useState } from "react";
import "./App.css";
import Main from "./pages/segment";
import SaveAudience from "./pages/save";

function App() {
  const [isSaveAudience, setisSaveAudience] = useState(false);
  const [isMain, setisMain] = useState(true);

  const handleisSaveAudience = () => {
    setisSaveAudience(!isSaveAudience);
    setisMain(!isMain);

    console.log("is save audience clicked");
  };

  return (
    <div className="App_container">
      {isMain ? <Main handleisSaveAudience={handleisSaveAudience} /> : null}
      {isSaveAudience ? (
        <SaveAudience handleisSaveAudience={handleisSaveAudience} />
      ) : null}
    </div>
  );
}

export default App;
