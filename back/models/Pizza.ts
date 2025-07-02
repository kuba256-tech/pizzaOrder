import mongoose from 'mongoose';
import express from 'express';

const pizzaSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
  information: String,
});

const Pizza = mongoose.model('Pizza', pizzaSchema);
export default Pizza;
