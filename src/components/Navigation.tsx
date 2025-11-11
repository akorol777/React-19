import { use } from 'react';
import { AppContext } from '../contexts/AppContext';
import styles from './Navigation.module.css';

// Список всіх прикладів
const examples = [
  { id: 'home', title: '🏠 Головна', description: 'Огляд всіх прикладів' },
  { id: 'actions', title: '⚡ Actions & useActionState', description: 'Нові підходи до форм' },
  { id: 'optimistic', title: '🚀 useOptimistic', description: 'Оптимістичні оновлення UI' },
  { id: 'use-hook', title: '🎣 use() хук', description: 'Робота з промісами' },
  { id: 'form-status', title: '📊 useFormStatus', description: 'Статус форми з будь-якого місця' },
  { id: 'ref', title: '🎯 ref без forwardRef', description: 'Спрощена робота з ref' },
  { id: 'metadata', title: '📄 Document Metadata', description: 'SEO без react-helmet' },
  { id: 'final-form', title: '📋 Final Form vs React 19', description: 'Порівняння підходів' },
];

export const Navigation = () => {
  // React 19: використовуємо use() для читання контексту (можна навіть умовно!)
  const context = use(AppContext);
  
  // Перевірка на null (хоча ми знаємо, що контекст завжди є)
  if (!context) throw new Error('AppContext не знайдено');

  const { currentView, setCurrentView } = context;

  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>React 19 - Нові фічі 🚀</h1>
      <p className={styles.subtitle}>Демо-проект для вивчення нових можливостей</p>
      
      <div className={styles.menu}>
        {examples.map(example => (
          <button
            key={example.id}
            onClick={() => setCurrentView(example.id)}
            className={`${styles.button} ${currentView === example.id ? styles.buttonActive : ''}`}
          >
            <div className={styles.buttonTitle}>{example.title}</div>
            <div className={styles.buttonDesc}>{example.description}</div>
          </button>
        ))}
      </div>
    </nav>
  );
};

