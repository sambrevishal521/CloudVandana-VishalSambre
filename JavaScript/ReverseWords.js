function reverseWords(sentence) {
    
    const words = sentence.split(' ');
    let reversedSentence = '';
  
    
    for (let i = 0; i < words.length; i++) {
      if (i > 0) {
        reversedSentence += ' '; 
      }
      reversedSentence += words[i].split('').reverse().join('');
    }
  
    return reversedSentence;
  }
  
  const inputSentence = prompt("Enter a sentence:");
  const reversed = reverseWords(inputSentence);
  console.log(`Reversed Sentence: ${reversed}`);
  