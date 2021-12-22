const pokemodel = require('../models/pokeModel');

const pokedb = {
// Muestra todos los anuncios de la BBDD de MongoDB
getAllPokemons: catchAsync(async (req, res) => {
    const allAds = await pokemodel.find();
    // res.status(200).render('dashboard', { allAds });
}),

// Crea un anuncio en la BBDD de MongoDB
createPokemon: catchAsync(async (req, res) => {
    const newPokemon = await pokemodel.create({
    // Debemos obtener los datos del React 
    });
    // res.status(200).redirect('/newpokemon');
}),
};
module.exports = pokedb;
