import { formatCurrency } from '../utils/formatCurrency';

export default function PlanCard({ plan, popular, onSubscribe }) {
  return (
    <div className={'plan' + (popular ? ' hot' : '')}>
      <b>{plan.name}</b> {popular && <span className="tag">Popular</span>}
      <div className="pr">
        {formatCurrency(plan.price)}
        <small> / {plan.billing === 'Yearly' ? 'year' : 'month'}</small>
      </div>
      <ul>{plan.features.map((f) => <li key={f}>{f}</li>)}</ul>
      <button className={'btn' + (popular ? ' g' : '')} style={{ width: '100%' }} onClick={() => onSubscribe(plan)}>
        Subscribe
      </button>
    </div>
  );
}
