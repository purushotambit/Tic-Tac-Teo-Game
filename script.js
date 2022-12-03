console.log("Hollo World! ");
let grids=document.querySelectorAll('.grid');
let array=Array.from(grids);
let turn='X';
let isgameover=false;
const checkWin=()=>{
    win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [2,4,6],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    win.forEach((e,i)=>{
        if(array[e[0]].innerText!==""&&(array[e[0]].innerText===array[e[1]].innerText)&&(array[e[1]].innerText===array[e[2]].innerText)){
            console.log(i);
          isgameover=true;
        }
       
    })
}
const changeTurn=()=>{
    return turn==='X'?'0':'X';
}
array.forEach((grid)=>{
    grid.addEventListener("click",(e)=>{
        let turn_con=document.getElementById('turn').textContent;
        console.log(turn_con);
        if(isgameover===true){
            document.getElementById('turn').textContent="If you want to Play again than press Reset buttun !";
        }
   if(e.target.innerText===''&&isgameover===false){
    e.target.innerText=turn;
   checkWin();
  
    if(isgameover){
        document.getElementById('turn').textContent=turn + "  is Won";
        // turn=changeTurn();
    }else{
        turn=changeTurn();
        document.getElementById('turn').textContent="Turn for  " + turn;
    }
   }           
    })
})
//If reset button press than empty all grid
reset.addEventListener("click",()=>{
    clear=[0,1,2,3,4,5,6,7,8];
    clear.forEach(e=>{
        array[e].innerText="";
    })
    isgameover=false;
    turn='X';
    document.getElementById('turn').textContent="Turn for  " + turn;
})

