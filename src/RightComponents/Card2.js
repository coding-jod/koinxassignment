import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
function TextExample() {
  const [Data, setData] = useState(null);
  const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.geckoterminal.com/api/v2/networks/trending_pools"
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
  //   console.log(Data.data[0].attributes.name);
  //   console.log(Object.keys(Data));
  let first_name,
    second_name,
    third_name,
    first_change,
    second_change,
    third_change;
  for (let key in Data) {
    if (key == "data") {
      first_name = Data[key][0]["attributes"]["name"];
      second_name = Data[key][1]["attributes"]["name"];
      third_name = Data[key][2]["attributes"]["name"];
      first_change =
        Data[key][0]["attributes"]["price_change_percentage"]["h24"];
      second_change =
        Data[key][1]["attributes"]["price_change_percentage"]["h24"];
      third_change =
        Data[key][2]["attributes"]["price_change_percentage"]["h24"];
    }
  }
  console.log(third_change);
  //   const keys = Object.keys(Data);
  //   console.log(Data.data);

  //   console.log(Data[keys[0]]);

  return (
    <Card style={{ width: "90%" }}>
      <Card.Body>
        <Card.Title>Trending Coins(24H)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="mt-2"
          >
            <p>{first_name}</p>{" "}
            <Button
              style={{
                background: "#DAF7A6",
                color: "#007200",
                border: "none",
              }}
              className="mx-2 my-0 py-0 small"
              size="sm"
            >
              {`^ ${first_change} %`}
            </Button>
          </div>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="mt-2"
          >
            <p>{second_name}</p>{" "}
            <Button
              style={{
                background: "#DAF7A6",
                color: "#007200",
                border: "none",
              }}
              className="mx-2 my-0 py-0 small"
              size="sm"
            >
              {`^ ${second_change} %`}
            </Button>
          </div>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="mt-2"
          >
            <p>{third_name}</p>{" "}
            <Button
              style={{
                background: "#DAF7A6",
                color: "#007200",
                border: "none",
              }}
              className="mx-2 my-0 py-0 small"
              size="sm"
            >
              {`^ ${third_change} %`}
            </Button>
          </div>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
