 function formatMessage(message, maxLength) {
  // Отримуєм довжину рядка
  const messageLength = message.length;

  // Якщо довжина рядка дорівнює або менша за maxLength, то повертаєм початковий рядок без змін
  if (messageLength <= maxLength) {
    return message;
  }

  // В іншому випадку обрізаю рядок до maxLength символів і додаю трикрапку в кінці
  return message.slice(0, maxLength - 3) + "...";
}
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"