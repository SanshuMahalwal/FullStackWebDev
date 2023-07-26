const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => console.log("Connection open!"))
    .catch((err)=>console.log(err));

const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    rating: Number,
    isWatched: Boolean
})

const Movie = mongoose.model('Movie', movieSchema);

// const znmd = new Movie({name: 'ZNMD', year: 2013, rating: 9, isWatched: true});

// znmd.save()
//     .then((m)=>console.log(m))
//     .catch((err)=>console.log(err));

// const dummyMovies = [
//     {
//         name: 'YJHD',
//         year: 2014,
//         rating: 8.8,
//         isWatched: true
//     },
//     {
//         name: 'Bhagam Bhag',
//         year: 2009,
//         rating: 7.5,
//         isWatched: false
//     },
//     {
//         name: 'Chak De India',
//         year: 2010,
//         rating: 8.0,
//         isWatched: true
//     },
//     {
//         name: 'APKGK',
//         year: 2008,
//         rating: 7,
//         isWatched: false
//     },{
//         name: 'Batman',
//         year: 2012,
//         rating: 8.2,
//         isWatched: true
//     }
// ]

// Movie.insertMany(dummyMovies);

// Movie.create({name: 'Adhura', year: 2023, rating: 9.5, isWatched: false})
//     .then((m)=>console.log(m))
//     .catch((err)=> console.log(err));
