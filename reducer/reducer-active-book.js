/* eslint-disable*/

// export default function (state = null, action) {
//     switch (action.type) {
//       case 'BOOK_SELECTED':
//         return action.payload;
//     }

//     return state;
//   }

function ActiveBook(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}

export default ActiveBook;
