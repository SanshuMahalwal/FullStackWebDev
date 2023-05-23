const buttons = document.querySelectorAll('button');
const inp = document.querySelector('.input');

for (let btn of buttons) {
    btn.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target);
        const x = e.target.innerText;
        
        if(x === "C") {
            inp.value = "";
        }

        else if(x === "x") {
            inp.value += '*';
        }

        else if(x === "=") {

            try{
                inp.value = eval(inp.value);
            }
            catch(e) {
                inp.value = "INVALID OPERATION!!"
            }

            
        }

        else {
            inp.value += x;
        }
        

    })
}