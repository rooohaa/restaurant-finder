import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSortProp } from 'store/reducers/restaurantsReducer';

import { SelectWrap } from './style';

interface IItem {
   id: number;
   value: string;
}

interface IProps {
   data: IItem[];
}

const Select: React.FC<IProps> = ({ data }) => {
   const [listActive, setListActive] = useState<boolean>(false);
   const [selectedItem, setSelectedItem] = useState<string>('');
   const dispatch = useDispatch();

   const handleSelect = (value) => {
      setSelectedItem(value);
      setListActive(false);

      dispatch(setSortProp(value));
   };

   return (
      <SelectWrap>
         <div
            className="active-elem"
            onClick={() => setListActive(!listActive)}
         >
            <span>{selectedItem ? selectedItem : 'Sort by'}</span>
            <img
               className={listActive && 'open'}
               src="/icons/arrow-down.svg"
               alt="Arrow down icon"
            />
         </div>

         <ul className={listActive ? 'list-active' : ''}>
            {data.map(({ id, value }) => (
               <li
                  key={id}
                  className={selectedItem === value && 'item-active'}
                  onClick={() => handleSelect(value)}
               >
                  {value}
               </li>
            ))}
         </ul>
      </SelectWrap>
   );
};

export { Select };
