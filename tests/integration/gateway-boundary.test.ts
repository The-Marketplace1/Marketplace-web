import { describe, expect, it } from "vitest";
import { getMarketplaceGatewayAdapter } from "@/services/gateway/adapter";
import { IntegrationUnavailableError } from "@/services/gateway/errors";

describe("API Gateway boundary", () => {
  it("fails explicitly while no approved adapter is installed", () => {
    expect(() => getMarketplaceGatewayAdapter()).toThrow(IntegrationUnavailableError);
  });

  it("identifies the Gateway as the unavailable boundary", () => {
    try {
      getMarketplaceGatewayAdapter();
    } catch (error) {
      expect(error).toBeInstanceOf(IntegrationUnavailableError);
      expect((error as IntegrationUnavailableError).integration).toBe("api-gateway");
      return;
    }

    throw new Error("Expected the unavailable Gateway to fail closed.");
  });
});

