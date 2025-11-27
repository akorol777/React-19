import { use, useState, useActionState } from 'react';
import { Form, Field } from 'react-final-form';
import { saveFormData } from '../data/mockData';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Examples.module.scss';

// React 18 approach: Final Form
const FinalFormExample = () => {
  const [result, setResult] = useState<string>('');

  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  const { t } = langContext;
  const tf = t.finalForm;

  // Validation for Final Form
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = tf.validation.required;
    }
    if (!values.email) {
      errors.email = tf.validation.required;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = tf.validation.emailInvalid;
    }
    return errors;
  };

  // Submit handler
  const onSubmit = async (values: any) => {
    console.log('📤 Final Form submission:', values);
    setResult('');
    
    try {
      const response = await saveFormData(values);
      console.log('✅ Final Form success:', response);
      setResult(`✅ ${response.message}`);
      return undefined; // Return undefined on success
    } catch (error) {
      console.error('❌ Final Form error:', error);
      setResult(`❌ ${error instanceof Error ? error.message : tf.validation.error}`);
      return { _error: tf.validation.error };
    }
  };

  return (
    <div className={styles.formExample}>
      <h4 className={styles.formTitle}>{tf.formTitles.finalForm}</h4>
      
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Field name="name">
              {({ input, meta }) => (
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>{tf.form.nameLabel}</label>
                  <input
                    {...input}
                    type="text"
                    placeholder={tf.form.namePlaceholder}
                    className={`${styles.input} ${meta.error && meta.touched ? styles.inputError : ''}`}
                  />
                  {meta.error && meta.touched && (
                    <span className={styles.error}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>

            <Field name="email">
              {({ input, meta }) => (
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Email:</label>
                  <input
                    {...input}
                    type="email"
                    placeholder="your@email.com"
                    className={`${styles.input} ${meta.error && meta.touched ? styles.inputError : ''}`}
                  />
                  {meta.error && meta.touched && (
                    <span className={styles.error}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>

            <Field name="message" component="textarea">
              {({ input, meta }) => (
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>{tf.form.messageLabel}</label>
                  <textarea
                    {...input}
                    placeholder={tf.form.messagePlaceholder}
                    className={`${styles.textarea} ${meta.error && meta.touched ? styles.inputError : ''}`}
                  />
                </div>
              )}
            </Field>

            <button
              type="submit"
              disabled={submitting || pristine}
              className={`${styles.submitButton} ${submitting || pristine ? styles.buttonDisabled : ''}`}
            >
              {submitting ? `⏳ ${tf.form.submittingButton}` : `📤 ${tf.form.submitButton}`}
            </button>

            {/* Debug info */}
            <div className={styles.debugInfo}>
              <small>
                <strong>{tf.form.formState}</strong>
                <br />
                {tf.form.submitting} {submitting ? tf.form.yes : tf.form.no}
                <br />
                {tf.form.pristine} {pristine ? tf.form.yes : tf.form.no}
                <br />
                {tf.form.values} {JSON.stringify(values, null, 2)}
              </small>
            </div>

            {result && (
              <div className={styles.result}>
                {result}
              </div>
            )}
          </form>
        )}
      />

      <div className={styles.codeBlock}>
        <strong>📝 {tf.form.linesOfCode}</strong> ~80 lines
        <br />
        <strong>📦 {tf.form.bundleSize}</strong> +25kb (Final Form)
      </div>
    </div>
  );
};

// React 19 approach: useActionState
const React19FormExample = () => {
  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  const { t } = langContext;
  const tf = t.finalForm;

  // React 19: useActionState
  const [state, submitAction, isPending] = useActionState(
    async (_prevState: any, formData: FormData) => {
      console.log('📤 React 19 submission');
      
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      // Simple validation
      if (!name) {
        return { success: false, message: tf.validation.nameRequired, errors: { name: true } };
      }
      if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        return { success: false, message: tf.validation.emailInvalid, errors: { email: true } };
      }

      try {
        const response = await saveFormData({ name, email, message });
        console.log('✅ React 19 success:', response);
        return { success: true, message: response.message, errors: {} };
      } catch (error) {
        console.error('❌ React 19 error:', error);
        return { 
          success: false, 
          message: error instanceof Error ? error.message : tf.validation.error,
          errors: {}
        };
      }
    },
    { success: false, message: '', errors: {} }
  );

  return (
    <div className={styles.formExample}>
      <h4 className={styles.formTitle}>{tf.formTitles.react19}</h4>
      
      <form action={submitAction} className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>{tf.form.nameLabel}</label>
          <input
            name="name"
            type="text"
            placeholder={tf.form.namePlaceholder}
            required
            disabled={isPending}
            className={`${styles.input} ${state.errors?.name ? styles.inputError : ''}`}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Email:</label>
          <input
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            disabled={isPending}
            className={`${styles.input} ${state.errors?.email ? styles.inputError : ''}`}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>{tf.form.messageLabel}</label>
          <textarea
            name="message"
            placeholder={tf.form.messagePlaceholder}
            disabled={isPending}
            className={styles.textarea}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`${styles.submitButton} ${isPending ? styles.buttonDisabled : ''}`}
        >
          {isPending ? `⏳ ${tf.form.submittingButton}` : `📤 ${tf.form.submitButton}`}
        </button>

        {/* Debug info */}
        <div className={styles.debugInfo}>
          <small>
            <strong>{tf.form.formState}</strong>
            <br />
            {tf.form.pending} {isPending ? tf.form.yes : tf.form.no}
            <br />
            {tf.form.success} {state.success ? tf.form.yes : tf.form.no}
          </small>
        </div>

        {state.message && (
          <div 
            className={`${styles.message} ${state.success ? styles.messageSuccess : styles.messageError}`}
          >
            {state.message}
          </div>
        )}
      </form>

      <div className={styles.codeBlock}>
        <strong>📝 {tf.form.linesOfCode}</strong> ~40 lines
        <br />
        <strong>📦 {tf.form.bundleSize}</strong> 0kb ({tf.form.builtIntoReact})
      </div>
    </div>
  );
};

// Головний компонент
export const FinalFormComparison = () => {
  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  const { t } = langContext;
  const tf = t.finalForm;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📋 {tf.title}</h2>
      
      <p className={styles.description}>
        {tf.description}
      </p>

      {/* Comparison table */}
      <div className={styles.comparisonTable}>
        <h3 className={styles.sectionTitle}>⚖️ {tf.comparisonTableTitle}</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>{tf.table.feature}</th>
              <th className={styles.th}>{tf.table.finalForm}</th>
              <th className={styles.th}>{tf.table.react19}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>{tf.table.stateManagement}</td>
              <td className={styles.td}>✅ {tf.table.automatic}</td>
              <td className={styles.td}>✅ {tf.table.automatic}</td>
            </tr>
            <tr>
              <td className={styles.td}>{tf.table.loadingState}</td>
              <td className={styles.td}>✅ submitting</td>
              <td className={styles.td}>✅ isPending</td>
            </tr>
            <tr>
              <td className={styles.td}>{tf.table.validation}</td>
              <td className={styles.td}>✅ {tf.table.builtIn}</td>
              <td className={styles.td}>⚠️ {tf.table.manual}</td>
            </tr>
            <tr>
              <td className={styles.td}>{tf.table.fieldValidation}</td>
              <td className={styles.td}>✅ {tf.table.yes}</td>
              <td className={styles.td}>❌ {tf.table.formOnly}</td>
            </tr>
            <tr>
              <td className={styles.td}>{tf.table.dirtyPristine}</td>
              <td className={styles.td}>✅ {tf.table.automatic}</td>
              <td className={styles.td}>❌ {tf.table.manualImplementation}</td>
            </tr>
            <tr>
              <td className={styles.td}>{tf.table.bundleSize}</td>
              <td className={styles.td}>❌ +25kb</td>
              <td className={styles.td}>✅ 0kb ({tf.form.builtIntoReact})</td>
            </tr>
            <tr>
              <td className={styles.td}>{tf.table.apiComplexity}</td>
              <td className={styles.td}>⚠️ {tf.table.medium}</td>
              <td className={styles.td}>✅ {tf.table.simple}</td>
            </tr>
            <tr>
              <td className={styles.td}>{tf.table.ssrSupport}</td>
              <td className={styles.td}>⚠️ {tf.table.requiresConfig}</td>
              <td className={styles.td}>✅ {tf.table.outOfBox}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Interactive comparison */}
      <div className={styles.interactiveComparison}>
        <h3 className={styles.sectionTitle}>🧪 {tf.interactiveTitle}</h3>
        
        <div className={styles.formsGrid}>
          <FinalFormExample />
          <React19FormExample />
        </div>
      </div>

      {/* When to use what */}
      <div className={styles.whenToUse}>
        <h3 className={styles.sectionTitle}>🤔 {tf.whenToUse.title}</h3>
        
        <div className={styles.whenToUseGrid}>
          <div className={styles.whenCard}>
            <h4 className={styles.whenTitle}>{tf.whenToUse.finalForm.title}</h4>
            <p className={styles.whenSubtitle}>{tf.whenToUse.finalForm.subtitle}</p>
            <ul className={styles.whenList}>
              {tf.whenToUse.finalForm.items.map((item: string, index: number) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.whenCard}>
            <h4 className={styles.whenTitle}>{tf.whenToUse.react19.title}</h4>
            <p className={styles.whenSubtitle}>{tf.whenToUse.react19.subtitle}</p>
            <ul className={styles.whenList}>
              {tf.whenToUse.react19.items.map((item: string, index: number) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Migration strategy */}
      <div className={styles.migration}>
        <h3 className={styles.sectionTitle}>🔄 {tf.migration.title}</h3>
        <div className={styles.migrationSteps}>
          {tf.migration.steps.map((step: any, index: number) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{index + 1}</div>
              <div>
                <strong>{step.title}</strong>
                <p className={styles.stepDesc}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>{tf.conclusionSection.title}</h3>
        <ul className={styles.list}>
          {tf.conclusionSection.benefits.map((benefit: string, index: number) => (
            <li key={index}>✅ {benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

