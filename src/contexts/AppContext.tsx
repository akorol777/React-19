import { createContext, ReactNode, useState } from 'react';
import type { Todo, Post } from '../data/mockData';
import { mockTodos, mockPosts } from '../data/mockData';

// Типи для контексту
interface AppContextType {
  todos: Todo[];
  posts: Post[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  updatePost: (post: Post) => void;
  currentView: string;
  setCurrentView: (view: string) => void;
}

// Створюємо контекст - новий підхід React 19, можна використовувати з use()
export const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

// Provider для глобального стану
export const AppProvider = ({ children }: AppProviderProps) => {
  // Стан для todos
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  
  // Стан для постів
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  
  // Поточний вигляд (для навігації)
  const [currentView, setCurrentView] = useState<string>('home');

  // Додати todo
  const addTodo = (todo: Todo) => {
    console.log('📝 Додаємо todo в контекст:', todo);
    setTodos(prev => [...prev, todo]);
  };

  // Видалити todo
  const removeTodo = (id: number) => {
    console.log(`🗑️ Видаляємо todo ${id} з контексту`);
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  // Оновити пост (наприклад, лайки)
  const updatePost = (post: Post) => {
    console.log('🔄 Оновлюємо пост в контексті:', post);
    setPosts(prev => prev.map(p => p.id === post.id ? post : p));
  };

  // Змінити поточний вигляд
  const handleViewChange = (view: string) => {
    console.log(`🔀 Переключаємо на вигляд: ${view}`);
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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

