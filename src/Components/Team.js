import Card from "react-bootstrap/Card";
import emp1 from "../Assets/Screenshot 2024-02-24 180221.png";
import emp2 from "../Assets/Screenshot 2024-02-24 180029.png";
import emp3 from "../Assets/Screenshot 2024-02-24 180122.png";
function TextExample() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Team</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat
          vulputate risus, non elementum turpis malesuada vel. Nunc et velit
          lorem. Vivamus imperdiet, tellus id vulputate faucibus, odio ex
          aliquet.
        </Card.Subtitle>
        <Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor: "#B9D9EB",
            }}
            className="my-3"
          >
            <img src={emp1} style={{ width: "15%" }}></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              faucibus enim at quam mollis, sit amet sollicitudin lectus
              egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec justo nulla, maximus condimentum nisl at, lacinia imperdiet
              lorem. Nulla elementum lorem ac ex laoreet, id iaculis nisi
              placerat. Donec dictum semper ex, at semper libero gravida id.
              Etiam augue tellus, eleifend eu lacus non, sollicitudin fermentum
              tellus. Integer sed justo molestie.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor: "#B9D9EB",
            }}
            className="my-3"
          >
            <img src={emp2} style={{ width: "15%" }}></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              faucibus enim at quam mollis, sit amet sollicitudin lectus
              egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec justo nulla, maximus condimentum nisl at, lacinia imperdiet
              lorem. Nulla elementum lorem ac ex laoreet, id iaculis nisi
              placerat. Donec dictum semper ex, at semper libero gravida id.
              Etiam augue tellus, eleifend eu lacus non, sollicitudin fermentum
              tellus. Integer sed justo molestie.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor: "#B9D9EB",
            }}
            className="my-3"
          >
            <img src={emp3} style={{ width: "15%" }}></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              faucibus enim at quam mollis, sit amet sollicitudin lectus
              egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec justo nulla, maximus condimentum nisl at, lacinia imperdiet
              lorem. Nulla elementum lorem ac ex laoreet, id iaculis nisi
              placerat. Donec dictum semper ex, at semper libero gravida id.
              Etiam augue tellus, eleifend eu lacus non, sollicitudin fermentum
              tellus. Integer sed justo molestie.
            </p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
