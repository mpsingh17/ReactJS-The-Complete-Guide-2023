import TableRow from "./TableRow";
import classes from "./investmentTable.module.css";

const InvestmentTable = (props) => {
  return (
    <table className={classes["result"]}>
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
