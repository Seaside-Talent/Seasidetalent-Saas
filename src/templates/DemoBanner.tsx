import Link from 'next/link';

import { StickyBanner } from '@/features/landing/StickyBanner';

export const DemoBanner = () => (
  <StickyBanner>
    🏥 Connecting Every Role, Every Specialty -
    {' '}
    <Link href="/sign-up">Join Seaside Talent Today</Link>
  </StickyBanner>
);
