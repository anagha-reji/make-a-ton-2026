import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function MySubscriptions() {
  return <TablePage title="My Subscriptions" table={tables.subscriptions} />;
}
