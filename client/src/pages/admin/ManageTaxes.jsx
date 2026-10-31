import TablePage from '../../components/TablePage';
import { tables } from '../../data/mockData';

export default function ManageTaxes() {
  return <TablePage title="Taxes" table={tables.taxes} />;
}
