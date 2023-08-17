import { atom } from 'recoil';

export const UserState = {
  age: atom({
    key: "UserState.age",
    default: sessionStorage.getItem("UserState.age") || null,
    effects: [
      ({ onSet }) => {
        onSet((value) => sessionStorage.setItem("UserState.age", value))
      }
    ]
  }),
  room_id: atom({
    key: "UserState.room_id",
    default: sessionStorage.getItem("UserState.room_id") || null,
    effects: [
      ({ onSet }) => {
        onSet((value) => {
          sessionStorage.setItem("UserState.room_id", value)
        })
      }
    ]
  }),
  topic_id: atom({
    key: "UserState.topic_id",
    default: sessionStorage.getItem("UserState.topic_id") || null,
    effects: [
      ({ onSet }) => {
        onSet((value) => sessionStorage.setItem("UserState.topic_id", value))
      }
    ]
  }),
  session_id: atom({
    key: "UserState.session_id",
    default: sessionStorage.getItem("UserState.session_id") || null,
    effects: [
      ({ onSet }) => {
        onSet((value) => sessionStorage.setItem("UserState.session_id", value))
      }
    ]
  }),
  session_nickname: atom({
    key: "UserState.session_nickname",
    default: sessionStorage.getItem("UserState.session_nickname") || null,
    effects: [
      ({ onSet }) => {
        onSet((value) => sessionStorage.setItem("UserState.session_nickname", value))
      }
    ]
  }),
}