export const enum TODO_STATUS {
  DONE,
  PENDING,
  IN_PROGRESS,
}

export interface ITodo {
  _id: string;
  name: string;
  status: TODO_STATUS;
}
