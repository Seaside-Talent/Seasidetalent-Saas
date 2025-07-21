import { Building2, Shield, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-36">
      <CenteredHero
        banner={(
          <div className="flex items-center gap-2">
            <Shield className="size-4 text-seaside-600" />
            <span className="text-sm font-medium text-seaside-600">
              HIPAA Compliant • Trusted by 3,142+ Healthcare Organizations
            </span>
          </div>
        )}
        title={t.rich('title', {
          important: chunks => (
            <span className="bg-gradient-to-r from-seaside-600 to-seaside-700 bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={(
          <>
            <a
              className={buttonVariants({ size: 'lg' })}
              href="/dashboard"
            >
              {t('primary_button')}
            </a>

            <a
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href="/jobs"
            >
              <Users className="mr-2 size-5" />
              {t('secondary_button')}
            </a>
          </>
        )}
        stats={(
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="size-4 text-seaside-600" />
              <span>3,142 credentialed profiles active</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="size-4 text-seaside-600" />
              <span>54 new jobs this week</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="size-4 text-seaside-600" />
              <span>5 hires yesterday</span>
            </div>
          </div>
        )}
      />
    </Section>
  );
};
