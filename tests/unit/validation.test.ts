import { describe, expect, it } from "vitest";
import { customerSignupSchema, loginSchema } from "@/validation/auth";
import { reviewSubmissionSchema } from "@/validation/review";

describe("form validation", () => {
  it("rejects invalid login details without making a network request", () => {
    expect(loginSchema.safeParse({ email: "not-an-email", password: "" }).success).toBe(false);
  });

  it("accepts a well-formed customer registration draft", () => {
    expect(
      customerSignupSchema.safeParse({
        fullName: "Taylor Example",
        email: "taylor@example.com",
        password: "long-enough-password",
      }).success,
    ).toBe(true);
  });

  it("requires a booking reference and a bounded rating for reviews", () => {
    expect(
      reviewSubmissionSchema.safeParse({
        completedBookingId: "",
        rating: 6,
        comment: "Not valid.",
      }).success,
    ).toBe(false);
  });
});

