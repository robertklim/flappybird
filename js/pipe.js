function Pipe() {

    let spacing = random(64, height / 4);
    let centery = random(spacing, height - spacing);

    this.top = centery - spacing / 2;
    this.bottom = height - (centery + spacing / 2);
    this.tx = width;
    this.ty = 0;
    this.bx = width;
    this.by = height - this.bottom;
    this.w = 40;
    this.speed = 3;
    this.highlight = false;

    // this.hits = function(bird) {
    //     if (bird.y - bird.fatness / 2 < this.top || bird.y + bird.fatness / 2 > height - this.bottom) {
    //         if (bird.x + bird.fatness / 2 > this.x && bird.x - bird.fatness / 2 < this.x + this.w) {
    //             this.highlight = true;
    //             return true;
    //         }
    //     }
    //     this.highlight = false;
    //     return false;
    // }

    this.hits = function(bird) {
        let distXTop = Math.abs(bird.x - this.tx - this.w/2);
        let distYTop = Math.abs(bird.y - this.ty - this.top/2);
        let distXBottom = Math.abs(bird.x - this.bx - this.w/2);
        let distYBottom = Math.abs(bird.y - this.by - this.bottom/2);

        if (distXTop > (this.w/2 + bird.fatness/2) && distXBottom > (this.w/2 + bird.fatness/2)) {
            this.highlight = false;
            return false;
        }

        if (distYTop > (this.top/2 + bird.fatness/2) && distYBottom > (this.bottom/2 + bird.fatness/2)) {
            this.highlight = false;
            return false;
        }

        if (distXTop <= (this.w/2) || distXBottom <= (this.w/2)) {
            this.highlight = true;
            return true;
        }

        if (distYTop <= (this.top/2) || distYBottom <= (this.bottom/2)) {
            this.highlight = true;
            return true;
        }

        let dtx=distXTop-this.w/2;
        let dty=distYTop-this.top/2;
        let dbx=distXBottom-this.w/2;
        let dby=distYBottom-this.bottom/2;
        if (dtx*dtx+dty*dty<=((bird.fatness/2)*(bird.fatness/2)) || dbx*dbx+dby*dby<=((bird.fatness/2)*(bird.fatness/2))) {
            this.highlight = true;
            return true;
        } else {
            return false;
        }

    }

    this.show = function() {
        noStroke();
        fill(255);
        if (this.highlight) {
            fill(255, 0 ,0);
        }
        rect(this.tx, this.ty, this.w, this.top);
        rect(this.bx, this.by, this.w, this.bottom);
    }
    
    this.update = function() {
        this.tx -= this.speed;
        this.bx -= this.speed;
    }

    this.offscreen = function() {
        if (this.tx < -this.w) {
            return true;
        } else {
            return false;
        }
    }

}

