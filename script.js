/*
 * @Date: 2021-09-16 14:24:36
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-18 11:56:07
 * @FilePath: /js-test/script.js
 */

//1.
function fibonacci(position) {
  if (position <= 2) {
    return 1;
  } else {
    return fibonacci(position - 1) + fibonacci(position - 2);
  }
}

console.log(fibonacci(0),fibonacci(1),fibonacci(2),fibonacci(3),fibonacci(4),fibonacci(5),)



//2 .Debounce
function debounce(func, delay=3000){
  let timeout = null;
  return function(){
    let context = this; 
    let args = arguments;
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

function handleScroll() {
  console.log(window.scrollY)
}
window.addEventListener('scroll', debounce(handleScroll));



//3.
class StackNode {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
    this.length = 0
  }

  size() {
    return this.length
  }

  push(value) {
    let node = new StackNode(value)
    node.next = this.top
    this.top = node
    this.length++
  }

  pop() {
    let result = this.top
    this.top = this.top.next
    this.length--
    return result.data
  }
}

let myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.pop())
console.log(myStack.size())


//4.
let currentPage, totalPage, renderPages ;
function getPagination(offset, limit, total){
  let totalPage = Math.ceil(total / limit);
  let currentPage = Math.ceil(offset / limit) + 1 ;
  let renderPages = []

  if(currentPage <= 3) {
    for(let i = currentPage/currentPage; i<currentPage+5; i++){
      renderPages += i
    }
  } else if (currentPage > 4) {
    for(let i=3; i<8; i++){
      renderPages += i
    }
  } else {
    for(let i=currentPage-2; i >= currentPage-3 && i < currentPage+3; i++){
      renderPages += i 
    }
  }

  arr = renderPages.split("").splice(0,5);
  renderPages = arr;

  console.log('currentPage:'+ currentPage,'totalPage:'+totalPage,'renderPages:'+[renderPages])
}


getPagination(0, 5, 33) // { currentPage: 1, totalPage: 7, renderPages: [1,2,3,4,5] }
getPagination(5, 5, 33) // { currentPage: 2, totalPage: 7, renderPages: [1,2,3,4,5] }
getPagination(10, 5, 33) // { currentPage: 3, totalPage: 7, renderPages: [1,2,3,4,5] }
getPagination(15, 5, 33) // { currentPage: 4, totalPage: 7, renderPages: [2,3,4,5,6] }
getPagination(20, 5, 33) // { currentPage: 5, totalPage: 7, renderPages: [3,4,5,6,7] }
getPagination(25, 5, 33) // { currentPage: 6, totalPage: 7, renderPages: [3,4,5,6,7] }
getPagination(30, 5, 33) // { currentPage: 7, totalPage: 7, renderPages: [3,4,5,6,7] }

