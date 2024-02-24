import Card from "react-bootstrap/Card";
import FundTable from "./FundTable";
import line1 from "../Assets/Screenshot 2024-02-24 205138.png";
import line2 from "../Assets/Screenshot 2024-02-24 205151.png";
function TextExample() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <b>Performance</b>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p>Today's Low:</p>
              <p>46930.22</p>
            </div>
            <img src={line1} style={{ width: "60%" }}></img>
            <div>
              <p>Today's High:</p>
              <p>49343.83</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p>52W Low:</p>
              <p>16930.22</p>
            </div>
            <img src={line2} style={{ width: "63%" }}></img>
            <div>
              <p>52W High:</p>
              <p>49,743.83</p>
            </div>
          </div>
        </Card.Subtitle>
        <FundTable></FundTable>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
