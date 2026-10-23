// --- Task 1: Приветствие пользователя ---
function greet(name) {
    console.log("Привет, " + name + "!");
}

// Если требуется запросить через prompt, можно сделать так:
// let inputName = prompt("Введите ваше имя:");
// greet(inputName);

// Примеры вызова из задания:
greet("Ruslan");
greet("Samir");


// --- Task 2: Калькулятор (сумма) ---
function calculateSum(a, b) {
    return a + b;
}

console.log(calculateSum(5, 3));
console.log(calculateSum(10, 20));


// --- Task 3: Проверка возраста ---
function checkAge(age) {
    if (age < 18) {
        return "Доступ запрещён";
    } else {
        return "Доступ разрешён";
    }
}

console.log(checkAge(16));
console.log(checkAge(21));


// --- Task 4: Чёттное или нечётное число ---
function checkNumber(num) {
    if (num % 2 === 0) {
        return "Чёттное число";
    } else {
        return "Нечётное число";
    }
}

console.log(checkNumber(8));
console.log(checkNumber(5));


// --- Task 5: Мини-калькулятор ---
function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "На ноль делить нельзя";
            }
            return a / b;
        default:
            return "Неизвестная операция";
    }
}

console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2