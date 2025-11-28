import { use } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Examples.module.scss';

// React 19: React Compiler demonstration
export const CompilerExample = () => {
  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  const { t } = langContext;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🤖 {t.compiler.title}</h2>
      
      <p className={styles.description}>
        {t.compiler.description}
      </p>

      {/* What is React Compiler */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>{t.compiler.whatIsCompiler}</h3>
        <p className={styles.description}>
          {t.compiler.compilerDescription}
        </p>
      </div>

      {/* Comparison React 18 vs 19 */}
      <div className={styles.comparison}>
        <h3 className={styles.sectionTitle}>{t.compiler.comparisonTitle}</h3>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <h4 className={styles.comparisonTitle}>{t.compiler.react18Title}</h4>
            <pre className={styles.code}>{t.compiler.react18Code}</pre>
          </div>

          <div className={styles.comparisonItem}>
            <h4 className={styles.comparisonTitle}>{t.compiler.react19Title}</h4>
            <pre className={styles.code}>{t.compiler.react19Code}</pre>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>{t.compiler.howItWorksTitle}</h3>
        <ul className={styles.list}>
          {t.compiler.howItWorks.map((step: string, index: number) => (
            <li key={index}>✅ {step}</li>
          ))}
        </ul>
      </div>

      {/* Real examples */}
      <div className={styles.codeExamples}>
        <h3 className={styles.sectionTitle}>{t.compiler.realExamplesTitle}</h3>

        {/* Example 1: Expensive calculation */}
        <h4 className={styles.codeTitle}>{t.compiler.realExamples.expensiveCalculation.title}</h4>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <h5 className={styles.subsectionTitle}>{t.compiler.before}</h5>
            <pre className={styles.code}>{t.compiler.realExamples.expensiveCalculation.before}</pre>
          </div>
          <div className={styles.comparisonItem}>
            <h5 className={styles.subsectionTitle}>{t.compiler.after}</h5>
            <pre className={styles.code}>{t.compiler.realExamples.expensiveCalculation.after}</pre>
          </div>
        </div>

        {/* Example 2: Event handlers */}
        <h4 className={styles.codeTitle} style={{ marginTop: '30px' }}>{t.compiler.realExamples.eventHandlers.title}</h4>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <h5 className={styles.subsectionTitle}>{t.compiler.before}</h5>
            <pre className={styles.code}>{t.compiler.realExamples.eventHandlers.before}</pre>
          </div>
          <div className={styles.comparisonItem}>
            <h5 className={styles.subsectionTitle}>{t.compiler.after}</h5>
            <pre className={styles.code}>{t.compiler.realExamples.eventHandlers.after}</pre>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>{t.compiler.benefitsTitle}</h3>
        <ul className={styles.list}>
          {t.compiler.benefits.map((benefit: string, index: number) => (
            <li key={index}>✅ {benefit}</li>
          ))}
        </ul>
      </div>

      {/* How to enable */}
      <div className={styles.explanation}>
        <h3 className={styles.sectionTitle}>{t.compiler.howToEnableTitle}</h3>
        
        <div style={{ marginBottom: '20px' }}>
          <h4 className={styles.subsectionTitle}>{t.compiler.howToEnable.step1}</h4>
          <pre className={styles.code}>{t.compiler.howToEnable.step1Code}</pre>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h4 className={styles.subsectionTitle}>{t.compiler.howToEnable.step2}</h4>
          <pre className={styles.code}>{t.compiler.howToEnable.step2Code}</pre>
        </div>

        <div>
          <h4 className={styles.subsectionTitle}>{t.compiler.howToEnable.step3}</h4>
        </div>
      </div>

      {/* Important notes */}
      <div className={styles.notes}>
        <h3 className={styles.sectionTitle}>{t.compiler.importantTitle}</h3>
        <ul className={styles.notesList}>
          {t.compiler.importantNotes.map((note: string, index: number) => (
            <li key={index}>
              ⚠️ <span dangerouslySetInnerHTML={{ __html: note }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

