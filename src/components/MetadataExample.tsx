import { useState } from 'react';
import styles from './Examples.module.css';

// Симуляція різних сторінок з різними meta tags
const PageHome = () => {
  console.log('🏠 Рендеримо головну сторінку');
  
  return (
    <>
      {/* React 19: Можна змінювати title та meta tags прямо в компонентах! */}
      <title>Головна - React 19 Demo</title>
      <meta name="description" content="Демонстрація нових можливостей React 19 для роботи з метаданими" />
      <meta property="og:title" content="React 19 - Нові фічі" />
      <meta property="og:description" content="Вивчайте React 19 з практичними прикладами" />
      <meta property="og:type" content="website" />
      
      <div className={styles.pageContent}>
        <h3 className={styles.pageTitle}>🏠 Головна сторінка</h3>
        <p className={styles.pageText}>
          Подивіться в title вкладки браузера - він змінився на "Головна - React 19 Demo"!
        </p>
        <div className={styles.metaInfo}>
          <strong>Встановлені meta tags:</strong>
          <ul className={styles.metaList}>
            <li>description: "Демонстрація нових можливостей..."</li>
            <li>og:title: "React 19 - Нові фічі"</li>
            <li>og:description: "Вивчайте React 19..."</li>
            <li>og:type: "website"</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const PageBlog = () => {
  console.log('📝 Рендеримо сторінку блогу');
  
  return (
    <>
      <title>Блог - React 19 Demo</title>
      <meta name="description" content="Статті про React 19 та його нові можливості" />
      <meta property="og:title" content="Блог React 19" />
      <meta property="og:description" content="Читайте останні статті про React" />
      <meta property="og:type" content="blog" />
      <meta property="og:image" content="https://react.dev/images/og-home.png" />
      <meta name="author" content="React Team" />
      
      <div className={styles.pageContent}>
        <h3 className={styles.pageTitle}>📝 Блог</h3>
        <p className={styles.pageText}>
          Title тепер: "Блог - React 19 Demo". Meta tags оновилися для блогу!
        </p>
        <div className={styles.metaInfo}>
          <strong>Встановлені meta tags:</strong>
          <ul className={styles.metaList}>
            <li>description: "Статті про React 19..."</li>
            <li>og:title: "Блог React 19"</li>
            <li>og:type: "blog"</li>
            <li>og:image: "https://react.dev/images/og-home.png"</li>
            <li>author: "React Team"</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const PageProduct = () => {
  console.log('🛍️ Рендеримо сторінку продукту');
  
  const product = {
    name: 'React 19 Course',
    price: '₴999',
    image: 'https://via.placeholder.com/400',
  };

  return (
    <>
      <title>{product.name} - Купити зараз</title>
      <meta name="description" content={`Придбайте ${product.name} за ${product.price}. Краща ціна!`} />
      <meta property="og:title" content={product.name} />
      <meta property="og:description" content="Повний курс по React 19 з практикою" />
      <meta property="og:type" content="product" />
      <meta property="og:image" content={product.image} />
      <meta property="product:price:amount" content="999" />
      <meta property="product:price:currency" content="UAH" />
      
      <div className={styles.pageContent}>
        <h3 className={styles.pageTitle}>🛍️ Продукт</h3>
        <p className={styles.pageText}>
          Title: "{product.name} - Купити зараз". SEO оптимізовано для продукту!
        </p>
        <div className={styles.metaInfo}>
          <strong>Встановлені meta tags:</strong>
          <ul className={styles.metaList}>
            <li>description: "Придбайте {product.name}..."</li>
            <li>og:title: "{product.name}"</li>
            <li>og:type: "product"</li>
            <li>product:price:amount: "999"</li>
            <li>product:price:currency: "UAH"</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const PageArticle = () => {
  console.log('📄 Рендеримо статтю');
  
  return (
    <>
      <title>Що нового в React 19? | React Blog</title>
      <meta name="description" content="Детальний огляд всіх нових фіч React 19: Actions, useOptimistic, use() хук та багато іншого" />
      <meta name="keywords" content="react, react 19, javascript, frontend, web development" />
      <meta name="author" content="Андрій Король" />
      <meta property="og:title" content="Що нового в React 19?" />
      <meta property="og:description" content="Детальний огляд всіх нових фіч" />
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content="2025-01-15" />
      <meta property="article:author" content="Андрій Король" />
      <meta property="article:section" content="Technology" />
      <meta property="article:tag" content="React" />
      <meta property="article:tag" content="JavaScript" />
      
      <div className={styles.pageContent}>
        <h3 className={styles.pageTitle}>📄 Стаття</h3>
        <p className={styles.pageText}>
          Meta tags для статті включають автора, дату публікації, теги та багато іншого!
        </p>
        <div className={styles.metaInfo}>
          <strong>Встановлені meta tags:</strong>
          <ul className={styles.metaList}>
            <li>description: "Детальний огляд всіх нових фіч..."</li>
            <li>keywords: "react, react 19, javascript..."</li>
            <li>author: "Андрій Король"</li>
            <li>article:published_time: "2025-01-15"</li>
            <li>article:section: "Technology"</li>
            <li>article:tag: "React", "JavaScript"</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export const MetadataExample = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'product' | 'article'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PageHome />;
      case 'blog':
        return <PageBlog />;
      case 'product':
        return <PageProduct />;
      case 'article':
        return <PageArticle />;
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📄 Document Metadata</h2>
      
      <p className={styles.description}>
        <strong>Що нового?</strong> В React 19 можна змінювати <code>&lt;title&gt;</code> та 
        <code>&lt;meta&gt;</code> tags прямо в компонентах! Більше не потрібен react-helmet!
      </p>

      {/* Порівняння підходів */}
      <div className={styles.comparison}>
        <h3 className={styles.sectionTitle}>⚖️ Порівняння підходів:</h3>
        
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCard}>
            <h4 className={styles.comparisonTitle}>❌ React 18 (з react-helmet)</h4>
            <pre className={styles.code}>{`import { Helmet } from 'react-helmet';

function BlogPost({ post }) {
  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta 
          name="description" 
          content={post.excerpt} 
        />
      </Helmet>
      
      <article>...</article>
    </>
  );
}`}</pre>
            <div className={styles.comparisonNote}>
              <strong>Проблеми:</strong>
              <ul>
                <li>Додаткова залежність (17kb)</li>
                <li>Потрібна конфігурація для SSR</li>
                <li>Окремий API</li>
              </ul>
            </div>
          </div>

          <div className={styles.comparisonCard}>
            <h4 className={styles.comparisonTitle}>✅ React 19 (нативно)</h4>
            <pre className={styles.code}>{`// Просто пишемо теги!
function BlogPost({ post }) {
  return (
    <>
      <title>{post.title}</title>
      <meta 
        name="description" 
        content={post.excerpt} 
      />
      
      <article>...</article>
    </>
  );
}`}</pre>
            <div className={styles.comparisonNote}>
              <strong>Переваги:</strong>
              <ul>
                <li>Вбудовано в React</li>
                <li>Працює з SSR автоматично</li>
                <li>Простіший синтаксис</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Інтерактивна демонстрація */}
      <div className={styles.demo}>
        <h3 className={styles.sectionTitle}>🧪 Інтерактивна демонстрація:</h3>
        <p className={styles.demoDescription}>
          Перемикайте між "сторінками" і дивіться як змінюється title вкладки браузера!
        </p>

        {/* Навігація */}
        <div className={styles.pageNav}>
          <button
            onClick={() => setCurrentPage('home')}
            className={`${styles.navButton} ${currentPage === 'home' ? styles.navButtonActive : ''}`}
          >
            🏠 Головна
          </button>
          <button
            onClick={() => setCurrentPage('blog')}
            className={`${styles.navButton} ${currentPage === 'blog' ? styles.navButtonActive : ''}`}
          >
            📝 Блог
          </button>
          <button
            onClick={() => setCurrentPage('product')}
            className={`${styles.navButton} ${currentPage === 'product' ? styles.navButtonActive : ''}`}
          >
            🛍️ Продукт
          </button>
          <button
            onClick={() => setCurrentPage('article')}
            className={`${styles.navButton} ${currentPage === 'article' ? styles.navButtonActive : ''}`}
          >
            📄 Стаття
          </button>
        </div>

        {/* Контент сторінки */}
        <div className={styles.pageContainer}>
          {renderPage()}
        </div>
      </div>

      {/* Які теги підтримуються */}
      <div className={styles.supportedTags}>
        <h3 className={styles.sectionTitle}>📋 Підтримувані теги:</h3>
        <div className={styles.tagsGrid}>
          <div className={styles.tagCard}>
            <div className={styles.tagIcon}>📝</div>
            <h4 className={styles.tagTitle}>&lt;title&gt;</h4>
            <p className={styles.tagDesc}>Заголовок сторінки в браузері та пошуку</p>
          </div>
          <div className={styles.tagCard}>
            <div className={styles.tagIcon}>📄</div>
            <h4 className={styles.tagTitle}>&lt;meta name&gt;</h4>
            <p className={styles.tagDesc}>description, keywords, author, viewport</p>
          </div>
          <div className={styles.tagCard}>
            <div className={styles.tagIcon}>📱</div>
            <h4 className={styles.tagTitle}>&lt;meta property&gt;</h4>
            <p className={styles.tagDesc}>Open Graph tags для соцмереж (og:*)</p>
          </div>
          <div className={styles.tagCard}>
            <div className={styles.tagIcon}>🐦</div>
            <h4 className={styles.tagTitle}>&lt;meta name="twitter"&gt;</h4>
            <p className={styles.tagDesc}>Twitter Cards для красивих превью</p>
          </div>
          <div className={styles.tagCard}>
            <div className={styles.tagIcon}>🔗</div>
            <h4 className={styles.tagTitle}>&lt;link&gt;</h4>
            <p className={styles.tagDesc}>canonical, alternate, preload, stylesheet</p>
          </div>
          <div className={styles.tagCard}>
            <div className={styles.tagIcon}>📜</div>
            <h4 className={styles.tagTitle}>&lt;script&gt;</h4>
            <p className={styles.tagDesc}>Structured data (JSON-LD), analytics</p>
          </div>
        </div>
      </div>

      {/* Приклади для різних випадків */}
      <div className={styles.examples}>
        <h3 className={styles.sectionTitle}>💡 Приклади використання:</h3>
        
        <div className={styles.exampleCard}>
          <h4 className={styles.exampleTitle}>🌍 Мультимовність:</h4>
          <pre className={styles.code}>{`<title>{t('page.title')}</title>
<meta name="description" content={t('page.description')} />
<link rel="alternate" hrefLang="en" href="/en/page" />
<link rel="alternate" hrefLang="uk" href="/uk/page" />`}</pre>
        </div>

        <div className={styles.exampleCard}>
          <h4 className={styles.exampleTitle}>📱 PWA:</h4>
          <pre className={styles.code}>{`<meta name="theme-color" content="#61dafb" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<link rel="manifest" href="/manifest.json" />
<link rel="apple-touch-icon" href="/icon.png" />`}</pre>
        </div>

        <div className={styles.exampleCard}>
          <h4 className={styles.exampleTitle}>🔍 SEO:</h4>
          <pre className={styles.code}>{`<title>{product.name} - Купити онлайн</title>
<meta name="description" content={\`\${product.description}\`} />
<link rel="canonical" href={\`https://site.com/\${product.slug}\`} />
<meta name="robots" content="index, follow" />`}</pre>
        </div>
      </div>

      {/* Переваги */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>✨ Переваги нового підходу:</h3>
        <ul className={styles.list}>
          <li>✅ <strong>Менше залежностей:</strong> не потрібен react-helmet (економія ~17kb)</li>
          <li>✅ <strong>Простіший код:</strong> звичайні HTML теги замість JSX компонентів</li>
          <li>✅ <strong>SSR out of the box:</strong> працює на сервері автоматично</li>
          <li>✅ <strong>Кращий DX:</strong> автодоповнення, типізація працюють краще</li>
          <li>✅ <strong>Streaming-friendly:</strong> працює з React Server Components</li>
        </ul>
      </div>

      {/* Важливі примітки */}
      <div className={styles.notes}>
        <h3 className={styles.sectionTitle}>⚠️ Важливо:</h3>
        <ul className={styles.notesList}>
          <li>React автоматично переносить ці теги в <code>&lt;head&gt;</code></li>
          <li>При зміні компонента, старі meta tags замінюються новими</li>
          <li>Працює тільки для тегів, що мають бути в <code>&lt;head&gt;</code></li>
          <li>Для SSR потрібен React 19 на сервері</li>
        </ul>
      </div>
    </div>
  );
};

