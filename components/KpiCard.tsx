import { TrendingUp, TrendingDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type KpiCardProps = {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: {
    value: string;
    direction: 'up' | 'down';
    label?: string;
  };
  color?: 'orange' | 'navy' | 'green' | 'purple';
};

const COLOR_MAP = {
  orange: { bg: 'bg-orange-50', text: 'text-orange-500' },
  navy: { bg: 'bg-navy-50', text: 'text-navy-700' },
  green: { bg: 'bg-green-50', text: 'text-green-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
};

export default function KpiCard({
  icon: Icon,
  label,
  value,
  trend,
  color = 'orange',
}: KpiCardProps) {
  const colors = COLOR_MAP[color];

  return (
    <div className="bg-white rounded-2xl border border-navy-100 p-5 
                    hover:shadow-card transition-all">
      <div className="flex items-start justify-between mb-3">
        <div
          className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center 
                      justify-center`}
        >
          <Icon size={18} className={colors.text} />
        </div>

        {trend && (
          <div
            className={`flex items-center gap-1 text-xs font-semibold 
                        ${
                          trend.direction === 'up'
                            ? 'text-green-600'
                            : 'text-red-500'
                        }`}
          >
            {trend.direction === 'up' ? (
              <TrendingUp size={12} />
            ) : (
              <TrendingDown size={12} />
            )}
            {trend.value}
          </div>
        )}
      </div>

      <p className="text-2xl sm:text-3xl font-bold text-navy-900">{value}</p>
      <p className="text-xs text-navy-500 mt-1">{label}</p>

      {trend?.label && (
        <p className="text-[10px] text-navy-400 mt-1">{trend.label}</p>
      )}
    </div>
  );
}