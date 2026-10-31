import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function ManagePlans() {
  return <TablePage title="Plans" table={tables.plans} />;
}
