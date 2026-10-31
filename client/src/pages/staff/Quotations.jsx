import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function Quotations() {
  return <TablePage title="Quotations" table={tables.quotations} />;
}
