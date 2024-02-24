import { Button } from "react-bootstrap";
const Buttonbar2 = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          //   style={{
          //     background: "none",
          //     color: "000000",
          //     border: "none",
          //   }}
          size="sm"
          className="py-0 px-1 "
        >
          Overview
        </Button>

        <Button
          style={{
            background: "none",
            color: "000000",
            border: "none",
          }}
          size="sm"
          className="py-0 px-1 text-muted"
        >
          Fundamentals
        </Button>
        <Button
          style={{
            background: "none",
            color: "000000",
            border: "none",
          }}
          size="sm"
          className="py-0 px-1 text-muted"
        >
          News Insights
        </Button>
        <Button
          style={{
            background: "none",
            color: "000000",
            border: "none",
          }}
          size="sm"
          className="py-0 px-1 text-muted"
        >
          Sentiments
        </Button>
        <Button
          style={{
            background: "none",
            color: "000000",
            border: "none",
          }}
          size="sm"
          className="py-0 px-1 text-muted"
        >
          Team
        </Button>
        <Button
          style={{
            background: "none",
            color: "000000",
            border: "none",
          }}
          size="sm"
          className="py-0 px-1 text-muted"
        >
          Technicals
        </Button>
        <Button
          style={{
            background: "none",
            color: "000000",
            border: "none",
          }}
          size="sm"
          className="py-0 px-1 text-muted"
        >
          Tokenomics
        </Button>
      </div>
    </div>
  );
};
export default Buttonbar2;
