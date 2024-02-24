import Table from "react-bootstrap/Table";

function StripedRowExample() {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td> Bitcoin Price:</td>
          <td> $16,815.46</td>
          <td> Market Cap:</td>
          <td> $323,507,290,047</td>
        </tr>
        <tr>
          <td> 24h Low/ 24h High:</td>
          <td> $16,382.07 / $16,874.12</td>
          <td>Market Cap Dominance:</td>
          <td>38.343%</td>
        </tr>
        <tr>
          <td> 7d Low/ 7d High:</td>
          <td> $16,382.07/ $16,874.12</td>
          <td> Volume Market Cap:</td>
          <td> 0.0718 </td>
        </tr>
        <tr>
          <td> Trading Volume:</td>
          <td> $23,249,202,782</td>
          <td>All-Time High:</td>
          <td>
            $69,044.7 <span style={{ color: "red" }}>-75.6%</span>
            <p>Jul 06,2013</p>
          </td>
        </tr>
        <tr>
          <td> Market Cap Rank:</td>
          <td> #1</td>
          <td>All-Time Low:</td>
          <td>
            $67.81 <span style={{ color: "green" }}>24729.1%</span>
            <p>Jul 06,2013</p>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedRowExample;
