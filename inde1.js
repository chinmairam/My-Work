var time = 0
   var timer = setInterval(function(){
       time+=2;
       console.log(time+' seconds have passed');
       if(tie >5 ){
       clearinterval(timer);
       }
   },2000)
    