// Developer 2 (Anu) owns this file.
import AdminDashboard from '../pages/admin/AdminDashboard';
import ManageStaff from '../pages/admin/ManageStaff';
import ManageCustomers from '../pages/admin/ManageCustomers';
import ManageProducts from '../pages/admin/ManageProducts';
import ManagePlans from '../pages/admin/ManagePlans';
import ManageDiscounts from '../pages/admin/ManageDiscounts';
import ManageTaxes from '../pages/admin/ManageTaxes';
import Reports from '../pages/admin/Reports';

export const adminLinks = [
  { to: '', label: 'Dashboard' },
  { to: 'staff', label: 'Staff' },
  { to: 'customers', label: 'Customers' },
  { to: 'products', label: 'Products' },
  { to: 'plans', label: 'Plans' },
  { to: 'discounts', label: 'Discounts' },
  { to: 'taxes', label: 'Taxes' },
  { to: 'reports', label: 'Reports' },
];

export const adminRoutes = [
  { index: true, element: <AdminDashboard /> },
  { path: 'staff', element: <ManageStaff /> },
  { path: 'customers', element: <ManageCustomers /> },
  { path: 'products', element: <ManageProducts /> },
  { path: 'plans', element: <ManagePlans /> },
  { path: 'discounts', element: <ManageDiscounts /> },
  { path: 'taxes', element: <ManageTaxes /> },
  { path: 'reports', element: <Reports /> },
];
