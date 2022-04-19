function md5Encrypt(){

    let str = document.getElementById("md5Text").value;
    if(str == ""){
        alert("Please Enter the text and key")
    }
    else{

        document.getElementById("md5Text").value = ""

        let strHash = md5(str);
        document.getElementById("md5Output").innerHTML =   `
                                                                <div class="alert alert-success alert-dismissible fade show" role="alert">
                                                                    <h6 class="algo-title">Result: The Hashed Value for ${str} is <strong>${strHash}</strong></h6>
                                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                            `
    }
}