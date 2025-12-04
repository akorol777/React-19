import { use } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Examples.module.scss';

export const BreakingChangesExample = () => {
  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  const { t } = langContext;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t.breakingChanges.title}</h1>
      
      <p className={styles.description}>{t.breakingChanges.description}</p>

      {/* 1. defaultProps */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.breakingChanges.change1Title}</h2>
        <p>{t.breakingChanges.change1Description}</p>
        
        <div className={styles.comparison}>
          <h3 className={styles.subsectionTitle}>{t.breakingChanges.comparisonTitle}</h3>
          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>{t.breakingChanges.before}</h4>
              <pre className={styles.code}>{t.breakingChanges.change1Before}</pre>
            </div>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>{t.breakingChanges.after}</h4>
              <pre className={styles.code}>{t.breakingChanges.change1After}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* 2. propTypes */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.breakingChanges.change2Title}</h2>
        <p>{t.breakingChanges.change2Description}</p>
        
        <div className={styles.comparison}>
          <h3 className={styles.subsectionTitle}>{t.breakingChanges.comparisonTitle}</h3>
          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>{t.breakingChanges.before}</h4>
              <pre className={styles.code}>{t.breakingChanges.change2Before}</pre>
            </div>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>{t.breakingChanges.after}</h4>
              <pre className={styles.code}>{t.breakingChanges.change2After}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Context.Provider */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.breakingChanges.change3Title}</h2>
        <p>{t.breakingChanges.change3Description}</p>
        
        <div className={styles.comparison}>
          <h3 className={styles.subsectionTitle}>{t.breakingChanges.comparisonTitle}</h3>
          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>{t.breakingChanges.before}</h4>
              <pre className={styles.code}>{t.breakingChanges.change3Before}</pre>
            </div>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>{t.breakingChanges.after}</h4>
              <pre className={styles.code}>{t.breakingChanges.change3After}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* 4. ref handling */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.breakingChanges.change4Title}</h2>
        <p>{t.breakingChanges.change4Description}</p>
        
        <div className={styles.comparison}>
          <h3 className={styles.subsectionTitle}>{t.breakingChanges.comparisonTitle}</h3>
          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>{t.breakingChanges.before}</h4>
              <pre className={styles.code}>{t.breakingChanges.change4Before}</pre>
            </div>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>{t.breakingChanges.after}</h4>
              <pre className={styles.code}>{t.breakingChanges.change4After}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Migration Guide */}
      <div className={styles.migration}>
        <h2 className={styles.sectionTitle}>{t.breakingChanges.migrationTitle}</h2>
        <div className={styles.migrationSteps}>
          {t.breakingChanges.migrationSteps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <div>
                <strong>{step.title}</strong>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complexity Table */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t.breakingChanges.complexityTitle}</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>{t.breakingChanges.complexityTable.change}</th>
              <th className={styles.th}>{t.breakingChanges.complexityTable.difficulty}</th>
              <th className={styles.th}>{t.breakingChanges.complexityTable.automation}</th>
            </tr>
          </thead>
          <tbody>
            {t.breakingChanges.complexityTable.rows.map((row, index) => (
              <tr key={index}>
                <td className={styles.td}>{row.change}</td>
                <td className={styles.td}>{row.difficulty}</td>
                <td className={styles.td}>{row.automation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Important Notes */}
      <div className={styles.notes}>
        <h3 className={styles.sectionTitle}>{t.breakingChanges.importantTitle}</h3>
        <ul className={styles.notesList}>
          {t.breakingChanges.importantNotes.map((note, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: `⚠️ ${note}` }} />
          ))}
        </ul>
      </div>
    </div>
  );
};
