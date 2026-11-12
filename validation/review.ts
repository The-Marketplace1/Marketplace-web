import { z } from "zod";

/** A backend must verify the completed booking before accepting a review. */
export const reviewSubmissionSchema = z.object({
  completedBookingId: z.string().trim().min(1, "A completed booking is required."),
  rating: z.number().int().min(1).max(5),
  comment: z.string().trim().min(1, "Write a comment.").max(2_000),
});

export type ReviewSubmissionFormValues = z.infer<typeof reviewSubmissionSchema>;

