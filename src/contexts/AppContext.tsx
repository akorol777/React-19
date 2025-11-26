import { createContext, useState, type ReactNode } from 'react';
import type { Todo, Post } from '../data/mockData';
import { mockTodos, mockPosts } from '../data/mockData';

// Types for context
interface AppContextType {
  todos: Todo[];
  posts: Post[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  updatePost: (post: Post) => void;
  currentView: string;
  setCurrentView: (view: string) => void;
}

// Create context - new React 19 approach, can be used with use()
export const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

// Provider for global state
export const AppProvider = ({ children }: AppProviderProps) => {
  // State for todos
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  
  // State for posts
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  
  // Current view (for navigation)
  const [currentView, setCurrentView] = useState<string>('home');

  // Add todo
  const addTodo = (todo: Todo) => {
    console.log('📝 Adding todo to context:', todo);
    setTodos(prev => [...prev, todo]);
  };

  // Remove todo
  const removeTodo = (id: number) => {
    console.log(`🗑️ Removing todo ${id} from context`);
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  // Update post (e.g., likes)
  const updatePost = (post: Post) => {
    console.log('🔄 Updating post in context:', post);
    setPosts(prev => prev.map(p => p.id === post.id ? post : p));
  };

  // Change current view
  const handleViewChange = (view: string) => {
    console.log(`🔀 Switching to view: ${view}`);
    setCurrentView(view);
  };

  const value: AppContextType = {
    todos,
    posts,
    addTodo,
    removeTodo,
    updatePost,
    currentView,
    setCurrentView: handleViewChange,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
