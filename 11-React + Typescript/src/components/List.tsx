/*

EXTREMELY IMPORTANT TO RETURN SOMETHING FROM THE MAP METHOD

This is not working because I am using {} instead of ()
--> {} doesn't return anything, which means I should explicitly use 'return'

--> () returns a JSX code !!!


{items.map((item, i) => {
    <li key={i}>
        {render(item)}
    </li>
})}

*/


import { ReactNode } from 'react'

interface ListProps<T> {
    items: T[],
    render: (item: T) => ReactNode
}

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
        {items.map((item, i) => (
            <li key={i}>
                {render(item)}
            </li>
        ))}
    </ul>
  )
}

export default List



// NOT WORKING !!! PAY ATTENTION !! 

// import { ReactNode } from 'react';

// interface ListProps<T> {
//   items: T[];
//   render: (item: T) => ReactNode;
// }

// const List = <T,>({ items, render }: ListProps<T>) => {
//   return (
//     <ul>
//       {items.map((item, i) => {
//         <li key={i}>
//           {render(item)}
//         </li>
//       })}
//     </ul>
//   );
// };

// export default List;