// Словник з перекладами
export type Language = 'en' | 'uk';

// Визначаємо структуру один раз на основі англійської версії
const translationsEn = {
  nav: {
      home: 'Home',
      actions: 'Actions',
      optimistic: 'useOptimistic',
      useHook: 'use() Hook',
      formStatus: 'useFormStatus',
      ref: 'ref as prop',
      metadata: 'Metadata',
      finalFormComparison: 'Forms Comparison',
      compiler: 'React Compiler',
    },
    
  home: {
    title: 'React 19: What\'s New?',
    subtitle: 'Overview of new features and improvements',
    whatsNew: 'What\'s New?',
    improvements: 'Improvements',
    stats: {
      lessCode: 'Less code for forms',
      noDelay: 'Delay with useOptimistic',
      noHelmet: 'Without react-helmet',
    },
    whyUpgrade: 'Why upgrade?',
    howToUse: 'How to use this demo?',
    usefulLinks: 'Useful links',
    links: {
      officialAnnouncement: '📰 Official React 19 Announcement',
      documentation: '📚 React 19 Documentation',
      newHooks: '🎣 New Hooks in React 19',
      upgradeGuide: '🚀 Upgrade Guide',
    },
    footer: {
      description: '🎓 This project was created for learning and demonstrating new React 19 features',
      consoleNote: '💻 Open DevTools Console for detailed logs',
    },
    mockTodos: {
      todo1: 'Learn React 19',
      todo2: 'Create presentation',
      todo3: 'Explain new features to colleagues',
    },
    instructions: {
      step1: 'Choose an example from the menu above',
      step2: 'Read explanations and comparisons with React 18',
      step3: 'Interact with interactive examples',
      step4: 'Check the console - there are many logs for understanding',
    },
    reasons: {
      lessBoilerplate: {
        title: 'Less boilerplate',
        description: 'Actions, ref as prop, built-in meta tags - all reduce code amount',
      },
      betterUX: {
        title: 'Better UX',
        description: 'useOptimistic provides instant feedback, app feels faster',
      },
      smallerBundle: {
        title: 'Smaller bundle',
        description: 'Can remove dependencies: react-helmet, some form libraries',
      },
      futureReady: {
        title: 'Future ready',
        description: 'React Server Components, Streaming SSR - everything works out of the box',
      },
      easierMaintenance: {
        title: 'Easier maintenance',
        description: 'Less magic, more predictability, easier for new developers',
      },
      betterDX: {
        title: 'Better DX',
        description: 'Simpler typing, fewer wrappers, more intuitive API',
      },
    },
    features: {
        actions: {
          title: 'Actions',
          description: 'Simplified asynchronous data handling in forms and components',
        },
        optimistic: {
          title: 'useOptimistic',
          description: 'Optimistic updates for better UX during async operations',
        },
        use: {
          title: 'use() Hook',
          abilities: [
            'Read promises directly in components',
            'Conditional context reading',
            'Cleaner code without useEffect',
            'Automatic Suspense support',
          ],
        },
        formStatus: {
          title: 'useFormStatus',
          description: 'Access form submission status from any child component',
        },
        ref: {
          title: 'ref as prop',
          description: 'Use ref as a regular prop without forwardRef',
        },
        metadata: {
          title: 'Document Metadata',
          description: 'Manage <title>, <meta> and <link> directly in components',
        },
        compiler: {
          title: 'React Compiler',
          description: 'Automatic optimization without manual memoization',
        },
      },
    },
    
    actions: {
      title: 'React 19: Actions',
      description: 'Actions - a new way to handle asynchronous operations in forms. No more manual loading/error state management!',
      comparisonTitle: '⚖️ Comparison of approaches:',
      react18Title: '❌ React 18',
      react19Title: '✅ React 19',
      benefits: 'Benefits:',
      benefitsList: [
        'No need for useState, useEffect for loading states',
        'Automatic error handling',
        'Simplified code',
        'Works with FormData by default',
      ],
      realExamplesTitle: '🔥 Real examples:',
      realExamples: {
        loginForm: {
          title: '1. Simple login form:',
          code: `const LoginForm = () => {
  const [state, loginAction] = useActionState(
    async (prev, formData) => {
      const email = formData.get('email');
      const password = formData.get('password');
      
      const response = await login(email, password);
      return { success: true, user: response };
    },
    { success: false }
  );

  return (
    <form action={loginAction}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit">Login</button>
    </form>
  );
};`,
        },
        fileUpload: {
          title: '2. Form with file upload:',
          code: `const UploadForm = () => {
  const [state, uploadAction, isPending] = useActionState(
    async (prev, formData) => {
      const file = formData.get('file');
      
      await uploadFile(file);
      return { success: true, fileName: file.name };
    },
    { success: false }
  );

  return (
    <form action={uploadAction}>
      <input name="file" type="file" required />
      <button disabled={isPending}>
        {isPending ? 'Uploading...' : 'Upload'}
      </button>
      {state.success && <p>✅ {state.fileName} uploaded!</p>}
    </form>
  );
};`,
        },
      },
      apiSectionTitle: '📖 useActionState API:',
      apiTable: {
        returns: 'Returns',
        parameter: 'Parameter',
        type: 'Type',
        description: 'Description',
        state: 'Current state (result of last action)',
        action: 'Function to pass to form action attribute',
        isPending: 'Boolean indicating if action is in progress',
        actionParam: 'Async function that receives (prevState, formData)',
        initialState: 'Initial state value',
      },
      importantTitle: 'Important:',
      importantNotes: [
        '<strong>Actions automatically manage pending state:</strong> no need for manual useState for loading',
        '<strong>Work with FormData by default:</strong> easy access to all form fields',
        '<strong>Require React 19:</strong> not available in earlier versions',
        '<strong>SSR/RSC compatible:</strong> work with Server Components out of the box',
        '<strong>Automatic error boundaries:</strong> errors are caught and can be handled in state',
      ],
      example: 'Example:',
      form: {
        nameLabel: 'Name:',
        namePlaceholder: 'Enter your name',
        emailLabel: 'Email:',
        emailPlaceholder: 'example@email.com',
        messageLabel: 'Message:',
        messagePlaceholder: 'Your message...',
        submitButton: 'Submit',
        submittingButton: 'Submitting...',
      },
    messages: {
      success: 'Form submitted successfully!',
      successData: 'Submitted data:',
      dataSaved: 'Data successfully saved!',
      error: 'Error occurred!',
    },
  },
    
  optimistic: {
    title: 'React 19: useOptimistic',
    description: 'Show changes to users instantly without waiting for server response. Changes rollback automatically on error!',
    howItWorks: '🔄 How it works:',
    steps: {
      step1: 'User clicks "Add"',
      step2: 'Item appears in UI immediately',
      step3: 'Request sent to server in background',
      step4: 'On error - automatic rollback',
    },
    benefits: 'Benefits:',
    benefitsList: [
      'Instant UI feedback',
      'Better user experience',
      'Automatic state rollback on error',
      'No additional useState needed',
    ],
    benefitsTitle: '💡 Benefits of useOptimistic:',
    benefitsDetailed: {
      instantFeedback: {
        title: 'Instant feedback:',
        description: 'user sees changes without delay',
      },
      betterUX: {
        title: 'Better UX:',
        description: 'app feels faster',
      },
      autoRollback: {
        title: 'Automatic rollback:',
        description: 'changes revert on error',
      },
      lessCode: {
        title: 'Less code:',
        description: 'no need to manually manage temporary states',
      },
      worksWithActions: {
        title: 'Works with Actions:',
        description: 'perfect integration with new API',
      },
    },
    example: 'Example - Adding Todo with Optimistic Update:',
    todoList: '📝 Task List',
    emptyState: 'No tasks yet. Add your first one!',
    todoPlaceholder: 'What needs to be done?',
    addButton: '+ Add',
    addingButton: 'Adding...',
    removeButton: '🗑️ Remove',
    savingBadge: 'Saving...',
    comparisonTitle: '⚖️ Comparison of approaches:',
    react18: {
      title: '❌ React 18 (without optimism)',
      comment1: '// User waits for response',
      comment2: '// Only now sees changes',
      delay: '⏱️ Delay: 1-2 seconds',
      codeExample: `// React 18: Manual state management
const [todos, setTodos] = useState([]);
const [loading, setLoading] = useState(false);

const addTodo = async (newTodo) => {
  setLoading(true);           // Show loader
  
  await saveTodo(newTodo);    // Wait for server... 2 seconds... 😴
  
  setTodos([...todos, newTodo]); // Only now user sees the result
  setLoading(false);
};

// Problem: User waits 1-2 seconds and sees loader 🐌`,
    },
    react19: {
      title: '✅ React 19 (with optimism)',
      comment1: '// User sees instantly',
      comment2: '// Request in background',
      comment3: '// If error - auto rollback',
      delay: '⚡ Delay: 0 ms!',
      codeExample: `// React 19: Optimistic updates
const [optimisticTodos, addOptimisticTodo] = useOptimistic(
  todos,                    // Real todos
  (state, newTodo) => {     // How to update optimistically
    return [...state, newTodo];
  }
);

const addTodo = async (newTodo) => {
  addOptimisticTodo(newTodo);  // Show instantly! ⚡
  
  await saveTodo(newTodo);     // Request in background
  // If error - React will rollback automatically!
};

// Result: User sees result instantly! 🚀`,
    },
    importantTitle: 'Important:',
    importantNotes: [
      'Use <strong>only for operations that almost always succeed</strong> (like, add to cart, mark as complete)',
      '<strong>Don\'t use for critical operations</strong> (payment, account deletion) - there you need to wait for server confirmation',
      'React <strong>automatically rolls back changes on error</strong> - you don\'t need to write code for this',
      'Works best in combination with Actions and useActionState',
    ],
  },
    
  useHook: {
    title: 'React 19: use() Hook',
    description: 'Universal hook for reading promises and context',
    whatCanDo: 'What can use() do?',
    capabilities: [
      'Read promises directly in components',
      'Conditional context reading',
      'Cleaner code without useEffect',
      'Automatic Suspense support',
    ],
    keyDifference: '🔑 Key difference from other hooks:',
    otherHooks: {
      title: '❌ Other hooks (useState, useEffect...)',
      items: [
        '❌ Cannot call conditionally',
        '❌ Cannot call in loops',
        '❌ Only at top level',
        '❌ Strict call order',
      ],
    },
    useHookBenefits: {
      title: '✅ use() hook',
      items: [
        '✅ Can call conditionally',
        '✅ Can call in loops',
        '✅ Can use inside if/else',
        '✅ Flexible and powerful',
      ],
    },
    example: 'Example - Loading Data with use():',
    selectUser: 'Select user:',
    loadDataButton: 'Load Data',
    loadingButton: 'Loading...',
    userInfo: 'User Info:',
    postsTitle: 'Recent Posts:',
    showContextButton: 'Show Context Data',
    hideContextButton: 'Hide Context Data',
    contextDataTitle: 'Data from Context:',
    loading: 'Loading...',
    promiseUnwrapTitle: 'Promise unwrapping',
    conditionalContextTitle: 'Conditional context usage',
    contextUsageStrong: '🎯 Conditional context usage:',
    currentView: 'Current view:',
    totalTodos: 'Total todos:',
    contextNotShown: 'Context not shown (toggle checkbox)',
    clickToLoadMessage: 'Click "Load data" to see use() in action',
    codeExamplesTitle: 'Code examples',
    promiseUnwrapCode: '📦 Promise unwrapping:',
    conditionalContextCode: '🎯 Conditional context usage:',
    benefitsTitle: 'use() Benefits:',
    benefits: [
      '✅ <strong>Simpler:</strong> no need for useEffect for promises',
      '✅ <strong>More flexible:</strong> can be called conditionally',
      '✅ <strong>Universal:</strong> works with promises and context',
      '✅ <strong>SSR-friendly:</strong> perfect for server components',
      '✅ <strong>Less code:</strong> one hook instead of several',
    ],
    comparisonTitle: '⚖️ Comparison of approaches:',
    react18: {
      title: '❌ React 18 (strict rules)',
      codeExample: `// React 18: Cannot call conditionally
function Component({ showUser }) {
  // ❌ ERROR: Hooks must be called in exact order
  if (showUser) {
    const user = useContext(UserContext); // ❌
    return <div>{user.name}</div>;
  }
  return null;
}

// Had to do workaround:
const user = useContext(UserContext);
if (showUser) {
  return <div>{user.name}</div>;
}
return null;`,
    },
    react19: {
      title: '✅ React 19 (freedom!)',
      codeExample: `// React 19: Can call conditionally!
function Component({ showUser }) {
  // ✅ OK: use() can be called anywhere
  if (showUser) {
    const user = use(UserContext); // ✅
    return <div>{user.name}</div>;
  }
  return null;
}

// Also works in loops, ternary, etc.
const data = isLoading 
  ? use(loadingPromise) 
  : defaultData;`,
    },
    importantTitle: 'Important to understand:',
    importantNotes: [
      '<strong>use() works with Suspense:</strong> while promise is loading, Suspense fallback is shown. No need to manually manage loading states',
      '<strong>Promises should be cached:</strong> don\'t create new promise on every render. Use cache or create promise outside component',
      '<strong>Doesn\'t replace all hooks:</strong> useState, useEffect are still needed! use() is only for promises and context',
      'Works best with <strong>Server Components</strong> and modern React patterns',
    ],
    userProfileTitle: 'User Profile',
  },
    
    formStatus: {
      title: 'React 19: useFormStatus',
      whatsNew: 'What\'s new?',
      description: 'Any child component can get form status without passing props! Especially useful for reusable UI components.',
      comparisonTitle: '⚖️ Comparison of approaches:',
      problemSection: {
        title: '😰 Problem in React 18:',
        text: 'For button to know form status, had to pass <code>isLoading</code> through props:',
      },
      solutionSection: {
        title: '🎉 Solution in React 19:',
        text: 'Component <strong>automatically</strong> knows parent form status:',
      },
      demoTitle: '🧪 Try it yourself:',
      statusIndicator: {
        submitting: 'Form is submitting...',
        dataSent: 'Data being sent:',
      },
      smartInputs: {
        title: '📝 Custom inputs:',
        locked: '🔒 Locked',
        submitting: 'Submitting...',
        enterPrefix: 'Enter',
      },
      smartCard: {
        title: '📦 Custom card:',
      },
      smartButton: {
        title: '🔘 Custom button:',
      },
      realExamplesTitle: '🔥 Real examples:',
      realExamples: {
        smartButton: {
          title: '1. Smart button:',
          code: `function SmartButton() {
  const { pending } = useFormStatus();
  
  return (
    <button disabled={pending}>
      {pending ? '⏳ Submitting...' : '📤 Submit'}
    </button>
  );
}`,
        },
        smartInput: {
          title: '2. Smart input (locked during submission):',
          code: `function SmartInput({ name, placeholder }) {
  const { pending } = useFormStatus();
  
  return (
    <input 
      name={name}
      placeholder={placeholder}
      disabled={pending}  // Auto-locked!
    />
  );
}`,
        },
        progressIndicator: {
          title: '3. Progress indicator:',
          code: `function ProgressIndicator() {
  const { pending } = useFormStatus();
  
  if (!pending) return null;
  
  return <div>⏳ Please wait, sending data...</div>;
}`,
        },
      },
      importantRuleTitle: '⚠️ Important rule:',
      importantRuleText: 'useFormStatus works ONLY in child components of the form!',
      importantRuleExample: {
        wrong: {
          title: '❌ DOESN\'T WORK - called inside the form itself',
          code: `function MyForm() {
  const { pending } = useFormStatus();  // ❌ Returns null!
  
  return <form>...</form>;
}`,
        },
        correct: {
          title: '✅ WORKS - called in child component',
          code: `function MyForm() {
  return (
    <form action={submitAction}>
      <SubmitButton />  {/* ✅ Works here! */}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();  // ✅ OK!
  return <button disabled={pending}>Submit</button>;
}`,
        },
      },
      benefitsTitle: '💡 useFormStatus Benefits:',
      benefitsList: [
        '✅ <strong>No prop drilling:</strong> no need to pass state through props',
        '✅ <strong>Reusable components:</strong> buttons, inputs know everything themselves',
        '✅ <strong>Less code:</strong> no need for additional useState for loading',
        '✅ <strong>Automatic sync:</strong> all components see actual state',
        '✅ <strong>Access to form data:</strong> can see what is being sent',
      ],
      importantTitle: 'Important:',
      importantNotes: [
        '<strong>Only works in child components:</strong> cannot be called directly in the form component, only in its children',
        '<strong>Requires Actions:</strong> form must have an action (function or URL) for useFormStatus to work',
        '<strong>Automatic synchronization:</strong> all child components automatically see the same status without prop passing',
        'Perfect for <strong>reusable UI libraries</strong> - create once, use everywhere',
      ],
      apiSection: {
        title: '📖 useFormStatus API:',
        table: {
          property: 'Property',
          type: 'Type',
          description: 'Description',
          pending: 'Is form currently submitting',
          data: 'Data being sent',
          method: 'HTTP method (GET/POST)',
          action: 'Action URL or function',
        },
      },
      form: {
        nameLabel: 'Name:',
        namePlaceholder: 'Enter your name',
        emailLabel: 'Email:',
        emailPlaceholder: 'example@email.com',
        priorityLabel: 'Priority:',
        priorityOptions: {
          low: '🟢 Low',
          medium: '🟡 Medium',
          high: '🔴 High',
        },
        subscribeLabel: 'Subscribe to newsletter',
        submitButton: 'Submit',
        submittingButton: 'Submitting...',
      },
      messages: {
        success: 'Success!',
      },
    },
    
    ref: {
      title: 'React 19: ref as prop',
      whatsNew: 'What\'s new?',
      description: 'In React 19 ref can be used as a regular prop without forwardRef wrapper',
      comparisonTitle: '⚖️ Comparison of approaches:',
      react18Title: '❌ React 18 (with forwardRef)',
      react18Code: `import { forwardRef, useRef } from 'react';

// Must wrap in forwardRef 😫
const FancyInput = forwardRef(({ label, ...props }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        ref={ref} 
        className="fancy-input"
        {...props} 
      />
    </div>
  );
});

// Usage
const App = () => {
  const inputRef = useRef(null);
  
  return (
    <>
      <FancyInput ref={inputRef} label="Email:" />
      <button onClick={() => inputRef.current.focus()}>
        Focus on Email!
      </button>
    </>
  );
};`,
      react18Problems: 'Problems:',
      react18ProblemsList: [
        'Extra boilerplate',
        'Complex TypeScript typing',
        'Less intuitive API',
      ],
      react19Title: '✅ React 19 (ref as prop)',
      react19Code: `import { useRef } from 'react';

// Just a regular function! 🎉
const FancyInput = ({ ref, label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        ref={ref} 
        className="fancy-input"
        {...props} 
      />
    </div>
  );
};

// Usage - same!
const App = () => {
  const inputRef = useRef(null);
  
  return (
    <>
      <FancyInput ref={inputRef} label="Email:" />
      <button onClick={() => inputRef.current.focus()}>
        Focus on Email!
      </button>
    </>
  );
};`,
      react19BenefitsTitle: 'Benefits:',
      react19BenefitsList: [
        'Less code',
        'Simpler typing',
        'Clearer API',
      ],
      demoTitle: '🧪 Interactive demo:',
      customInputsTitle: '📝 Custom inputs with ref:',
      firstInputLabel: 'First input',
      secondInputLabel: 'Second input',
      inputPlaceholder: 'Type something...',
      secondInputPlaceholder: 'Or here...',
      focusFirstButton: '🎯 Focus first',
      focusSecondButton: '🎯 Focus second',
      getValuesButton: '📝 Get values',
      customCardTitle: '📦 Custom card with ref:',
      cardTitle: 'React 19 is awesome!',
      cardContent: 'This card has a ref and can be animated programmatically via DOM API',
      highlightCardButton: '✨ Highlight card',
      customButtonTitle: '🔘 Custom button with ref:',
      getMySizeButton: '📏 Get my size',
      whenToUseTitle: '🎯 When to use ref:',
      useCases: [
        {
          icon: '🎯',
          title: 'Element focus',
          description: 'Programmatic focus on input, textarea, button',
        },
        {
          icon: '📏',
          title: 'Element measurements',
          description: 'Get dimensions, position via getBoundingClientRect',
        },
        {
          icon: '📜',
          title: 'Scroll to element',
          description: 'Programmatic scroll: scrollIntoView(), scrollTo()',
        },
        {
          icon: '🎬',
          title: 'Media control',
          description: 'Video/audio control: play(), pause(), currentTime',
        },
        {
          icon: '🖼️',
          title: 'Canvas API',
          description: 'Working with canvas: getContext(), drawing',
        },
        {
          icon: '🔌',
          title: 'Third-party libraries',
          description: 'Integration with jQuery, D3.js, Three.js and others',
        },
      ],
      importantTitle: 'Important to remember:',
      importantNotes: [
        '<strong>Avoid manual DOM changes:</strong> React should manage the DOM. Use ref only for things React can\'t do (focus, scroll, measurements).',
        '<strong>Don\'t read/change state via ref:</strong> Use useState/useReducer for state.',
        '<strong>Ref is an escape hatch:</strong> Use it when there are no other options.',
        '<strong>forwardRef still works:</strong> Old code with forwardRef will continue working in React 19.',
      ],
      benefitsTitle: '💡 New approach benefits:',
      newApproachBenefits: [
        'No need for forwardRef',
        'Simpler component code',
        'ref works like any other prop',
        'Better TypeScript support',
      ],
    },
    
    metadata: {
      title: 'React 19: Document Metadata',
      whatsNew: 'What\'s new?',
      description: 'In React 19 you can change <code>&lt;title&gt;</code> and <code>&lt;meta&gt;</code> tags directly in components! react-helmet no longer needed!',
      comparisonTitle: '⚖️ Comparison of approaches:',
      react18Title: '❌ React 18 (with react-helmet)',
      react18Problems: 'Problems:',
      react18ProblemsList: [
        'Extra dependency (17kb)',
        'Requires SSR configuration',
        'Separate API',
      ],
      react19Title: '✅ React 19 (native)',
      react19Benefits: 'Benefits:',
      react19BenefitsList: [
        'Built into React',
        'Works with SSR automatically',
        'Simpler syntax',
      ],
      demoTitle: '🧪 Interactive demonstration:',
      demoDescription: 'Switch between "pages" and watch the browser tab title change!',
      pages: {
        home: {
          button: '🏠 Home',
          title: '🏠 Home Page',
          text: 'Look at the browser tab title - it changed to "Home - React 19 Demo"!',
          metaTagsSet: 'Set meta tags:',
        },
        blog: {
          button: '📝 Blog',
          title: '📝 Blog',
          text: 'Title is now: "Blog - React 19 Demo". Meta tags updated for blog!',
          metaTagsSet: 'Set meta tags:',
        },
        product: {
          button: '🛍️ Product',
          title: '🛍️ Product',
          text: 'Title: "{productName} - Buy Now". SEO optimized for product!',
          name: 'React 19 Course',
          metaTagsSet: 'Set meta tags:',
        },
        article: {
          button: '📄 Article',
          title: '📄 Article',
          text: 'Meta tags for article include author, publication date, tags and much more!',
          metaTagsSet: 'Set meta tags:',
        },
      },
      supportedTagsTitle: '📋 Supported tags:',
      supportedTags: [
        {
          icon: '📝',
          title: '<title>',
          description: 'Page title in browser and search',
        },
        {
          icon: '📄',
          title: '<meta name>',
          description: 'description, keywords, author, viewport',
        },
        {
          icon: '📱',
          title: '<meta property>',
          description: 'Open Graph tags for social media (og:*)',
        },
        {
          icon: '🐦',
          title: '<meta name="twitter">',
          description: 'Twitter Cards for nice previews',
        },
        {
          icon: '🔗',
          title: '<link>',
          description: 'canonical, alternate, preload, stylesheet',
        },
        {
          icon: '📜',
          title: '<script>',
          description: 'Structured data (JSON-LD), analytics',
        },
      ],
      realExamplesTitle: '🔥 Real examples:',
      realExamples: {
        blogPost: {
          title: '1. Dynamic title for blog:',
          code: `const BlogPost = ({ post }) => {
  return (
    <article>
      <title>{post.title} - My Blog</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={post.title} />
      
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
};`,
        },
        product: {
          title: '2. SEO for product:',
          code: `const Product = ({ product }) => {
  return (
    <div>
      <title>{product.name} - \${product.price}</title>
      <meta name="description" content={product.description} />
      <meta property="og:image" content={product.image} />
      <meta property="og:price:amount" content={product.price} />
      
      <div className="product-card">
        {/* Product content */}
      </div>
    </div>
  );
};`,
        },
      },
      usageExamplesTitle: '💡 Usage examples:',
      examples: {
        multilingual: {
          title: '🌍 Multilingual:',
        },
        pwa: {
          title: '📱 PWA:',
        },
        seo: {
          title: '🔍 SEO:',
        },
      },
      benefitsTitle: '✨ Benefits of new approach:',
      benefitsList: [
        '✅ <strong>Fewer dependencies:</strong> react-helmet not needed (saves ~17kb)',
        '✅ <strong>Simpler code:</strong> regular HTML tags instead of JSX components',
        '✅ <strong>SSR out of the box:</strong> works on server automatically',
        '✅ <strong>Better DX:</strong> autocompletion, typing work better',
        '✅ <strong>Streaming-friendly:</strong> works with React Server Components',
      ],
      importantTitle: 'Important:',
      importantNotes: [
        'React automatically moves these tags to <code>&lt;head&gt;</code>',
        'When component changes, old meta tags are replaced with new ones',
        'Only works for tags that should be in <code>&lt;head&gt;</code>',
        'For SSR, React 19 needed on server',
      ],
    },
    
    finalForm: {
      title: 'React Final Form vs React 19 Actions',
      description: 'Approach comparison: Final Form was standard for complex forms in React 18. In React 19 many of its features are now built-in natively!',
      comparisonTableTitle: 'Feature comparison:',
      interactiveTitle: 'Try both approaches:',
      table: {
        feature: 'Feature',
        finalForm: 'Final Form',
        react19: 'React 19',
        stateManagement: 'State management',
        automatic: 'Automatic',
        loadingState: 'Loading state',
        validation: 'Validation',
        builtIn: 'Built-in',
        manual: 'Manual implementation',
        fieldValidation: 'Field-level validation',
        yes: 'Yes',
        no: 'No',
        formOnly: 'No (form only)',
        dirtyPristine: 'Dirty/Pristine',
        manualImplementation: 'Manual',
        bundleSize: 'Bundle size',
        apiComplexity: 'API complexity',
        medium: 'Medium',
        simple: 'Simple',
        ssrSupport: 'SSR support',
        requiresConfig: 'Requires configuration',
        outOfBox: 'Out of the box',
      },
      whenToUse: {
        title: 'When to use what?',
        finalForm: {
          title: '📋 Final Form',
          subtitle: 'Use when:',
          items: [
            'Need complex field-level validation',
            'Many dynamic fields',
            'Complex forms with wizard/steps',
            'Need field arrays',
            'Already in project and working',
          ],
        },
        react19: {
          title: '⚡ React 19 Actions',
          subtitle: 'Use when:',
          items: [
            'Simple/medium forms',
            'New React 19 project',
            'Bundle size matters',
            'Need SSR/RSC',
            'Want simpler code',
          ],
        },
      },
      migration: {
        title: 'Migration strategy:',
        steps: [
          {
            title: 'Assess form complexity',
            description: 'Simple forms can be rewritten in React 19, complex ones - keep on Final Form',
          },
          {
            title: 'Gradual migration',
            description: 'Write new forms in React 19, rewrite old ones as needed',
          },
          {
            title: 'Create wrappers',
            description: 'Write reusable components for validation and error handling',
          },
          {
            title: 'Don\'t rush',
            description: 'Final Form still works great. Migration is not mandatory',
          },
        ],
      },
      conclusionSection: {
        title: 'Conclusion:',
        benefits: [
          'React 19 Actions is a great choice for most forms',
          'Final Form is still relevant for very complex cases',
          'You can use both approaches simultaneously in your project',
          'React 19 takes a big step towards simplifying form work 🚀',
          'Reduces dependency on third-party libraries',
        ],
      },
      form: {
        nameLabel: 'Name:',
        namePlaceholder: 'Your name',
        emailLabel: 'Email:',
        emailPlaceholder: 'example@email.com',
        messageLabel: 'Message:',
        messagePlaceholder: 'Your message...',
        submitButton: 'Submit',
        submittingButton: 'Submitting...',
        formState: 'Form state:',
        submitting: 'Submitting:',
        pristine: 'Pristine:',
        pending: 'Pending:',
        success: 'Success:',
        values: 'Values:',
        yes: 'Yes',
        no: 'No',
        linesOfCode: 'Lines of code:',
        bundleSize: 'Bundle size:',
        builtIntoReact: 'built into React',
      },
      formTitles: {
        finalForm: '📋 Final Form (React 18 approach)',
        react19: '⚡ React 19 Actions (new approach)',
      },
      validation: {
        required: 'Required field',
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email',
        error: 'Error',
      },
    },
    
    compiler: {
      title: 'React 19: React Compiler',
      description: 'Automatic optimization without manual useMemo and useCallback! The compiler analyzes code and optimizes re-renders itself.',
      before: 'Before:',
      after: 'After:',
      comparisonTitle: '⚖️ Comparison of approaches:',
      react18Title: '❌ React 18 (manual memoization)',
      react18Code: `const ExpensiveList = ({ items, filter }) => {
  // Manual memoization 😫
  const filtered = useMemo(() => 
    items.filter(item => item.includes(filter)),
    [items, filter]
  );
  
  const handleClick = useCallback((id) => {
    console.log(id);
  }, []);
  
  return filtered.map(item => (
    <div onClick={() => handleClick(item.id)}>
      {item.name}
    </div>
  ));
};`,
      react19Title: '✅ React 19 (automatic optimization)',
      react19Code: `const ExpensiveList = ({ items, filter }) => {
  // Compiler optimizes automatically! 🎉
  const filtered = items.filter(item => 
    item.includes(filter)
  );
  
  const handleClick = (id) => {
    console.log(id);
  };
  
  return filtered.map(item => (
    <div onClick={() => handleClick(item.id)}>
      {item.name}
    </div>
  ));
};`,
      whatIsCompiler: '🤖 What is React Compiler?',
      compilerDescription: 'React Compiler is a build-time tool that automatically optimizes your React code. It analyzes components and adds optimizations that you used to write manually with useMemo, useCallback, and React.memo.',
      howItWorksTitle: '🔄 How it works:',
      howItWorks: [
        'Analyzes your code during build',
        'Finds expensive calculations and function creations',
        'Automatically adds memoization where needed',
        'Optimizes re-renders without changing your code',
      ],
      benefitsTitle: '💡 Benefits:',
      benefits: [
        'No need for manual useMemo/useCallback',
        'Less boilerplate code',
        'Fewer bugs (forgot to add dependency)',
        'Better performance automatically',
        'Easier to maintain code',
      ],
      realExamplesTitle: '🔥 Real examples:',
      realExamples: {
        expensiveCalculation: {
          title: '1. Expensive calculation:',
          before: `// Before: Manual memoization
const Component = ({ data }) => {
  const result = useMemo(() => {
    return data.map(x => x * 2)
      .filter(x => x > 10)
      .reduce((a, b) => a + b);
  }, [data]);
  
  return <div>{result}</div>;
};`,
          after: `// After: Compiler does it
const Component = ({ data }) => {
  const result = data.map(x => x * 2)
    .filter(x => x > 10)
    .reduce((a, b) => a + b);
  
  return <div>{result}</div>;
};`,
        },
        eventHandlers: {
          title: '2. Event handlers:',
          before: `// Before: useCallback everywhere
const List = ({ items, onSelect }) => {
  const handleClick = useCallback((id) => {
    onSelect(id);
  }, [onSelect]);
  
  return items.map(item => (
    <Item onClick={() => handleClick(item.id)} />
  ));
};`,
          after: `// After: Just write code
const List = ({ items, onSelect }) => {
  const handleClick = (id) => {
    onSelect(id);
  };
  
  return items.map(item => (
    <Item onClick={() => handleClick(item.id)} />
  ));
};`,
        },
      },
      howToEnableTitle: '⚙️ How to enable:',
      howToEnable: {
        step1: '1. Install:',
        step1Code: 'npm install babel-plugin-react-compiler',
        step2: '2. Configure babel/vite:',
        step2Code: `// vite.config.js
export default {
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', {}]
        ]
      }
    })
  ]
}`,
        step3: '3. That\'s it! Compiler works automatically',
      },
      importantTitle: 'Important:',
      importantNotes: [
        '<strong>Experimental:</strong> Compiler is still in beta, test thoroughly',
        '<strong>Build-time optimization:</strong> works during build, not at runtime',
        '<strong>Doesn\'t break old code:</strong> useMemo/useCallback still work',
        '<strong>Not for everything:</strong> some complex cases may need manual optimization',
        '<strong>Best for new projects:</strong> or gradual migration',
        '<strong>Doesn\'t replace your understanding:</strong> you still need to know how renders work',
        '<strong>Not magic:</strong> you need to write correct React code',
        '<strong>Test thoroughly:</strong> don\'t just blindly delete all useMemo',
      ],
    },
    
    language: {
      label: 'Language',
      en: 'English',
      uk: 'Українська',
    },
};

// Автоматично виводимо тип з англійської версії (без as const для гнучкості)
export type Translations = typeof translationsEn;

const translationsUk = {
    nav: {
      home: 'Головна',
      actions: 'Екшени',
      optimistic: 'useOptimistic',
      useHook: 'Хук use()',
      formStatus: 'useFormStatus',
      ref: 'ref як пропс',
      metadata: 'Метадані',
      finalFormComparison: 'Порівняння форм',
      compiler: 'React Compiler',
    },
    
    home: {
      title: 'React 19: Що нового?',
      subtitle: 'Огляд нових можливостей та покращень',
      whatsNew: 'Що нового?',
      improvements: 'Покращення',
      stats: {
        lessCode: 'Менше коду для форм',
        noDelay: 'Затримка з useOptimistic',
        noHelmet: 'Без react-helmet',
      },
      whyUpgrade: 'Чому варто оновлюватись?',
      howToUse: 'Як користуватись цим демо?',
      usefulLinks: 'Корисні посилання',
      links: {
        officialAnnouncement: '📰 Офіційний анонс React 19',
        documentation: '📚 React 19 Documentation',
        newHooks: '🎣 Нові хуки в React 19',
        upgradeGuide: '🚀 Гайд по оновленню',
      },
      footer: {
        description: '🎓 Цей проект створено для навчання та демонстрації нових можливостей React 19',
        consoleNote: '💻 Відкрийте DevTools Console для детальних логів',
      },
      mockTodos: {
        todo1: 'Вивчити React 19',
        todo2: 'Зробити презентацію',
        todo3: 'Пояснити колегам нові фічі',
      },
      instructions: {
        step1: 'Виберіть приклад з меню вгорі',
        step2: 'Читайте пояснення та порівняння з React 18',
        step3: 'Взаємодійте з інтерактивними прикладами',
        step4: 'Дивіться в консоль - там багато логів для розуміння',
      },
      reasons: {
        lessBoilerplate: {
          title: 'Менше бойлерплейту',
          description: 'Actions, ref як проп, вбудовані meta tags - все це зменшує кількість коду',
        },
        betterUX: {
          title: 'Кращий UX',
          description: 'useOptimistic дає миттєвий фідбек, додаток відчувається швидшим',
        },
        smallerBundle: {
          title: 'Менший бандл',
          description: 'Можна прибрати залежності: react-helmet, деякі form бібліотеки',
        },
        futureReady: {
          title: 'Готовність до майбутнього',
          description: 'React Server Components, Streaming SSR - все працює out of the box',
        },
        easierMaintenance: {
          title: 'Простіша підтримка',
          description: 'Менше магії, більше передбачуваності, простіше для нових розробників',
        },
        betterDX: {
          title: 'Кращий DX',
          description: 'Простіша типізація, менше обгорток, інтуїтивніший API',
        },
      },
      features: {
        actions: {
          title: 'Екшени',
          description: 'Спрощена робота з асинхронними даними у формах та компонентах',
        },
        optimistic: {
          title: 'useOptimistic',
          description: 'Оптимістичні оновлення для кращого UX під час async операцій',
        },
        use: {
          title: 'Хук use()',
          abilities: [
            'Читання промісів безпосередньо в компонентах',
            'Умовне читання контексту',
            'Чистіший код без useEffect',
            'Автоматична підтримка Suspense',
          ],
        },
        formStatus: {
          title: 'useFormStatus',
          description: 'Доступ до статусу відправки форми з будь-якого дочірнього компонента',
        },
        ref: {
          title: 'ref як пропс',
          description: 'Використовуйте ref як звичайний пропс без forwardRef',
        },
        metadata: {
          title: 'Метадані документа',
          description: 'Керуйте <title>, <meta> та <link> прямо в компонентах',
        },
        compiler: {
          title: 'React Compiler',
          description: 'Автоматична оптимізація без ручної мемоїзації',
        },
      },
    },
    
    actions: {
      title: 'React 19: Екшени',
      description: 'Екшени - новий спосіб роботи з асинхронними операціями у формах. Більше не потрібно вручну керувати станами завантаження/помилок!',
      comparisonTitle: '⚖️ Порівняння підходів:',
      react18Title: '❌ React 18',
      react19Title: '✅ React 19',
      benefits: 'Переваги:',
      benefitsList: [
        'Не потрібен useState, useEffect для станів завантаження',
        'Автоматична обробка помилок',
        'Простіший код',
        'Працює з FormData за замовчуванням',
      ],
      realExamplesTitle: '🔥 Реальні приклади:',
      realExamples: {
        loginForm: {
          title: '1. Проста форма логіну:',
          code: `const LoginForm = () => {
  const [state, loginAction] = useActionState(
    async (prev, formData) => {
      const email = formData.get('email');
      const password = formData.get('password');
      
      const response = await login(email, password);
      return { success: true, user: response };
    },
    { success: false }
  );

  return (
    <form action={loginAction}>
      <input name="email" type="email" required />
      <input name="password" type="password" required />
      <button type="submit">Увійти</button>
    </form>
  );
};`,
        },
        fileUpload: {
          title: '2. Форма з завантаженням файлу:',
          code: `const UploadForm = () => {
  const [state, uploadAction, isPending] = useActionState(
    async (prev, formData) => {
      const file = formData.get('file');
      
      await uploadFile(file);
      return { success: true, fileName: file.name };
    },
    { success: false }
  );

  return (
    <form action={uploadAction}>
      <input name="file" type="file" required />
      <button disabled={isPending}>
        {isPending ? 'Завантаження...' : 'Завантажити'}
      </button>
      {state.success && <p>✅ {state.fileName} завантажено!</p>}
    </form>
  );
};`,
        },
      },
      apiSectionTitle: '📖 useActionState API:',
      apiTable: {
        returns: 'Повертає',
        parameter: 'Параметр',
        type: 'Тип',
        description: 'Опис',
        state: 'Поточний стан (результат останньої дії)',
        action: 'Функція для передачі в атрибут action форми',
        isPending: 'Булеве значення, чи виконується дія',
        actionParam: 'Async функція, що отримує (prevState, formData)',
        initialState: 'Початкове значення стану',
      },
      importantTitle: 'Важливо:',
      importantNotes: [
        '<strong>Actions автоматично керують pending станом:</strong> не потрібен ручний useState для loading',
        '<strong>Працюють з FormData за замовчуванням:</strong> легкий доступ до всіх полів форми',
        '<strong>Потребують React 19:</strong> недоступні в попередніх версіях',
        '<strong>Сумісні з SSR/RSC:</strong> працюють з Server Components out of the box',
        '<strong>Автоматичні error boundaries:</strong> помилки перехоплюються і можуть оброблятись у стані',
      ],
      example: 'Приклад:',
      form: {
        nameLabel: 'Ім\'я:',
        namePlaceholder: 'Введіть ваше ім\'я',
        emailLabel: 'Email:',
        emailPlaceholder: 'example@email.com',
        messageLabel: 'Повідомлення:',
        messagePlaceholder: 'Ваше повідомлення...',
        submitButton: 'Відправити',
        submittingButton: 'Відправляємо...',
      },
      messages: {
        success: 'Форма успішно відправлена!',
        successData: 'Відправлені дані:',
        dataSaved: 'Дані успішно збережені!',
        error: 'Сталася помилка!',
      },
    },
    
    optimistic: {
      title: 'React 19: useOptimistic',
      description: 'Показуємо користувачу зміни миттєво, не чекаючи відповіді сервера. Якщо сервер повертає помилку - зміни автоматично відкочуються!',
      howItWorks: '🔄 Як це працює:',
      steps: {
        step1: 'Користувач натискає "Додати"',
        step2: 'Елемент з\'являється в UI миттєво',
        step3: 'Запит відправляється на сервер у фоні',
        step4: 'При помилці - автоматичний відкат',
      },
      benefits: 'Переваги:',
      benefitsList: [
        'Миттєвий фідбек в UI',
        'Кращий досвід користувача',
        'Автоматичний відкат стану при помилці',
        'Не потрібен додатковий useState',
      ],
      benefitsTitle: '💡 Переваги useOptimistic:',
      benefitsDetailed: {
        instantFeedback: {
          title: 'Миттєвий фідбек:',
          description: 'користувач бачить зміни без затримки',
        },
        betterUX: {
          title: 'Кращий UX:',
          description: 'додаток відчувається швидшим',
        },
        autoRollback: {
          title: 'Автоматичний rollback:',
          description: 'при помилці зміни відкочуються',
        },
        lessCode: {
          title: 'Менше коду:',
          description: 'не потрібно вручну керувати тимчасовими станами',
        },
        worksWithActions: {
          title: 'Працює з Actions:',
          description: 'ідеальна інтеграція з новим API',
        },
      },
      example: 'Приклад - Додавання Todo з оптимістичним оновленням:',
      todoList: '📝 Список завдань',
      emptyState: 'Поки немає завдань. Додайте перше!',
      todoPlaceholder: 'Що потрібно зробити?',
      addButton: '+ Додати',
      addingButton: 'Додаємо...',
      removeButton: '🗑️ Видалити',
      savingBadge: 'Збереження...',
      comparisonTitle: '⚖️ Порівняння підходів:',
      react18: {
        title: '❌ React 18 (без оптимізму)',
        comment1: '// Користувач чекає відповіді',
        comment2: '// Тільки тепер побачить зміни',
        delay: '⏱️ Затримка: 1-2 секунди',
        codeExample: `// React 18: Ручне керування станом
const [todos, setTodos] = useState([]);
const [loading, setLoading] = useState(false);

const addTodo = async (newTodo) => {
  setLoading(true);           // Показуємо лоадер
  
  await saveTodo(newTodo);    // Чекаємо сервер... 2 секунди... 😴
  
  setTodos([...todos, newTodo]); // Тільки тепер користувач побачить
  setLoading(false);
};

// Проблема: Користувач чекає 1-2 секунди і дивиться на лоадер 🐌`,
      },
      react19: {
        title: '✅ React 19 (з оптимізмом)',
        comment1: '// Користувач бачить миттєво',
        comment2: '// У фоні йде запит',
        comment3: '// Якщо помилка - авто відкат',
        delay: '⚡ Затримка: 0 мс!',
        codeExample: `// React 19: Оптимістичні оновлення
const [optimisticTodos, addOptimisticTodo] = useOptimistic(
  todos,                    // Реальні todos
  (state, newTodo) => {     // Як оновити оптимістично
    return [...state, newTodo];
  }
);

const addTodo = async (newTodo) => {
  addOptimisticTodo(newTodo);  // Показуємо одразу! ⚡
  
  await saveTodo(newTodo);     // У фоні йде запит
  // Якщо помилка - React сам відкотить зміни!
};

// Результат: Користувач бачить результат миттєво! 🚀`,
      },
      importantTitle: 'Важливо:',
      importantNotes: [
        'Використовуйте <strong>тільки для операцій, які майже завжди спрацьовують</strong> (лайк, додати в кошик, позначити виконаним)',
        '<strong>Не використовуйте для критичних операцій</strong> (оплата, видалення акаунту) - там потрібно чекати підтвердження сервера',
        'React <strong>автоматично відкочує зміни при помилці</strong> - вам не потрібно писати код для цього',
        'Найкраще працює в комбінації з Actions та useActionState',
      ],
    },
    
    useHook: {
      title: 'React 19: Хук use()',
      description: 'Універсальний хук для читання промісів та контексту',
      whatCanDo: 'Що вміє use()?',
      capabilities: [
        'Читання промісів прямо в компонентах',
        'Умовне читання контексту',
        'Чистіший код без useEffect',
        'Автоматична підтримка Suspense',
      ],
      keyDifference: '🔑 Ключова відмінність від інших хуків:',
      otherHooks: {
        title: '❌ Інші хуки (useState, useEffect...)',
        items: [
          '❌ Не можна викликати умовно',
          '❌ Не можна в циклах',
          '❌ Тільки на верхньому рівні',
          '❌ Суворий порядок викликів',
        ],
      },
      useHookBenefits: {
        title: '✅ use() хук',
        items: [
          '✅ Можна викликати умовно',
          '✅ Можна в циклах',
          '✅ Можна всередині if/else',
          '✅ Гнучкий та потужний',
        ],
      },
      example: 'Приклад - Завантаження даних з use():',
      selectUser: 'Оберіть користувача:',
      loadDataButton: 'Завантажити дані',
      loadingButton: 'Завантаження...',
      userInfo: 'Інформація про користувача:',
      postsTitle: 'Останні пости:',
      showContextButton: 'Показати дані з контексту',
      hideContextButton: 'Сховати дані з контексту',
      contextDataTitle: 'Дані з контексту:',
      loading: 'Завантаження...',
      promiseUnwrapTitle: 'Розгортання промісів',
      conditionalContextTitle: 'Умовне використання контексту',
      contextUsageStrong: '🎯 Умовне використання контексту:',
      currentView: 'Поточний вигляд:',
      totalTodos: 'Всього тудушок:',
      contextNotShown: 'Контекст не показано (перемкніть чекбокс)',
      clickToLoadMessage: 'Клацніть "Завантажити дані", щоб побачити use() в дії',
      codeExamplesTitle: 'Приклади коду',
      promiseUnwrapCode: '📦 Розгортання промісів:',
      conditionalContextCode: '🎯 Умовне використання контексту:',
      benefitsTitle: 'Переваги use():',
      benefits: [
        '✅ <strong>Простіше:</strong> не потрібен useEffect для промісів',
        '✅ <strong>Гнучкіше:</strong> можна викликати умовно',
        '✅ <strong>Універсальний:</strong> працює з промісами та контекстом',
        '✅ <strong>SSR-friendly:</strong> ідеально для серверних компонентів',
        '✅ <strong>Менше коду:</strong> один хук замість декількох',
      ],
      comparisonTitle: '⚖️ Порівняння підходів:',
      react18: {
        title: '❌ React 18 (суворі правила)',
        codeExample: `// React 18: Не можна викликати умовно
function Component({ showUser }) {
  // ❌ ПОМИЛКА: Хуки мають викликатись в точному порядку
  if (showUser) {
    const user = useContext(UserContext); // ❌
    return <div>{user.name}</div>;
  }
  return null;
}

// Доводилось робити обхідний шлях:
const user = useContext(UserContext);
if (showUser) {
  return <div>{user.name}</div>;
}
return null;`,
      },
      react19: {
        title: '✅ React 19 (свобода!)',
        codeExample: `// React 19: Можна викликати умовно!
function Component({ showUser }) {
  // ✅ ОК: use() можна викликати де завгодно
  if (showUser) {
    const user = use(UserContext); // ✅
    return <div>{user.name}</div>;
  }
  return null;
}

// Також працює в циклах, тернарних операторах і т.д.
const data = isLoading 
  ? use(loadingPromise) 
  : defaultData;`,
      },
      importantTitle: 'Важливо розуміти:',
      importantNotes: [
        '<strong>use() працює з Suspense:</strong> поки проміс завантажується, показується Suspense fallback. Не потрібно вручну керувати loading станами',
        '<strong>Проміси мають бути кешовані:</strong> не створюйте новий проміс при кожному рендері. Використовуйте кеш або створюйте проміс поза компонентом',
        '<strong>Не замінює всі хуки:</strong> useState, useEffect - все ще потрібні! use() тільки для промісів і контексту',
        'Найкраще працює з <strong>Server Components</strong> та сучасними React патернами',
      ],
      userProfileTitle: 'Профіль користувача',
    },
    
    formStatus: {
      title: 'React 19: useFormStatus',
      whatsNew: 'Що нового?',
      description: 'Будь-який дочірній компонент може отримати статус форми без передачі пропсів! Особливо корисно для багаторазово використовуваних UI компонентів.',
      comparisonTitle: '⚖️ Порівняння підходів:',
      problemSection: {
        title: '😰 Проблема в React 18:',
        text: 'Щоб кнопка знала статус форми, потрібно було передавати <code>isLoading</code> через пропси:',
      },
      solutionSection: {
        title: '🎉 Рішення в React 19:',
        text: 'Компонент <strong>автоматично</strong> знає статус батьківської форми:',
      },
      demoTitle: '🧪 Спробуйте самі:',
      statusIndicator: {
        submitting: 'Форма відправляється...',
        dataSent: 'Дані що надсилаються:',
      },
      smartInputs: {
        title: '📝 Кастомні інпути:',
        locked: '🔒 Заблоковано',
        submitting: 'Відправка...',
        enterPrefix: 'Введіть',
      },
      smartCard: {
        title: '📦 Кастомна картка:',
      },
      smartButton: {
        title: '🔘 Кастомна кнопка:',
      },
      realExamplesTitle: '🔥 Реальні приклади:',
      realExamples: {
        smartButton: {
          title: '1. Розумна кнопка:',
          code: `function SmartButton() {
  const { pending } = useFormStatus();
  
  return (
    <button disabled={pending}>
      {pending ? '⏳ Відправка...' : '📤 Відправити'}
    </button>
  );
}`,
        },
        smartInput: {
          title: '2. Розумний інпут (блокується під час відправки):',
          code: `function SmartInput({ name, placeholder }) {
  const { pending } = useFormStatus();
  
  return (
    <input 
      name={name}
      placeholder={placeholder}
      disabled={pending}  // Автоматично блокується!
    />
  );
}`,
        },
        progressIndicator: {
          title: '3. Індикатор прогресу:',
          code: `function ProgressIndicator() {
  const { pending } = useFormStatus();
  
  if (!pending) return null;
  
  return <div>⏳ Зачекайте, відправляємо дані...</div>;
}`,
        },
      },
      importantRuleTitle: '⚠️ Важливе правило:',
      importantRuleText: 'useFormStatus працює ТІЛЬКИ в дочірніх компонентах форми!',
      importantRuleExample: {
        wrong: {
          title: '❌ НЕ ПРАЦЮЄ - викликається всередині самої форми',
          code: `function MyForm() {
  const { pending } = useFormStatus();  // ❌ Поверне null!
  
  return <form>...</form>;
}`,
        },
        correct: {
          title: '✅ ПРАЦЮЄ - викликається в дочірньому компоненті',
          code: `function MyForm() {
  return (
    <form action={submitAction}>
      <SubmitButton />  {/* ✅ Тут працює! */}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();  // ✅ OK!
  return <button disabled={pending}>Відправити</button>;
}`,
        },
      },
      benefitsTitle: '💡 Переваги useFormStatus:',
      benefitsList: [
        '✅ <strong>Без prop drilling:</strong> не потрібно передавати стан через пропси',
        '✅ <strong>Багаторазово використовувані компоненти:</strong> кнопки, інпути знають все самі',
        '✅ <strong>Менше коду:</strong> не потрібен додатковий useState для loading',
        '✅ <strong>Автоматична синхронізація:</strong> всі компоненти бачать актуальний стан',
        '✅ <strong>Доступ до даних форми:</strong> можна побачити що відправляється',
      ],
      importantTitle: 'Важливо:',
      importantNotes: [
        '<strong>Працює тільки в дочірніх компонентах:</strong> не можна викликати безпосередньо в компоненті форми, тільки в його дочірніх елементах',
        '<strong>Потрібні Actions:</strong> форма має мати action (функцію або URL), щоб useFormStatus працював',
        '<strong>Автоматична синхронізація:</strong> всі дочірні компоненти автоматично бачать однаковий статус без передачі пропсів',
        'Ідеально для <strong>бібліотек багаторазового використання</strong> - створи один раз, використовуй скрізь',
      ],
      apiSection: {
        title: '📖 useFormStatus API:',
        table: {
          property: 'Властивість',
          type: 'Тип',
          description: 'Опис',
          pending: 'Чи відправляється форма зараз',
          data: 'Дані що відправляються',
          method: 'HTTP метод (GET/POST)',
          action: 'URL екшену або функція',
        },
      },
      form: {
        nameLabel: 'Ім\'я:',
        namePlaceholder: 'Введіть ваше ім\'я',
        emailLabel: 'Email:',
        emailPlaceholder: 'example@email.com',
        priorityLabel: 'Пріоритет:',
        priorityOptions: {
          low: '🟢 Низький',
          medium: '🟡 Середній',
          high: '🔴 Високий',
        },
        subscribeLabel: 'Підписатись на розсилку',
        submitButton: 'Відправити',
        submittingButton: 'Відправка...',
      },
      messages: {
        success: 'Успіх!',
      },
    },
    
    ref: {
      title: 'React 19: ref як пропс',
      whatsNew: 'Що нового?',
      description: 'В React 19 ref можна використовувати як звичайний пропс без обгортки forwardRef',
      comparisonTitle: '⚖️ Порівняння підходів:',
      react18Title: '❌ React 18 (з forwardRef)',
      react18Code: `import { forwardRef, useRef } from 'react';

// Треба обгортати в forwardRef 😫
const FancyInput = forwardRef(({ label, ...props }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        ref={ref} 
        className="fancy-input"
        {...props} 
      />
    </div>
  );
});

// Використання
const App = () => {
  const inputRef = useRef(null);
  
  return (
    <>
      <FancyInput ref={inputRef} label="Email:" />
      <button onClick={() => inputRef.current.focus()}>
        Фокус на Email!
      </button>
    </>
  );
};`,
      react18Problems: 'Проблеми:',
      react18ProblemsList: [
        'Додатковий boilerplate',
        'Складна типізація TypeScript',
        'Менш інтуїтивний API',
      ],
      react19Title: '✅ React 19 (ref як пропс)',
      react19Code: `import { useRef } from 'react';

// Просто звичайна функція! 🎉
const FancyInput = ({ ref, label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        ref={ref} 
        className="fancy-input"
        {...props} 
      />
    </div>
  );
};

// Використання - точно так само!
const App = () => {
  const inputRef = useRef(null);
  
  return (
    <>
      <FancyInput ref={inputRef} label="Email:" />
      <button onClick={() => inputRef.current.focus()}>
        Фокус на Email!
      </button>
    </>
  );
};`,
      react19BenefitsTitle: 'Переваги:',
      react19BenefitsList: [
        'Менше коду',
        'Простіша типізація',
        'Зрозуміліший API',
      ],
      demoTitle: '🧪 Інтерактивне демо:',
      customInputsTitle: '📝 Кастомні інпути з ref:',
      firstInputLabel: 'Перший інпут',
      secondInputLabel: 'Другий інпут',
      inputPlaceholder: 'Введіть щось...',
      secondInputPlaceholder: 'Або сюди...',
      focusFirstButton: '🎯 Фокус на перший',
      focusSecondButton: '🎯 Фокус на другий',
      getValuesButton: '📝 Отримати значення',
      customCardTitle: '📦 Кастомна картка з ref:',
      cardTitle: 'React 19 це круто!',
      cardContent: 'Ця картка має ref і може бути анімована програмно через DOM API',
      highlightCardButton: '✨ Підсвітити картку',
      customButtonTitle: '🔘 Кастомна кнопка з ref:',
      getMySizeButton: '📏 Отримати мій розмір',
      whenToUseTitle: '🎯 Коли використовувати ref:',
      useCases: [
        {
          icon: '🎯',
          title: 'Фокус елемента',
          description: 'Програмний фокус на input, textarea, button',
        },
        {
          icon: '📏',
          title: 'Виміри елемента',
          description: 'Отримання розмірів, позиції через getBoundingClientRect',
        },
        {
          icon: '📜',
          title: 'Скрол до елемента',
          description: 'Програмний скрол: scrollIntoView(), scrollTo()',
        },
        {
          icon: '🎬',
          title: 'Керування медіа',
          description: 'Контроль відео/аудіо: play(), pause(), currentTime',
        },
        {
          icon: '🖼️',
          title: 'Canvas API',
          description: 'Робота з canvas: getContext(), малювання',
        },
        {
          icon: '🔌',
          title: 'Сторонні бібліотеки',
          description: 'Інтеграція з jQuery, D3.js, Three.js та іншими',
        },
      ],
      importantTitle: 'Важливо памʼятати:',
      importantNotes: [
        '<strong>Уникайте ручних змін DOM:</strong> React має керувати DOM. Використовуйте ref тільки для того, що React не може (фокус, скрол, виміри).',
        '<strong>Не читайте/змінюйте стан через ref:</strong> Використовуйте useState/useReducer для стану.',
        '<strong>Ref - це аварійний люк:</strong> Використовуйте його, коли немає інших варіантів.',
        '<strong>forwardRef досі працює:</strong> Старий код з forwardRef продовжить працювати в React 19.',
      ],
      benefitsTitle: '💡 Переваги нового підходу:',
      newApproachBenefits: [
        'Не потрібен forwardRef',
        'Простіший код компонента',
        'ref працює як будь-який інший пропс',
        'Краща підтримка TypeScript',
      ],
    },
    
    metadata: {
      title: 'React 19: Метадані документа',
      whatsNew: 'Що нового?',
      description: 'В React 19 ви можете змінювати <code>&lt;title&gt;</code> та <code>&lt;meta&gt;</code> теги прямо в компонентах! react-helmet більше не потрібен!',
      comparisonTitle: '⚖️ Порівняння підходів:',
      react18Title: '❌ React 18 (з react-helmet)',
      react18Problems: 'Проблеми:',
      react18ProblemsList: [
        'Додаткова залежність (17kb)',
        'Потребує конфігурації SSR',
        'Окремий API',
      ],
      react19Title: '✅ React 19 (нативно)',
      react19Benefits: 'Переваги:',
      react19BenefitsList: [
        'Вбудовано в React',
        'Працює з SSR автоматично',
        'Простіший синтаксис',
      ],
      demoTitle: '🧪 Інтерактивна демонстрація:',
      demoDescription: 'Перемикайтеся між "сторінками" і спостерігайте, як змінюється заголовок вкладки браузера!',
      pages: {
        home: {
          button: '🏠 Головна',
          title: '🏠 Головна сторінка',
          text: 'Подивіться на заголовок вкладки браузера - він змінився на "Home - React 19 Demo"!',
          metaTagsSet: 'Встановлені мета-теги:',
        },
        blog: {
          button: '📝 Блог',
          title: '📝 Блог',
          text: 'Заголовок тепер: "Blog - React 19 Demo". Мета-теги оновлені для блогу!',
          metaTagsSet: 'Встановлені мета-теги:',
        },
        product: {
          button: '🛍️ Товар',
          title: '🛍️ Товар',
          text: 'Заголовок: "{productName} - Купити зараз". SEO оптимізовано для товару!',
          name: 'Курс React 19',
          metaTagsSet: 'Встановлені мета-теги:',
        },
        article: {
          button: '📄 Стаття',
          title: '📄 Стаття',
          text: 'Мета-теги для статті включають автора, дату публікації, теги і багато іншого!',
          metaTagsSet: 'Встановлені мета-теги:',
        },
      },
      supportedTagsTitle: '📋 Підтримувані теги:',
      supportedTags: [
        {
          icon: '📝',
          title: '<title>',
          description: 'Заголовок сторінки в браузері та пошуку',
        },
        {
          icon: '📄',
          title: '<meta name>',
          description: 'description, keywords, author, viewport',
        },
        {
          icon: '📱',
          title: '<meta property>',
          description: 'Open Graph теги для соцмереж (og:*)',
        },
        {
          icon: '🐦',
          title: '<meta name="twitter">',
          description: 'Twitter Cards для гарних превʼю',
        },
        {
          icon: '🔗',
          title: '<link>',
          description: 'canonical, alternate, preload, stylesheet',
        },
        {
          icon: '📜',
          title: '<script>',
          description: 'Структуровані дані (JSON-LD), аналітика',
        },
      ],
      realExamplesTitle: '🔥 Реальні приклади:',
      realExamples: {
        blogPost: {
          title: '1. Динамічний заголовок для блогу:',
          code: `const BlogPost = ({ post }) => {
  return (
    <article>
      <title>{post.title} - Мій Блог</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={post.title} />
      
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
};`,
        },
        product: {
          title: '2. SEO для товару:',
          code: `const Product = ({ product }) => {
  return (
    <div>
      <title>{product.name} - \${product.price}</title>
      <meta name="description" content={product.description} />
      <meta property="og:image" content={product.image} />
      <meta property="og:price:amount" content={product.price} />
      
      <div className="product-card">
        {/* Контент товару */}
      </div>
    </div>
  );
};`,
        },
      },
      usageExamplesTitle: '💡 Приклади використання:',
      examples: {
        multilingual: {
          title: '🌍 Багатомовність:',
        },
        pwa: {
          title: '📱 PWA:',
        },
        seo: {
          title: '🔍 SEO:',
        },
      },
      benefitsTitle: '✨ Переваги нового підходу:',
      benefitsList: [
        '✅ <strong>Менше залежностей:</strong> react-helmet не потрібен (економія ~17kb)',
        '✅ <strong>Простіший код:</strong> звичайні HTML теги замість JSX компонентів',
        '✅ <strong>SSR out of the box:</strong> працює на сервері автоматично',
        '✅ <strong>Кращий DX:</strong> автодоповнення, типізація працюють краще',
        '✅ <strong>Streaming-friendly:</strong> працює з React Server Components',
      ],
      importantTitle: 'Важливо:',
      importantNotes: [
        'React автоматично переміщує ці теги в <code>&lt;head&gt;</code>',
        'При зміні компонента, старі мета-теги замінюються новими',
        'Працює тільки для тегів, що мають бути в <code>&lt;head&gt;</code>',
        'Для SSR потрібен React 19 на сервері',
      ],
    },
    
    finalForm: {
      title: 'React Final Form проти React 19 Екшенів',
      description: 'Порівняння підходів: Final Form був стандартом для складних форм у React 18. В React 19 багато його можливостей тепер вбудовані нативно!',
      comparisonTableTitle: 'Порівняння функціональності:',
      interactiveTitle: 'Спробуйте обидва підходи:',
      table: {
        feature: 'Функція',
        finalForm: 'Final Form',
        react19: 'React 19',
        stateManagement: 'Керування станом',
        automatic: 'Автоматичне',
        loadingState: 'Loading стан',
        validation: 'Валідація',
        builtIn: 'Вбудована',
        manual: 'Треба писати вручну',
        fieldValidation: 'Field-level validation',
        yes: 'Так',
        no: 'Ні',
        formOnly: 'Ні (тільки форма)',
        dirtyPristine: 'Dirty/Pristine',
        manualImplementation: 'Треба самому',
        bundleSize: 'Розмір бандлу',
        apiComplexity: 'Складність API',
        medium: 'Середня',
        simple: 'Проста',
        ssrSupport: 'SSR підтримка',
        requiresConfig: 'Потребує налаштування',
        outOfBox: 'Out of the box',
      },
      whenToUse: {
        title: 'Коли що використовувати?',
        finalForm: {
          title: '📋 Final Form',
          subtitle: 'Використовуйте коли:',
          items: [
            'Потрібна складна валідація на рівні полів',
            'Багато динамічних полів',
            'Складні форми з wizard/steps',
            'Потрібні field arrays',
            'Вже є в проекті і працює',
          ],
        },
        react19: {
          title: '⚡ React 19 Actions',
          subtitle: 'Використовуйте коли:',
          items: [
            'Прості/середні форми',
            'Новий проект на React 19',
            'Важливий розмір бандлу',
            'Потрібен SSR/RSC',
            'Хочете простіший код',
          ],
        },
      },
      migration: {
        title: 'Стратегія міграції:',
        steps: [
          {
            title: 'Оцініть складність форм',
            description: 'Прості форми можна переписати на React 19, складні - залишити на Final Form',
          },
          {
            title: 'Поступова міграція',
            description: 'Нові форми пишіть на React 19, старі переписуйте по потребі',
          },
          {
            title: 'Створіть обгортки',
            description: 'Напишіть перевикористовувані компоненти для валідації та обробки помилок',
          },
          {
            title: 'Не поспішайте',
            description: 'Final Form все ще чудово працює. Міграція - це не обов\'язково',
          },
        ],
      },
      conclusionSection: {
        title: 'Висновок:',
        benefits: [
          'React 19 Actions - чудовий вибір для більшості форм',
          'Final Form актуальний для дуже складних випадків',
          'Можна використовувати обидва підходи одночасно',
          'React 19 спрощує роботу з формами 🚀',
          'Зменшує залежність від сторонніх бібліотек',
        ],
      },
      form: {
        nameLabel: 'Ім\'я:',
        namePlaceholder: 'Ваше ім\'я',
        emailLabel: 'Email:',
        emailPlaceholder: 'example@email.com',
        messageLabel: 'Повідомлення:',
        messagePlaceholder: 'Ваше повідомлення...',
        submitButton: 'Відправити',
        submittingButton: 'Відправка...',
        formState: 'Стан форми:',
        submitting: 'Submitting:',
        pristine: 'Pristine:',
        pending: 'Pending:',
        success: 'Success:',
        values: 'Values:',
        yes: 'Так',
        no: 'Ні',
        linesOfCode: 'Кількість коду:',
        bundleSize: 'Розмір бандла:',
        builtIntoReact: 'вбудовано в React',
      },
      formTitles: {
        finalForm: '📋 Final Form (React 18 підхід)',
        react19: '⚡ React 19 Actions (новий підхід)',
      },
      validation: {
        required: 'Обов\'язкове поле',
        nameRequired: 'Ім\'я обов\'язкове',
        emailRequired: 'Email обов\'язковий',
        emailInvalid: 'Невалідний email',
        error: 'Помилка',
      },
    },
    
    compiler: {
      title: 'React 19: React Compiler',
      description: 'Автоматична оптимізація без ручних useMemo та useCallback! Компілятор аналізує код і сам оптимізує рендери.',
      before: 'До:',
      after: 'Після:',
      comparisonTitle: '⚖️ Порівняння підходів:',
      react18Title: '❌ React 18 (ручна мемоїзація)',
      react18Code: `const ExpensiveList = ({ items, filter }) => {
  // Ручна мемоїзація 😫
  const filtered = useMemo(() => 
    items.filter(item => item.includes(filter)),
    [items, filter]
  );
  
  const handleClick = useCallback((id) => {
    console.log(id);
  }, []);
  
  return filtered.map(item => (
    <div onClick={() => handleClick(item.id)}>
      {item.name}
    </div>
  ));
};`,
      react19Title: '✅ React 19 (автоматична оптимізація)',
      react19Code: `const ExpensiveList = ({ items, filter }) => {
  // Компілятор оптимізує автоматично! 🎉
  const filtered = items.filter(item => 
    item.includes(filter)
  );
  
  const handleClick = (id) => {
    console.log(id);
  };
  
  return filtered.map(item => (
    <div onClick={() => handleClick(item.id)}>
      {item.name}
    </div>
  ));
};`,
      whatIsCompiler: '🤖 Що таке React Compiler?',
      compilerDescription: 'React Compiler - це інструмент збірки, який автоматично оптимізує ваш React код. Він аналізує компоненти і додає оптимізації, які ви раніше писали вручну через useMemo, useCallback і React.memo.',
      howItWorksTitle: '🔄 Як це працює:',
      howItWorks: [
        'Аналізує ваш код під час збірки',
        'Знаходить дорогі обчислення та створення функцій',
        'Автоматично додає мемоїзацію де потрібно',
        'Оптимізує ре-рендери не змінюючи ваш код',
      ],
      benefitsTitle: '💡 Переваги:',
      benefits: [
        'Не потрібні ручні useMemo/useCallback',
        'Менше бойлерплейт коду',
        'Менше багів (забули додати залежність)',
        'Краща продуктивність автоматично',
        'Легше підтримувати код',
      ],
      realExamplesTitle: '🔥 Реальні приклади:',
      realExamples: {
        expensiveCalculation: {
          title: '1. Дороге обчислення:',
          before: `// До: Ручна мемоїзація
const Component = ({ data }) => {
  const result = useMemo(() => {
    return data.map(x => x * 2)
      .filter(x => x > 10)
      .reduce((a, b) => a + b);
  }, [data]);
  
  return <div>{result}</div>;
};`,
          after: `// Після: Компілятор робить це
const Component = ({ data }) => {
  const result = data.map(x => x * 2)
    .filter(x => x > 10)
    .reduce((a, b) => a + b);
  
  return <div>{result}</div>;
};`,
        },
        eventHandlers: {
          title: '2. Обробники подій:',
          before: `// До: useCallback скрізь
const List = ({ items, onSelect }) => {
  const handleClick = useCallback((id) => {
    onSelect(id);
  }, [onSelect]);
  
  return items.map(item => (
    <Item onClick={() => handleClick(item.id)} />
  ));
};`,
          after: `// Після: Просто пишіть код
const List = ({ items, onSelect }) => {
  const handleClick = (id) => {
    onSelect(id);
  };
  
  return items.map(item => (
    <Item onClick={() => handleClick(item.id)} />
  ));
};`,
        },
      },
      howToEnableTitle: '⚙️ Як увімкнути:',
      howToEnable: {
        step1: '1. Встановити:',
        step1Code: 'npm install babel-plugin-react-compiler',
        step2: '2. Налаштувати babel/vite:',
        step2Code: `// vite.config.js
export default {
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', {}]
        ]
      }
    })
  ]
}`,
        step3: '3. Все! Компілятор працює автоматично',
      },
      importantTitle: 'Важливо:',
      importantNotes: [
        '<strong>Експериментально:</strong> Компілятор все ще в бета-версії, тестуйте ретельно',
        '<strong>Оптимізація під час збірки:</strong> працює при збірці, а не в рантаймі',
        '<strong>Не ламає старий код:</strong> useMemo/useCallback все ще працюють',
        '<strong>Не для всього:</strong> деякі складні випадки можуть потребувати ручної оптимізації',
        '<strong>Краще для нових проектів:</strong> або поступової міграції',
        '<strong>Не замінює твоє розуміння:</strong> треба знати як працюють рендери',
        '<strong>Не магія:</strong> треба писати правильний React код',
        '<strong>Треба тестувати:</strong> не просто видали всі useMemo сліпо',
      ],
    },
    
    language: {
      label: 'Мова',
      en: 'English',
      uk: 'Українська',
    },
};

// Експортуємо об'єкт з перекладами
export const translations: Record<Language, Translations> = {
  en: translationsEn,
  uk: translationsUk,
};
