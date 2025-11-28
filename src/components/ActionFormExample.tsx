import { use, useActionState } from 'react';
import { saveFormData } from '../data/mockData';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Examples.module.scss';

// Type for form state
interface FormState {
  success: boolean;
  message: string;
  data?: Record<string, string>;
}

// React 19: useActionState - new hook for form handling
export const ActionFormExample = () => {
  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  const { t } = langContext;

  // useActionState returns: [state, action function, isPending]
  const [state, submitAction, isPending] = useActionState(
    // Action function - accepts previous state and FormData
    async (previousState: FormState, formData: FormData): Promise<FormState> => {
      console.log('🎬 Action started!');
      console.log('📋 Previous state:', previousState);
      
      // Get data from form
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      console.log('📝 Form data:', { name, email, message });

      try {
        // Simulate sending to server
        const result = await saveFormData({ name, email, message });
        
        return {
          success: true,
          message: result.message,
          data: { name, email, message },
        };
      } catch (error) {
        console.error('❌ Error:', error);
        return {
          success: false,
          message: error instanceof Error ? error.message : 'Unknown error',
        };
      }
    },
    // Initial state
    { success: false, message: '' }
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>⚡ {t.actions.title}</h2>
      <p className={styles.description}>
        {t.actions.description}
      </p>

      <div className={styles.comparison}>
        <h3 className={styles.sectionTitle}>{t.actions.comparisonTitle}</h3>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <h4 className={styles.comparisonTitle}>{t.actions.react18Title}</h4>
            <pre className={styles.code}>{`const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  try {
    await saveData(data);
  } catch (err) {
    setError(err);
  } finally {
    setLoading(false);
  }
}`}</pre>
          </div>

          <div className={styles.comparisonItem}>
            <h4 className={styles.comparisonTitle}>{t.actions.react19Title}</h4>
            <pre className={styles.code}>{`const [state, action, isPending] = 
  useActionState(
    async (prev, formData) => {
      // Just write the logic
      await saveData(formData);
      return { success: true };
    },
    { success: false }
  );`}</pre>
          </div>
        </div>
      </div>

      {/* Form with Action */}
      <form action={submitAction} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>{t.actions.form.nameLabel}</label>
          <input
            name="name"
            type="text"
            required
            className={styles.input}
            placeholder={t.actions.form.namePlaceholder}
            disabled={isPending}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>{t.actions.form.emailLabel}</label>
          <input
            name="email"
            type="email"
            required
            className={styles.input}
            placeholder={t.actions.form.emailPlaceholder}
            disabled={isPending}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>{t.actions.form.messageLabel}</label>
          <textarea
            name="message"
            required
            className={styles.textarea}
            placeholder={t.actions.form.messagePlaceholder}
            disabled={isPending}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`${styles.button} ${isPending ? styles.buttonDisabled : ''}`}
        >
          {isPending ? `⏳ ${t.actions.form.submittingButton}` : `📤 ${t.actions.form.submitButton}`}
        </button>

        {/* Show result */}
        {state.message && (
          <div
            className={`${styles.message} ${state.success ? styles.messageSuccess : styles.messageError}`}
          >
            {state.success ? '✅' : '❌'} {state.message}
            {state.data && (
              <div className={styles.messageData}>
                <strong>{t.actions.messages.successData}</strong>
                <pre>{JSON.stringify(state.data, null, 2)}</pre>
              </div>
            )}
          </div>
        )}
      </form>

      {/* Real examples */}
      <div className={styles.codeExamples}>
        <h3 className={styles.sectionTitle}>{t.actions.realExamplesTitle}</h3>

        <div className={styles.codeBlock}>
          <h4 className={styles.codeTitle}>{t.actions.realExamples.loginForm.title}</h4>
          <pre className={styles.code}>{t.actions.realExamples.loginForm.code}</pre>
        </div>

        <div className={styles.codeBlock}>
          <h4 className={styles.codeTitle}>{t.actions.realExamples.fileUpload.title}</h4>
          <pre className={styles.code}>{t.actions.realExamples.fileUpload.code}</pre>
        </div>
      </div>

      {/* API documentation */}
      <div className={styles.apiSection}>
        <h3 className={styles.sectionTitle}>{t.actions.apiSectionTitle}</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>{t.actions.apiTable.returns}</th>
              <th className={styles.th}>{t.actions.apiTable.type}</th>
              <th className={styles.th}>{t.actions.apiTable.description}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}><code>state</code></td>
              <td className={styles.td}>any</td>
              <td className={styles.td}>{t.actions.apiTable.state}</td>
            </tr>
            <tr>
              <td className={styles.td}><code>action</code></td>
              <td className={styles.td}>function</td>
              <td className={styles.td}>{t.actions.apiTable.action}</td>
            </tr>
            <tr>
              <td className={styles.td}><code>isPending</code></td>
              <td className={styles.td}>boolean</td>
              <td className={styles.td}>{t.actions.apiTable.isPending}</td>
            </tr>
          </tbody>
        </table>

        <h4 className={styles.subsectionTitle} style={{ marginTop: '20px' }}>{t.actions.apiTable.parameter}:</h4>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>{t.actions.apiTable.parameter}</th>
              <th className={styles.th}>{t.actions.apiTable.type}</th>
              <th className={styles.th}>{t.actions.apiTable.description}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}><code>action</code></td>
              <td className={styles.td}>async function</td>
              <td className={styles.td}>{t.actions.apiTable.actionParam}</td>
            </tr>
            <tr>
              <td className={styles.td}><code>initialState</code></td>
              <td className={styles.td}>any</td>
              <td className={styles.td}>{t.actions.apiTable.initialState}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Benefits */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>{t.actions.benefits}</h3>
        <ul className={styles.list}>
          {t.actions.benefitsList.map((benefit, index) => (
            <li key={index}>✅ {benefit}</li>
          ))}
        </ul>
      </div>

      {/* Important notes */}
      <div className={styles.notes}>
        <h3 className={styles.sectionTitle}>{t.actions.importantTitle}</h3>
        <ul className={styles.notesList}>
          {t.actions.importantNotes.map((note: string, index: number) => (
            <li key={index}>
              ⚠️ <span dangerouslySetInnerHTML={{ __html: note }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
