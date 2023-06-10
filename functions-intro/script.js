'use strict'
// Please don't delete the 'use strict' line above

//const school = "Code Chrysalis";
//console.log(school); // "Code Chrysalis" を表示
//let week = 1;
//    console.log(week); // "1" を表示

// ここにあなたのコードを書いてください
//const name = '有希菜';
//let age = '28';
//let isProgrammer = 'true';
//let currentTask = 1;
//currentTask = currentTask + 1;
//    console.log(name); //名前を表示
//    console.log(age); // 年齢を表示
//    console.log(isProgrammer); // "true" を表示
//    console.log(currentTask); // "1" を表示

// 正方形の面積を計算して保存
// const squareSideLength = 2;
// ここにあなたのコードを書いてください
// let squareArea = squareSideLength * 2;
//    console.log(squareArea);//"4"を表示

// 長方形の面積を計算して保存
// const rgthectangleBaseLen = 3;
// const rectangleHeightLength = 4;
// ここにあなたのコードを書いてください
// let rectangleArea = rgthectangleBaseLen * rectangleHeightLength;
//    console.log(rectangleArea); // "12" を表示

// 三角形の面積を計算して保存
// const triangleBaseLength = 4;
// const triangleHeightLength = 5;
// ここにあなたのコードを書いてください
// let triangleArea = (triangleBaseLength * triangleHeightLength) / 2;
//    console.log(triangleArea); // "10" を表示

// 円の円周と面積を計算して保存する
// const circleDiameter = 10;
// const Pi = 3.141592;
// ここにあなたのコードを書いてください
// let circleCircumference = circleDiameter * Pi;
// let circleArea = ((circleDiameter / 2) ** 2) * Pi;
//    console.log(circleCircumference); // "31.41592653589793" に近い値を表示
//    console.log(circleArea); // "78.53981633974483" に近い値を表示

// 課題「値を直接再割り当てせずに a と b の値を入れ替えて、期待通りの値が出力されるようにしましょう。」以降のは後日対応

// 5 + 6;
// console.log(6 + 6);

// function add(numOne,numTwo){
//   return numOne + numTwo; 
// }

// テスト
// console.log(add(4,3)); //7を表示
// console.log(add(100,42)); //=>142
// console.log(add(100)); // 何が起こる？  →第一引数(100) + undefinedを計算して非数(NaN)になる
// console.log(add(1, 4, 5)); // 何が起こる？　→第3引数(5)は無視され、第1引数(1)+第2引数(4)の結果は(5)となる

// function simpleFunctionA() {
//   return "Hello simple functiomjn A";
// }

// function simpleFunctionB() {
//   console.log("Hello simple function B"); 
//   //returnの記載がないためconsole.logの内容"Hello simple function B"を表示
// }

//   console.log(simpleFunctionA(), "--> From running Simple Function A");
//   //return文で定義された内容"Hello simple function A"を表示
//   console.log(simpleFunctionB(), "--> From running Simple Function B");
// //return文がないのでundefinedを表示

// function subtract(num1, num2) {
//   return num1 - num2;
// }
//テスト
// console.log(subtract(4, 3)); // => 1
// console.log(subtract(100, 42)); // => 58
// console.log(subtract(5,10)); //=> -5
// console.log(subtract(1000,45)); //=>955

// ここにコードを書いてください
// function greeting(name){
//   return "Hello," + name + "!";
// }

// console.log(greeting("Alex")); // => "Hello, Alex!"
// console.log(greeting("Beau")); // => "Hello, Beau!"

// function average(numOne,nomTwe){
//   return (numOne + nomTwe) / 2;
// }
// console.log(average(15,20));
// console.log(average(120,176));

// //次の関数には誤りがあります。何が間違っているのでしょうか。
// function square(num) {  //５という数値は識別されないのでnumを使用
//   return num * 5;
// }
// console.log(square(5));

// function square(x) { //"x"文字列は使用できないのでxへ変更　
//   return x * "x"; //文字列の掛け算はできない
//   return x + "x"; //またはreturn x.repeat(2);でも可能
// }
// console.log(square("X"))

// //一方こちらは問題なく動きます。そのままでも動くがさらに良い書き方は？
// function Square(monkey){
//   return monkey * monkey;
// }

// function square(monkey) {
//   return monkey.repeat(2);
// }
// console.log(square(monkey));

//cube という名前の関数を宣言しましょう。x の 3 乗を出力してください。
// function cube(x) {
//   return x ** 3;
// }
// console.log(cube(5));



/*Lesson2-3*/

// //以下のコードを script.js にコピーして、それぞれの文が boolean 型の値を表示するよう、??? の部分を適切な比較演算子で埋めましょう。
//index.html を Chrome で開き、コンソールで結果をチェックしてください。
// console.log(1100 !== 99) // => true を表示させる。

// console.log(1100 !== 99) // => true を表示させる。

// console.log(1 > 21) // => false

// console.log(62 !== "62") // => true

// console.log("5" === 5) // => false

// console.log("6" !== "six") // => true

// //script.js に以下のコードをコピーして、「算術演算子」を「１つだけ」変えましょう。そのとき、以下の expression（式） の結果が true になるようにしてください。expression（式） が算術演算子を評価する順番を確認しておきましょう！
// console.log(2 * 3 * 10 > 50); // 2+3を2*3へ変更

// //以下の関数を script.js にコピーして、expression（式） が true と評価されるように ??? の部分に、異なる 2 つの引数を渡してみましょう。ヒント：=== は値とデータ型両方の一致を評価し、== は値の一致のみを評価します。
// function isEqual(valueOne, valueTwo) {
//   return valueOne == valueTwo;
// }
// console.log(isEqual(15,10 + 5));


// // function isGreaterThan(valueOne, valueTwo) {
//   return valueOne > valueTwo;
// }
// console.log(isGreaterThan(45,22));

// //テストケースをいくつか書いてみましょう！ また、false が表示されるように２つの異なる引数を渡して isGreaterThan を呼び出してみましょう。
// console.log(isGreaterThan(100,98)); //trueを表示
// console.log(isGreaterThan(35,40)); //falseを表示

//日本では、20 歳以上になるとアルコールを飲めるようになります。script.js に 、数値 型の引数を 1 つ取り、与えられた年齢がアルコールを飲める年齢かどうかを boolean 型で返す（ return する）isOfAge という関数を declare（宣言） しましょう。
// function isOfAge(age){
//   return age >= 20;
// }
// console.log(isOfAge(20));