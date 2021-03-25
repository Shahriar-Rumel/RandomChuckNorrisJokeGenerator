document.querySelector('#button').addEventListener('click',function(e){
    document.querySelector('.jokes').style.display = 'none';
  
    document.querySelector('#loading').style.display = 'block';
    
    setTimeout(loadjokes, 1000);
});


function loadjokes(e){
  
    const number = document.querySelector('#number-of-jokes').value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function (){
        if(this.status ===200){
            const res = JSON.parse(this.responseText);
            console.log(res);
            let output ='';
            if(res.type==='success'){
           res.value.forEach(function(joke){
                    output +=`<li>${joke.joke}</li>`;
               });
            }
            else{
                output +='<li>Jokes not Available</li>';
            }
            document.querySelector('.jokes-list').innerHTML= output;
            document.querySelector('.jokes').style.display = 'block';
  
            document.querySelector('#loading').style.display = 'none';
        }
              
    }


  xhr.send();
  e.preventDefault();
}