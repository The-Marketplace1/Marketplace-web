import { describe, expect, it, vi } from "vitest";
import {
  createMarketplaceLocationService,
  LocationIntegrationUnavailableError,
  type LocationProvider,
} from "@/services/location";

describe("platform-neutral location service", () => {
  it("fails explicitly when no provider adapter is configured", async () => {
    const location = createMarketplaceLocationService();

    await expect(location.searchAddresses("Lagos")).rejects.toBeInstanceOf(
      LocationIntegrationUnavailableError,
    );
    await expect(
      location.reverseGeocode({ latitude: 6.5244, longitude: 3.3792 }),
    ).rejects.toBeInstanceOf(LocationIntegrationUnavailableError);
  });

  it("normalizes search input and delegates to the injected provider", async () => {
    const provider: LocationProvider = {
      searchAddresses: vi.fn().mockResolvedValue([
        { id: "provider-place-id", label: "Lagos" },
      ]),
      reverseGeocode: vi.fn().mockResolvedValue(null),
    };
    const location = createMarketplaceLocationService(provider);

    await expect(location.searchAddresses("  Lagos  ")).resolves.toEqual([
      { id: "provider-place-id", label: "Lagos" },
    ]);
    expect(provider.searchAddresses).toHaveBeenCalledWith("Lagos", undefined);
  });

  it("does not make provider requests for an empty search", async () => {
    const provider: LocationProvider = {
      searchAddresses: vi.fn(),
      reverseGeocode: vi.fn(),
    };
    const location = createMarketplaceLocationService(provider);

    await expect(location.searchAddresses("   ")).resolves.toEqual([]);
    expect(provider.searchAddresses).not.toHaveBeenCalled();
  });
});

