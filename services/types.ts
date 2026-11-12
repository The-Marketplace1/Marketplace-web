/**
 * Marketplace-web UI adapter types.
 *
 * These describe the app's needs only; they are not Marketplace shared-types
 * or public API contracts. Map them to approved shared-types before connecting
 * a service. No HTTP paths or service URLs belong in this file.
 */

import type {
  BookingView,
  AvailabilityUpdateView,
  ConversationView,
  CustomerDashboardView,
  CustomerProfileView,
  EarningsView,
  MessageView,
  MonitoringContext,
  NotificationView,
  PaymentStatusView,
  ProductAnalyticsEvent,
  ProfessionalProfileView,
  ProfessionalDashboardView,
  RolePermissionsView,
  ServiceDetailView,
  ServiceDraftView,
  ServiceSummaryView,
  ServiceUpdateView,
  UploadedMediaView,
  VerifiedReviewView,
} from "../types/marketplace";
import type { MarketplaceLocationService } from "./location/contracts";

export type { MarketplaceLocationService } from "./location/contracts";

export type MarketplaceRole = "customer" | "professional";

export interface MarketplaceSessionView {
  subjectId: string;
  role: MarketplaceRole;
  displayName: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface CustomerRegistrationInput {
  email: string;
  password: string;
  fullName: string;
}

export interface ProfessionalRegistrationInput extends CustomerRegistrationInput {
  professionalName: string;
}

export interface ProfileUpdateInput {
  displayName?: string;
  phoneNumber?: string;
  locationLabel?: string;
}

export interface ServiceSearchInput {
  query?: string;
  location?: string;
  categoryId?: string;
}

export interface BookingDraftInput {
  serviceId: string;
  professionalId: string;
  requestedStart: string;
  customerNote?: string;
}

export interface BookingActionInput {
  bookingId: string;
  reason?: string;
}

export interface RefundRequestInput extends BookingActionInput {
  paymentId: string;
}

export interface MessageInput {
  conversationId: string;
  body: string;
}

export interface ReviewSubmissionInput {
  completedBookingId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
}

export interface MarkNotificationReadInput {
  notificationId: string;
}

export interface RealtimeBookingEvent {
  bookingId: string;
  receivedAt: string;
  /** Event values must be mapped from the approved Gateway contract. */
  eventName: string;
  payload: unknown;
}

export interface AuthenticationServicePort {
  login(input: LoginInput): Promise<MarketplaceSessionView>;
  registerCustomer(input: CustomerRegistrationInput): Promise<void>;
  registerProfessional(input: ProfessionalRegistrationInput): Promise<void>;
  logout(): Promise<void>;
  getSession(): Promise<MarketplaceSessionView | null>;
  verifyEmail(input: { verificationCode: string }): Promise<void>;
  resendEmailVerification(input: { email: string }): Promise<void>;
  requestPasswordRecovery(input: { email: string }): Promise<void>;
  resetPassword(input: { resetCode: string; newPassword: string }): Promise<void>;
}

export interface CustomerServicePort {
  getProfile(): Promise<CustomerProfileView | null>;
  getDashboardSummary(): Promise<CustomerDashboardView>;
  updateProfile(input: ProfileUpdateInput): Promise<void>;
}

export interface ProfessionalServicePort {
  getProfile(): Promise<ProfessionalProfileView | null>;
  getDashboardSummary(): Promise<ProfessionalDashboardView>;
  updateProfile(input: ProfileUpdateInput): Promise<void>;
  submitOnboarding(): Promise<void>;
  submitIdentityVerification(): Promise<void>;
  listOwnServices(): Promise<ServiceSummaryView[]>;
  createService(input: ServiceDraftView): Promise<void>;
  updateService(input: ServiceUpdateView): Promise<void>;
  updateAvailability(input: AvailabilityUpdateView): Promise<void>;
  getEarnings(): Promise<EarningsView>;
}

export interface ServiceCatalogPort {
  search(input: ServiceSearchInput): Promise<ServiceSummaryView[]>;
  getService(serviceId: string): Promise<ServiceDetailView | null>;
  getProfessional(professionalId: string): Promise<ProfessionalProfileView | null>;
}

export interface BookingServicePort {
  create(input: BookingDraftInput): Promise<BookingView>;
  listCustomerBookings(): Promise<BookingView[]>;
  listProfessionalBookings(): Promise<BookingView[]>;
  getBooking(bookingId: string): Promise<BookingView | null>;
  cancel(input: BookingActionInput): Promise<void>;
  accept(input: BookingActionInput): Promise<void>;
  decline(input: BookingActionInput): Promise<void>;
  markCompleted(input: BookingActionInput): Promise<void>;
}

export interface PaymentServicePort {
  createPaymentForBooking(input: { bookingId: string }): Promise<PaymentStatusView>;
  getBookingPaymentStatus(bookingId: string): Promise<PaymentStatusView>;
  requestRefund(input: RefundRequestInput): Promise<void>;
  getProfessionalEarnings(): Promise<EarningsView>;
  /** Escrow release is a backend-only operation; no frontend method is exposed. */
}

export interface NotificationServicePort {
  list(): Promise<NotificationView[]>;
  markRead(input: MarkNotificationReadInput): Promise<void>;
}

export interface RealtimeServicePort {
  subscribeToBooking(
    bookingId: string,
    onEvent: (event: RealtimeBookingEvent) => void,
  ): () => void;
}

export interface CommunicationServicePort {
  listConversations(): Promise<ConversationView[]>;
  listMessages(conversationId: string): Promise<MessageView[]>;
  sendMessage(input: MessageInput): Promise<void>;
}

export interface ReviewServicePort {
  listForProfessional(professionalId: string): Promise<VerifiedReviewView[]>;
  createForCompletedBooking(input: ReviewSubmissionInput): Promise<void>;
}

export interface MediaStorageServicePort {
  uploadProfileImage(file: File): Promise<UploadedMediaView>;
  uploadServiceImage(file: File): Promise<UploadedMediaView>;
  uploadVerificationDocument(file: File): Promise<UploadedMediaView>;
}

export interface SecurityServicePort {
  getSessionPermissions(): Promise<RolePermissionsView | null>;
}

export interface AnalyticsServicePort {
  trackAuthorizedEvent(event: ProductAnalyticsEvent): Promise<void>;
}

export interface MonitoringServicePort {
  captureServerError(error: Error, context?: MonitoringContext): Promise<void>;
}

/** One public app boundary: the API Gateway, never internal services. */
export interface MarketplaceGatewayAdapter {
  authentication: AuthenticationServicePort;
  customers: CustomerServicePort;
  professionals: ProfessionalServicePort;
  services: ServiceCatalogPort;
  bookings: BookingServicePort;
  payments: PaymentServicePort;
  notifications: NotificationServicePort;
  realtime: RealtimeServicePort;
  communication: CommunicationServicePort;
  reviews: ReviewServicePort;
  storage: MediaStorageServicePort;
  location: MarketplaceLocationService;
  security: SecurityServicePort;
  analytics: AnalyticsServicePort;
  monitoring: MonitoringServicePort;
}

