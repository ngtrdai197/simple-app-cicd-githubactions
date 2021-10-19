export const enum TODO_STATUS {
  DONE,
  PENDING,
  IN_PROGRESS,
}

export interface ITodo {
  id: string;
  name: string;
  status: TODO_STATUS;
}
