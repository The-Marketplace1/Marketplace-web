export class LocationIntegrationUnavailableError extends Error {
  constructor() {
    super(
      "No approved map/location provider is configured. Add a provider adapter before making location requests.",
    );
    this.name = "LocationIntegrationUnavailableError";
  }
}

