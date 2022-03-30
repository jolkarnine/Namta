var prothom = document.querySelector(".ad")

var ditiyo = document.querySelector(".btn")

// console.log(prothom)
// console.log(ditiyo)

ditiyo.addEventListener("click",function(){
    // console.log(prothom.value)

    for (i=1;i<=10;i++){
        document.write(prothom.value + " x " + i + " = " + prothom.value*i + "<br>")
        document.body.style.background='#000'
        document.body.style.color='#fff'
        document.body.style.textAlign="center"
        document.body.style.marginTop='250px'
        document.body.style.fontFamily='Oswald, sans-serif'
        document.body.style.fontSize='20px'

    }

})