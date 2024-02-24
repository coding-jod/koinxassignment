import "./App.css";
import Navbar from "./UI/Navbar";
import Contain from "./UI/Contain";
import Graph from "./Components/Graph";
function App() {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#D3E0E6" }}>
        <div className="mx-5">
          <p className="p-2 my-0">
            Cryptocurrenices &gt;&gt; <b>Ethereum</b>
          </p>
        </div>
        <Contain></Contain>
      </div>
      {/* <Graph></Graph> */}
    </div>
  );
}

export default App;
