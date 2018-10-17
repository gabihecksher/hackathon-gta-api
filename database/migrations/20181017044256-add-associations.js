'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // User belongsTo CourseUniversity

    return queryInterface.addColumn(
      'Users', // name of Source model
      'CourseUniversityId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'CourseUniversities', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      })
    .then(() => {
      // Comment belongsTo User
    
      return queryInterface.addColumn(
        'Comments', // name of Source model
        'UserId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        })
    })
    .then(() => {
      // Comment belongsTo Project
    
      return queryInterface.addColumn(
        'Comments', // name of Source model
        'ProjectId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Projects', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        });
    });
  },

  down: (queryInterface, Sequelize) => {
    // remove User belongsTo CourseUniversity
    return queryInterface.removeColumn(
      'Users', // name of Source model
      'CourseUniversityId' // key we want to remove
    )
    .then(() => {
      // remove Comment belongsTo User
      return queryInterface.removeColumn(
        'Comments', // name of Source model
        'UserId' // key we want to remove
        );
      })
    .then(() => {
      // remove Comment belongsTo Project
      return queryInterface.removeColumn(
        'Comments', // name of Source model
        'ProjectId' // key we want to remove
      );
    });
  }
};




// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     // Order belongsTo Customer
//     return queryInterface.addColumn(
//       'Orders', // name of Source model
//       'CustomerId', // name of the key we're adding 
//       {
//         type: Sequelize.UUID,
//         references: {
//           model: 'Customers', // name of Target model
//           key: 'id', // key in Target model that we're referencing
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'SET NULL',
//       }
//     )
//       .then(() => {
//         // Payment hasOne Order
//         return queryInterface.addColumn(
//           'Orders', // name of Target model
//           'PaymentId', // name of the key we're adding
//           {
//             type: Sequelize.UUID,
//             references: {
//               model: 'Payments', // name of Source model
//               key: 'id',
//             },
//             onUpdate: 'CASCADE',
//             onDelete: 'SET NULL',
//           }
//         );
//       })
//       .then(() => {
//         // Order hasMany Product
//         return queryInterface.addColumn(
//           'Products', // name of Target model
//           'OrderId', // name of the key we're adding
//           {
//             type: Sequelize.UUID,
//             references: {
//               model: 'Orders', // name of Source model
//               key: 'id',
//             },
//             onUpdate: 'CASCADE',
//             onDelete: 'SET NULL',
//           }
//         );
//       });
//   },

//   down: (queryInterface, Sequelize) => {
//     // remove Order belongsTo Customer
//     return queryInterface.removeColumn(
//       'Orders', // name of Source model
//       'CustomerId' // key we want to remove
//     )
//       .then(() => {
//         // remove Payment hasOne Order
//         return queryInterface.removeColumn(
//           'Orders', // name of the Target model
//           'PaymentId' // key we want to remove
//         );
//       })
//       .then(() => {
//         // remove Order hasMany Product
//         return queryInterface.removeColumn(
//           'Products', // name of the Target model
//           'OrderId' // key we want to remove
//         );
//       });
//   }
// };