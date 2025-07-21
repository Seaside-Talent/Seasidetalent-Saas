import { Brain, CheckCircle, FileText, Settings, Shield, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Background } from '@/components/Background';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

export const Features = () => {
  const t = useTranslations('Features');

  return (
    <Background>
      <Section
        subtitle={t('section_subtitle')}
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          <FeatureCard
            icon={<Shield className="size-8 text-seaside-600" />}
            title={t('feature1_title')}
          >
            {t('feature_description')}
          </FeatureCard>

          <FeatureCard
            icon={<CheckCircle className="size-8 text-seaside-600" />}
            title={t('feature2_title')}
          >
            {t('feature_description')}
          </FeatureCard>

          <FeatureCard
            icon={<FileText className="size-8 text-seaside-600" />}
            title={t('feature3_title')}
          >
            {t('feature_description')}
          </FeatureCard>

          <FeatureCard
            icon={<Brain className="size-8 text-seaside-600" />}
            title={t('feature4_title')}
          >
            {t('feature_description')}
          </FeatureCard>

          <FeatureCard
            icon={<Users className="size-8 text-seaside-600" />}
            title={t('feature5_title')}
          >
            {t('feature_description')}
          </FeatureCard>

          <FeatureCard
            icon={<Settings className="size-8 text-seaside-600" />}
            title={t('feature6_title')}
          >
            {t('feature_description')}
          </FeatureCard>
        </div>
      </Section>
    </Background>
  );
};
