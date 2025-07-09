import mongoose, { Collection } from 'mongoose';
import config from './config';
import User from './models/User';
import Pizza from './models/Pizza';

const run = async () => {
  await mongoose.connect(config.db);

  const db = mongoose.connection;

  try {
    await db.dropCollection('users');
    await db.dropCollection('pizzas');
  } catch (error) {
    console.log('Collection is not created');
  }

  const user1 = new User({
    name: 'John',
    email: 'user',
    password: '123',
    confirmPassword: '123',
    avatar: 'fixtures/icons/userPic.png',
  });

  user1.generateToken();
  await user1.save();

  await Pizza.create(
    {
      title: '4 Types',
      image: 'fixtures/pizzas/4types.jpg',
      price: 20,
      information:
        'Sink your teeth into our handcrafted pizza, made with a crispy golden crust, rich tomato sauce, and the finest melted cheeses. Topped with your favorite ingredients and baked to perfection — every bite is a slice of heaven.',
    },
    {
      title: 'Full Mushroom',
      image: 'fixtures/pizzas/FullMushroom.jpg',
      price: 25,
      information:
        'Sink your teeth into our handcrafted pizza, made with a crispy golden crust, rich tomato sauce, and the finest melted cheeses. Topped with your favorite ingredients and baked to perfection — every bite is a slice of heaven.',
    },
    {
      title: 'Full Pepperoni',
      image: 'fixtures/pizzas/FullPeperoni.jpg',
      price: 30,
      information:
        'Sink your teeth into our handcrafted pizza, made with a crispy golden crust, rich tomato sauce, and the finest melted cheeses. Topped with your favorite ingredients and baked to perfection — every bite is a slice of heaven.',
    },
    {
      title: 'Full Veggie',
      image: 'fixtures/pizzas//fullVegier.jpg',
      price: 15,
      information:
        'Sink your teeth into our handcrafted pizza, made with a crispy golden crust, rich tomato sauce, and the finest melted cheeses. Topped with your favorite ingredients and baked to perfection — every bite is a slice of heaven.',
    },
    {
      title: 'Pure Pepperoni',
      image: 'fixtures/pizzas/PurePepperoni.jpg',
      price: 45,
      information:
        'Sink your teeth into our handcrafted pizza, made with a crispy golden crust, rich tomato sauce, and the finest melted cheeses. Topped with your favorite ingredients and baked to perfection — every bite is a slice of heaven.',
    },
    {
      title: 'Vegie Pepperoni',
      image: 'fixtures/pizzas/vegiePepperoni.jpg',
      price: 20,
      information:
        'Sink your teeth into our handcrafted pizza, made with a crispy golden crust, rich tomato sauce, and the finest melted cheeses. Topped with your favorite ingredients and baked to perfection — every bite is a slice of heaven.',
    },
    {
      title: '5 Types',
      image: 'fixtures/pizzas/4types.jpg',
      price: 20,
      information:
        'Sink your teeth into our handcrafted pizza, made with a crispy golden crust, rich tomato sauce, and the finest melted cheeses. Topped with your favorite ingredients and baked to perfection — every bite is a slice of heaven.',
    },
    {
      title: 'Full Mushroom with Onion',
      image: 'fixtures/pizzas/FullMushroom.jpg',
      price: 45,
      information:
        'Sink your teeth into our handcrafted pizza, made with a crispy golden crust, rich tomato sauce, and the finest melted cheeses. Topped with your favorite ingredients and baked to perfection — every bite is a slice of heaven.',
    },
    {
      title: 'Full Pepperoni with sausages',
      image: 'fixtures/pizzas/FullPeperoni.jpg',
      price: 32,
      information:
        'Sink your teeth into our handcrafted pizza, made with a crispy golden crust, rich tomato sauce, and the finest melted cheeses. Topped with your favorite ingredients and baked to perfection — every bite is a slice of heaven.',
    },
    {
      title: 'Full Veggie with cabbage',
      image: 'fixtures/pizzas//fullVegier.jpg',
      price: 20,
      information:
        'Sink your teeth into our handcrafted pizza, made with a crispy golden crust, rich tomato sauce, and the finest melted cheeses. Topped with your favorite ingredients and baked to perfection — every bite is a slice of heaven.',
    },
    {
      title: 'Pure Pepperoni + with sauces',
      image: 'fixtures/pizzas/PurePepperoni.jpg',
      price: 50,
      information:
        'Sink your teeth into our handcrafted pizza, made with a crispy golden crust, rich tomato sauce, and the finest melted cheeses. Topped with your favorite ingredients and baked to perfection — every bite is a slice of heaven.',
    },
    {
      title: 'Vegie Pepperoni with sauces',
      image: 'fixtures/pizzas/vegiePepperoni.jpg',
      price: 26,
      information:
        'Sink your teeth into our handcrafted pizza, made with a crispy golden crust, rich tomato sauce, and the finest melted cheeses. Topped with your favorite ingredients and baked to perfection — every bite is a slice of heaven.',
    },
  );

  await db.close();
};

run().catch(console.error);
