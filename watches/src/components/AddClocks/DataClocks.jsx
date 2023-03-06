import {nanoid} from "nanoid"

const INIT_TIMES = [{
    id: nanoid(),
    name: "Москва",
    timezone: "3",
  }, {
    id: nanoid(),
    name: "Амстердам",
    timezone: "2",
  }, {
    id: nanoid(),
    name: "Нью-Йорк",
    timezone: "-5",
  }];

  export default INIT_TIMES