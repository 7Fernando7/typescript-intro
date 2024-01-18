// Desestructuración de Objetos

interface AudioPlayer {
    audioVolume: number;
    songduration: number;
    song: string;
    details: Details;
}


interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songduration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const { song:anotherSong, songduration:duration, details} = audioPlayer;
const { author } = details;

console.log('Song: ', anotherSong + ', ' + 'Duration: ', duration);
console.log('Author: ', author);


// Desestructuración de Arreglos

const [ personaje1, , trunks]: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3: ', trunks);


export {};