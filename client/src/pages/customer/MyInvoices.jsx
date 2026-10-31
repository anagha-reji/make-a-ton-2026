import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function MyInvoices() {
  return <TablePage title="My Invoices" table={tables.invoices} />;
}
