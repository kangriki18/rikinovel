import './App.css';
import NavigationBar from "./component/NavigationBar"
import Intro from "./component/Intro"
import Terlaris from "./component/Terlaris"

import "./style/landingpage.css"

function App() {
  return (
    <div>
      <div className="background">
        <NavigationBar />
        <Intro />
      </div>
      
      <div className="Terlaris">
        <Terlaris />
      </div>

    </div>
  );
}

export default App;
