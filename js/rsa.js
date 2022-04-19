function rsaEncrypt(){
    
    let p = parseInt(document.getElementById("rsaP").value);
    let q = parseInt(document.getElementById("rsaQ").value);
    let m = parseInt(document.getElementById("rsaM").value);

    if(isNaN(p) || isNaN(q) || isNaN(m)){
        alert("Please Enter the value of p, q and m")
    }
    else{
        document.getElementById("rsaP").value = ""
        document.getElementById("rsaQ").value = ""
        document.getElementById("rsaM").value = ""

        let encryptText = RSAencrypt(p, q, m);
        document.getElementById("rsaOutput").innerHTML =    `
                                                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                                    <h6 class="algo-title">Result: The Cipher Text is <strong>${encryptText}</strong></h6>
                                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                            `
    }
}

function rsaDecrypt(){
    
    let p = parseInt(document.getElementById("rsaP").value);
    let q = parseInt(document.getElementById("rsaQ").value);
    let m = parseInt(document.getElementById("rsaM").value);

    if(isNaN(p) || isNaN(q) || isNaN(m)){
        alert("Please Enter the value of p, q and m")
    }
    else{
        document.getElementById("rsaP").value = ""
        document.getElementById("rsaQ").value = ""
        document.getElementById("rsaM").value = ""

        let decryptText = RSAdecrypt(p, q, m)
        document.getElementById("rsaOutput").innerHTML =    `
                                                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                                    <h6 class="algo-title">Result: The Plain Text is <strong>${decryptText}</strong></h6>
                                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                            `
    }
}

let RSAencrypt = (p, q, m) => {

    let n = p*q;
    let phiN = (p-1) * (q-1)

    let e;
    for(let i=2; i<phiN; i++){
        if(gcd(phiN, i) == 1){
            e = i;
            break;
        }
    }

    let encr = (Math.pow(m, e) % n)
    return encr;
}

let RSAdecrypt = (p, q, m) => {

    let n = p*q;
    let phiN = (p-1) * (q-1)

    let e;
    for(let i=2; i<phiN; i++){
        if(gcd(phiN, i) == 1){
            e = i;
            break;
        }
    }

    let d, qu, r1, r2, r, t1, t2, t;
    r1 = phiN, r2 = e, t1 = 0, t2 = 1;

    while(true){

        qu = Math.floor(r1 / r2)
        r = (r1 % r2)
        t = (t1 - (qu * t2))
        console.log(qu, r1, r2, r, t1, t2, t)

        r1 = r2;
        r2 = r;
        t1 = t2;
        t2 = t;

        if(r == 0)  break;
    }

    if(t1 < 0)  d = phiN + t1;
    else    d = t1;

    let c = (Math.pow(m, e) % n);
    console.log(c, e, d, n)

    let decr = powerMod(c, d, n)
    console.log(decr)

    return decr;
}

function powerMod(base, exponent, modulus) {
    if (modulus === 1) return 0;
    var result = 1;
    base = base % modulus;
    while (exponent > 0) {
        if (exponent % 2 === 1)  //odd number
            result = (result * base) % modulus;
        exponent = exponent >> 1; //divide by 2
        base = (base * base) % modulus;
    }
    return result;
}

let gcd = (a, b) => {
    if(a == 0)  return b;
    if(b == 0)  return a;
    if(a == b)  return a;
    if(a > b)   return gcd(a-b, a);
    return gcd(a, b-a);
}