let string=""
let buttons=document.querySelectorAll('.btn')
document.onkeydown=function(e){
  f=e.keyCode
  console.log("key",f)}
Array.from(buttons).forEach(button => {
    button.addEventListener('click',(e)=>{
          if(e.target.innerHTML == "=" ){
            string = eval(string);
            document.querySelector('input').value = string;
            
          }
          else if(e.target.innerHTML == 'Clear All'){
            string = ""
            document.querySelector('input').value = string;
          }
          else{ 
          //console.log(e.target)
          string = string + e.target.innerHTML;
          document.querySelector('input').value = string;
          
            }
          
        })
      })
str=document.querySelector('input').value
console.log(eval(str))


