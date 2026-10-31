import { useToast } from './Toast';

export default function PageHeader({ title, subtitle }) {
  const toast = useToast();
  return (
    <div className="top">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div>
        <button className="btn" onClick={() => toast('Report downloaded')}>Full Report</button>{' '}
        <button className="btn g" onClick={() => toast('Create form would open here')}>New +</button>
      </div>
    </div>
  );
}
