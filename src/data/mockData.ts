// Мокані дані для демонстрації React 19 фіч

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  userId: number;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  likes: number;
}

// Мокані користувачі
export const mockUsers: User[] = [
  { id: 1, name: 'Олександр Петренко', email: 'alex@example.com', avatar: '👨‍💻' },
  { id: 2, name: 'Марія Коваленко', email: 'maria@example.com', avatar: '👩‍💼' },
  { id: 3, name: 'Іван Шевченко', email: 'ivan@example.com', avatar: '👨‍🎨' },
];

// Мокані todo
export const mockTodos: Todo[] = [
  { id: 1, text: 'Вивчити React 19', completed: true, userId: 1 },
  { id: 2, text: 'Зробити презентацію', completed: false, userId: 1 },
  { id: 3, text: 'Пояснити колегам нові фічі', completed: false, userId: 1 },
];

// Мокані пости
export const mockPosts: Post[] = [
  { id: 1, title: 'React 19 вийшов!', content: 'Нові можливості змінять ваш підхід до розробки...', author: 'React Team', likes: 150 },
  { id: 2, title: 'Actions API', content: 'Більше не потрібно керувати loading станом вручну...', author: 'Dan Abramov', likes: 89 },
  { id: 3, title: 'useOptimistic хук', content: 'Оптимістичні оновлення тепер вбудовані...', author: 'Sophie Alpert', likes: 67 },
];

// Імітація асинхронного запиту
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Функція для імітації завантаження користувача
export const fetchUser = async (id: number): Promise<User> => {
  console.log(`🔄 Завантаження користувача ${id}...`);
  await delay(1000);
  const user = mockUsers.find(u => u.id === id);
  if (!user) throw new Error('Користувача не знайдено');
  console.log(`✅ Користувач завантажений:`, user);
  return user;
};

// Функція для імітації завантаження постів
export const fetchPosts = async (): Promise<Post[]> => {
  console.log('🔄 Завантаження постів...');
  await delay(1500);
  console.log(`✅ Завантажено ${mockPosts.length} постів`);
  return mockPosts;
};

// Функція для імітації збереження todo
export const saveTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
  console.log('💾 Збереження todo...', todo);
  await delay(1000);
  const newTodo = { ...todo, id: Date.now() };
  console.log('✅ Todo збережено:', newTodo);
  return newTodo;
};

// Функція для імітації видалення todo
export const deleteTodo = async (id: number): Promise<void> => {
  console.log(`🗑️ Видалення todo ${id}...`);
  await delay(800);
  console.log(`✅ Todo ${id} видалено`);
};

// Функція для імітації збереження форми
export const saveFormData = async (data: Record<string, any>): Promise<{ success: boolean; message: string }> => {
  console.log('📤 Відправка форми...', data);
  await delay(1500);
  
  // Імітація помилки у 10% випадків
  if (Math.random() < 0.1) {
    console.log('❌ Помилка відправки форми');
    throw new Error('Помилка з\'єднання з сервером');
  }
  
  console.log('✅ Форма успішно відправлена');
  return { success: true, message: 'Дані успішно збережені!' };
};

// Функція для імітації лайку поста
export const likePost = async (postId: number): Promise<Post> => {
  console.log(`👍 Лайк поста ${postId}...`);
  await delay(600);
  const post = mockPosts.find(p => p.id === postId);
  if (!post) throw new Error('Пост не знайдено');
  const updatedPost = { ...post, likes: post.likes + 1 };
  console.log('✅ Лайк додано:', updatedPost);
  return updatedPost;
};

