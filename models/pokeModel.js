const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

//SCHEMA
const pokeSchema = new mongoose.Schema({
    poke_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sprites: {
        type: String,
        required: true
    },
    weight:{
        type: String,
        required: true
    },
});

adSchema.plugin(AutoIncrement, { inc_field: 'poke_id' });

// Crear el esquema
const newPokemon = mongoose.Schema(pokeSchema);
// Crear el Modelo de mongoose
const PokemonsDB = mongoose.model('Pokemon', newPokemon);
module.exports = PokemonsDB;
