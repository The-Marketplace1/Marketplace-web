/**
 * App-facing view models for the future Gateway adapter.
 *
 * These are not wire contracts and must be mapped to approved Marketplace
 * shared-types before a live adapter is connected.
 */

export interface ProfessionalSummaryView {
  id: string;
  displayName: string;
  locationLabel?: string;
  imageUrl?: string;
}

export interface ProfessionalProfileView extends ProfessionalSummaryView {
  bio?: string;
  verifiedLabel?: string;
}

export interface CustomerProfileView {
  id: string;
  displayName: string;
  email: string;
}

export interface ServiceSummaryView {
  id: string;
  title: string;
  summary: string;
  categoryLabel: string;
  priceLabel: string;
  durationLabel?: string;
  professional: ProfessionalSummaryView;
}

export interface ServiceDetailView extends ServiceSummaryView {
  fullDescription: string;
  bookingNotes?: string;
}

export interface BookingView {
  id: string;
  serviceTitle: string;
  professionalName: string;
  statusLabel: string;
  scheduledTimeLabel: string;
  paymentStatusLabel?: string;
}

export interface PaymentStatusView {
  statusLabel: string;
  amountLabel?: string;
  escrowStatusLabel?: string;
  refundStatusLabel?: string;
}

export interface EarningsView {
  balanceLabel?: string;
  payoutStatusLabel?: string;
  periodLabel?: string;
}

export interface CustomerDashboardView {
  upcomingBookingCount: number;
}

export interface ProfessionalDashboardView {
  upcomingBookingCount: number;
  pendingBookingCount: number;
}

export interface ServiceDraftView {
  title: string;
  summary: string;
  categoryId: string;
  pricingLabel: string;
  durationMinutes?: number;
}

export interface ServiceUpdateView extends ServiceDraftView {
  serviceId: string;
}

export interface AvailabilityUpdateView {
  timeZone: string;
  intervals: readonly {
    startsAt: string;
    endsAt: string;
  }[];
}

export interface NotificationView {
  id: string;
  title: string;
  summary: string;
  createdAtLabel: string;
  isRead: boolean;
}

export interface ConversationView {
  id: string;
  participantName: string;
  lastMessagePreview: string;
  updatedAtLabel: string;
  unreadCount: number;
}

export interface MessageView {
  id: string;
  conversationId: string;
  body: string;
  sentAtLabel: string;
  sentByCurrentUser: boolean;
}

export interface VerifiedReviewView {
  id: string;
  completedBookingId: string;
  professionalId: string;
  reviewerDisplayName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  createdAtLabel: string;
  /** True only when asserted by the trusted Marketplace backend. */
  verifiedCompletedBooking: true;
}

export interface UploadedMediaView {
  assetId: string;
  displayUrl: string;
}

export interface RolePermissionsView {
  role: "customer" | "professional";
  allowedActions: readonly string[];
}

export interface ProductAnalyticsEvent {
  name: string;
  properties?: Readonly<Record<string, string | number | boolean>>;
}

export interface MonitoringContext {
  route?: string;
  correlationId?: string;
  metadata?: Readonly<Record<string, string | number | boolean>>;
}

