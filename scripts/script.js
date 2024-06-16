// Создание пустого массива grades
let grades = [];

// Заполнение массива случайными оценками от 1 до 100 для 12 студентов
for (let i = 0; i < 12; i++) {
    grades.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Оценки студентов:", grades);

// Расчет и вывод среднего балла студентов
let averageGrade = grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
console.log("Средний балл студентов:", averageGrade);

// Поиск и вывод максимальной оценки среди студентов
let maxGrade = Math.max(...grades);
console.log("Максимальный балл среди студентов:", maxGrade);

// Поиск и вывод минимальной оценки среди студентов
let minGrade = Math.min(...grades);
console.log("Минимальный балл среди студентов:", minGrade);

// Подсчет и вывод количества студентов, получивших положительную оценку (балл выше или равен 60)
let positiveGrades = grades.filter(grade => grade >= 60);
console.log("Количество студентов с положительной оценкой (балл выше или равен 60):", positiveGrades.length);

// Подсчет и вывод количества студентов, получивших отрицательную оценку (балл ниже 60)
let negativeGrades = grades.filter(grade => grade < 60);
console.log("Количество студентов с отрицательной оценкой (балл ниже 60):", negativeGrades.length);

// Преобразование числовых оценок в буквенные оценки
let letterGrades = grades.map(grade => {
    if (grade >= 80) {
        return "A";
    } else if (grade >= 60) {
        return "B";
    } else if (grade >= 40) {
        return "C";
    } else if (grade >= 20) {
        return "D";
    } else {
        return "E";
    }
});

console.log("Буквенные оценки студентов:", letterGrades);