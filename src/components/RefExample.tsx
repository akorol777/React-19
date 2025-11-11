import { useRef, type Ref } from 'react';
import styles from './Examples.module.css';

// React 19: ref як звичайний проп! Більше не потрібен forwardRef
const CustomInput = ({ label, ref, ...props }: {
  label: string;
  ref?: Ref<HTMLInputElement>;
  [key: string]: any;
}) => {
  console.log('🎯 CustomInput отримав ref:', !!ref);
  
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <input
        ref={ref} // Просто передаємо ref!
        {...props}
        className={styles.input}
      />
    </div>
  );
};

// Компонент з кількома рефами
const CustomCard = ({ title, content, ref }: {
  title: string;
  content: string;
  ref?: Ref<HTMLDivElement>;
}) => {
  console.log('📦 CustomCard отримав ref:', !!ref);
  
  return (
    <div ref={ref} className={styles.card}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardContent}>{content}</p>
    </div>
  );
};

// Кастомна кнопка з ref
const CustomButton = ({ children, onClick, ref }: {
  children: React.ReactNode;
  onClick?: () => void;
  ref?: Ref<HTMLButtonElement>;
}) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={styles.customButton}
    >
      {children}
    </button>
  );
};

// Головний компонент
export const RefExample = () => {
  // Створюємо рефи
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Функції для роботи з рефами
  const focusFirstInput = () => {
    console.log('🎯 Фокусуємось на перший input');
    inputRef1.current?.focus();
  };

  const focusSecondInput = () => {
    console.log('🎯 Фокусуємось на другий input');
    inputRef2.current?.focus();
  };

  const getInputValues = () => {
    const value1 = inputRef1.current?.value || '';
    const value2 = inputRef2.current?.value || '';
    console.log('📝 Значення інпутів:', { value1, value2 });
    alert(`Значення:\n1: ${value1}\n2: ${value2}`);
  };

  const highlightCard = () => {
    if (cardRef.current) {
      console.log('✨ Підсвічуємо картку');
      cardRef.current.style.transform = 'scale(1.05)';
      cardRef.current.style.transition = 'transform 0.3s';
      
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.style.transform = 'scale(1)';
        }
      }, 300);
    }
  };

  const getButtonInfo = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      console.log('📏 Інфо про кнопку:', rect);
      alert(`Розмір кнопки:\nШирина: ${rect.width.toFixed(0)}px\nВисота: ${rect.height.toFixed(0)}px`);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🎯 ref без forwardRef</h2>
      
      <p className={styles.description}>
        <strong>Що нового?</strong> В React 19 ref - це просто звичайний проп. 
        Більше не потрібно використовувати <code>forwardRef</code>!
      </p>

      {/* Порівняння React 18 vs React 19 */}
      <div className={styles.comparison}>
        <h3 className={styles.sectionTitle}>⚖️ Порівняння підходів:</h3>
        
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCard}>
            <h4 className={styles.comparisonTitle}>❌ React 18</h4>
            <pre className={styles.code}>{`import { forwardRef } from 'react';

// Потрібен forwardRef! 😢
const Input = forwardRef<
  HTMLInputElement, 
  Props
>((props, ref) => {
  return <input ref={ref} {...props} />;
});

// Використання
<Input ref={myRef} />`}</pre>
            <div className={styles.comparisonNote}>
              <strong>Проблеми:</strong>
              <ul className={styles.comparisonList}>
                <li>Додатковий бойлерплейт</li>
                <li>Складніша типізація в TypeScript</li>
                <li>Менш інтуїтивний API</li>
              </ul>
            </div>
          </div>

          <div className={styles.comparisonCard}>
            <h4 className={styles.comparisonTitle}>✅ React 19</h4>
            <pre className={styles.code}>{`// Просто передаємо ref як проп! 🎉
const Input = ({ ref, ...props }: {
  ref?: Ref<HTMLInputElement>;
  [key: string]: any;
}) => {
  return <input ref={ref} {...props} />;
};

// Використання - те саме!
<Input ref={myRef} />`}</pre>
            <div className={styles.comparisonNote}>
              <strong>Переваги:</strong>
              <ul className={styles.comparisonList}>
                <li>Менше коду</li>
                <li>Простіша типізація</li>
                <li>Зрозуміліший API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Демо */}
      <div className={styles.demo}>
        <h3 className={styles.sectionTitle}>🧪 Інтерактивна демонстрація:</h3>
        
        {/* Інпути з рефами */}
        <div className={styles.demoSection}>
          <h4 className={styles.subsectionTitle}>📝 Кастомні інпути з ref:</h4>
          
          <CustomInput
            label="Перший інпут"
            ref={inputRef1}
            placeholder="Введіть текст тут..."
          />

          <CustomInput
            label="Другий інпут"
            ref={inputRef2}
            placeholder="Або тут..."
          />

          <div className={styles.buttonGroup}>
            <button onClick={focusFirstInput} className={styles.demoButton}>
              🎯 Фокус на перший
            </button>
            <button onClick={focusSecondInput} className={styles.demoButton}>
              🎯 Фокус на другий
            </button>
            <button onClick={getInputValues} className={styles.demoButton}>
              📝 Отримати значення
            </button>
          </div>
        </div>

        {/* Картка з рефом */}
        <div className={styles.demoSection}>
          <h4 className={styles.subsectionTitle}>📦 Кастомна картка з ref:</h4>
          
          <CustomCard
            ref={cardRef}
            title="React 19 - це круто!"
            content="Ця картка має ref і може бути анімована програмно через DOM API"
          />

          <button onClick={highlightCard} className={styles.demoButton}>
            ✨ Підсвітити картку
          </button>
        </div>

        {/* Кнопка з рефом */}
        <div className={styles.demoSection}>
          <h4 className={styles.subsectionTitle}>🔘 Кастомна кнопка з ref:</h4>
          
          <CustomButton ref={buttonRef} onClick={getButtonInfo}>
            📏 Отримати мої розміри
          </CustomButton>
        </div>
      </div>

      {/* Коли використовувати реф */}
      <div className={styles.useCases}>
        <h3 className={styles.sectionTitle}>🎯 Коли використовувати ref:</h3>
        <div className={styles.useCaseGrid}>
          <div className={styles.useCase}>
            <div className={styles.useCaseIcon}>🎯</div>
            <h4 className={styles.useCaseTitle}>Фокус на елемент</h4>
            <p className={styles.useCaseDesc}>
              Програмне встановлення фокусу на input, textarea, кнопку
            </p>
          </div>

          <div className={styles.useCase}>
            <div className={styles.useCaseIcon}>📏</div>
            <h4 className={styles.useCaseTitle}>Виміри елемента</h4>
            <p className={styles.useCaseDesc}>
              Отримання розмірів, позиції елемента через getBoundingClientRect
            </p>
          </div>

          <div className={styles.useCase}>
            <div className={styles.useCaseIcon}>📜</div>
            <h4 className={styles.useCaseTitle}>Скрол до елемента</h4>
            <p className={styles.useCaseDesc}>
              Програмний скрол: scrollIntoView(), scrollTo()
            </p>
          </div>

          <div className={styles.useCase}>
            <div className={styles.useCaseIcon}>🎬</div>
            <h4 className={styles.useCaseTitle}>Медіа контроль</h4>
            <p className={styles.useCaseDesc}>
              Керування відео/аудіо: play(), pause(), currentTime
            </p>
          </div>

          <div className={styles.useCase}>
            <div className={styles.useCaseIcon}>🖼️</div>
            <h4 className={styles.useCaseTitle}>Canvas API</h4>
            <p className={styles.useCaseDesc}>
              Робота з canvas: getContext(), рисування
            </p>
          </div>

          <div className={styles.useCase}>
            <div className={styles.useCaseIcon}>🔌</div>
            <h4 className={styles.useCaseTitle}>Сторонні бібліотеки</h4>
            <p className={styles.useCaseDesc}>
              Інтеграція з jQuery, D3.js, Three.js та іншими
            </p>
          </div>
        </div>
      </div>

      {/* Важливі примітки */}
      <div className={styles.notes}>
        <h3 className={styles.sectionTitle}>⚠️ Важливо пам'ятати:</h3>
        <ul className={styles.notesList}>
          <li>
            <strong>Уникайте зміни DOM вручну:</strong> React має сам керувати DOM. 
            Використовуйте ref тільки для речей, які React не може зробити (фокус, скрол, виміри).
          </li>
          <li>
            <strong>Не читайте/змінюйте state через ref:</strong> Для state є useState/useReducer.
          </li>
          <li>
            <strong>Ref - це escape hatch:</strong> Використовуйте його коли інших варіантів немає.
          </li>
          <li>
            <strong>forwardRef все ще працює:</strong> Старий код з forwardRef продовжить працювати в React 19.
          </li>
        </ul>
      </div>

      {/* Переваги */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>💡 Переваги нового підходу:</h3>
        <ul className={styles.list}>
          <li>✅ <strong>Менше бойлерплейту:</strong> не потрібен forwardRef</li>
          <li>✅ <strong>Простіша типізація:</strong> ref - це просто проп з типом Ref</li>
          <li>✅ <strong>Зрозуміліший код:</strong> ref поводиться як будь-який інший проп</li>
          <li>✅ <strong>Зворотна сумісність:</strong> старий код продовжує працювати</li>
          <li>✅ <strong>Кращий DX:</strong> менше магії, більше передбачуваності</li>
        </ul>
      </div>
    </div>
  );
};

