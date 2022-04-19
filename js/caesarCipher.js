function caesarEncrypt(){
    
    let str = document.getElementById("caesarText").value;
    let key = document.getElementById("caesarKey").value;

    if(str == "" || key == ""){
        alert("Please Enter the text and key")
    }
    else{
        document.getElementById("caesarText").value = ""
        document.getElementById("caesarKey").value = ""

        let encryptText = encrypt(str, parseInt(key))
        document.getElementById("caesarOutput").innerHTML =     `
                                                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                                        <h6 class="algo-title">Result: The Encrypted Text for ${str} is <strong>${encryptText}</strong></h6>
                                                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                `
    }
}

function caesarDecrypt(){
    
    let str = document.getElementById("caesarText").value;
    let key = document.getElementById("caesarKey").value;

    if(str == "" || key == ""){
        alert("Please Enter the text and key")
    }
    else{

        document.getElementById("caesarText").value = ""
        document.getElementById("caesarKey").value = ""

        let decryptText = decrypt(str, key)
        document.getElementById("caesarOutput").innerHTML =     `
                                                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                                        <h6 class="algo-title">Result: The Decrypted Text for ${str} is <strong>${decryptText}</strong></h6>
                                                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                `
    }
}

// Helper Function to check whether a char is LowerCase or UpperCase
function isUpperCase(str) {
    return str === str.toUpperCase();
}

// Encrypt Function
let encrypt = (str, key) => {
  
    let encryptText = "";
    for(let i=0; i <str.length; i++){
        
        // Case-1: If the Letter is UpperCase
        if(isUpperCase(str[i])){
            encryptText += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
        }
        
        // Case-2: If the Letter is LowerCase
        else{
            encryptText += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
        }
    }
    
    return encryptText;
}

// Decrypt Function
let decrypt = (str, key) => {

    let decryptText = "";

    for(let i=0; i <str.length; i++){
        
        // Case-1: If the Letter is UpperCase
        if(isUpperCase(str[i])){
            decryptText += String.fromCharCode((str.charCodeAt(i) - key - 65) % 26 + 65);
        }
        
        // Case-2: If the Letter is LowerCase
        else{
            decryptText += String.fromCharCode((str.charCodeAt(i) - key - 97) % 26 + 97);
        }
    }
    
    return decryptText;

}