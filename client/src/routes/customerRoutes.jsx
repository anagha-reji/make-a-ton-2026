// Developer 1 owns this file.
import CustomerDashboard from '../pages/customer/CustomerDashboard';
import BrowsePlans from '../pages/customer/BrowsePlans';
import MySubscriptions from '../pages/customer/MySubscriptions';
import MyInvoices from '../pages/customer/MyInvoices';
import MyPayments from '../pages/customer/MyPayments';
import CustomerProfile from '../pages/customer/CustomerProfile';

export const customerLinks = [
  { to: '', label: 'Dashboard' },
  { to: 'plans', label: 'Browse Plans' },
  { to: 'subscriptions', label: 'My Subscriptions' },
  { to: 'invoices', label: 'My Invoices' },
  { to: 'payments', label: 'My Payments' },
  { to: 'profile', label: 'My Profile' },
];

export const customerRoutes = [
  { index: true, element: <CustomerDashboard /> },
  { path: 'plans', element: <BrowsePlans /> },
  { path: 'subscriptions', element: <MySubscriptions /> },
  { path: 'invoices', element: <MyInvoices /> },
  { path: 'payments', element: <MyPayments /> },
  { path: 'profile', element: <CustomerProfile /> },
];
