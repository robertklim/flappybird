function Pipe() {

    let spacing = random(64, height / 4);
    let centery = random(spacing, height - spacing);

    this.top = centery - spacing / 2;
    this.bottom = height - (centery + spacing / 2);
    this.x = width;
    this.w = 32;
    this.speed = 2;
    this.highlight = false;

    this.hits = function(bird) {
        if (bird.y - bird.fatness / 2 < this.top || bird.y + bird.fatness / 2 > height - this.bottom) {
            if (bird.x + bird.fatness / 2 > this.x && bird.x - bird.fatness / 2 < this.x + this.w) {
                this.highlight = true;
                return true;
            }
        }
        this.highlight = false;
        return false;
    }

    this.show = function() {
        noStroke();
        fill(255);
        if (this.highlight) {
            fill(255, 0 ,0);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height - this.bottom, this.w, this.bottom);
    }
    
    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }

}

