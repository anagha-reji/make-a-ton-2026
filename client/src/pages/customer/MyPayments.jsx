import ResourcePage from "../../components/ResourcePage";
import { getMyPayments } from "../../services/subscriptionService";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

export default function MyPayments() {
  return (
    <ResourcePage 
      title="Payments" 
      subtitle="History of your successful transactions" 
      fetcher={getMyPayments}
      columns={[
        { key: "id", label: "TRANSACTION ID" },
        { key: "invoice", label: "INVOICE #" },
        { key: "amount", label: "AMOUNT", render: (r) => formatCurrency(r.amount) },
        { key: "method", label: "METHOD" }
      ]} 
    />
  );
}