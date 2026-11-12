import { LocationIntegrationUnavailableError } from "./errors";
import type {
  LocationProvider,
  MarketplaceLocationService,
} from "./contracts";

/**
 * Wraps a provider adapter without coupling consumers to its SDK or runtime.
 * No provider is selected or activated by default.
 */
export function createMarketplaceLocationService(
  provider?: LocationProvider,
): MarketplaceLocationService {
  const requireProvider = (): LocationProvider => {
    if (!provider) {
      throw new LocationIntegrationUnavailableError();
    }
    return provider;
  };

  return {
    async searchAddresses(query, options) {
      const normalizedQuery = query.trim();
      if (!normalizedQuery) return [];
      return await requireProvider().searchAddresses(normalizedQuery, options);
    },
    async reverseGeocode(coordinates) {
      return await requireProvider().reverseGeocode(coordinates);
    },
  };
}

