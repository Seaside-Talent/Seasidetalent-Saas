import { Building2, Heart, Shield } from 'lucide-react';

import { LogoCloud } from '@/features/landing/LogoCloud';

export const SponsorLogos = () => (
  <LogoCloud text="Tailored for Healthcare Organizations — Built With Compliance in Mind">
    <div className="flex h-32 w-36 flex-col items-center justify-center gap-2 rounded-lg border bg-seaside-50 p-4 text-seaside-800">
      <Building2 className="mb-2 size-8 text-seaside-600" />
      <span className="text-center font-semibold">Regional Hospitals</span>
    </div>

    <div className="flex h-32 w-36 flex-col items-center justify-center gap-2 rounded-lg border bg-seaside-50 p-4 text-seaside-800">
      <Heart className="mb-2 size-8 text-seaside-600" />
      <span className="text-center font-semibold">Medical Centers</span>
    </div>

    <div className="flex h-32 w-36 flex-col items-center justify-center gap-2 rounded-lg border bg-seaside-50 p-4 text-seaside-800">
      <Shield className="mb-2 size-8 text-seaside-600" />
      <span className="text-center font-semibold">Healthcare Systems</span>
    </div>

    <div className="flex h-32 w-36 flex-col items-center justify-center gap-2 rounded-lg border bg-seaside-50 p-4 text-seaside-800">
      <Building2 className="mb-2 size-8 text-seaside-600" />
      <span className="text-center font-semibold">Clinics</span>
    </div>

    <div className="flex h-32 w-36 flex-col items-center justify-center gap-2 rounded-lg border bg-seaside-50 p-4 text-seaside-800">
      <Heart className="mb-2 size-8 text-seaside-600" />
      <span className="text-center font-semibold">Nursing Homes</span>
    </div>
  </LogoCloud>
);
