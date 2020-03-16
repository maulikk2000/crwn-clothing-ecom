import { createHook, createStore } from "react-sweet-state";

interface IInitialState {
  name: string;
}

const initialState: IInitialState = {
  name: ""
};

const actions = {
  //setUserName()
};

const store = createStore({
  initialState: initialState,
  actions: actions,
  name: "userStore"
});

export const userStore = createHook(store);
