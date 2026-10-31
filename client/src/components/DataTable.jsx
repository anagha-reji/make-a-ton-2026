import StatusTag from './StatusTag';

const STATUS = /^(Active|Paid|Pending|Overdue|Draft|Paused|Closed|Confirmed|Quotation)$/;

export default function DataTable({ columns, rows }) {
  return (
    <div className="tw">
      <table>
        <thead>
          <tr>{columns.map((c) => <th key={c}>{c.toUpperCase()}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((v, j) => <td key={j}>{STATUS.test(v) ? <StatusTag status={v} /> : v}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
