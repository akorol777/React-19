import { use, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Examples.module.css';

// Simulation of different pages with different meta tags
const PageHome = ({ t }: { t: any }) => {
  console.log('🏠 Rendering home page');
  
  return (
    <>
      {/* React 19: Can change title and meta tags directly in components! */}
      <title>Home - React 19 Demo</title>
      <meta name="description" content="Demonstration of new React 19 capabilities for metadata handling" />
      <meta property="og:title" content="React 19 - New Features" />
      <meta property="og:description" content="Learn React 19 with practical examples" />
      <meta property="og:type" content="website" />
      
      <div className={styles.pageContent}>
        <h3 className={styles.pageTitle}>{t.pages.home.title}</h3>
        <p className={styles.pageText}>
          {t.pages.home.text}
        </p>
        <div className={styles.metaInfo}>
          <strong>{t.pages.home.metaTagsSet}</strong>
          <ul className={styles.metaList}>
            <li>description: "Demonstration of new capabilities..."</li>
            <li>og:title: "React 19 - New Features"</li>
            <li>og:description: "Learn React 19..."</li>
            <li>og:type: "website"</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const PageBlog = ({ t }: { t: any }) => {
  console.log('📝 Rendering blog page');
  
  return (
    <>
      <title>Blog - React 19 Demo</title>
      <meta name="description" content="Articles about React 19 and its new features" />
      <meta property="og:title" content="React 19 Blog" />
      <meta property="og:description" content="Read latest articles about React" />
      <meta property="og:type" content="blog" />
      <meta property="og:image" content="https://react.dev/images/og-home.png" />
      <meta name="author" content="React Team" />
      
      <div className={styles.pageContent}>
        <h3 className={styles.pageTitle}>{t.pages.blog.title}</h3>
        <p className={styles.pageText}>
          {t.pages.blog.text}
        </p>
        <div className={styles.metaInfo}>
          <strong>{t.pages.blog.metaTagsSet}</strong>
          <ul className={styles.metaList}>
            <li>description: "Articles about React 19..."</li>
            <li>og:title: "React 19 Blog"</li>
            <li>og:type: "blog"</li>
            <li>og:image: "https://react.dev/images/og-home.png"</li>
            <li>author: "React Team"</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const PageProduct = ({ t }: { t: any }) => {
  console.log('🛍️ Rendering product page');
  
  const product = {
    name: t.pages.product.name,
    price: '$99',
    image: 'https://via.placeholder.com/400',
  };

  return (
    <>
      <title>{product.name} - Buy Now</title>
      <meta name="description" content={`Get ${product.name} for ${product.price}. Best price!`} />
      <meta property="og:title" content={product.name} />
      <meta property="og:description" content="Complete React 19 course with practice" />
      <meta property="og:type" content="product" />
      <meta property="og:image" content={product.image} />
      <meta property="product:price:amount" content="99" />
      <meta property="product:price:currency" content="USD" />
      
      <div className={styles.pageContent}>
        <h3 className={styles.pageTitle}>{t.pages.product.title}</h3>
        <p className={styles.pageText}>
          {t.pages.product.text.replace('{productName}', product.name)}
        </p>
        <div className={styles.metaInfo}>
          <strong>{t.pages.product.metaTagsSet}</strong>
          <ul className={styles.metaList}>
            <li>description: "Get {product.name}..."</li>
            <li>og:title: "{product.name}"</li>
            <li>og:type: "product"</li>
            <li>product:price:amount: "99"</li>
            <li>product:price:currency: "USD"</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const PageArticle = ({ t }: { t: any }) => {
  console.log('📄 Rendering article');
  
  return (
    <>
      <title>What's New in React 19? | React Blog</title>
      <meta name="description" content="Detailed overview of all new React 19 features: Actions, useOptimistic, use() hook and much more" />
      <meta name="keywords" content="react, react 19, javascript, frontend, web development" />
      <meta name="author" content="Andrii Korol" />
      <meta property="og:title" content="What's New in React 19?" />
      <meta property="og:description" content="Detailed overview of all new features" />
      <meta property="og:type" content="article" />
      <meta property="article:published_time" content="2025-01-15" />
      <meta property="article:author" content="Andrii Korol" />
      <meta property="article:section" content="Technology" />
      <meta property="article:tag" content="React" />
      <meta property="article:tag" content="JavaScript" />
      
      <div className={styles.pageContent}>
        <h3 className={styles.pageTitle}>{t.pages.article.title}</h3>
        <p className={styles.pageText}>
          {t.pages.article.text}
        </p>
        <div className={styles.metaInfo}>
          <strong>{t.pages.article.metaTagsSet}</strong>
          <ul className={styles.metaList}>
            <li>description: "Detailed overview of all new features..."</li>
            <li>keywords: "react, react 19, javascript..."</li>
            <li>author: "Andrii Korol"</li>
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
  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  const { t } = langContext;

  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'product' | 'article'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PageHome t={t.metadata} />;
      case 'blog':
        return <PageBlog t={t.metadata} />;
      case 'product':
        return <PageProduct t={t.metadata} />;
      case 'article':
        return <PageArticle t={t.metadata} />;
      default:
        return <PageHome t={t.metadata} />;
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>📄 {t.metadata.title}</h2>
      
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: `<strong>${t.metadata.whatsNew}</strong> ${t.metadata.description}` }}>
      </p>

      {/* Comparison of approaches */}
      <div className={styles.comparison}>
        <h3 className={styles.sectionTitle}>{t.metadata.comparisonTitle}</h3>
        
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCard}>
            <h4 className={styles.comparisonTitle}>{t.metadata.react18Title}</h4>
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
              <strong>{t.metadata.react18Problems}</strong>
              <ul>
                {t.metadata.react18ProblemsList.map((problem: string, index: number) => (
                  <li key={index}>{problem}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.comparisonCard}>
            <h4 className={styles.comparisonTitle}>{t.metadata.react19Title}</h4>
            <pre className={styles.code}>{`// Just write tags!
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
              <strong>{t.metadata.react19Benefits}</strong>
              <ul>
                {t.metadata.react19BenefitsList.map((benefit: string, index: number) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive demonstration */}
      <div className={styles.demo}>
        <h3 className={styles.sectionTitle}>{t.metadata.demoTitle}</h3>
        <p className={styles.demoDescription}>
          {t.metadata.demoDescription}
        </p>

        {/* Navigation */}
        <div className={styles.pageNav}>
          <button
            onClick={() => setCurrentPage('home')}
            className={`${styles.navButton} ${currentPage === 'home' ? styles.navButtonActive : ''}`}
          >
            {t.metadata.pages.home.button}
          </button>
          <button
            onClick={() => setCurrentPage('blog')}
            className={`${styles.navButton} ${currentPage === 'blog' ? styles.navButtonActive : ''}`}
          >
            {t.metadata.pages.blog.button}
          </button>
          <button
            onClick={() => setCurrentPage('product')}
            className={`${styles.navButton} ${currentPage === 'product' ? styles.navButtonActive : ''}`}
          >
            {t.metadata.pages.product.button}
          </button>
          <button
            onClick={() => setCurrentPage('article')}
            className={`${styles.navButton} ${currentPage === 'article' ? styles.navButtonActive : ''}`}
          >
            {t.metadata.pages.article.button}
          </button>
        </div>

        {/* Page content */}
        <div className={styles.pageContainer}>
          {renderPage()}
        </div>
      </div>

      {/* Which tags are supported */}
      <div className={styles.supportedTags}>
        <h3 className={styles.sectionTitle}>{t.metadata.supportedTagsTitle}</h3>
        <div className={styles.tagsGrid}>
          {t.metadata.supportedTags.map((tag: any, index: number) => (
            <div key={index} className={styles.tagCard}>
              <div className={styles.tagIcon}>{tag.icon}</div>
              <h4 className={styles.tagTitle}>{tag.title}</h4>
              <p className={styles.tagDesc}>{tag.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Examples for different cases */}
      <div className={styles.examples}>
        <h3 className={styles.sectionTitle}>{t.metadata.usageExamplesTitle}</h3>
        
        <div className={styles.exampleCard}>
          <h4 className={styles.exampleTitle}>{t.metadata.examples.multilingual.title}</h4>
          <pre className={styles.code}>{`<title>{t('page.title')}</title>
<meta name="description" content={t('page.description')} />
<link rel="alternate" hrefLang="en" href="/en/page" />
<link rel="alternate" hrefLang="uk" href="/uk/page" />`}</pre>
        </div>

        <div className={styles.exampleCard}>
          <h4 className={styles.exampleTitle}>{t.metadata.examples.pwa.title}</h4>
          <pre className={styles.code}>{`<meta name="theme-color" content="#61dafb" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<link rel="manifest" href="/manifest.json" />
<link rel="apple-touch-icon" href="/icon.png" />`}</pre>
        </div>

        <div className={styles.exampleCard}>
          <h4 className={styles.exampleTitle}>{t.metadata.examples.seo.title}</h4>
          <pre className={styles.code}>{`<title>{product.name} - Buy Online</title>
<meta name="description" content={\`\${product.description}\`} />
<link rel="canonical" href={\`https://site.com/\${product.slug}\`} />
<meta name="robots" content="index, follow" />`}</pre>
        </div>
      </div>

      {/* Benefits */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>{t.metadata.benefitsTitle}</h3>
        <ul className={styles.list}>
          {t.metadata.benefitsList.map((benefit: string, index: number) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: benefit }} />
          ))}
        </ul>
      </div>

      {/* Important notes */}
      <div className={styles.notes}>
        <h3 className={styles.sectionTitle}>{t.metadata.importantTitle}</h3>
        <ul className={styles.notesList}>
          {t.metadata.importantNotes.map((note: string, index: number) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: note }} />
          ))}
        </ul>
      </div>
    </div>
  );
};

