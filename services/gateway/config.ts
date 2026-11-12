import "server-only";

export type GatewayConfiguration =
  | { state: "missing-url" }
  | { state: "waiting-for-adapter" };

/**
 * Reads only the server-side Gateway URL. This does not prove the Gateway is
 * reachable and does not make requests. A contract-specific adapter is still
 * required before any Marketplace operation can be enabled.
 */
export function getGatewayConfiguration(): GatewayConfiguration {
  if (!process.env.MARKETPLACE_API_GATEWAY_URL) {
    return { state: "missing-url" };
  }

  return { state: "waiting-for-adapter" };
}

