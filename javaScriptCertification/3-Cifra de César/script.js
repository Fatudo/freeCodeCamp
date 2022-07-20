function rot13(str) {
    let final = '';
    for (let i = 0; i < str.length; i++) {
      let ascii = str[i].charCodeAt();
      if (ascii >= 65 && ascii < 78) {
        final += String.fromCharCode(ascii + 13);
      } else if (ascii >= 78 && ascii <= 90) {
        final += String.fromCharCode(ascii - 13);
      } else {
        final += str[i];
      }

    }
    return final;
}
  
rot13("SERR PBQR PNZC");