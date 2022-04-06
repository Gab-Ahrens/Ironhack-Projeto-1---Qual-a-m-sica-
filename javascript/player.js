class Player {
    constructor() {
        this.music = [...music];
        this.points = 0;
    }

    shuffleMusicArray() {
        const shuffledArray = this.music.sort((a, b) => 0.5 - Math.random());
        return shuffledArray;
};

// for (let i = 0; i < positions.length; i++) {
//     const RNG = Math.floor(Math.random() * positions.length);

//     const memory = positions[i];

//     positions[i] = positions[RNG];

//     positions[RNG] = memory;
//   }

//   return positions;


// shuffleMusicArray() {
//     const shuffleArray = array => {
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             const temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
//         return shuffleArray;
// }

    // shuffledMusic() {
    //     return this.music;
    // }

    playSong(index) {
        return this.music[index].src;
    }




}

