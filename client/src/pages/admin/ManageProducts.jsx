import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function ManageProducts() {
  return <TablePage title="Products" table={tables.products} />;
}
