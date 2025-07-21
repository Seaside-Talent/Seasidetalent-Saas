import { Building2, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <Section>
      <CTABanner
        title={t('title')}
        description={t('description')}
        buttons={(
          <>
            <a
              className={buttonVariants({ size: 'lg' })}
              href="/sign-up"
            >
              <Users className="mr-2 size-5" />
              {t('button_text')}
            </a>
            <a
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href="/jobs"
            >
              <Building2 className="mr-2 size-5" />
              Browse Healthcare Jobs
            </a>
          </>
        )}
      />
    </Section>
  );
};
