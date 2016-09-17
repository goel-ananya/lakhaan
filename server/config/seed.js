/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Restaurant from '../api/restaurant/restaurant.model';
import User from '../api/user/user.model';

Restaurant.find({}).removeAsync()
  .then(() => {
    Restaurant.create({
      name: 'Saleem',
      speciality: ['Non-Veg', 'Veg'],
      menu: {
          'Main Course Non Veg': [{
            name: 'Chicken Bhasha',
            price: 75
          }, {
            name: 'Paneer Bhasha',
            price: 65
          }, {
            name: 'Egg Roll',
            price: 50
          }],
          'Main Course Veg': [{
            name: 'Chicken Bhasha',
            price: 75
          }, {
            name: 'Paneer Bhasha',
            price: 65
          }, {
            name: 'Egg Roll',
            price: 50
          }]
      },
      address: 'Sector 41A, Chandigarh'
    },{
      name: 'Apna Dhaba',
      speciality: ['Non-Veg', 'Veg'],
      menu: {
          'Main Course Non Veg': [{
            name: 'Chicken Bhasha',
            price: 75
          }, {
            name: 'Paneer Bhasha',
            price: 65
          }, {
            name: 'Egg Roll',
            price: 50
          }],
          'Main Course Veg': [{
            name: 'Chicken Bhasha',
            price: 75
          }, {
            name: 'Paneer Bhasha',
            price: 65
          }, {
            name: 'Egg Roll',
            price: 50
          }]
        },
        address: 'Sector 41A, Chandigarh'
      },{
      name: 'Flo caffee',
      speciality: ['Non-Veg', 'Veg'],
      menu: {
          'Main Course Non Veg': [{
            name: 'Chicken Bhasha',
            price: 75
          }, {
            name: 'Paneer Bhasha',
            price: 65
          }, {
            name: 'Egg Roll',
            price: 50
          }],
          'Main Course Veg': [{
            name: 'Chicken Bhasha',
            price: 75
          }, {
            name: 'Paneer Bhasha',
            price: 65
          }, {
            name: 'Egg Roll',
            price: 50
          }]
        },
        address: 'Sector 41A, Chandigarh'
      },{
      name: 'Flo caffee',
      speciality: ['Non-Veg', 'Veg'],
      menu: {
          'Main Course Non Veg': [{
            name: 'Chicken Bhasha',
            price: 75
          }, {
            name: 'Paneer Bhasha',
            price: 65
          }, {
            name: 'Egg Roll',
            price: 50
          }],
          'Main Course Veg': [{
            name: 'Chicken Bhasha',
            price: 75
          }, {
            name: 'Paneer Bhasha',
            price: 65
          }, {
            name: 'Egg Roll',
            price: 50
          }]
      },
      address: 'Sector 41A, Chandigarh'
    })
    .then(() => {
      console.log('finished populating restaurants');
    })
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });
