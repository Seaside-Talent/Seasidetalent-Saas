import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

import { BILLING_INTERVAL, type PricingPlan } from '@/types/Subscription';

const localePrefix: LocalePrefix = 'as-needed' as LocalePrefix;

// Seaside Talent Configuration
export const AppConfig = {
  name: 'Seaside Talent',
  locales: [
    {
      id: 'en',
      name: 'English',
    },
    { id: 'fr', name: 'Français' },
  ],
  defaultLocale: 'en',
  localePrefix,
};

export const AllLocales = AppConfig.locales.map(locale => locale.id);

export const PLAN_ID = {
  FREE: 'free',
  SUBSCRIPTION: 'subscription',
  PREMIUM: 'premium',
} as const;

export const PricingPlanList: Record<string, PricingPlan> = {
  [PLAN_ID.FREE]: {
    id: PLAN_ID.FREE,
    price: 0,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: '',
    devPriceId: '',
    prodPriceId: '',
    features: {
      teamMember: 0, // Unlimited job postings
      website: 0, // Credential filtering
      storage: 0, // Communication tools
      transfer: 0, // Verified candidates
    },
  },
  [PLAN_ID.SUBSCRIPTION]: {
    id: PLAN_ID.SUBSCRIPTION,
    price: 99,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: 'price_subscription_test',
    devPriceId: 'price_1PNksvKOp3DEwzQlGOXO7YBK',
    prodPriceId: '',
    features: {
      teamMember: 0, // Resume database access
      website: 0, // Verified candidate filtering
      storage: 0, // Ping-to-apply messaging
      transfer: 0, // Advanced filters
    },
  },
  [PLAN_ID.PREMIUM]: {
    id: PLAN_ID.PREMIUM,
    price: 249,
    interval: BILLING_INTERVAL.MONTH,
    testPriceId: 'price_premium_test',
    devPriceId: 'price_1PNksvKOp3DEwzQli9IvXzgb',
    prodPriceId: 'price_123',
    features: {
      teamMember: 3, // Sponsored roles included
      website: 0, // Verification summaries
      storage: 0, // Custom landing page
      transfer: 0, // Early access features
    },
  },
};
