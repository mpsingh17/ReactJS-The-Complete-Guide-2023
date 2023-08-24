import TableRow from "./TableRow";

const InvestmentTable = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.investmentData.map((rowData) => (
          <TableRow key={rowData.year} rowData={rowData} />
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentTable;
