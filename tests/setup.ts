import type { DataLayer } from "@types/types";

// Assign a mock window with proper type
Object.assign(globalThis, {
  window: {
    dataLayer: [] as DataLayer,
  },
});
