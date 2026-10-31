import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function MyPayments() {
  return <TablePage title="My Payments" table={tables.payments} />;
}
