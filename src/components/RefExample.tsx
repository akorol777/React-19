import { use, useRef, type Ref } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import styles from './Examples.module.scss';

// React 19: ref as regular prop! No more forwardRef needed
const CustomInput = ({ label, ref, ...props }: {
  label: string;
  ref?: Ref<HTMLInputElement>;
  [key: string]: any;
}) => {
  console.log('🎯 CustomInput received ref:', !!ref);
  
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <input
        ref={ref} // Just pass ref!
        {...props}
        className={styles.input}
      />
    </div>
  );
};

// Component with multiple refs
const CustomCard = ({ title, content, ref }: {
  title: string;
  content: string;
  ref?: Ref<HTMLDivElement>;
}) => {
  console.log('📦 CustomCard received ref:', !!ref);
  
  return (
    <div ref={ref} className={styles.card}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardContent}>{content}</p>
    </div>
  );
};

// Custom button with ref
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

// Main component
export const RefExample = () => {
  const langContext = use(LanguageContext);
  if (!langContext) throw new Error('LanguageContext not found');
  const { t } = langContext;

  // Create refs
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Functions for working with refs
  const focusFirstInput = () => {
    console.log('🎯 Focusing on first input');
    inputRef1.current?.focus();
  };

  const focusSecondInput = () => {
    console.log('🎯 Focusing on second input');
    inputRef2.current?.focus();
  };

  const getInputValues = () => {
    const value1 = inputRef1.current?.value || '';
    const value2 = inputRef2.current?.value || '';
    console.log('📝 Input values:', { value1, value2 });
    alert(`Values:\n1: ${value1}\n2: ${value2}`);
  };

  const highlightCard = () => {
    if (cardRef.current) {
      console.log('✨ Highlighting card');
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
      console.log('📏 Button info:', rect);
      alert(`Button size:\nWidth: ${rect.width.toFixed(0)}px\nHeight: ${rect.height.toFixed(0)}px`);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🎯 {t.ref.title}</h2>
      
      <p className={styles.description}>
        <strong>What's new?</strong> {t.ref.description}
      </p>

      {/* React 18 vs React 19 comparison */}
      <div className={styles.comparison}>
        <h3 className={styles.sectionTitle}>{t.ref.comparisonTitle}</h3>
        
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCard}>
            <h4 className={styles.comparisonTitle}>{t.ref.react18Title}</h4>
            <pre className={styles.code}>{`import { forwardRef } from 'react';

// forwardRef needed! 😢
const Input = forwardRef<
  HTMLInputElement, 
  Props
>((props, ref) => {
  return <input ref={ref} {...props} />;
});

// Usage
<Input ref={myRef} />`}</pre>
            <div className={styles.comparisonNote}>
              <strong>{t.ref.react18Problems}</strong>
              <ul className={styles.comparisonList}>
                {t.ref.react18ProblemsList.map((problem: string, index: number) => (
                  <li key={index}>{problem}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.comparisonCard}>
            <h4 className={styles.comparisonTitle}>{t.ref.react19Title}</h4>
            <pre className={styles.code}>{`// Just pass ref as prop! 🎉
const Input = ({ ref, ...props }: {
  ref?: Ref<HTMLInputElement>;
  [key: string]: any;
}) => {
  return <input ref={ref} {...props} />;
};

// Usage - same!
<Input ref={myRef} />`}</pre>
            <div className={styles.comparisonNote}>
              <strong>{t.ref.react19BenefitsTitle}</strong>
              <ul className={styles.comparisonList}>
                {t.ref.react19BenefitsList.map((benefit: string, index: number) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Demo */}
      <div className={styles.demo}>
        <h3 className={styles.sectionTitle}>{t.ref.demoTitle}</h3>
        
        {/* Inputs with refs */}
        <div className={styles.demoSection}>
          <h4 className={styles.subsectionTitle}>{t.ref.customInputsTitle}</h4>
          
          <CustomInput
            label={t.ref.firstInputLabel}
            ref={inputRef1}
            placeholder={t.ref.inputPlaceholder}
          />

          <CustomInput
            label={t.ref.secondInputLabel}
            ref={inputRef2}
            placeholder={t.ref.secondInputPlaceholder}
          />

          <div className={styles.buttonGroup}>
            <button onClick={focusFirstInput} className={styles.demoButton}>
              {t.ref.focusFirstButton}
            </button>
            <button onClick={focusSecondInput} className={styles.demoButton}>
              {t.ref.focusSecondButton}
            </button>
            <button onClick={getInputValues} className={styles.demoButton}>
              {t.ref.getValuesButton}
            </button>
          </div>
        </div>

        {/* Card with ref */}
        <div className={styles.demoSection}>
          <h4 className={styles.subsectionTitle}>{t.ref.customCardTitle}</h4>
          
          <CustomCard
            ref={cardRef}
            title={t.ref.cardTitle}
            content={t.ref.cardContent}
          />

          <button onClick={highlightCard} className={styles.demoButton}>
            {t.ref.highlightCardButton}
          </button>
        </div>

        {/* Button with ref */}
        <div className={styles.demoSection}>
          <h4 className={styles.subsectionTitle}>{t.ref.customButtonTitle}</h4>
          
          <CustomButton ref={buttonRef} onClick={getButtonInfo}>
            {t.ref.getMySizeButton}
          </CustomButton>
        </div>
      </div>

      {/* When to use ref */}
      <div className={styles.useCases}>
        <h3 className={styles.sectionTitle}>{t.ref.whenToUseTitle}</h3>
        <div className={styles.useCaseGrid}>
          {t.ref.useCases.map((useCase: any, index: number) => (
            <div key={index} className={styles.useCase}>
              <div className={styles.useCaseIcon}>{useCase.icon}</div>
              <h4 className={styles.useCaseTitle}>{useCase.title}</h4>
              <p className={styles.useCaseDesc}>{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Important notes */}
      <div className={styles.notes}>
        <h3 className={styles.sectionTitle}>{t.ref.importantTitle}</h3>
        <ul className={styles.notesList}>
          {t.ref.importantNotes.map((note: string, index: number) => (
            <li key={index}>
              ⚠️ <span dangerouslySetInnerHTML={{ __html: note }} />
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className={styles.benefits}>
        <h3 className={styles.sectionTitle}>{t.ref.benefitsTitle}</h3>
        <ul className={styles.list}>
          {t.ref.newApproachBenefits.map((benefit: string, index: number) => (
            <li key={index}>✅ {benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
