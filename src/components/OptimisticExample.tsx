import { use, useOptimistic, useActionState } from 'react';
import { AppContext } from '../contexts/AppContext';
import { LanguageContext } from '../contexts/LanguageContext';
import type { Todo } from '../data/mockData';
import { saveTodo, deleteTodo } from '../data/mockData';
import styles from './Examples.module.css';

// React 19: useOptimistic - for optimistic UI updates
export const OptimisticExample = () => {
  // Get data from context
  const context = use(AppContext);
  if (!context) throw new Error('AppContext not found');
  const { todos, addTodo, removeTodo } = context;

  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  const { t } = langContext;

  // useOptimistic - creates optimistic version of state
  // First parameter - real state
  // Second - function that describes how to optimistically update state
  const [optimisticTodos, addOptimisticTodo] = useOptimistic<
    Todo[],
    Todo
  >(
    todos,
    (state, newTodo) => {
      console.log('🚀 Optimistically adding todo:', newTodo);
      return [...state, newTodo];
    }
  );

  // Action for adding todo
  const [, addAction, isAdding] = useActionState(
    async (_prevState: any, formData: FormData) => {
      const text = formData.get('todo') as string;
      
      // Create new todo with temporary ID
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
        userId: 1,
      };

      console.log('➕ Adding new todo...');

      // Show optimistically to user (instantly!)
      addOptimisticTodo(newTodo);

      try {
        // Send to "server"
        const savedTodo = await saveTodo(newTodo);
        
        // After success - update real state
        addTodo(savedTodo);
        
        console.log('✅ Todo successfully added!');
        return { success: true };
      } catch (error) {
        console.error('❌ Add error:', error);
        // On error - optimistic update will automatically rollback!
        return { success: false, error: 'Add error' };
      }
    },
    { success: false }
  );

  // Function to delete todo (also optimistic!)
  const handleDelete = async (id: number) => {
    console.log(`🗑️ Deleting todo ${id} (optimistic)`);
    
    // Instantly remove from UI
    removeTodo(id);

    try {
      // Send delete request
      await deleteTodo(id);
      console.log('✅ Todo successfully deleted');
    } catch (error) {
      console.error('❌ Delete error:', error);
      // In real app you'd need to rollback changes here
      // But for demo we'll leave it as is
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🚀 {t.optimistic.title}</h2>
      
      <p className={styles.description}>
        {t.optimistic.description}
      </p>

      {/* Explanation of how it works */}
      <div className={styles.howItWorks}>
        <h3 className={styles.sectionTitle}>{t.optimistic.howItWorks}</h3>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div>
              <strong>{t.optimistic.steps.step1}</strong>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div>
              <strong>{t.optimistic.steps.step2}</strong>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div>
              <strong>{t.optimistic.steps.step3}</strong>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <div>
              <strong>{t.optimistic.steps.step4}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Form for adding todo */}
      <form action={addAction} className={styles.todoForm}>
        <input
          name="todo"
          type="text"
          placeholder={t.optimistic.todoPlaceholder}
          required
          disabled={isAdding}
          className={styles.input}
        />
        <button
          type="submit"
          disabled={isAdding}
          className={`${styles.addButton} ${isAdding ? styles.buttonDisabled : ''}`}
        >
          {isAdding ? `⏳ ${t.optimistic.addingButton}` : t.optimistic.addButton}
        </button>
      </form>

      {/* Todo list */}
      <div className={styles.todoList}>
        <h3 className={styles.sectionTitle}>{t.optimistic.todoList} ({optimisticTodos.length})</h3>
        {optimisticTodos.length === 0 ? (
          <p className={styles.emptyState}>{t.optimistic.emptyState}</p>
        ) : (
          optimisticTodos.map(todo => (
            <div
              key={todo.id}
              className={styles.todoItem}
              style={{
                // If todo not yet saved (optimistic), make it transparent
                opacity: todo.id > Date.now() - 2000 ? 0.6 : 1,
              }}
            >
              <div className={styles.todoContent}>
                <span className={styles.todoText}>{todo.text}</span>
                {todo.id > Date.now() - 2000 && (
                  <span className={styles.pendingBadge}>⏳ {t.optimistic.savingBadge}</span>
                )}
              </div>
              <button
                onClick={() => handleDelete(todo.id)}
                className={styles.deleteButton}
                title={t.optimistic.removeButton}
              >
                {t.optimistic.removeButton}
              </button>
            </div>
          ))
        )}
      </div>

      {/* Explanation of benefits */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>{t.optimistic.benefitsTitle}</h3>
        <ul className={styles.list}>
          <li>✅ <strong>{t.optimistic.benefitsDetailed.instantFeedback.title}</strong> {t.optimistic.benefitsDetailed.instantFeedback.description}</li>
          <li>✅ <strong>{t.optimistic.benefitsDetailed.betterUX.title}</strong> {t.optimistic.benefitsDetailed.betterUX.description}</li>
          <li>✅ <strong>{t.optimistic.benefitsDetailed.autoRollback.title}</strong> {t.optimistic.benefitsDetailed.autoRollback.description}</li>
          <li>✅ <strong>{t.optimistic.benefitsDetailed.lessCode.title}</strong> {t.optimistic.benefitsDetailed.lessCode.description}</li>
          <li>✅ <strong>{t.optimistic.benefitsDetailed.worksWithActions.title}</strong> {t.optimistic.benefitsDetailed.worksWithActions.description}</li>
        </ul>
      </div>

      {/* Comparison with React 18 */}
      <div className={styles.comparison}>
        <h3 className={styles.sectionTitle}>{t.optimistic.comparisonTitle}</h3>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <h4 className={styles.comparisonTitle}>{t.optimistic.react18.title}</h4>
            <pre className={styles.code}>{`${t.optimistic.react18.comment1}
const handleAdd = async () => {
  setLoading(true);
  await addTodo(newTodo);
  setLoading(false);
  ${t.optimistic.react18.comment2}
};`}</pre>
            <p className={styles.comparisonNote}>{t.optimistic.react18.delay}</p>
          </div>

          <div className={styles.comparisonItem}>
            <h4 className={styles.comparisonTitle}>{t.optimistic.react19.title}</h4>
            <pre className={styles.code}>{`${t.optimistic.react19.comment1}
addOptimisticTodo(newTodo);
${t.optimistic.react19.comment2}
await addTodo(newTodo);
${t.optimistic.react19.comment3}`}</pre>
            <p className={styles.comparisonNote}>{t.optimistic.react19.delay}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
