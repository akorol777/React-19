import styles from './HomePage.module.css';

// Головна сторінка з оглядом нових фіч React 19
export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <span className={styles.logoIcon}>⚛️</span>
          React 19
          <span className={styles.badge}>Новинки</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Огляд нових можливостей та переваг React 19
        </p>
      </div>

      {/* Швидкий огляд */}
      <div className={styles.quickOverview}>
        <h2 className={styles.sectionTitle}>🎯 Що нового?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Actions API</h3>
            <p className={styles.featureDesc}>
              Новий спосіб обробки асинхронних операцій без зайвого бойлерплейту
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚀</div>
            <h3 className={styles.featureTitle}>useOptimistic</h3>
            <p className={styles.featureDesc}>
              Оптимістичні оновлення UI для миттєвого фідбеку користувачу
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎣</div>
            <h3 className={styles.featureTitle}>use() хук</h3>
            <p className={styles.featureDesc}>
              Універсальний хук для промісів та контексту, можна викликати умовно!
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3 className={styles.featureTitle}>useFormStatus</h3>
            <p className={styles.featureDesc}>
              Статус форми доступний з будь-якого дочірнього компонента
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎯</div>
            <h3 className={styles.featureTitle}>ref без forwardRef</h3>
            <p className={styles.featureDesc}>
              ref тепер звичайний проп, не потрібен forwardRef wrapper
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📄</div>
            <h3 className={styles.featureTitle}>Document Metadata</h3>
            <p className={styles.featureDesc}>
              Керуйте title та meta tags прямо в компонентах без react-helmet
            </p>
          </div>
        </div>
      </div>

      {/* Статистика покращень */}
      <div className={styles.stats}>
        <h2 className={styles.sectionTitle}>📈 Покращення</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>-50%</div>
            <div className={styles.statLabel}>Менше коду для форм</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>0ms</div>
            <div className={styles.statLabel}>Затримка з useOptimistic</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>-17kb</div>
            <div className={styles.statLabel}>Без react-helmet</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>100%</div>
            <div className={styles.statLabel}>SSR-friendly</div>
          </div>
        </div>
      </div>

      {/* Чому варто оновлюватись */}
      <div className={styles.whyUpgrade}>
        <h2 className={styles.sectionTitle}>💡 Чому варто оновлюватись?</h2>
        <div className={styles.reasonsGrid}>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>✨</div>
            <h3 className={styles.reasonTitle}>Менше бойлерплейту</h3>
            <p className={styles.reasonText}>
              Actions, ref як проп, вбудовані meta tags - все це зменшує кількість коду
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🎨</div>
            <h3 className={styles.reasonTitle}>Кращий UX</h3>
            <p className={styles.reasonText}>
              useOptimistic дає миттєвий фідбек, додаток відчувається швидшим
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>📦</div>
            <h3 className={styles.reasonTitle}>Менший бандл</h3>
            <p className={styles.reasonText}>
              Можна прибрати залежності: react-helmet, деякі form бібліотеки
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🚀</div>
            <h3 className={styles.reasonTitle}>Готовність до майбутнього</h3>
            <p className={styles.reasonText}>
              React Server Components, Streaming SSR - все працює out of the box
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>🔧</div>
            <h3 className={styles.reasonTitle}>Простіша підтримка</h3>
            <p className={styles.reasonText}>
              Менше магії, більше передбачуваності, простіше для нових розробників
            </p>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>⚡</div>
            <h3 className={styles.reasonTitle}>Кращий DX</h3>
            <p className={styles.reasonText}>
              Простіша типізація, менше обгорток, інтуїтивніший API
            </p>
          </div>
        </div>
      </div>

      {/* Навігація по прикладах */}
      <div className={styles.navigation}>
        <h2 className={styles.sectionTitle}>🧭 Як користуватись цим демо?</h2>
        <ol className={styles.instructionsList}>
          <li className={styles.instruction}>
            <strong>Виберіть приклад</strong> з меню вгорі
          </li>
          <li className={styles.instruction}>
            <strong>Читайте пояснення</strong> та порівняння з React 18
          </li>
          <li className={styles.instruction}>
            <strong>Взаємодійте</strong> з інтерактивними прикладами
          </li>
          <li className={styles.instruction}>
            <strong>Дивіться в консоль</strong> - там багато логів для розуміння
          </li>
          <li className={styles.instruction}>
            <strong>Читайте код</strong> - він добре прокоментований
          </li>
        </ol>
      </div>

      {/* Корисні посилання */}
      <div className={styles.links}>
        <h2 className={styles.sectionTitle}>🔗 Корисні посилання</h2>
        <div className={styles.linksGrid}>
          <a
            href="https://react.dev/blog/2024/12/05/react-19"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            📰 Офіційний анонс React 19
          </a>
          <a
            href="https://react.dev/reference/react"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            📚 React 19 Documentation
          </a>
          <a
            href="https://react.dev/reference/react-dom/hooks"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            🎣 Нові хуки в React 19
          </a>
          <a
            href="https://19.react.dev/blog/2024/04/25/react-19-upgrade-guide"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            🚀 Гайд по оновленню
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p className={styles.footerText}>
          🎓 Цей проект створено для навчання та демонстрації нових можливостей React 19
        </p>
        <p className={styles.footerText}>
          💻 Відкрийте DevTools Console для детальних логів
        </p>
      </div>
    </div>
  );
};

