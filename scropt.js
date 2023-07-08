const getcolor = () => {

    const randomeNumber= Math.floor(Math.random() *1677215);
   // console.log(randomeNumber);
   const randomcode = "#" + randomeNumber.toString(16);
   //console.log(randomeNumber , randomcode );
   document.body.style.backgroundColor =  randomcode;
   document.getElementById("color-code").innerText = randomcode;
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

getcolor();