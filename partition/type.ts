export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Todo[];
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  editingId: number | null;
  editValue: string;
  setEditValue: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  startEdit: (todo: Todo) => void;
  saveEdit: (id: number) => void;
  cancelEdit: () => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  handleEditKeyPress: (e: React.KeyboardEvent, id: number) => void;
  clearCompleted: () => void;
  completedCount: number;
  totalCount: number;
}
