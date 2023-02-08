// let input = "Abcde!";
// let userKey = 5;
// userKey = userKey % 26;
const btn = document.querySelector('#cipherBtn')
btn.addEventListener("click", () => {

let input = document.getElementById("userMessage").value;
let userKey = document.getElementById("userKey").value;
userKey = userKey % 26;

let encryptedInput = "";
let decryptedInput = "";

document.getElementById("output").value = encryptedInput;

function encrypt(input, userKey) { 
for (let i = 0; i < input.length; i++) {
    let character = input.charAt(i);
    let characterCode = input.charCodeAt(i);

    if(character.match(/[a-z]/i)) {
        let shiftCharacter = characterCode + userKey;

        if(character === character.toLowerCase()) {
            if(shiftCharacter < 97) {
                shiftCharacter += 26;
            }
        } else if (shiftCharacter > 122) {
                shiftCharacter -= 26;
            }
        encryptedInput += String.fromCharCode(shiftCharacter);
    } else {
        encryptedInput += character;
    }
    }

return encryptedInput;

}

function decrypt(input, userKey) { 

for (let i = 0; i < input.length; i++) {
    let character = input.charAt(i);
    let characterCode = input.charCodeAt(i);

    if(character.match(/[a-z]/i)) {
        let shiftCharacter = characterCode - userKey;

        decryptedInput += String.fromCharCode(shiftCharacter);
    } else {
        decryptedInput += character;
    }
}

    return decryptedInput;
}

if (document.getElementById("encode").checked && input !== "") {
    document.getElementById("output").value = encrypt(input, userKey);
} else {
    document.getElementById("output").value = decrypt(input, userKey);
    console.log("Decrypted value is: " + decryptedInput)
}
});