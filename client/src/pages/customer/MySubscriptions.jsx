import ResourcePage from "../../components/ResourcePage";
import StatusBadge from "../../components/StatusBadge";
import { getMySubscriptions } from "../../services/subscriptionService";
import { formatDate } from "../../utils/formatDate";

export default function MySubscriptions() {
  return (
    <ResourcePage 
      title="My Subscriptions" 
      subtitle="Manage your my subscriptions" 
      fetcher={getMySubscriptions}
      columns={[
        { key: "id", label: "SUB #" },
        { key: "customer", label: "PLAN" },
        { key: "plan", label: "TIER" },
        { key: "nextBilling", label: "NEXT BILLING", render: (r) => formatDate(r.nextBilling) },
        { key: "status", label: "STATUS", render: (r) => <StatusBadge status={r.status || "Active"} /> }
      ]} 
    />
  );
}