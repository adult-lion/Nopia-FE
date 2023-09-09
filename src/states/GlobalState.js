import { atom } from "recoil";

export const GlobalState = {
  webSocket: atom({
    key: "GlobalState.websocket",
    default: null,
  }),
  joiningChatRoom: atom({
    key: "GlobalState.joiningChatRoom",
    default: false,
  }),
  joiningQueue: atom({
    key: "GlobalState.joiningQueue",
    default: false,
  }),
  messages: atom({
    key: "GlobalState.messages",
    default: [],
  }),
  notices: atom({
    key: "GlobalState.notice",
    default: [],
  }),
  aliveUsers: atom({
    key: "GlobalState.aliveUsers",
    default: JSON.parse(
      sessionStorage.getItem("GlobalState.aliveUsers") || "[]"
    ),
    effects: [
      ({ onSet }) => {
        onSet((value) => {
          sessionStorage.setItem(
            "GlobalState.aliveUsers",
            JSON.stringify(value)
          );
        });
      },
    ],
  }),
};
