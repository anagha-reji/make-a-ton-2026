import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function ManageDiscounts() {
  return <TablePage title="Discounts" table={tables.discounts} />;
}
