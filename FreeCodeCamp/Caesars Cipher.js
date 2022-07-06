//Caesars Cipher

function rot13(str) {
  str = str.toUpperCase();
  return str.replace(/[A-Z]/g, rrot13);

  function rrot13(correspondance) {
    const charCode = correspondance.charCodeAt();
    return String.fromCharCode(
      charCode + 13 <= 90 ? charCode + 13 : ((charCode + 13) % 90) + 64
    );
  }
}

console.log(rot13("SERR PBQR PNZC"));
