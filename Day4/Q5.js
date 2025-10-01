// ## 🔥 **Advanced Bonus Questions**

// ### **11. Computed Property Names**

// 👉 Create an object where the key comes from a variable:


// const prop = "score";
// const player = { name: "Max", [prop]: 95 };
// console.log(player.score); // ?
// ```

let prop="score";
let Fname="name";
const player={[Fname]:"max",[prop]:95};
console.log(`${player.name} scored ${player.score} runs`);