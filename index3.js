var events = require('events');
   var util = require('util');
   var person = function(name){
   this.name = name;
   };
   util.inherits(person,events.EventEmitter);
   var prasad = new person('prasad');
   var pspk = new person('pspk');
   var peple = [prasad,pspk];
   people.forEach(function(person){
   person.on('speak',function(msg) {
   console.log(person.name + 'said: '+ msg);
   });
   });
   prasad.emit('speak','hey fans');