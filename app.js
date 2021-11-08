// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
//1a
const jokejs1=JSON.parse`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
//1b
p1.innerText=jokejs1.setup;
//1c
p1.innerText=jokejs1.punchline;

/*2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);
//2a
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
//2b
const JS2 = res
.then(res => {
    console.log(`Successful`);
//2c I reveresed their order from the assignment so character follows quote.
p3.innerText = `"${friendsJS2.data.quote}"`;
p4.innerText = `—${friendsJS2.data.character}`;
*/
// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);