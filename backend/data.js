import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'YuV',
      email: 'yashvashistha05@gmail.com',
      password: bcrypt.hashSync('12345'),
      isadmin: true,
    },
    {
      name: 'Yash',
      email: 'yv8913@srmist.edu.in',
      password: bcrypt.hashSync('123456'),
      isadmin: false,
    },
  ],
  products: [
    {
      // id: '1',
      name: 'Roadster Casual Shirt',
      price: 501,
      stock: 3,
      description: 'Men Maroon & Navy Blue Checked Sustainable Casual Shirt',
      rating: 3,
      numReviews: 16,
      image: '/images/product-img/product-img-1.png',
    },
    {
      // id: '2',
      name: 'DENNISLINGO PREMIUM ATTIRE',
      price: 775,
      stock: 8,
      description: 'Striped Slim Fit Shirt',
      rating: 2.5,
      numReviews: 10,
      image: '/images/product-img/product-img-3.png',
    },
    {
      // id: '3',
      name: 'Roadster Checked Casual Shirt',
      price: 670,
      stock: 5,
      description: 'Roadster Men Black & Grey Checked Casual Shirt',
      rating: 4.5,
      numReviews: 3,
      image: '/images/product-img/product-img-2.png',
    },
    {
      // id: '3',
      name: 'DENNISLINGO PREMIUM SHIRT',
      price: 560,
      stock: 5,
      description: 'Striped Slim Fit Shirt',
      rating: 4.5,
      numReviews: 3,
      image: '/images/product-img/product-img-4.png',
    },
  ],
};
export default data;
