import { use } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Examples.module.scss';

// Main component
export const UseHookExample = () => {
  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  const { t } = langContext;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🎣 {t.useHook.title}</h2>

      <p className={styles.description}>{t.useHook.description}</p>

      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>{t.useHook.whatCanDo}</h3>
        <ul className={styles.list}>
          {t.useHook.capabilities.map((cap, index) => (
            <li key={index}>✅ {cap}</li>
          ))}
        </ul>
      </div>

      {/* Explanation */}
      <div className={styles.explanation}>
        <h3 className={styles.sectionTitle}>{t.useHook.keyDifference}</h3>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <h4>{t.useHook.otherHooks.title}</h4>
            <ul className={styles.list}>
              {t.useHook.otherHooks.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.comparisonItem}>
            <h4>{t.useHook.useHookBenefits.title}</h4>
            <ul className={styles.list}>
              {t.useHook.useHookBenefits.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison with React 18 */}
      <div className={styles.comparison}>
        <h3 className={styles.sectionTitle}>{t.useHook.comparisonTitle}</h3>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <h4 className={styles.comparisonTitle}>{t.useHook.react18.title}</h4>
            <pre className={styles.code}>{t.useHook.react18.codeExample}</pre>
          </div>

          <div className={styles.comparisonItem}>
            <h4 className={styles.comparisonTitle}>{t.useHook.react19.title}</h4>
            <pre className={styles.code}>{t.useHook.react19.codeExample}</pre>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>{t.useHook.benefitsTitle}</h3>
        <ul className={styles.list}>
          {t.useHook.benefits.map((benefit: string, index: number) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: benefit }} />
          ))}
        </ul>
      </div>

      {/* Important notes */}
      <div className={styles.notes}>
        <h3 className={styles.sectionTitle}>{t.useHook.importantTitle}</h3>
        <ul className={styles.notesList}>
          {t.useHook.importantNotes.map((note: string, index: number) => (
            <li key={index}>
              ⚠️ <span dangerouslySetInnerHTML={{ __html: note }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
