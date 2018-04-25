function Bird() {
    this.x = 25;
    this.y = height / 2;
    this.fatness = 32;
    this.gravity = 0.7;
    this.lift = -14;
    this.velocity = 0;

    this.show = function() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.fatness, this.fatness);
    }

    this.up = function() {
        this.velocity += this.lift;
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}