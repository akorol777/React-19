import { use, Suspense, useState } from 'react';
import type { User, Post } from '../data/mockData';
import { fetchUser, fetchPosts } from '../data/mockData';
import { AppContext } from '../contexts/AppContext';
import styles from './Examples.module.css';

// Компонент що використовує use() для розпаковки проміса
const UserProfile = ({ userPromise }: { userPromise: Promise<User> }) => {
  // React 19: use() хук - розпаковує проміс!
  // Можна використовувати навіть умовно (на відміну від useEffect)
  const user = use(userPromise);
  
  console.log('👤 Користувач завантажений в компоненті:', user);

  return (
    <div className={styles.profileCard}>
      <div className={styles.avatar}>{user.avatar}</div>
      <div>
        <h3 className={styles.userName}>{user.name}</h3>
        <p className={styles.userEmail}>{user.email}</p>
      </div>
    </div>
  );
};

// Компонент що використовує use() для постів
const PostsList = ({ postsPromise }: { postsPromise: Promise<Post[]> }) => {
  // React 19: use() розпаковує проміс з масивом постів
  const posts = use(postsPromise);
  
  console.log(`📚 Пости завантажені в компоненті: ${posts.length} шт.`);

  return (
    <div className={styles.postsList}>
      {posts.map(post => (
        <div key={post.id} className={styles.postCard}>
          <h4 className={styles.postTitle}>{post.title}</h4>
          <p className={styles.postContent}>{post.content}</p>
          <div className={styles.postMeta}>
            <span>✍️ {post.author}</span>
            <span>❤️ {post.likes}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// Приклад умовного використання use() для контексту
const ConditionalContextExample = ({ showContext }: { showContext: boolean }) => {
  // React 19: use() можна викликати умовно! 
  // У React 18 це було неможливо з useContext
  if (showContext) {
    // Це OK в React 19!
    const context = use(AppContext);
    if (!context) return null;
    
    return (
      <div className={styles.contextExample}>
        <strong>🎯 Умовне використання контексту:</strong>
        <br />
        Поточний вигляд: {context.currentView}
        <br />
        Всього todos: {context.todos.length}
      </div>
    );
  }

  return (
    <div className={styles.contextExample}>
      <em>Контекст не показується (перемкніть чекбокс)</em>
    </div>
  );
};

// Головний компонент
export const UseHookExample = () => {
  const [userId, setUserId] = useState<number>(1);
  const [showContext, setShowContext] = useState<boolean>(false);
  const [loadData, setLoadData] = useState<boolean>(false);

  // Створюємо проміси (вони запускаються одразу)
  const userPromise = loadData ? fetchUser(userId) : null;
  const postsPromise = loadData ? fetchPosts() : null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🎣 use() хук</h2>
      
      <p className={styles.description}>
        <strong>Що нового?</strong> Універсальний хук <code>use()</code> може:
        <br />
        1️⃣ Розпаковувати проміси прямо в компонентах
        <br />
        2️⃣ Читати контекст (навіть <strong>умовно</strong>!)
        <br />
        3️⃣ Працювати в циклах та умовних блоках (порушує правила хуків!)
      </p>

      {/* Пояснення */}
      <div className={styles.explanation}>
        <h3 className={styles.sectionTitle}>🔑 Ключова відмінність від інших хуків:</h3>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <h4>❌ Інші хуки (useState, useEffect...)</h4>
            <ul className={styles.list}>
              <li>❌ Не можна викликати умовно</li>
              <li>❌ Не можна в циклах</li>
              <li>❌ Тільки на верхньому рівні</li>
              <li>❌ Суворий порядок викликів</li>
            </ul>
          </div>
          <div className={styles.comparisonItem}>
            <h4>✅ use() хук</h4>
            <ul className={styles.list}>
              <li>✅ Можна викликати умовно</li>
              <li>✅ Можна в циклах</li>
              <li>✅ Можна всередині if/else</li>
              <li>✅ Гнучкий та потужний</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Приклад 1: Розпакування промісів */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>1️⃣ Розпакування промісів</h3>
        
        <div className={styles.controls}>
          <label className={styles.label}>
            Виберіть користувача:
            <select
              value={userId}
              onChange={(e) => setUserId(Number(e.target.value))}
              className={styles.select}
              disabled={loadData}
            >
              <option value={1}>Олександр Петренко</option>
              <option value={2}>Марія Коваленко</option>
              <option value={3}>Іван Шевченко</option>
            </select>
          </label>

          <button
            onClick={() => setLoadData(!loadData)}
            className={styles.button}
            style={{
              backgroundColor: loadData ? '#dc3545' : '#61dafb',
            }}
          >
            {loadData ? '🛑 Скинути' : '🚀 Завантажити дані'}
          </button>
        </div>

        {loadData && userPromise && postsPromise ? (
          // Suspense чекає поки use() розпакує проміси
          <Suspense fallback={<LoadingSpinner message="Завантаження даних..." />}>
            <div className={styles.dataContainer}>
              <div>
                <h4 className={styles.subsectionTitle}>👤 Профіль користувача:</h4>
                <UserProfile userPromise={userPromise} />
              </div>
              
              <div>
                <h4 className={styles.subsectionTitle}>📚 Останні пости:</h4>
                <PostsList postsPromise={postsPromise} />
              </div>
            </div>
          </Suspense>
        ) : (
          <div className={styles.placeholder}>
            Натисніть "Завантажити дані" щоб побачити use() в дії
          </div>
        )}
      </div>

      {/* Приклад 2: Умовне використання контексту */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>2️⃣ Умовне використання контексту</h3>
        
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={showContext}
            onChange={(e) => setShowContext(e.target.checked)}
            className={styles.checkbox}
          />
          Показати дані з контексту
        </label>

        <ConditionalContextExample showContext={showContext} />
      </div>

      {/* Код приклади */}
      <div className={styles.codeExamples}>
        <h3 className={styles.sectionTitle}>💻 Приклади коду:</h3>
        
        <div className={styles.codeBlock}>
          <h4 className={styles.codeTitle}>📦 Розпакування проміса:</h4>
          <pre className={styles.code}>{`// Передаємо проміс в компонент
<UserProfile userPromise={fetchUser(1)} />

// В компоненті розпаковуємо через use()
function UserProfile({ userPromise }) {
  const user = use(userPromise); // Чекаємо результат
  return <div>{user.name}</div>;
}`}</pre>
        </div>

        <div className={styles.codeBlock}>
          <h4 className={styles.codeTitle}>🎯 Умовне використання контексту:</h4>
          <pre className={styles.code}>{`// React 18: ❌ Так НЕ можна було
function Component({ showUser }) {
  if (showUser) {
    const user = useContext(UserContext); // ПОМИЛКА!
    return <div>{user.name}</div>;
  }
  return null;
}

// React 19: ✅ use() можна викликати умовно!
function Component({ showUser }) {
  if (showUser) {
    const user = use(UserContext); // OK!
    return <div>{user.name}</div>;
  }
  return null;
}`}</pre>
        </div>
      </div>

      {/* Переваги */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>💡 Переваги use():</h3>
        <ul className={styles.list}>
          <li>✅ <strong>Простіше:</strong> не потрібні useEffect для промісів</li>
          <li>✅ <strong>Гнучкіше:</strong> можна викликати умовно</li>
          <li>✅ <strong>Універсальне:</strong> працює з промісами та контекстом</li>
          <li>✅ <strong>SSR-friendly:</strong> ідеально для серверних компонентів</li>
          <li>✅ <strong>Менше коду:</strong> один хук замість кількох</li>
        </ul>
      </div>
    </div>
  );
};

// Компонент завантаження
const LoadingSpinner = ({ message }: { message: string }) => (
  <div className={styles.loading}>
    <div className={styles.spinner}>⏳</div>
    <p>{message}</p>
  </div>
);

