function Snake() {
  this.x = 0;
  this.y = 0;
  
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.snakePoint = [];

  this.eats = function(food) {
    let distance = dist(this.x, this.y, food.x, food.y);
    if (distance < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.direction = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.gameOver = function() {
    for (var i = 0; i < this.snakePoint.length; i++) {
      let pos = this.snakePoint[i];
      let distance = dist(this.x, this.y, pos.x, pos.y);
      if (distance < 1) {
        console.log('starting over');
        this.total = 0;
        this.snakePoint = [];
      }
    }
  }

  this.update = function() {
    for (var i = 0; i < this.snakePoint.length - 1; i++) {
      this.snakePoint[i] = this.snakePoint[i + 1];
    }
    if (this.total >= 1) {
      this.snakePoint[this.total - 1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.snakePoint.length; i++) {
      rect(this.snakePoint[i].x, this.snakePoint[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);

  } 
}