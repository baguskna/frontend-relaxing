import React, { useState } from "react";
import Counter from "../counter/counter";

import iconTrash from "../../../icons/icon-delete.svg";
import { useAppContext } from "../../../context/state";

type TCardCartProps = {
  id: number;
  count: number;
  image: string;
  price: string;
  title: string;
};

const CardCart: React.FC<TCardCartProps> = ({
  id,
  count,
  price,
  title,
  image,
}) => {
  const [counter, setCounter] = useState<number>(count);
  const { cartContext, saveData } = useAppContext();

  const onDeleteItem = () => {
    const cart = cartContext;

    const index = cart.findIndex((a: any) => a.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
    }

    saveData(cartContext);
  };

  return (
    <article className="flex card-cart relative">
      <figure className="shrink-0">
        <img
          className="w-[78px] h-[78px] rounded object-cover"
          src={image}
          alt=""
        />
      </figure>
      <div className="pl-3 sm:pl-4 sm:flex sm:justify-between	sm:w-full">
        <p className="text-sm font-normal text-grey-700 sm:w-[25%]">{title}</p>
        <div className="hidden sm:block sm:w-[25%]">
          <Counter counter={counter} setCounter={setCounter} />
        </div>
        <p className="text-sm font-normal text-grey-700 pt-3 sm:pt-0 sm:w-[25%] sm:text-right">
          USD {+price * counter}
        </p>
        <div className="sm:hidden mt-2">
          <Counter counter={counter} setCounter={setCounter} />
        </div>
      </div>
      <figure
        className="absolute top-0 right-0 cursor-pointer sm:bottom-0 sm:top-[unset] sm:left-[94px] sm:right-[unset]"
        onClick={onDeleteItem}
      >
        <img src={iconTrash} alt="" className="h-3 w-[11px]" />
      </figure>
    </article>
  );
};

export default CardCart;
