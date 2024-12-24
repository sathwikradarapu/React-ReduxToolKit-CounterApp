import Header from "./components/Header";
import Counter from "./components/Counter";
import Buttons from "./components/Buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateMessage from "./components/PrivateMessage";
import { useSelector } from "react-redux";

function App() {
  const privacyVal = useSelector((store) => store.privacy);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card" style={{ width: "18rem" }}>
        <center>
          <div className="card-body">
            <Header />
            {privacyVal ? <PrivateMessage /> : <Counter />}
            <Buttons />
          </div>
        </center>
      </div>
    </div>
  );
}

export default App;
