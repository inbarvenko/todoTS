export type ToDoType = {
  userID: number;
  id: number;
  title: string;
  completed: boolean;
};

export enum FilterEnum {
  all = 'all',
  active = 'active',
  completed = 'completed',
};

export type AvailableButtonTypes = 'edit' | 'delete';