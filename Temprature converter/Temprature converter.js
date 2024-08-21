
const subbtn = document.getElementById("subbtn")
const userinput = document.getElementById("UserinputField")
const CtoFinputField = document.getElementById("CtoFinputField")
const FtoCinputField = document.getElementById("FtoCinputField")
const ReusltField = document.getElementById("Result")

let temp



subbtn.addEventListener("click", (e) => {

    e.preventDefault()
    
    temp = userinput.value
    temp = Number(temp)

    
    if (!isNaN(temp)) {

        ReusltField.style.display="None"
        tempConvertion(temp)
         
       
    }

    else {

        window.alert("Please Enter a valid temprature")
        // form.reset();

    }

})


function tempConvertion(temp){


    if(CtoFinputField.checked){
        temp=temp*9/5+32
        ReusltField.textContent=temp.toFixed(1)+"°F"
        ReusltField.style.display="block"
        
    }
    else if(FtoCinputField.checked){
        temp=(temp-32)*(5/9)
         ReusltField.textContent=temp.toFixed(1)+"°C"
         ReusltField.style.display="block"


    }

}
