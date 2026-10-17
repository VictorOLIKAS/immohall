'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Target,
  Receipt,
  Settings,
  LogOut,
  ChevronRight,
  BadgeCheck,
} from 'lucide-react';

const NAV_ITEMS = [
  { href: '/espace-pro/dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
  { href: '/espace-pro/mes-annonces', label: 'Mes annonces', icon: FileText, badge: 12 },
  { href: '/espace-pro/mes-leads', label: 'Mes leads', icon: Target, badge: 3, badgeColor: 'bg-orange-500' },
  { href: '/espace-pro/facturation', label: 'Facturation', icon: Receipt },
  { href: '/espace-pro/parametres', label: 'Paramètres', icon: Settings },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-64 bg-navy-900 text-white lg:min-h-screen 
                      lg:fixed lg:top-0 lg:left-0 lg:z-30">
      {/* Logo */}
      <div className="p-5 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-white flex items-center 
                          justify-center shrink-0">
            <span className="text-navy-900 font-black text-lg">IH</span>
          </div>
          <div>
            <p className="font-black text-white text-base tracking-tight">
              IMMO<span className="text-orange-400">HALL</span>
            </p>
            <p className="text-[9px] text-white/40 tracking-wider">
              VOTRE EXPERT IMMOBILIER
            </p>
          </div>
        </Link>
      </div>

      {/* User card */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center 
                          justify-center text-white font-bold shrink-0 text-sm">
            LI
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="font-semibold text-white text-sm truncate">
                L&apos;Enseigne Immo
              </p>
              <BadgeCheck size={14} className="text-orange-400 shrink-0" />
            </div>
            <p className="text-[11px] text-white/50">Team partenaire</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-3">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between gap-3 px-3 py-2.5 
                              rounded-lg transition ${
                                isActive
                                  ? 'bg-orange-500 text-white'
                                  : 'text-white/70 hover:bg-white/10 hover:text-white'
                              }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon size={18} className="shrink-0" />
                    <span className="text-sm font-medium truncate">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {item.badge && (
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 
                                    rounded-full ${
                                      item.badgeColor || 'bg-white/20'
                                    } ${
                                      item.badgeColor
                                        ? 'text-white'
                                        : 'text-white'
                                    }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {isActive && <ChevronRight size={14} />}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-white/10 mt-4">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg 
                     text-white/60 hover:bg-red-500/10 hover:text-red-400 
                     transition"
        >
          <LogOut size={18} />
          <span className="text-sm font-medium">Déconnexion</span>
        </Link>
      </div>
    </aside>
  );
}