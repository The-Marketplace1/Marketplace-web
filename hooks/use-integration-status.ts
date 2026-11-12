"use client";

import { useQuery } from "@tanstack/react-query";
import { getIntegrationStatuses } from "@/services/gateway/status";

export function useIntegrationStatuses() {
  return useQuery({
    queryKey: ["marketplace", "integration-status"],
    queryFn: async () => getIntegrationStatuses(),
    staleTime: Number.POSITIVE_INFINITY,
    gcTime: Number.POSITIVE_INFINITY,
  });
}

