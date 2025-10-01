// ## 🔥 **Advanced Bonus Questions**

// ### **11. Computed Property Names**

// 👉 Create an object where the key comes from a variable:


// const prop = "score";
// const player = { name: "Max", [prop]: 95 };
// console.log(player.score); // ?
// ```

let prop="score";
const player={name:"max",[prop]:95};
console.log(player.score);