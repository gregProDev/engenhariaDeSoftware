var app = new Vue({
  el:'#app',
    data:{
      password:'',
      passwordLength: 16,
      chars: ""
    },      
    methods:{
      novoPassword: function(){
        
        var password = "";

        for (var i = 0; i < this.passwordLength; i++) {
          var randomNumber = Math.floor(Math.random() * this.chars.length);
          password += this.chars.substring(randomNumber, randomNumber + 1);
        }
        this.password = password;
        
      }, 
        copiar: async function(){
          try {
            await navigator.clipboard.writeText(this.password)
              .then(function() {
                console.log('Async: Copying to clipboard was successful!');
              }, function(err) {
                console.error('Async: Could not copy text: ', err);
              });    
          }catch($e) {
            
          }
        }                

    }
})

    
 
 