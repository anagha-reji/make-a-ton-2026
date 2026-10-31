import PageHeader from "../../components/PageHeader";
import PlanCard from "../../components/PlanCard";
import useFetch from "../../hooks/useFetch";
import { getPlans } from "../../services/subscriptionService";

export default function BrowsePlans() {
  const { data: plans, loading } = useFetch(getPlans);

  return (
    <>
      <PageHeader 
        title="Browse Plans" 
        subtitle="Manage your browse plans" 
      />
      {loading ? (
        <p className="muted">Loading...</p>
      ) : (
        <div className="plans">
          {plans?.map((p) => (
            <PlanCard key={p.id} plan={p} onSubscribe={() => alert(`Subscribed to ${p.name}`)} />
          ))}
        </div>
      )}
    </>
  );
}