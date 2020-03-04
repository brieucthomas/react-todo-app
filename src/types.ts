export type Todo = {
  id?: string,
  text: string,
  completed: boolean
}

export enum VisibilityFilter {
  ShowAll = 'SHOW_ALL',
  ShowCompleted = 'SHOW_COMPLETED',
  ShowActive = 'SHOW_ACTIVE'
}