import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';

import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

// info({
// text: 'This message will be shown for 5 seconds.',
// delay: 5000,
// });


const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    error({
  title: 'Все пропало!',
  text: 'Спробуйте ще раз.',
  delay: 1000
});
})








// import { nanoid } from 'nanoid'
// const people = [
//   { name: "Artem", age: 16 },
//   { name: "Maria", age: 18 },
//   { name: "Ivan", age: 20 },
//   { name: "Olga", age: 22 },
//   { name: "Dmytro", age: 17 },
//   { name: "Sofia", age: 19 },
//   { name: "Andrii", age: 21 },
//   { name: "Kateryna", age: 23 },
//   { name: "Oleh", age: 24 },
//   { name: "Nazar", age: 25 }
// ];
// people.forEach(person => {
//     person.id = nanoid(10)
// })
// console.log(people)


