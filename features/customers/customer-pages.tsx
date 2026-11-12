import { WorkspacePage } from "@/components/layout/workspace-page";

export function CustomerDashboardPage() {
  return <WorkspacePage role="customer" section="dashboard" />;
}

export function CustomerBookingsPage() {
  return <WorkspacePage role="customer" section="bookings" />;
}

export function CustomerBookingDetailPage() {
  return <WorkspacePage role="customer" section="bookings" detail />;
}

export function CustomerSettingsPage() {
  return <WorkspacePage role="customer" section="settings" />;
}

