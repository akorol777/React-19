import { useFormStatus } from 'react-dom';
import { saveFormData } from '../data/mockData';
import { use, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Examples.module.scss';

// React 19: useFormStatus - get form status from any child component!
// This component doesn't know about the form, but can get its status
const SubmitButton = ({ t }: { t: any }) => {
  // useFormStatus returns status of PARENT form
  const { pending, data, method } = useFormStatus();

  console.log('🔍 Form status:', { pending, method, hasData: !!data });

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${styles.submitButton} ${pending ? styles.buttonDisabled : ''}`}
    >
      {pending ? `⏳ ${t.form.submittingButton}` : `📤 ${t.form.submitButton}`}
    </button>
  );
};

// Component that shows form status in real-time
const FormStatusIndicator = ({ t }: { t: any }) => {
  const { pending, data } = useFormStatus();

  // If form is not being submitted, don't show indicator
  if (!pending) return null;

  // Get data from form
  const formValues = data ? {
    name: data.get('name'),
    email: data.get('email'),
    priority: data.get('priority'),
  } : {};

  return (
    <div className={styles.statusIndicator}>
      <div className={styles.statusHeader}>
        <span className={styles.statusIcon}>⏳</span>
        <strong>{t.statusIndicator.submitting}</strong>
      </div>
      <div className={styles.statusDetails}>
        <small>{t.statusIndicator.dataSent}</small>
        <pre className={styles.statusData}>{JSON.stringify(formValues, null, 2)}</pre>
      </div>
    </div>
  );
};

// Custom input that shows if it can be edited
const SmartInput = ({ name, label, type = 'text', required = false, t }: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  t: any;
}) => {
  const { pending } = useFormStatus();

  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>
        {label}
        {pending && <span className={styles.disabledBadge}>{t.smartInputs.locked}</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        disabled={pending} // Automatically lock during submission
        className={`${styles.input} ${pending ? styles.inputDisabled : ''}`}
        placeholder={pending ? t.smartInputs.submitting : `${t.smartInputs.enterPrefix} ${label.toLowerCase()}`}
      />
    </div>
  );
};

// Custom select
const SmartSelect = ({ name, label, options }: {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}) => {
  const { pending } = useFormStatus();

  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{label}</label>
      <select
        name={name}
        disabled={pending}
        className={`${styles.input} ${pending ? styles.inputDisabled : ''}`}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Main component
export const FormStatusExample = () => {
  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  const { t } = langContext;

  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  // Action for form
  const handleSubmit = async (formData: FormData) => {
    console.log('📤 Submitting form...');
    
    try {
      const response = await saveFormData({
        name: formData.get('name'),
        email: formData.get('email'),
        priority: formData.get('priority'),
        subscribe: formData.get('subscribe'),
      });
      
      console.log('✅ Success:', response);
      setResult(response);
    } catch (error) {
      console.error('❌ Error:', error);
      setResult({
        success: false,
        message: error instanceof Error ? error.message : 'Submission error',
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📊 {t.formStatus.title}</h2>
      
      <p className={styles.description}>
        <strong>{t.formStatus.whatsNew}</strong> {t.formStatus.description}
      </p>

      {/* Problem explanation in React 18 */}
      <div className={styles.problemSection}>
        <h3 className={styles.sectionTitle}>{t.formStatus.problemSection.title}</h3>
        <p className={styles.problemText} dangerouslySetInnerHTML={{ __html: t.formStatus.problemSection.text }}>
        </p>
        <pre className={styles.code}>{`// React 18: passing through props
const [loading, setLoading] = useState(false);

<form onSubmit={handleSubmit}>
  <input />
  <SubmitButton loading={loading} /> {/* 😢 */}
</form>`}</pre>
      </div>

      {/* Solution in React 19 */}
      <div className={styles.solutionSection}>
        <h3 className={styles.sectionTitle}>{t.formStatus.solutionSection.title}</h3>
        <p className={styles.solutionText} dangerouslySetInnerHTML={{ __html: t.formStatus.solutionSection.text }}>
        </p>
        <pre className={styles.code}>{`// React 19: useFormStatus knows everything!
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}`}</pre>
      </div>

      {/* Demo form */}
      <div className={styles.demoSection}>
        <h3 className={styles.sectionTitle}>{t.formStatus.demoTitle}</h3>
        
        <form action={handleSubmit} className={styles.form}>
          {/* Status indicator - it knows form state itself! */}
          <FormStatusIndicator t={t.formStatus} />

          {/* Custom inputs that block themselves */}
          <SmartInput
            name="name"
            label={t.formStatus.form.nameLabel.replace(':', '')}
            required
            t={t.formStatus}
          />

          <SmartInput
            name="email"
            label={t.formStatus.form.emailLabel.replace(':', '')}
            type="email"
            required
            t={t.formStatus}
          />

          <SmartSelect
            name="priority"
            label={t.formStatus.form.priorityLabel.replace(':', '')}
            options={[
              { value: 'low', label: t.formStatus.form.priorityOptions.low },
              { value: 'medium', label: t.formStatus.form.priorityOptions.medium },
              { value: 'high', label: t.formStatus.form.priorityOptions.high },
            ]}
          />

          <div className={styles.checkboxGroup}>
            <CheckboxWithStatus name="subscribe" label={t.formStatus.form.subscribeLabel} t={t.formStatus} />
          </div>

          {/* Button that knows state itself */}
          <SubmitButton t={t.formStatus} />

          {/* Result */}
          {result && (
            <div
              className={`${styles.result} ${result.success ? styles.resultSuccess : styles.resultError}`}
            >
              {result.success ? '✅' : '❌'} {result.message}
            </div>
          )}
        </form>
      </div>

      {/* Benefits */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>{t.formStatus.benefitsTitle}</h3>
        <ul className={styles.list}>
          {t.formStatus.benefitsList.map((benefit: string, index: number) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: benefit }} />
          ))}
        </ul>
      </div>

      {/* What useFormStatus returns */}
      <div className={styles.apiSection}>
        <h3 className={styles.sectionTitle}>{t.formStatus.apiSection.title}</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>{t.formStatus.apiSection.table.property}</th>
              <th className={styles.th}>{t.formStatus.apiSection.table.type}</th>
              <th className={styles.th}>{t.formStatus.apiSection.table.description}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}><code>pending</code></td>
              <td className={styles.td}>boolean</td>
              <td className={styles.td}>{t.formStatus.apiSection.table.pending}</td>
            </tr>
            <tr>
              <td className={styles.td}><code>data</code></td>
              <td className={styles.td}>FormData | null</td>
              <td className={styles.td}>{t.formStatus.apiSection.table.data}</td>
            </tr>
            <tr>
              <td className={styles.td}><code>method</code></td>
              <td className={styles.td}>string | null</td>
              <td className={styles.td}>{t.formStatus.apiSection.table.method}</td>
            </tr>
            <tr>
              <td className={styles.td}><code>action</code></td>
              <td className={styles.td}>string | function | null</td>
              <td className={styles.td}>{t.formStatus.apiSection.table.action}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Checkbox that knows about form status
const CheckboxWithStatus = ({ name, label, t }: { name: string; label: string; t: any }) => {
  const { pending } = useFormStatus();
  
  return (
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        name={name}
        disabled={pending}
        className={styles.checkbox}
      />
      <span className={pending ? styles.textDisabled : ''}>{label}</span>
      {pending && <span className={styles.disabledBadge}>{t.smartInputs.locked}</span>}
    </label>
  );
};

