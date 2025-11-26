import { use, Suspense, useState } from 'react';
import type { User, Post } from '../data/mockData';
import { fetchUser, fetchPosts } from '../data/mockData';
import { AppContext } from '../contexts/AppContext';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Examples.module.css';

// Component that uses use() to unwrap promise
const UserProfile = ({ userPromise }: { userPromise: Promise<User> }) => {
  // React 19: use() hook - unwraps promise!
  // Can be used even conditionally (unlike useEffect)
  const user = use(userPromise);
  
  console.log('👤 User loaded in component:', user);

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

// Component that uses use() for posts
const PostsList = ({ postsPromise }: { postsPromise: Promise<Post[]> }) => {
  // React 19: use() unwraps promise with posts array
  const posts = use(postsPromise);
  
  console.log(`📚 Posts loaded in component: ${posts.length} items`);

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

// Example of conditional use() for context
const ConditionalContextExample = ({ showContext, t }: { showContext: boolean; t: any }) => {
  // React 19: use() can be called conditionally! 
  // In React 18 this was impossible with useContext
  if (showContext) {
    // This is OK in React 19!
    const context = use(AppContext);
    if (!context) return null;
    
    return (
      <div className={styles.contextExample}>
        <strong>{t.contextUsageStrong}</strong>
        <br />
        {t.currentView} {context.currentView}
        <br />
        {t.totalTodos} {context.todos.length}
      </div>
    );
  }

  return (
    <div className={styles.contextExample}>
      <em>{t.contextNotShown}</em>
    </div>
  );
};

// Main component
export const UseHookExample = () => {
  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  const { t } = langContext;

  const [userId, setUserId] = useState<number>(1);
  const [showContext, setShowContext] = useState<boolean>(false);
  const [loadData, setLoadData] = useState<boolean>(false);

  // Create promises (they start immediately)
  const userPromise = loadData ? fetchUser(userId) : null;
  const postsPromise = loadData ? fetchPosts() : null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🎣 {t.useHook.title}</h2>

      <p className={styles.description}>{t.useHook.description}</p>

      <div className={styles.explanation}>
        <h3 className={styles.sectionTitle}>{t.useHook.whatCanDo}</h3>
        <ul className={styles.list}>
          {t.useHook.capabilities.map((cap, index) => (
            <li key={index}>{cap}</li>
          ))}
        </ul>
      </div>

      {/* Explanation */}
      <div className={styles.explanation}>
        <h3 className={styles.sectionTitle}>{t.useHook.keyDifference}</h3>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <h4>{t.useHook.otherHooks.title}</h4>
            <ul className={styles.list}>
              {t.useHook.otherHooks.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.comparisonItem}>
            <h4>{t.useHook.useHookBenefits.title}</h4>
            <ul className={styles.list}>
              {t.useHook.useHookBenefits.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Example 1: Unwrapping promises */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>1️⃣ {t.useHook.promiseUnwrapTitle}</h3>

        <div className={styles.controls}>
          <label className={styles.label}>
            {t.useHook.selectUser}
            <select
              value={userId}
              onChange={(e) => setUserId(Number(e.target.value))}
              className={styles.select}
              disabled={loadData}
            >
              <option value={1}>Andrii King</option>
              <option value={2}>Peter Paver</option>
              <option value={3}>Pavel Peter</option>
            </select>
          </label>

          <button
            onClick={() => setLoadData(!loadData)}
            className={styles.button}
            style={{
              backgroundColor: loadData ? '#dc3545' : '#61dafb',
            }}
          >
            {loadData
              ? `🛑 ${t.useHook.loadingButton}`
              : `🚀 ${t.useHook.loadDataButton}`}
          </button>
        </div>

        {loadData && userPromise && postsPromise ? (
          // Suspense waits until use() unwraps promises
          <Suspense
            fallback={<LoadingSpinner message={t.useHook.loading} />}
          >
            <div className={styles.dataContainer}>
              <div>
                <h4 className={styles.subsectionTitle}>
                  👤 {t.useHook.userProfileTitle}
                </h4>
                <UserProfile userPromise={userPromise} />
              </div>

              <div>
                <h4 className={styles.subsectionTitle}>
                  📚 {t.useHook.postsTitle}
                </h4>
                <PostsList postsPromise={postsPromise} />
              </div>
            </div>
          </Suspense>
        ) : (
          <div className={styles.placeholder}>
            {t.useHook.clickToLoadMessage}
          </div>
        )}
      </div>

      {/* Example 2: Conditional context usage */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          2️⃣ {t.useHook.conditionalContextTitle}
        </h3>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={showContext}
            onChange={(e) => setShowContext(e.target.checked)}
            className={styles.checkbox}
          />
          {showContext
            ? t.useHook.hideContextButton
            : t.useHook.showContextButton}
        </label>

        <ConditionalContextExample showContext={showContext} t={t.useHook} />
      </div>

      {/* Code examples */}
      <div className={styles.codeExamples}>
        <h3 className={styles.sectionTitle}>💻 {t.useHook.codeExamplesTitle}</h3>

        <div className={styles.codeBlock}>
          <h4 className={styles.codeTitle}>{t.useHook.promiseUnwrapCode}</h4>
          <pre className={styles.code}>{`// Pass promise to component
<UserProfile userPromise={fetchUser(1)} />

// In component unwrap via use()
function UserProfile({ userPromise }) {
  const user = use(userPromise); // Wait for result
  return <div>{user.name}</div>;
}`}</pre>
        </div>

        <div className={styles.codeBlock}>
          <h4 className={styles.codeTitle}>
            {t.useHook.conditionalContextCode}
          </h4>
          <pre className={styles.code}>{`// React 18: ❌ This was NOT allowed
function Component({ showUser }) {
  if (showUser) {
    const user = useContext(UserContext); // ERROR!
    return <div>{user.name}</div>;
  }
  return null;
}

// React 19: ✅ use() can be called conditionally!
function Component({ showUser }) {
  if (showUser) {
    const user = use(UserContext); // OK!
    return <div>{user.name}</div>;
  }
  return null;
}`}</pre>
        </div>
      </div>

      {/* Benefits */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>💡 {t.useHook.benefitsTitle}</h3>
        <ul className={styles.list}>
          {t.useHook.benefits.map((benefit: string, index: number) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: benefit }} />
          ))}
        </ul>
      </div>
    </div>
  );
};

// Loading component
const LoadingSpinner = ({ message }: { message: string }) => (
  <div className={styles.loading}>
    <div className={styles.spinner}>⏳</div>
    <p>{message}</p>
  </div>
);
