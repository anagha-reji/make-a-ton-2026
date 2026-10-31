import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function Reports() {
  return <TablePage title="Reports" table={tables.reports} />;
}
