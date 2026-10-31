import { formatCurrency as c } from '../utils/formatCurrency';

export const plans = [
  { name: 'Basic', billing: 'Monthly', price: 499, features: ['1 user', 'Email support', 'Basic reports'] },
  { name: 'Pro', billing: 'Monthly', price: 1499, features: ['10 users', 'Priority support', 'Advanced reports', 'Auto invoices'] },
  { name: 'Business', billing: 'Yearly', price: 14999, features: ['Unlimited users', 'Dedicated manager', 'API access', 'Custom taxes'] },
];

export const tables = {
  staff: { columns: ['Name', 'Email', 'Role', 'Status'], rows: [['Riya Shah', 'riya@subtrack.io', 'Staff', 'Active'], ['Arjun Mehta', 'arjun@subtrack.io', 'Staff', 'Active'], ['Neha Patel', 'neha@subtrack.io', 'Staff', 'Paused']] },
  customers: { columns: ['Name', 'Email', 'Plan', 'Status'], rows: [['Acme Corp', 'billing@acme.com', 'Pro', 'Active'], ['Zen Studio', 'hello@zen.io', 'Basic', 'Active'], ['Kiran Joshi', 'kiran@mail.com', 'Business', 'Overdue']] },
  products: { columns: ['Product', 'Type', 'Sales price', 'Cost price'], rows: [['CRM Suite', 'Service', c(1000), c(600)], ['Analytics Add-on', 'Service', c(560), c(300)], ['Support Pack', 'Service', c(299), c(120)]] },
  plans: { columns: ['Plan', 'Billing', 'Price', 'Status'], rows: plans.map((p) => [p.name, p.billing, c(p.price), 'Active']) },
  discounts: { columns: ['Name', 'Type', 'Value', 'Status'], rows: [['Welcome10', 'Percentage', '10%', 'Active'], ['Flat200', 'Fixed', c(200), 'Active'], ['Diwali25', 'Percentage', '25%', 'Closed']] },
  taxes: { columns: ['Tax', 'Rate', 'Applies to', 'Status'], rows: [['GST', '18%', 'All plans', 'Active'], ['Service Tax', '5%', 'Add-ons', 'Active']] },
  reports: { columns: ['Report', 'Value', 'Period', 'Trend'], rows: [['Revenue received', c(842500), 'Last 30 days', '▲ 12%'], ['Outstanding', c(96300), 'Now', '▼ 4%'], ['Active subscriptions', '1,284', 'Now', '▲ 8%']] },
  quotations: { columns: ['Quote #', 'Customer', 'Amount', 'Status'], rows: [['QT-1021', 'Acme Corp', c(17988), 'Pending'], ['QT-1022', 'Zen Studio', c(5988), 'Confirmed'], ['QT-1023', 'Kiran Joshi', c(14999), 'Draft']] },
  subscriptions: { columns: ['Sub #', 'Plan', 'Next billing', 'Status'], rows: [['SUB-0001', 'Pro', '12 Nov 2026', 'Active'], ['SUB-0002', 'Basic', '03 Nov 2026', 'Active'], ['SUB-0003', 'Business', '—', 'Paused']] },
  invoices: { columns: ['Invoice', 'Customer', 'Amount', 'Status'], rows: [['INV-2026-114', 'Acme Corp', c(1769), 'Paid'], ['INV-2026-115', 'Zen Studio', c(589), 'Pending'], ['INV-2026-116', 'Kiran Joshi', c(17699), 'Overdue']] },
  payments: { columns: ['Reference', 'Invoice', 'Method', 'Amount'], rows: [['PAY-883', 'INV-2026-114', 'UPI', c(1769)], ['PAY-884', 'INV-2026-112', 'Card', c(589)], ['PAY-885', 'INV-2026-110', 'Bank', c(5899)]] },
};

export const stats = {
  admin: [{ label: 'Total revenue', value: c(842500), delta: '12%' }, { label: 'Active subscriptions', value: '1,284', delta: '8%' }, { label: 'Outstanding', value: c(96300), delta: '4%' }, { label: 'Overdue invoices', value: '23', delta: '2%' }],
  staff: [{ label: 'Customers', value: '412', delta: '5%' }, { label: 'Pending quotations', value: '18', delta: '3%' }, { label: 'Pending invoices', value: '37', delta: '6%' }, { label: 'Overdue invoices', value: '23', delta: '2%' }],
  customer: [{ label: 'Active subscriptions', value: '2', delta: '1' }, { label: 'Next renewal', value: '12 Nov', delta: 'Pro' }, { label: 'Outstanding', value: c(589), delta: '1 invoice' }, { label: 'Total paid', value: c(7357), delta: '4 payments' }],
};

export const statusSummary = [
  { label: 'Active', count: 24, color: '#2fa84f' },
  { label: 'Confirmed', count: 10, color: '#8a2fa8' },
  { label: 'Quotation', count: 15, color: '#8fd14f' },
  { label: 'Closed', count: 5, color: '#cfd6d2' },
];
