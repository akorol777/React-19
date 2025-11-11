import { useActionState } from 'react';
import { saveFormData } from '../data/mockData';
import styles from './Examples.module.css';

// Тип для стану форми
interface FormState {
  success: boolean;
  message: string;
  data?: Record<string, string>;
}

// React 19: useActionState - новий хук для роботи з формами
export const ActionFormExample = () => {
  // useActionState повертає: [стан, action функцію, isPending]
  const [state, submitAction, isPending] = useActionState(
    // Action функція - приймає попередній стан та FormData
    async (previousState: FormState, formData: FormData): Promise<FormState> => {
      console.log('🎬 Action запущено!');
      console.log('📋 Попередній стан:', previousState);
      
      // Отримуємо дані з форми
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      console.log('📝 Дані форми:', { name, email, message });

      try {
        // Імітуємо відправку на сервер
        const result = await saveFormData({ name, email, message });
        
        return {
          success: true,
          message: result.message,
          data: { name, email, message },
        };
      } catch (error) {
        console.error('❌ Помилка:', error);
        return {
          success: false,
          message: error instanceof Error ? error.message : 'Невідома помилка',
        };
      }
    },
    // Початковий стан
    { success: false, message: '' }
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>⚡ Actions & useActionState</h2>
      <p className={styles.description}>
        <strong>Що нового?</strong> Більше не потрібно створювати окремі стани для loading, error, success. 
        React 19 сам керує станом форми через Actions!
      </p>

      <div className={styles.comparison}>
        <div className={styles.comparisonItem}>
          <h3 className={styles.comparisonTitle}>❌ React 18</h3>
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
          <h3 className={styles.comparisonTitle}>✅ React 19</h3>
          <pre className={styles.code}>{`const [state, action, isPending] = 
  useActionState(
    async (prev, formData) => {
      // Просто пишемо логіку
      await saveData(formData);
      return { success: true };
    },
    { success: false }
  );`}</pre>
        </div>
      </div>

      {/* Форма з Action */}
      <form action={submitAction} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Ім'я:</label>
          <input
            name="name"
            type="text"
            required
            className={styles.input}
            placeholder="Введіть ваше ім'я"
            disabled={isPending} // Блокуємо під час відправки
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            name="email"
            type="email"
            required
            className={styles.input}
            placeholder="example@email.com"
            disabled={isPending}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Повідомлення:</label>
          <textarea
            name="message"
            required
            className={styles.textarea}
            placeholder="Ваше повідомлення..."
            disabled={isPending}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`${styles.button} ${isPending ? styles.buttonDisabled : ''}`}
        >
          {isPending ? '⏳ Відправка...' : '📤 Відправити'}
        </button>

        {/* Показуємо результат */}
        {state.message && (
          <div
            className={`${styles.message} ${state.success ? styles.messageSuccess : styles.messageError}`}
          >
            {state.success ? '✅' : '❌'} {state.message}
            {state.data && (
              <div className={styles.messageData}>
                <strong>Відправлені дані:</strong>
                <pre>{JSON.stringify(state.data, null, 2)}</pre>
              </div>
            )}
          </div>
        )}
      </form>

      {/* Пояснення */}
      <div className={styles.explanation}>
        <h3 className={styles.explanationTitle}>💡 Ключові переваги:</h3>
        <ul className={styles.list}>
          <li>✅ <strong>Менше коду:</strong> не потрібні окремі стани для loading/error</li>
          <li>✅ <strong>Автоматичний isPending:</strong> React сам відстежує стан</li>
          <li>✅ <strong>Доступ до попереднього стану:</strong> можна акумулювати дані</li>
          <li>✅ <strong>Нативна інтеграція з формами:</strong> працює з FormData API</li>
          <li>✅ <strong>SSR-friendly:</strong> працює на сервері без додаткових налаштувань</li>
        </ul>
      </div>
    </div>
  );
};

