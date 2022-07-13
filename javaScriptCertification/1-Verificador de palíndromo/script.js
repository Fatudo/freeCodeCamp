// Programa usado para verificar palindromos, ignorando caracteres nao alfanumericos.

function palindrome(str) {
    let reg = /[\W_]/g; // responsavel por ignorar os caracteres nao alfanumericos
    let cap = str.toLowerCase().replace(reg, "");
    let verificador = cap.split('')
        .reverse()
        .join('');
  
    if(verificador === cap) {
        return true;
    } else {
        return false;
    }
  }
  
palindrome("eye");
