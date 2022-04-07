class Player {
    constructor() {
        this.music = [...music];
        this.points = 0;
        this.rodada = 0;
    }

    // shuffleMusicArray() {
    //     const shuffledArray = this.music.sort((a, b) => 0.5 - Math.random());
    //     return shuffledArray;
    // }

    shuffleMusicArray() {
        for (var i = this.music.length-1 ; i>0 ;i--) {
            var j = Math.floor( Math.random() * (i + 1) );
            [this.music[i], this.music[j]] = [this.music[j], this.music[i]];
        }
        return this.music;
    }

    playerScore(){
        return this.points;
    }

    playSong() {
        return this.music[this.rodada].src;
    }

    correctTitle () {
        return this.music[this.rodada].title;
    }

    correctPerformer () {
        return this.music[this.rodada].performer;
    }

}

