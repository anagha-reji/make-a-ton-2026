// Developer 2 (Anu) owns this file.
import StaffDashboard from '../pages/staff/StaffDashboard';
import Customers from '../pages/staff/Customers';
import Quotations from '../pages/staff/Quotations';
import Subscriptions from '../pages/staff/Subscriptions';
import Invoices from '../pages/staff/Invoices';
import Payments from '../pages/staff/Payments';

export const staffLinks = [
  { to: '', label: 'Dashboard' },
  { to: 'customers', label: 'Customers' },
  { to: 'quotations', label: 'Quotations' },
  { to: 'subscriptions', label: 'Subscriptions' },
  { to: 'invoices', label: 'Invoices' },
  { to: 'payments', label: 'Payments' },
];

export const staffRoutes = [
  { index: true, element: <StaffDashboard /> },
  { path: 'customers', element: <Customers /> },
  { path: 'quotations', element: <Quotations /> },
  { path: 'subscriptions', element: <Subscriptions /> },
  { path: 'invoices', element: <Invoices /> },
  { path: 'payments', element: <Payments /> },
];
