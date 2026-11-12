import { z } from "zod";

/**
 * Client-side form checks only. Align with auth-service/shared-types and add
 * authoritative server-side validation before enabling account operations.
 */
const email = z.string().trim().email("Enter a valid email address.");
const password = z
  .string()
  .min(8, "Use at least 8 characters.")
  .max(128, "Password must be 128 characters or fewer.");

export const loginSchema = z.object({ email, password });
export const customerSignupSchema = z.object({
  fullName: z.string().trim().min(1, "Enter your name.").max(120),
  email,
  password,
});
export const professionalSignupSchema = customerSignupSchema.extend({
  professionalName: z.string().trim().min(1, "Enter a professional name.").max(120),
});
export const passwordRecoverySchema = z.object({ email });
export const emailVerificationSchema = z.object({
  verificationCode: z.string().trim().min(1, "Enter your verification code.").max(256),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type CustomerSignupFormValues = z.infer<typeof customerSignupSchema>;
export type ProfessionalSignupFormValues = z.infer<typeof professionalSignupSchema>;

