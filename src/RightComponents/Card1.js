import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bookimg from "../Assets/Screenshot 2024-02-24 135445.png";

function BasicExample() {
  return (
    <Card style={{ width: "90%", background: "#0d6efd", color: "white" }}>
      <Card.Body>
        <Card.Title className="text-center pt-3">
          Get Started with Koinx for FREE
        </Card.Title>
        <Card.Text className="text-center pt-3">
          With our range of featuresthat you can equip for free ,KoinX allows
          you to be more educated and aware of your tax reports.
        </Card.Text>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <img src={bookimg} style={{ width: "45%" }} />
        </div>
        <div
          className="mt-4 py-1"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button variant="light">
            <b>Get Started for Free →</b>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
