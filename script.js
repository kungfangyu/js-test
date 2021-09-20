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
function getRenderPages(totalPage, pageIndex){
  const renderPages = [];
  const pages =  totalPage > 5 ? 5 : totalPage;
  for(let i =0; i < pages; i++) {
    renderPages.push(i + pageIndex);
  }
  return renderPages
}  


function getPagination(offset, limit, total){
const totalPage = Math.ceil(total / limit);
const currentPage = Math.ceil(offset / limit) + 1 > totalPage ? totalPage : Math.ceil(offset / limit) + 1; 
const isFirstTwo = currentPage < 3; 
const isLastTwo  = totalPage - currentPage < 2;
if(isFirstTwo) {
  return {
    totalPage,
    currentPage,
    renderPages: getRenderPages(totalPage, 1)
  }
} if(isLastTwo) {
  return {
    totalPage,
    currentPage,
    renderPages: getRenderPages(totalPage, totalPage - 4)
  }
} else {
    return {
      totalPage,
      currentPage,
      renderPages: getRenderPages(totalPage, currentPage - 2),
  }
}
}


const {
  totalPage,
  currentPage,
  renderPages,
} = getPagination(30, 5, 33);


console.log(currentPage ,totalPage, renderPages)


