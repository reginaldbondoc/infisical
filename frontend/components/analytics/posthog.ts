/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-undef */
import posthog from 'posthog-js';

import { ENV, POSTHOG_API_KEY, POSTHOG_HOST } from '../utilities/config';

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    if (ENV == 'production' && TELEMETRY_CAPTURING_ENABLED) {
      posthog.init(POSTHOG_API_KEY, {
        api_host: POSTHOG_HOST
      });
    }
  }

  return posthog;
};
