export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAILURE = "FETCH_TODO_FAILURE";

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

export interface TodoState {
    pending: boolean;
    todos: ITodo[];
    error: string | null;
  }
  
  export interface FetchTodoSuccessPayload {
    todos: ITodo[];
  }
  
  export interface FetchTodoFailurePayload {
    error: string;
  }
  
  export interface FetchTodoRequest {
    type: typeof FETCH_TODO_REQUEST;
  }
  
  export type FetchTodoSuccess = {
    type: typeof FETCH_TODO_SUCCESS;
    payload: FetchTodoSuccessPayload;
  };
  
  export type FetchTodoFailure = {
    type: typeof FETCH_TODO_FAILURE;
    payload: FetchTodoFailurePayload;
  };
  
  export type TodoActions =
    | FetchTodoRequest
    | FetchTodoSuccess
    | FetchTodoFailure;

  const initialState: TodoState = {
    pending: false,
    todos: [],
    error: null,
  };
  
  export default (state = initialState, action: TodoActions) => {
    switch (action.type) {
      case FETCH_TODO_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_TODO_SUCCESS:
        return {
          ...state,
          pending: false,
          todos: action.payload.todos,
          error: null,
        };
      case FETCH_TODO_FAILURE:
        return {
          ...state,
          pending: false,
          todos: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };