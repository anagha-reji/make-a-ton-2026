import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function ManageCustomers() {
  return <TablePage title="Customers" table={tables.customers} />;
}
