import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function Payments() {
  return <TablePage title="Payments" table={tables.payments} />;
}
