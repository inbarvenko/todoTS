export type todoType = {
  id: number;
  title: string;
  done: boolean;
};

export enum filterEnum {
  all = 'all',
  active = 'active',
  completed = 'completed',
};