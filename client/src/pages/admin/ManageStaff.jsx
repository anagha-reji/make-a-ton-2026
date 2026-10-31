import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function ManageStaff() {
  return <TablePage title="Staff" table={tables.staff} />;
}
