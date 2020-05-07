var Letter = function(lett){
  this.lett = lett,
  this.guessed = false,
  this.letterReveal = function(){
    if (this.guessed){
      console.log(this.lett);      
    }
    else {
        console.log("_");
    };
  },
  this.charCheck = function(){
    if (input === this.letter){
      this.guessed = true;    
    }
    // else {
      // this.guessed = false; 
    // };
  };
};

module.exports = Letter;
