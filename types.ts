export type State = {
  display: string;
  operator: string | null;
  firstOperand: number | null;
  waitingForSecondOperand: boolean;
  memory: number;
};

export enum ActionType {
  CLEAR = "CLEAR",
  CLEAR_ENTRY = "CLEAR_ENTRY",
  NUMBER = "NUMBER",
  DECIMAL = "DECIMAL",
  OPERATOR = "OPERATOR",
  SIGN = "SIGN",
  SQUARE_ROOT = "SQUARE_ROOT",
  PERCENTAGE = "PERCENTAGE",
  MEMORY_ADD = "MEMORY_ADD",
  MEMORY_SUBTRACT = "MEMORY_SUBTRACT",
  MEMORY_RECALL = "MEMORY_RECALL",
  MEMORY_CLEAR = "MEMORY_CLEAR"
}

export type Action = {
  type: ActionType | null;
  payload: string;
};
