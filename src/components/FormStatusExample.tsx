import { useFormStatus } from 'react-dom';
import { saveFormData } from '../data/mockData';
import { useState } from 'react';
import styles from './Examples.module.css';

// React 19: useFormStatus - дізнатися статус форми з будь-якого дочірнього компонента!
// Цей компонент НЕ знає про форму, але може отримати її статус
const SubmitButton = () => {
  // useFormStatus повертає статус БАТЬКІВСЬКОЇ форми
  const { pending, data, method, action } = useFormStatus();

  console.log('🔍 Статус форми:', { pending, method, hasData: !!data });

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${styles.submitButton} ${pending ? styles.buttonDisabled : ''}`}
    >
      {pending ? '⏳ Відправка...' : '📤 Відправити'}
    </button>
  );
};

// Компонент що показує статус форми в реальному часі
const FormStatusIndicator = () => {
  const { pending, data } = useFormStatus();

  // Якщо форма не в процесі відправки, не показуємо індикатор
  if (!pending) return null;

  // Отримуємо дані з форми
  const formValues = data ? {
    name: data.get('name'),
    email: data.get('email'),
    priority: data.get('priority'),
  } : {};

  return (
    <div className={styles.statusIndicator}>
      <div className={styles.statusHeader}>
        <span className={styles.statusIcon}>⏳</span>
        <strong>Форма відправляється...</strong>
      </div>
      <div className={styles.statusDetails}>
        <small>Дані що відправляються:</small>
        <pre className={styles.statusData}>{JSON.stringify(formValues, null, 2)}</pre>
      </div>
    </div>
  );
};

// Кастомний input що показує чи можна його редагувати
const SmartInput = ({ name, label, type = 'text', required = false }: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) => {
  const { pending } = useFormStatus();

  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>
        {label}:
        {pending && <span className={styles.disabledBadge}>🔒 Заблоковано</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        disabled={pending} // Автоматично блокуємо під час відправки
        className={`${styles.input} ${pending ? styles.inputDisabled : ''}`}
        placeholder={pending ? 'Відправка...' : `Введіть ${label.toLowerCase()}`}
      />
    </div>
  );
};

// Кастомний select
const SmartSelect = ({ name, label, options }: {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}) => {
  const { pending } = useFormStatus();

  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{label}:</label>
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

// Головний компонент
export const FormStatusExample = () => {
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  // Action для форми
  const handleSubmit = async (formData: FormData) => {
    console.log('📤 Відправка форми...');
    
    try {
      const response = await saveFormData({
        name: formData.get('name'),
        email: formData.get('email'),
        priority: formData.get('priority'),
        subscribe: formData.get('subscribe'),
      });
      
      console.log('✅ Успіх:', response);
      setResult(response);
    } catch (error) {
      console.error('❌ Помилка:', error);
      setResult({
        success: false,
        message: error instanceof Error ? error.message : 'Помилка відправки',
      });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📊 useFormStatus</h2>
      
      <p className={styles.description}>
        <strong>Що нового?</strong> Будь-який дочірній компонент може дізнатися статус форми, 
        не передаючи пропси! Це особливо корисно для переісвикористовуваних UI компонентів.
      </p>

      {/* Пояснення проблеми в React 18 */}
      <div className={styles.problemSection}>
        <h3 className={styles.sectionTitle}>😰 Проблема в React 18:</h3>
        <p className={styles.problemText}>
          Щоб кнопка знала про статус форми, потрібно було передавати <code>isLoading</code> через пропси:
        </p>
        <pre className={styles.code}>{`// React 18: передача через пропси
const [loading, setLoading] = useState(false);

<form onSubmit={handleSubmit}>
  <input />
  <SubmitButton loading={loading} /> {/* 😢 */}
</form>`}</pre>
      </div>

      {/* Рішення в React 19 */}
      <div className={styles.solutionSection}>
        <h3 className={styles.sectionTitle}>🎉 Рішення в React 19:</h3>
        <p className={styles.solutionText}>
          Компонент <strong>автоматично</strong> знає про статус батьківської форми:
        </p>
        <pre className={styles.code}>{`// React 19: useFormStatus знає все!
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? 'Відправка...' : 'Відправити'}
    </button>
  );
}`}</pre>
      </div>

      {/* Демо форма */}
      <div className={styles.demoSection}>
        <h3 className={styles.sectionTitle}>🧪 Спробуйте самі:</h3>
        
        <form action={handleSubmit} className={styles.form}>
          {/* Індикатор статусу - він сам знає про стан форми! */}
          <FormStatusIndicator />

          {/* Кастомні інпути що самі блокуються */}
          <SmartInput
            name="name"
            label="Ім'я"
            required
          />

          <SmartInput
            name="email"
            label="Email"
            type="email"
            required
          />

          <SmartSelect
            name="priority"
            label="Пріоритет"
            options={[
              { value: 'low', label: '🟢 Низький' },
              { value: 'medium', label: '🟡 Середній' },
              { value: 'high', label: '🔴 Високий' },
            ]}
          />

          <div className={styles.checkboxGroup}>
            <CheckboxWithStatus name="subscribe" label="Підписатись на розсилку" />
          </div>

          {/* Кнопка що сама знає про стан */}
          <SubmitButton />

          {/* Результат */}
          {result && (
            <div
              className={`${styles.result} ${result.success ? styles.resultSuccess : styles.resultError}`}
            >
              {result.success ? '✅' : '❌'} {result.message}
            </div>
          )}
        </form>
      </div>

      {/* Переваги */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>💡 Переваги useFormStatus:</h3>
        <ul className={styles.list}>
          <li>✅ <strong>Немає prop drilling:</strong> не потрібно передавати стан через пропси</li>
          <li>✅ <strong>Переісвикористовувані компоненти:</strong> кнопки, інпути знають все самі</li>
          <li>✅ <strong>Менше коду:</strong> не потрібні додаткові useState для loading</li>
          <li>✅ <strong>Автоматична синхронізація:</strong> всі компоненти бачать актуальний стан</li>
          <li>✅ <strong>Доступ до даних форми:</strong> можна побачити що саме відправляється</li>
        </ul>
      </div>

      {/* Що повертає useFormStatus */}
      <div className={styles.apiSection}>
        <h3 className={styles.sectionTitle}>📖 API useFormStatus:</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Властивість</th>
              <th className={styles.th}>Тип</th>
              <th className={styles.th}>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}><code>pending</code></td>
              <td className={styles.td}>boolean</td>
              <td className={styles.td}>Чи відправляється форма зараз</td>
            </tr>
            <tr>
              <td className={styles.td}><code>data</code></td>
              <td className={styles.td}>FormData | null</td>
              <td className={styles.td}>Дані що відправляються</td>
            </tr>
            <tr>
              <td className={styles.td}><code>method</code></td>
              <td className={styles.td}>string | null</td>
              <td className={styles.td}>HTTP метод (GET/POST)</td>
            </tr>
            <tr>
              <td className={styles.td}><code>action</code></td>
              <td className={styles.td}>string | function | null</td>
              <td className={styles.td}>Action URL або функція</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Чекбокс що знає про статус форми
const CheckboxWithStatus = ({ name, label }: { name: string; label: string }) => {
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
    </label>
  );
};

