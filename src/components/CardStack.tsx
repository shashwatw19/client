import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

let interval: any;

type Card = {
  id: string;
  src :  string
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  setScreenData
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  setScreenData : (input : string)=>void
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const intervalRef = useRef<number | null>(null);
  useEffect(() => {
    if(items && items.length){
        setCards(items)
        setScreenData(items[0].id)
    }
    startFlipping();

       return () => {
     if (intervalRef.current !== null) {
       clearInterval(intervalRef.current);
      }
   };
  }, [items, setScreenData]);
  const startFlipping = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    // use window.setInterval to get correct numeric id type
    intervalRef.current = window.setInterval(() => {
      // use functional updater and notify parent with the new front card (no stale closure)
      setCards((prevCards: Card[]) => {
        if (!prevCards || prevCards.length <= 1) return prevCards;
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        // inform parent of the new front card immediately
        setScreenData(newArray[0].id);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative  h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white h-60 w-60 md:h-130 md:w-96 rounded-3xl overflow-hidden  flex flex-col"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, 
              zIndex: cards.length - index, 
            }}
          >
         
            <img src={card.src} className="object-contain block w-full h-full"></img>    
       
          </motion.div>
        );
      })}
    </div>
  );
};
