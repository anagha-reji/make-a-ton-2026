const LINE = 'M0 110 C30 100 40 60 70 75 S110 120 140 90 S190 40 220 55 S270 100 300 60 S350 20 400 45';

export default function RevenueChart() {
  return (
    <svg viewBox="0 0 400 150" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2fa84f" stopOpacity=".3" />
          <stop offset="1" stopColor="#2fa84f" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={LINE + ' V150 H0Z'} fill="url(#area)" />
      <path d={LINE} fill="none" stroke="#2fa84f" strokeWidth="3" />
    </svg>
  );
}
