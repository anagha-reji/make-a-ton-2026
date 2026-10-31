import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function Invoices() {
  return <TablePage title="Invoices" table={tables.invoices} />;
}
