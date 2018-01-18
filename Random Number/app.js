/**
 *  - Player must guess a number between a min and max
 *  - Player gets a certain amount of guesses
 *  - Notify player of guessses remaining
 *  - Notify the player of the correct answer if loose
 *  - Let player choose to play again 
 */

let min = 1,
    max = 10,
    winingNum = 5;
    guessesLeft = 3;

const game = document.getElementById('game'),
      minNumber = document.querySelector('.min-value'),
      maxNumber = document.querySelector('.max-value'),
      guessBtn = document.getElementById('guess-btn'),
      guessInput = document.getElementById('guess-input'),
      message = document.querySelector('.message');

      minNumber.textContent = min;
      maxNumber.textContent = max;

      guessBtn.addEventListener('click', guessNum);

      function guessNum(){
            const inVal = parseInt(guessInput.value);
            
            if(inVal < min || inVal > max || isNaN(inVal)){
                notification(`Please enter a valid number between ${min} and ${max}`, 'red');
            }

            if(inVal === winingNum){
                gameOver(true,`yup won ${winingNum} is correct`);
            }else{
                guessesLeft -= 1;

                if(guessesLeft === 0){
                    gameOver(false, `Opps Lost, Winning Number is ${winingNum}`)
                }else{
                    guessInput.value = '';
                    guessInput.style.border = '1px solid red';
                    notification(`${inVal} is not correct, ${guessesLeft} guess left`, 'red');
                }

            }
      }

      
      function gameOver(won,msg){
        let color;
        won === true ? color = 'green' : color = 'red'; 
       guessInput.disabled = true;
       message.style.color = color;
       guessInput.style.borderColor = color;
       notification(msg);
     }

      function notification(msg,color){
           message.textContent = msg;
           message.style.color = color;
      }


