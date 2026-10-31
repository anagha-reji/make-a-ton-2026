import PageHeader from '../../components/PageHeader';
import PlanCard from '../../components/PlanCard';
import { useToast } from '../../components/Toast';
import { plans } from '../../data/mockData';
import '../../styles/customer.css';

export default function BrowsePlans() {
  const toast = useToast();
  return (
    <>
      <PageHeader title="Browse Plans" subtitle="Compare plans and subscribe" />
      <div className="grid g3">
        {plans.map((p, i) => (
          <PlanCard key={p.name} plan={p} popular={i === 1} onSubscribe={(pl) => toast(`Subscription to ${pl.name} confirmed ✓`)} />
        ))}
      </div>
    </>
  );
}
