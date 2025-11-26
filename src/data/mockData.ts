// Mock data for demonstrating React 19 features

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

// Mock users
export const mockUsers: User[] = [
  { id: 1, name: 'Andrii King', email: 'alex@example.com', avatar: '👨‍💻' },
  { id: 2, name: 'Peter Paver', email: 'maria@example.com', avatar: '👩‍💼' },
  { id: 3, name: 'Pavel Peter', email: 'ivan@example.com', avatar: '👨‍🎨' },
];

// Mock todos (will be translated dynamically)
export const getMockTodos = (t: any): Todo[] => [
  { id: 1, text: t.home.mockTodos.todo1, completed: true, userId: 1 },
  { id: 2, text: t.home.mockTodos.todo2, completed: false, userId: 1 },
  { id: 3, text: t.home.mockTodos.todo3, completed: false, userId: 1 },
];

// For backward compatibility (English version by default)
export const mockTodos: Todo[] = [
  { id: 1, text: 'Learn React 19', completed: true, userId: 1 },
  { id: 2, text: 'Create presentation', completed: false, userId: 1 },
  { id: 3, text: 'Explain new features to colleagues', completed: false, userId: 1 },
];

// Mock posts
export const mockPosts: Post[] = [
  { id: 1, title: 'React 19 Released!', content: 'New features will change your development approach...', author: 'React Team', likes: 150 },
  { id: 2, title: 'Actions API', content: 'No more manual loading state management...', author: 'Dan Abramov', likes: 89 },
  { id: 3, title: 'useOptimistic hook', content: 'Optimistic updates are now built-in...', author: 'Sophie Alpert', likes: 67 },
];

// Simulate async request
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Function to simulate user loading
export const fetchUser = async (id: number): Promise<User> => {
  console.log(`🔄 Loading user ${id}...`);
  await delay(1000);
  const user = mockUsers.find(u => u.id === id);
  if (!user) throw new Error('User not found');
  console.log(`✅ User loaded:`, user);
  return user;
};

// Function to simulate posts loading
export const fetchPosts = async (): Promise<Post[]> => {
  console.log('🔄 Loading posts...');
  await delay(1500);
  console.log(`✅ Loaded ${mockPosts.length} posts`);
  return mockPosts;
};

// Function to simulate todo saving
export const saveTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
  console.log('💾 Saving todo...', todo);
  await delay(1000);
  const newTodo = { ...todo, id: Date.now() };
  console.log('✅ Todo saved:', newTodo);
  return newTodo;
};

// Function to simulate todo deletion
export const deleteTodo = async (id: number): Promise<void> => {
  console.log(`🗑️ Deleting todo ${id}...`);
  await delay(800);
  console.log(`✅ Todo ${id} deleted`);
};

// Function to simulate form saving
export const saveFormData = async (data: Record<string, any>): Promise<{ success: boolean; message: string }> => {
  console.log('📤 Submitting form...', data);
  await delay(1500);
  
  // Simulate error in 10% of cases
  if (Math.random() < 0.1) {
    console.log('❌ Form submission error');
    throw new Error('Server connection error');
  }
  
  console.log('✅ Form successfully submitted');
  return { success: true, message: 'Data successfully saved!' };
};

// Function to simulate post like
export const likePost = async (postId: number): Promise<Post> => {
  console.log(`👍 Liking post ${postId}...`);
  await delay(600);
  const post = mockPosts.find(p => p.id === postId);
  if (!post) throw new Error('Post not found');
  const updatedPost = { ...post, likes: post.likes + 1 };
  console.log('✅ Like added:', updatedPost);
  return updatedPost;
};

// Backward compatibility exports
export const fetchUserById = fetchUser;
