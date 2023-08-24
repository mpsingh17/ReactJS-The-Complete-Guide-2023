const TableRow = (props) => {
  return (
    <tr>
      <td>{props.rowData.year}</td>
      <td>{props.rowData.currentSavings}</td>
      <td>{props.rowData.yearlyInterest}</td>
      <td>{props.rowData.totalYearlyInterest}</td>
      <td>{props.rowData.investedCapital}</td>
    </tr>
  );
};

export default TableRow;
