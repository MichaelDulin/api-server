'use strict';

const express = require('express');
const router = express.Router();
const { Food } = require('./models/food');

router.get('/', readFood);
router.post('/', createFoodItem);
router.put('/:id', updateFoodItem);
router.delete('/:id', deleteFoodItem);

async function readFood(req, res, next) {
    let data = await Food.findAll();
    res.json(data);
}

async function createFoodItem(req, res, next){
    const foodItem = await Food.create(req.body);
    res.json(foodItem);
}

async function updateFoodItem(req, res, next) {
    let id = req.params.id;
    const foodItem = {
        name: req.body.name,
        savory: req.body.savory,
        originCountry: req.body.originCountry
    }
    let idx = id - 1;
    data[idx] = foodItem;
    res.send(foodItem);
}

async function deleteFoodItem(req, res, next) {
    let id = req.params.id;
    await Food.findByIdAndDelete(id);
    res.send('Food Item Deleted');
}

module.exports = router;