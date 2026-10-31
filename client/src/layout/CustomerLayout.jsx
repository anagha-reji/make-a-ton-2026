import DashboardLayout from "./DashboardLayout";

const items = [
  { label: "Dashboard", to: "" },
  { label: "Subscriptions", to: "subscriptions" },
  { label: "Invoices", to: "invoices" },
  { label: "Payments", to: "payments" },
];

export default function CustomerLayout() {
  return <DashboardLayout base="/customer" items={items} />;
}