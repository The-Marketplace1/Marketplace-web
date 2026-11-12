/**
 * Platform-neutral location contracts.
 *
 * Keep this module free of browser, React, Next.js, and provider SDK imports so
 * web and future mobile clients can share the same domain boundary.
 */

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface AddressSearchOptions {
  near?: Coordinates;
  limit?: number;
  regionCode?: string;
}

export interface AddressSuggestion {
  /** Opaque provider-owned identifier; do not parse it in consuming apps. */
  id: string;
  label: string;
  secondaryLabel?: string;
  coordinates?: Coordinates;
}

/** The adapter implemented for the selected external map/location provider. */
export interface LocationProvider {
  searchAddresses(
    query: string,
    options?: AddressSearchOptions,
  ): Promise<AddressSuggestion[]>;
  reverseGeocode(coordinates: Coordinates): Promise<AddressSuggestion | null>;
}

/** App-facing location capability, reusable by web and mobile clients. */
export interface MarketplaceLocationService {
  searchAddresses(
    query: string,
    options?: AddressSearchOptions,
  ): Promise<AddressSuggestion[]>;
  reverseGeocode(coordinates: Coordinates): Promise<AddressSuggestion | null>;
}

