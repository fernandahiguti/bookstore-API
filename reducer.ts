import { State, Action, ActionType } from "./types";

export const INITIAL_STATE: State = {
  display: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
  memory: 0
};

export default function reducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case ActionType.CLEAR: {
      return {
        ...state,
        display: "0",
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null
      };
    }

    case ActionType.CLEAR_ENTRY: {
      return {
        ...state,
        display: "0"
      };
    }

    case ActionType.NUMBER: {
      const number = payload;
      let { display, waitingForSecondOperand } = state;

      if (state.waitingForSecondOperand) {
        display = number;
        waitingForSecondOperand = false;
      } else {
        display = display === "0" ? number : display + number;
      }
      return {
        ...state,
        display,
        waitingForSecondOperand
      };
    }

    case ActionType.DECIMAL: {
      let { display, waitingForSecondOperand } = state;
      if (waitingForSecondOperand) return state;

      if (!display.includes(".")) {
        display += ".";
      }
      return { ...state, display };
    }

    case ActionType.OPERATOR: {
      const nextOperator = payload;
      let { firstOperand, display, operator } = state;
      const inputValue = parseFloat(display);

      if (operator && state.waitingForSecondOperand) {
        return { ...state, operator: nextOperator };
      }

      if (firstOperand === null) {
        firstOperand = inputValue;
      } else if (operator) {
        display = performCalculation[operator](
          firstOperand,
          inputValue
        ).toString();
        firstOperand = parseFloat(display);
      }

      return {
        ...state,
        display,
        firstOperand,
        waitingForSecondOperand: true,
        operator: nextOperator
      };
    }

    case ActionType.SQUARE_ROOT: {
      let { display } = state;
      display =
        display === "0" ? "0" : Math.sqrt(parseFloat(display)).toString();
      return { ...state, display };
    }

    case ActionType.PERCENTAGE: {
      let { display } = state;
      display = (parseFloat(display) / 100).toString();
      return { ...state, display };
    }

    case ActionType.SIGN: {
      let { display, firstOperand, waitingForSecondOperand } = state;
      display = (parseFloat(display) * -1).toString();
      if (waitingForSecondOperand) {
        firstOperand = parseFloat(display);
      }
      return { ...state, display, firstOperand };
    }

    case ActionType.MEMORY_ADD: {
      let { display, firstOperand, memory, operator } = state;

      let inputValue = parseFloat(display);

      if (state.waitingForSecondOperand) {
        memory += inputValue;
        return { ...state, memory, operator };
      }

      if (operator && firstOperand) {
        inputValue = performCalculation[operator](firstOperand, inputValue);
      }
      memory += inputValue;

      return {
        ...state,
        display,
        memory,
        waitingForSecondOperand: true
      };
    }

    case ActionType.MEMORY_SUBTRACT: {
      let { display, firstOperand, memory, operator } = state;

      let inputValue = parseFloat(display);

      if (state.waitingForSecondOperand) {
        memory -= inputValue;
        return { ...state, memory, operator };
      }

      if (operator && firstOperand) {
        inputValue = performCalculation[operator](firstOperand, inputValue);
      }
      memory -= inputValue;

      return {
        ...state,
        display,
        memory,
        waitingForSecondOperand: true
      };
    }

    case ActionType.MEMORY_RECALL: {
      let { display, waitingForSecondOperand } = state;
      display = state.memory.toString();
      if (state.waitingForSecondOperand) {
        waitingForSecondOperand = false;
      }
      return { ...state, display, waitingForSecondOperand };
    }

    case ActionType.MEMORY_CLEAR: {
      return { ...state, memory: 0 };
    }
    default:
      return state;
  }
}

type Operations = {
  [operator: string]: (firstOperand: number, secondOperand: number) => number;
};

const performCalculation: Operations = {
  "/": (firstOperand, secondOperand) => firstOperand / secondOperand,

  "*": (firstOperand, secondOperand) => firstOperand * secondOperand,

  "+": (firstOperand, secondOperand) => firstOperand + secondOperand,

  "-": (firstOperand, secondOperand) => firstOperand - secondOperand,

  "=": (firstOperand, secondOperand) => secondOperand
};
