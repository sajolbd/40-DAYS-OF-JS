function findMostFrequentWord() {
  const text = document.getElementById("paragraph").value.trim();

  if (!text) {
    document.getElementById("result").textContent = "Please enter a paragraph first!";
    return;
  }

  
  const words = text.toLowerCase().match(/\b[a-z]+\b/g);
  console.log(words);
  if (!words) {
    document.getElementById("result").textContent = "No valid words found.";
    return;
  }

  const frequency = {};

  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  console.log(frequency);
  let maxWord = "";
  let maxCount = 0;

  for (const word in frequency) {
    if (frequency[word] > maxCount) {
      maxCount = frequency[word];
      maxWord = word;
    }
  }

  document.getElementById("result").innerHTML = `
    <span class="text-blue-600 font-semibold">"${maxWord}"</span> 
    appears <span class="text-green-600 font-bold">${maxCount}</span> times.
  `;
}
