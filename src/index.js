class GuessingGame {
  constructor() {
    this.low = 0;
    this.high = 0;
    this.current = 0;
  }

  setRange(min, max) {
    this.low = min;
    this.high = max;
  }

  guess() {
    this.current = Math.ceil((this.low + this.high) / 2);
    return this.current;
  }

  lower() {
    this.high = this.current;
  }

  greater() {
    this.low = this.current;
  }
}

module.exports = GuessingGame;
