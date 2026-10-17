import DashboardSidebar from '@/components/DashboardSidebar';

export default function EspaceProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-navy-50/20">
      <DashboardSidebar />
      <div className="lg:pl-64">{children}</div>
    </div>
  );
}