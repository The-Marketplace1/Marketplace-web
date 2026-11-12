import { z } from "zod";

/** UI draft validation only; booking rules must come from backend contracts. */
export const bookingDraftSchema = z.object({
  serviceId: z.string().trim().min(1, "Choose a service."),
  professionalId: z.string().trim().min(1, "Choose a professional."),
  requestedStart: z.string().trim().min(1, "Choose a preferred time."),
  customerNote: z.string().trim().max(2_000, "Keep notes under 2,000 characters.").optional(),
});

export type BookingDraftFormValues = z.infer<typeof bookingDraftSchema>;

