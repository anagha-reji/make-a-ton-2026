import PageHeader from './PageHeader';
import DataTable from './DataTable';

// Standard list page: header + table card. Used by most customer, staff and admin pages.
export default function TablePage({ title, table }) {
  return (
    <>
      <PageHeader title={title} subtitle={`Manage your ${title.toLowerCase()}`} />
      <div className="card"><DataTable {...table} /></div>
    </>
  );
}
