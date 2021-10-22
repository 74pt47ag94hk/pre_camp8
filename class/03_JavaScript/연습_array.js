const classmates = ["철수", "영희", "훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates.push("맹구")
// 4
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.includes("맹구")
// true
classmates.pop()
// '맹구'
classmates
// (3) ['철수', '영희', '훈이']
classmates.length
// 3

// const aaa = [2,3,4]
// undefined
// aaa = [5,6,7]
// VM828:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:5
// (anonymous) @ VM828:1
// aaa[0]="철수"
// '철수'
// aaa
// (3) ['철수', 3, 4]
// 이건됨 ㅋㅋ

