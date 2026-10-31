const RED = /^(Overdue|Closed|Cancelled)$/;
const AMBER = /^(Pending|Draft|Paused|Quotation)$/;

export default function StatusTag({ status }) {
  const cls = RED.test(status) ? ' r' : AMBER.test(status) ? ' w' : '';
  return <span className={'tag' + cls}>{status}</span>;
}
