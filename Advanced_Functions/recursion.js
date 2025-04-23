let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};


function adding(dep) {
    if (Array.isArray(dep)) {
        return dep.reduce((prevs, current) => prevs + current.salary, 0);
    } else {
        let sum = 0;
        for (let i of Object.values(dep)) {
            sum += adding(i);
        }
        return sum;
    }
}

console.log(adding(company));


function Tosum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function rec_sum(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + rec_sum(n - 1);
    }
}

console.log(rec_sum(100));


function fac(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fac(n - 1);
    }
}

console.log(fac(5));


function fib(n) {
    let a = 1;
    let b = 1;
    if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 1;
    } else {
        for (let i = 3; i <= n; i++) {
            let x = a + b;
            b = a;
            a = x;
        }
        return a;
    }
}

console.log(fib(77)); //5527939700884757


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function List(list) {
    while (list) {
        console.log(list.value);
        list = list.next;
    }
}

function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}

printList(list);

function loop_rev(list) {
    let arr = [];
    while (list) {
        arr.push(list.value);
        list = list.next;
    }
    let arr1 = [];
    for (let i = arr.length; i > 0; i--) {
        arr1.push(i);
    }
    return arr1;
}
let arr = [];
function rec_rev(list) {
    arr.push(list.value);
    if (list.next) {
        rec_rev(list.next);
    }
    let arr1 = [];
    for (let i = arr.length; i > 0; i--) {
        arr1.push(i);
    }
    return arr1;
}

function rec_rev1(list) {
    if (list.next) {
        rec_rev1(list.next);
    }
    console.log(list.value);
}
rec_rev1(list);

let a = "John";
function sayHi() {
    console.log(a);
}
a = "Ram";
sayHi();





function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
         return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)(2)); // 6
console.log(sum(6)(-1)(-2)(-3)); // 0
console.log(sum(0)(1)(2)(3)(4)(5)); // 15