import { use, useOptimistic, useActionState } from 'react';
import { AppContext } from '../contexts/AppContext';
import type { Todo } from '../data/mockData';
import { saveTodo, deleteTodo } from '../data/mockData';
import styles from './Examples.module.css';

// React 19: useOptimistic - для оптимістичних оновлень UI
export const OptimisticExample = () => {
  // Отримуємо дані з контексту
  const context = use(AppContext);
  if (!context) throw new Error('AppContext не знайдено');

  const { todos, addTodo, removeTodo } = context;

  // useOptimistic - створює оптимістичну версію стану
  // Перший параметр - реальний стан
  // Другий - функція, яка описує як оптимістично оновити стан
  const [optimisticTodos, addOptimisticTodo] = useOptimistic<
    Todo[],
    Todo
  >(
    todos,
    (state, newTodo) => {
      console.log('🚀 Оптимістично додаємо todo:', newTodo);
      return [...state, newTodo];
    }
  );

  // Action для додавання todo
  const [, addAction, isAdding] = useActionState(
    async (_prevState: any, formData: FormData) => {
      const text = formData.get('todo') as string;
      
      // Створюємо новий todo з тимчасовим ID
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
        userId: 1,
      };

      console.log('➕ Додаємо новий todo...');

      // Оптимістично показуємо користувачу (миттєво!)
      addOptimisticTodo(newTodo);

      try {
        // Відправляємо на "сервер"
        const savedTodo = await saveTodo(newTodo);
        
        // Після успіху - оновлюємо реальний стан
        addTodo(savedTodo);
        
        console.log('✅ Todo успішно додано!');
        return { success: true };
      } catch (error) {
        console.error('❌ Помилка додавання:', error);
        // При помилці - оптимістичне оновлення автоматично відкатиться!
        return { success: false, error: 'Помилка додавання' };
      }
    },
    { success: false }
  );

  // Функція для видалення todo (теж оптимістично!)
  const handleDelete = async (id: number) => {
    console.log(`🗑️ Видаляємо todo ${id} (оптимістично)`);
    
    // Миттєво прибираємо з UI
    removeTodo(id);

    try {
      // Відправляємо запит на видалення
      await deleteTodo(id);
      console.log('✅ Todo видалено успішно');
    } catch (error) {
      console.error('❌ Помилка видалення:', error);
      // У реальному додатку тут треба відкотити зміни
      // Але для демо залишимо так
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🚀 useOptimistic</h2>
      
      <p className={styles.description}>
        <strong>Що нового?</strong> Показуємо користувачу зміни <strong>миттєво</strong>, 
        не чекаючи відповіді сервера. Якщо сервер повертає помилку - зміни автоматично відкочуються!
      </p>

      {/* Пояснення як працює */}
      <div className={styles.howItWorks}>
        <h3 className={styles.sectionTitle}>🔄 Як це працює:</h3>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div>
              <strong>Користувач натискає кнопку</strong>
              <br />
              <small>Наприклад, додає todo або ставить лайк</small>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div>
              <strong>UI оновлюється миттєво</strong>
              <br />
              <small>Користувач бачить результат без затримки (pending state)</small>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div>
              <strong>Запит йде на сервер</strong>
              <br />
              <small>У фоні відправляється реальний запит</small>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <div>
              <strong>Якщо OK - стан зберігається</strong>
              <br />
              <small>Якщо помилка - зміни автоматично відкочуються</small>
            </div>
          </div>
        </div>
      </div>

      {/* Форма для додавання todo */}
      <form action={addAction} className={styles.todoForm}>
        <input
          name="todo"
          type="text"
          placeholder="Що потрібно зробити?"
          required
          disabled={isAdding}
          className={styles.input}
        />
        <button
          type="submit"
          disabled={isAdding}
          className={`${styles.addButton} ${isAdding ? styles.buttonDisabled : ''}`}
        >
          {isAdding ? '⏳ Додавання...' : '+ Додати'}
        </button>
      </form>

      {/* Список todos */}
      <div className={styles.todoList}>
        <h3 className={styles.sectionTitle}>📝 Список завдань ({optimisticTodos.length})</h3>
        {optimisticTodos.length === 0 ? (
          <p className={styles.emptyState}>Поки немає завдань. Додайте перше!</p>
        ) : (
          optimisticTodos.map(todo => (
            <div
              key={todo.id}
              className={styles.todoItem}
              style={{
                // Якщо todo ще не збережено (оптимістичне), робимо прозорим
                opacity: todo.id > Date.now() - 2000 ? 0.6 : 1,
              }}
            >
              <div className={styles.todoContent}>
                <span className={styles.todoText}>{todo.text}</span>
                {todo.id > Date.now() - 2000 && (
                  <span className={styles.pendingBadge}>⏳ Збереження...</span>
                )}
              </div>
              <button
                onClick={() => handleDelete(todo.id)}
                className={styles.deleteButton}
                title="Видалити"
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>

      {/* Пояснення переваг */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>💡 Переваги useOptimistic:</h3>
        <ul className={styles.list}>
          <li>✅ <strong>Миттєвий фідбек:</strong> користувач бачить зміни без затримки</li>
          <li>✅ <strong>Кращий UX:</strong> додаток відчувається швидшим</li>
          <li>✅ <strong>Автоматичний rollback:</strong> при помилці зміни відкочуються</li>
          <li>✅ <strong>Менше коду:</strong> не потрібно вручну керувати тимчасовими станами</li>
          <li>✅ <strong>Працює з Actions:</strong> ідеальна інтеграція з новим API</li>
        </ul>
      </div>

      {/* Порівняння з React 18 */}
      <div className={styles.comparison}>
        <h3 className={styles.sectionTitle}>⚖️ Порівняння підходів:</h3>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <h4 className={styles.comparisonTitle}>❌ React 18 (без оптимізму)</h4>
            <pre className={styles.code}>{`// Користувач чекає відповіді
const handleAdd = async () => {
  setLoading(true);
  await addTodo(newTodo);
  setLoading(false);
  // Тільки тепер побачить зміни
};`}</pre>
            <p className={styles.comparisonNote}>⏱️ Затримка: 1-2 секунди</p>
          </div>

          <div className={styles.comparisonItem}>
            <h4 className={styles.comparisonTitle}>✅ React 19 (з оптимізмом)</h4>
            <pre className={styles.code}>{`// Користувач бачить миттєво
addOptimisticTodo(newTodo);
// У фоні йде запит
await addTodo(newTodo);
// Якщо помилка - авто відкат`}</pre>
            <p className={styles.comparisonNote}>⚡ Затримка: 0 мс!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

