import React from 'react';
import { ICard } from '../../../../common/interfaces/ICard';
import "./list.scss";
import { HiPlusSm} from 'react-icons/hi';


 function List(props: { title: string; cards: ICard[] }) {
  return (
    <>
      <h2 className='list-title'>{props.title}</h2>
        {props.cards.map((card) => (<p className='box-list'>{card.title}</p>))}
      <button className='button-add'> <HiPlusSm size="30px" />Добавить задачу</button>
    </>
  );
}

export default List;