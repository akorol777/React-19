import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useActionState } from 'react';
import { saveFormData } from '../data/mockData';
import styles from './Examples.module.css';

// React 18 підхід: Final Form
const FinalFormExample = () => {
  const [result, setResult] = useState<string>('');

  // Валідація для Final Form
  const validate = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = 'Обов\'язкове поле';
    }
    if (!values.email) {
      errors.email = 'Обов\'язкове поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Невалідний email';
    }
    return errors;
  };

  // Submit handler
  const onSubmit = async (values: any) => {
    console.log('📤 Final Form відправка:', values);
    setResult('');
    
    try {
      const response = await saveFormData(values);
      console.log('✅ Final Form успіх:', response);
      setResult(`✅ ${response.message}`);
      return undefined; // Повертаємо undefined при успіху
    } catch (error) {
      console.error('❌ Final Form помилка:', error);
      setResult(`❌ ${error instanceof Error ? error.message : 'Помилка'}`);
      return { _error: 'Помилка відправки' };
    }
  };

  return (
    <div className={styles.formExample}>
      <h4 className={styles.formTitle}>📋 Final Form (React 18 підхід)</h4>
      
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Field name="name">
              {({ input, meta }) => (
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Ім'я:</label>
                  <input
                    {...input}
                    type="text"
                    placeholder="Ваше ім'я"
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
                  <label className={styles.label}>Повідомлення:</label>
                  <textarea
                    {...input}
                    placeholder="Ваше повідомлення..."
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
              {submitting ? '⏳ Відправка...' : '📤 Відправити'}
            </button>

            {/* Debug info */}
            <div className={styles.debugInfo}>
              <small>
                <strong>Стан форми:</strong>
                <br />
                Submitting: {submitting ? 'Так' : 'Ні'}
                <br />
                Pristine: {pristine ? 'Так' : 'Ні'}
                <br />
                Values: {JSON.stringify(values, null, 2)}
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
        <strong>📝 Кількість коду:</strong> ~80 рядків
        <br />
        <strong>📦 Розмір бандла:</strong> +25kb (Final Form)
      </div>
    </div>
  );
};

// React 19 підхід: useActionState
const React19FormExample = () => {
  // React 19: useActionState
  const [state, submitAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      console.log('📤 React 19 відправка');
      
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      // Проста валідація
      if (!name) {
        return { success: false, message: 'Ім\'я обов\'язкове', errors: { name: true } };
      }
      if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        return { success: false, message: 'Невалідний email', errors: { email: true } };
      }

      try {
        const response = await saveFormData({ name, email, message });
        console.log('✅ React 19 успіх:', response);
        return { success: true, message: response.message, errors: {} };
      } catch (error) {
        console.error('❌ React 19 помилка:', error);
        return { 
          success: false, 
          message: error instanceof Error ? error.message : 'Помилка',
          errors: {}
        };
      }
    },
    { success: false, message: '', errors: {} }
  );

  return (
    <div className={styles.formExample}>
      <h4 className={styles.formTitle}>⚡ React 19 Actions (новий підхід)</h4>
      
      <form action={submitAction} className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Ім'я:</label>
          <input
            name="name"
            type="text"
            placeholder="Ваше ім'я"
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
          <label className={styles.label}>Повідомлення:</label>
          <textarea
            name="message"
            placeholder="Ваше повідомлення..."
            disabled={isPending}
            className={styles.textarea}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`${styles.submitButton} ${isPending ? styles.buttonDisabled : ''}`}
        >
          {isPending ? '⏳ Відправка...' : '📤 Відправити'}
        </button>

        {/* Debug info */}
        <div className={styles.debugInfo}>
          <small>
            <strong>Стан форми:</strong>
            <br />
            Pending: {isPending ? 'Так' : 'Ні'}
            <br />
            Success: {state.success ? 'Так' : 'Ні'}
          </small>
        </div>

        {state.message && (
          <div 
            className={styles.result}
            style={{
              color: state.success ? '#155724' : '#721c24',
              backgroundColor: state.success ? '#d4edda' : '#f8d7da',
            }}
          >
            {state.message}
          </div>
        )}
      </form>

      <div className={styles.codeBlock}>
        <strong>📝 Кількість коду:</strong> ~40 рядків
        <br />
        <strong>📦 Розмір бандла:</strong> 0kb (вбудовано в React)
      </div>
    </div>
  );
};

// Головний компонент
export const FinalFormComparison = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📋 Final Form vs React 19</h2>
      
      <p className={styles.description}>
        <strong>Порівняння підходів:</strong> Final Form був стандартом для складних форм у React 18. 
        В React 19 багато його можливостей тепер вбудовані нативно!
      </p>

      {/* Порівняльна таблиця */}
      <div className={styles.comparisonTable}>
        <h3 className={styles.sectionTitle}>⚖️ Порівняння функціональності:</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Функція</th>
              <th className={styles.th}>Final Form</th>
              <th className={styles.th}>React 19</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>Керування станом</td>
              <td className={styles.td}>✅ Автоматичне</td>
              <td className={styles.td}>✅ Автоматичне</td>
            </tr>
            <tr>
              <td className={styles.td}>Loading стан</td>
              <td className={styles.td}>✅ submitting</td>
              <td className={styles.td}>✅ isPending</td>
            </tr>
            <tr>
              <td className={styles.td}>Валідація</td>
              <td className={styles.td}>✅ Вбудована</td>
              <td className={styles.td}>⚠️ Треба писати вручну</td>
            </tr>
            <tr>
              <td className={styles.td}>Field-level validation</td>
              <td className={styles.td}>✅ Так</td>
              <td className={styles.td}>❌ Ні (тільки форма)</td>
            </tr>
            <tr>
              <td className={styles.td}>Dirty/Pristine</td>
              <td className={styles.td}>✅ Автоматично</td>
              <td className={styles.td}>❌ Треба самому</td>
            </tr>
            <tr>
              <td className={styles.td}>Розмір бандлу</td>
              <td className={styles.td}>❌ +25kb</td>
              <td className={styles.td}>✅ 0kb (вбудовано)</td>
            </tr>
            <tr>
              <td className={styles.td}>Складність API</td>
              <td className={styles.td}>⚠️ Середня</td>
              <td className={styles.td}>✅ Проста</td>
            </tr>
            <tr>
              <td className={styles.td}>SSR підтримка</td>
              <td className={styles.td}>⚠️ Потребує налаштування</td>
              <td className={styles.td}>✅ Out of the box</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Інтерактивне порівняння */}
      <div className={styles.interactiveComparison}>
        <h3 className={styles.sectionTitle}>🧪 Спробуйте обидва підходи:</h3>
        
        <div className={styles.formsGrid}>
          <FinalFormExample />
          <React19FormExample />
        </div>
      </div>

      {/* Коли що використовувати */}
      <div className={styles.whenToUse}>
        <h3 className={styles.sectionTitle}>🤔 Коли що використовувати?</h3>
        
        <div className={styles.whenToUseGrid}>
          <div className={styles.whenCard}>
            <h4 className={styles.whenTitle}>📋 Final Form</h4>
            <p className={styles.whenSubtitle}>Використовуйте коли:</p>
            <ul className={styles.whenList}>
              <li>✅ Потрібна складна валідація на рівні полів</li>
              <li>✅ Багато динамічних полів</li>
              <li>✅ Складні форми з wizard/steps</li>
              <li>✅ Потрібні field arrays</li>
              <li>✅ Вже є в проекті і працює</li>
            </ul>
          </div>

          <div className={styles.whenCard}>
            <h4 className={styles.whenTitle}>⚡ React 19 Actions</h4>
            <p className={styles.whenSubtitle}>Використовуйте коли:</p>
            <ul className={styles.whenList}>
              <li>✅ Прості/середні форми</li>
              <li>✅ Новий проект на React 19</li>
              <li>✅ Важливий розмір бандлу</li>
              <li>✅ Потрібен SSR/RSC</li>
              <li>✅ Хочете простіший код</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Міграційна стратегія */}
      <div className={styles.migration}>
        <h3 className={styles.sectionTitle}>🔄 Стратегія міграції:</h3>
        <div className={styles.migrationSteps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div>
              <strong>Оцініть складність форм</strong>
              <p className={styles.stepDesc}>
                Прості форми можна переписати на React 19, складні - залишити на Final Form
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div>
              <strong>Поступова міграція</strong>
              <p className={styles.stepDesc}>
                Нові форми пишіть на React 19, старі переписуйте по потребі
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div>
              <strong>Створіть обгортки</strong>
              <p className={styles.stepDesc}>
                Напишіть переісвикористовувані компоненти для валідації та обробки помилок
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <div>
              <strong>Не поспішайте</strong>
              <p className={styles.stepDesc}>
                Final Form все ще чудово працює. Міграція - це не обов'язково
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Висновок */}
      <div className={styles.conclusion}>
        <h3 className={styles.sectionTitle}>📌 Висновок:</h3>
        <p className={styles.conclusionText}>
          <strong>React 19 Actions</strong> - це чудовий вибір для більшості форм. 
          Але <strong>Final Form</strong> все ще актуальний для дуже складних випадків. 
        </p>
        <p className={styles.conclusionText}>
          На вашому проекті можна <strong>використовувати обидва підходи</strong> одночасно: 
          нові прості форми на React 19, а складні залишити на Final Form.
        </p>
        <p className={styles.conclusionText}>
          <strong>Головне:</strong> React 19 робить велике крок у напрямку спрощення роботи з формами 
          та зменшення залежності від сторонніх бібліотек! 🚀
        </p>
      </div>
    </div>
  );
};

