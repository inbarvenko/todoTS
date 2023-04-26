export type ToDoType = {
  id: number;
  title: string;
  done: boolean;
};

export enum FilterEnum {
  all = 'all',
  active = 'active',
  completed = 'completed',
};