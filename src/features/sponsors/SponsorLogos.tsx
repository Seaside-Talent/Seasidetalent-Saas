import { Building2, Heart, Shield, Users } from 'lucide-react';

import { LogoCloud } from '@/features/landing/LogoCloud';

export const SponsorLogos = () => (
  <LogoCloud text="Trusted by Healthcare Organizations">
    <div className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground">
      <Building2 className="size-6 text-seaside-600" />
      <span className="font-semibold">Regional Hospitals</span>
    </div>

    <div className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground">
      <Heart className="size-6 text-seaside-600" />
      <span className="font-semibold">Medical Centers</span>
    </div>

    <div className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground">
      <Shield className="size-6 text-seaside-600" />
      <span className="font-semibold">Healthcare Systems</span>
    </div>

    <div className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground">
      <Users className="size-6 text-seaside-600" />
      <span className="font-semibold">Staffing Agencies</span>
    </div>

    <div className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground">
      <Building2 className="size-6 text-seaside-600" />
      <span className="font-semibold">Clinics</span>
    </div>

    <div className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground">
      <Heart className="size-6 text-seaside-600" />
      <span className="font-semibold">Nursing Homes</span>
    </div>
  </LogoCloud>
);
