import { use } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './HomePage.module.scss';

// Home page with overview of new React 19 features
export const HomePage = () => {
  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  
  const { t } = langContext;

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <span className={styles.logoIcon}>⚛️</span>
          {t.home.title}
        </h1>
        <p className={styles.heroSubtitle}>
          {t.home.subtitle}
        </p>
      </div>

      {/* Quick overview */}
      <div className={styles.quickOverview}>
        <h2 className={styles.sectionTitle}>🎯 {t.home.whatsNew}</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>{t.home.features.actions.title}</h3>
            <p className={styles.featureDesc}>
              {t.home.features.actions.description}
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚀</div>
            <h3 className={styles.featureTitle}>{t.home.features.optimistic.title}</h3>
            <p className={styles.featureDesc}>
              {t.home.features.optimistic.description}
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎣</div>
            <h3 className={styles.featureTitle}>{t.home.features.use.title}</h3>
            <p className={styles.featureDesc}>
              {t.home.features.use.description}
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3 className={styles.featureTitle}>{t.home.features.formStatus.title}</h3>
            <p className={styles.featureDesc}>
              {t.home.features.formStatus.description}
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎯</div>
            <h3 className={styles.featureTitle}>{t.home.features.ref.title}</h3>
            <p className={styles.featureDesc}>
              {t.home.features.ref.description}
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📄</div>
            <h3 className={styles.featureTitle}>{t.home.features.metadata.title}</h3>
            <p className={styles.featureDesc}>
              {t.home.features.metadata.description}
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔥</div>
            <h3 className={styles.featureTitle}>{t.home.features.compiler.title}</h3>
            <p className={styles.featureDesc}>
              {t.home.features.compiler.description}
            </p>
          </div>
        </div>
      </div>

      {/* Improvements stats */}
      <div className={styles.stats}>
        <h2 className={styles.sectionTitle}>📈 {t.home.improvements}</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>-50%</div>
            <div className={styles.statLabel}>{t.home.stats.lessCode}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>0ms</div>
            <div className={styles.statLabel}>{t.home.stats.noDelay}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>-17kb</div>
            <div className={styles.statLabel}>{t.home.stats.noHelmet}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>100%</div>
            <div className={styles.statLabel}>SSR-friendly</div>
          </div>
        </div>
      </div>

      {/* Why upgrade */}
      <div className={styles.whyUpgrade}>
        <h2 className={styles.sectionTitle}>💡 {t.home.whyUpgrade}</h2>
        <div className={styles.reasonsGrid}>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>✨</div>
            <h3 className={styles.reasonTitle}>{t.home.reasons.lessBoilerplate.title}</h3>
            <p className={styles.reasonText}>
              {t.home.reasons.lessBoilerplate.description}
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🎨</div>
            <h3 className={styles.reasonTitle}>{t.home.reasons.betterUX.title}</h3>
            <p className={styles.reasonText}>
              {t.home.reasons.betterUX.description}
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>📦</div>
            <h3 className={styles.reasonTitle}>{t.home.reasons.smallerBundle.title}</h3>
            <p className={styles.reasonText}>
              {t.home.reasons.smallerBundle.description}
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🚀</div>
            <h3 className={styles.reasonTitle}>{t.home.reasons.futureReady.title}</h3>
            <p className={styles.reasonText}>
              {t.home.reasons.futureReady.description}
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🔧</div>
            <h3 className={styles.reasonTitle}>{t.home.reasons.easierMaintenance.title}</h3>
            <p className={styles.reasonText}>
              {t.home.reasons.easierMaintenance.description}
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>⚡</div>
            <h3 className={styles.reasonTitle}>{t.home.reasons.betterDX.title}</h3>
            <p className={styles.reasonText}>
              {t.home.reasons.betterDX.description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation through examples */}
      <div className={styles.navigation}>
        <h2 className={styles.sectionTitle}>🧭 {t.home.howToUse}</h2>
        <ol className={styles.instructionsList}>
          <li className={styles.instruction}>
            {t.home.instructions.step1}
          </li>
          <li className={styles.instruction}>
            {t.home.instructions.step2}
          </li>
          <li className={styles.instruction}>
            {t.home.instructions.step3}
          </li>
          <li className={styles.instruction}>
            {t.home.instructions.step4}
          </li>
          <li className={styles.instruction}>
            {t.home.instructions.step5}
          </li>
        </ol>
      </div>

      {/* Useful links */}
      <div className={styles.links}>
        <h2 className={styles.sectionTitle}>🔗 {t.home.usefulLinks}</h2>
        <div className={styles.linksGrid}>
          <a
            href="https://react.dev/blog/2024/12/05/react-19"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t.home.links.officialAnnouncement}
          </a>
          <a
            href="https://react.dev/reference/react"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t.home.links.documentation}
          </a>
          <a
            href="https://react.dev/reference/react-dom/hooks"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t.home.links.newHooks}
          </a>
          <a
            href="https://19.react.dev/blog/2024/04/25/react-19-upgrade-guide"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t.home.links.upgradeGuide}
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p className={styles.footerText}>
          {t.home.footer.description}
        </p>
        <p className={styles.footerText}>
          {t.home.footer.consoleNote}
        </p>
      </div>
    </div>
  );
};

