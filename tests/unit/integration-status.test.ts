import { describe, expect, it } from "vitest";
import { getIntegrationStatuses } from "@/services/gateway/status";

describe("Marketplace integration status", () => {
  it("does not claim that any external service is connected", () => {
    const statuses = getIntegrationStatuses();

    expect(statuses.length).toBeGreaterThan(0);
    expect(
      statuses.every((status) =>
        ["not-configured", "waiting-for-contract"].includes(status.state),
      ),
    ).toBe(true);
    expect(statuses.every((status) => status.note.length > 0)).toBe(true);
  });

  it("includes a clear Gateway setup state", () => {
    const gateway = getIntegrationStatuses().find((status) => status.id === "api-gateway");

    expect(gateway?.state).toBe("not-configured");
    expect(gateway?.note).toMatch(/no approved Gateway adapter/i);
  });
});

