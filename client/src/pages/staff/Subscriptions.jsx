import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function Subscriptions() {
  return <TablePage title="Subscriptions" table={tables.subscriptions} />;
}
