import bitlogo from "../Assets/Screenshot 2024-02-24 124024.png";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Graph from "./Graph";
import { useState, useEffect } from "react";
import ethlogo from "../Assets/Screenshot 2024-02-24 203930.png";

function TextExample() {
  const [Data, setData] = useState(null);
  const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);
  let price, price_change;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.geckoterminal.com/api/v2/networks/eth/pools?page=1"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        return <p>There was an error in the API.</p>;
      }
    };

    fetchData();
  }, []);
  for (let key in Data) {
    if (key == "data") {
      price = (+Data[key][0]["attributes"]["base_token_price_usd"]).toFixed(2);
      price_change =
        Data[key][0]["attributes"]["price_change_percentage"]["h24"];
    }
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <img src={ethlogo} alt="Bitcoin" style={{ width: "25%" }}></img>
        </Card.Title>
        <Card.Subtitle className="my-2 ">
          <div style={{ display: "flex" }}>
            <h3>
              <b>${price}</b>
            </h3>
            <Button
              style={{
                background: "#DAF7A6",
                color: "#007200",
                border: "none",
                fontSize: "14px",
              }}
              className="mx-2"
              size="sm"
            >
              {`^ ${price_change} %`}
            </Button>
          </div>
          <h5>{`₹ ${(price * 82.89).toFixed(2)}`}</h5>
          <br></br>
        </Card.Subtitle>
        <Card.Text className="text-muted">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Bitcon Price Chart(USD)</div>
            <div>
              <Button
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  border: "none",
                }}
                size="sm"
                className="py-0 px-1 text-muted"
              >
                1H
              </Button>
              <Button
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  border: "none",
                }}
                size="sm"
                className="py-0 px-1 text-muted"
              >
                24H
              </Button>
              <Button
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  border: "none",
                }}
                size="sm"
                className="py-0 px-1 text-muted"
              >
                7D
              </Button>
              <Button
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  border: "none",
                }}
                size="sm"
                className="py-0 px-1 text-muted"
              >
                1M
              </Button>
              <Button
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  border: "none",
                }}
                size="sm"
                className="py-0 px-1 text-muted"
              >
                3M
              </Button>
              <Button
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  border: "none",
                }}
                size="sm"
                className="py-0 px-1 text-muted"
              >
                6M
              </Button>
              <Button
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  border: "none",
                }}
                size="sm"
                className="py-0 px-1 text-muted"
              >
                1Y
              </Button>
              <Button
                style={{
                  background: "#ffffff",
                  color: "#000000",
                  border: "none",
                }}
                size="sm"
                className="py-0 px-1 text-muted"
              >
                ALL
              </Button>
            </div>
          </div>
          <Graph />
          {/* <h1>Hello</h1> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
