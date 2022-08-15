class GuessingGame {
    
    constructor() {}
    tempMin;
    tempMax;
    tempNum;
    
    setRange(min, max) {
        this.tempMin = min;
        this.tempMax = max;
    }
  
    guess() {
        if (this.tempMin === this.tempMax) {return this.tempMax;}
      this.tempNum = Math.ceil((this.tempMax - this.tempMin) / 2 + this.tempMin);
        return this.tempNum;
    }
  
    lower() {
      this.tempMax = this.tempNum
    }
  
    greater() {
      this.tempMin = this.tempNum;
    }
  }

module.exports = GuessingGame;
