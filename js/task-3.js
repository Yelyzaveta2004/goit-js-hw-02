function checkForSpam(message) {
  // Отримую заборонені слова в нижньому регістрі
  const bannedWords = ["spam", "sale"];

  // Перевіряю, чи міститься будь-яке заборонене слово в рядку
  for (const bannedWord of bannedWords) {
    if (message.toLowerCase().includes(bannedWord)) {
      return true;
    }
  }

  // Якщо жодного забороненого слова не знайдено, повертаю false
  return false;
}
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true