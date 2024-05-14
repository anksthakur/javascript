// sare box ko swelect krne ke ley multiple box hai to to inke class se select krenge
let box = document.querySelectorAll(".box");
// reset button ki id ko select kiya
let reset = document.querySelector("#reset");
//jis player ki turn hai value bydefault true hai to X aayega false hai to O aayega 
let turnX = true;

let msg = document.querySelector("#msg");
let message = document.querySelector('.message')

// winning

const winner = [
    [0,1,2],
    [3,4,8],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// div ke click pe value get krne ke ley
//box.forEach-sare box ko select krne ke ley


    box.forEach((box)=>{
        box.addEventListener("click",()=>{
            //console.log(" Div was clicked ");
            if(turnX){
                //click krne x print ho
                box.innerText = "X";
                //console.log(box.innerText);
                // click hone ke baad false ho jaye
                turnX = false;
                
            }else{
                // next time click krne pe O print ho
                box.innerText = "O";
                //console.log(box.innerText);
                // fir value dobara true ho jaye
                // bydefault true X hai
                turnX = true;  
            }
            //box.disabled = true;
// fun ko call kiya ki value put hone ke baad check kre winner
            checkWinner();
        })
    });

    const showWinner=(winner)=>{
        msg.innerText = `Congratulations ${winner} , You are the winner`;
        // message ki classList se remove kar denge class hide ko
        message.classList.remove("hide");
    }

    const checkWinner = () => {
        for (let pattern of winner){
            //console.log(pattern);
            // box wala arrary (indivudal index nikala) 0 1 2
            //console.log(pattern[0],pattern[1],pattern[2])
            // element check krne ke ley konsi position pe hai // 0<div 1<div 2<div
            //console.log(box[pattern[0]],box[pattern[1]],box[pattern[2]])
            // value jo div ke andar hai , position 1 pe kya hai eg X ya O hai
            //console.log(box[pattern[0]].innerText,box[pattern[1]].innerText,box[pattern[2]].innerText)

        let pos1 = box[pattern[0]].innerText; 
        let pos2 = box[pattern[1]].innerText; 
        let pos3 = box[pattern[2]].innerText; 

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                //console.log(`Winner is , ${pos1}`);
                showWinner(pos1);
            }
        }
        }  
    }    

    // reset sare class box ko
    reset.addEventListener("click",()=>{
        box.forEach((box)=>{
            box.innerText = "" ;
        })
        message.classList.add("hide");
    })

