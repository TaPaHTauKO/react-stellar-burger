// import {LiveOrder,
//     LiveOrderActionType,
//     LiveOrderActions,
//     Insert as LiveOrderInsertAction,
//     Delete as LiveOrderDeleteAction,
//     Update as LiveOrderUpdateAction,
//     Move as LiveOrderMoveAction,
//     IOrders
// } from '../types';


// // const insertData = (order: LiveOrder, action: LiveOrderInsertAction): LiveOrder => {

// //     return [...order, ...action.data.orders

// //         // ...order.splice(0,0, action.data.orders),
        
        
// //         // ...action.data.rows,
// //         // ...order.slice(action.data.pos)
// //     ]
// // }

// // const deleteData = (order: LiveOrder, action: LiveOrderDeleteAction): LiveOrder => {
// //     return order.filter(({id}) => !action.data.includes(id));
// // }

// // const updateData = (order: LiveOrder, action: LiveOrderUpdateAction): LiveOrder => {
// //     return order.map(row => {
// //         const index = action.data.findIndex((updatedRow) => updatedRow.id === row.id);
// //         if (index !== -1) {
// //             return action.data[index];
// //         }
// //         return row;
// //     });
// // }

// // const moveData = (prevOrder: LiveOrder, action: LiveOrderMoveAction): LiveOrder => {
// //     const order = [...prevOrder];
// //     action.data.forEach((move) => {
// //         order.splice(move.to, 0, order.splice(move.from, 1)[0]);
// //     });
// //     return order;
// // }

// export const liveOrderUpdate = (prevOrder: LiveOrder, actions: any): LiveOrder => {
    
//     let order = actions;

    
//     // actions.forEach((action) => {
//     //     switch (action.type) {
//     //         case LiveOrderActionType.DATA:
//     //             order = action.data;               
//     //             break;
//     //         case LiveOrderActionType.INSERT:
//     //             order = insertData(order, action);
//     //             break;
//     //         case LiveOrderActionType.DELETE:
//     //             order = deleteData(order, action);
//     //             break;
//     //         case LiveOrderActionType.UPDATE:
//     //             order = updateData(order, action);
//     //             break;
//     //         case LiveOrderActionType.MOVE:
//     //             order = moveData(order, action);
//     //             break;
//     //     }
//     // });

//     return order;
// }