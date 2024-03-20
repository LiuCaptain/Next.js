interface ListItem {
  id: string;
  content: string;
}

export interface DataState {
  inputValue: string;
  list: ListItem[];
}

export interface Action {
  type: string;
  value: string;
}
