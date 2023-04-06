'use strict';

const express = require('express');
const router = express.Router();
const { Clothes } = require('./models/clothes');

router.get('/', readClothes);
router.post('/', createClothesItem);
router.put('/:id', updateClothesItem);
router.delete('/:id', deleteClothingItem);

async function readClothes(req, res, next) {
    let data = await Clothes.findAll();
    res.json(data);
}

async function createClothesItem(req, res, next){
    const clothesItem = await Clothes.create(req.body);
    res.json(clothesItem);
}

async function updateClothesItem(req, res, next) {
    let id = req.params.id;
    const clothingItem = {
        name: req.body.name,
        sleeves: req.body.sleeves,
        size: req.body.size,
        color: req.body.color,
        id: id
    }
    let idx = id - 1;
    data[idx] = clothesItem;
    res.send(clothingItem);
}

async function deleteClothingItem(req, res, next) {
    let id = req.params.id;
    await Clothes.findByIdAndDelete(id);
    res.send('Clothing Item Deleted');
}

module.exports = clothes;
