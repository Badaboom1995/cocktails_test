import React from 'react';
import { NormalizedDrink } from '@/types/apiEntitiesTypes';
import Typography from '@/components/atoms/Typography';
import './DrinkCardStyles.scss';

interface DrinkCardProps {
  drink: NormalizedDrink;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
  return (
    <div className="drink-card">
      <div className="drink-card__image-wrapper">
        {/* 
        loading: lazy - Доступно в последних версиях сафари и хром. 
        Достаточно для текущей задачи. Для лучшей поддержки можно использовать библиотеку 
        */}
        <img
          loading="lazy"
          className="drink-card__image"
          width={200}
          height={200}
          src={drink.thumbnail}
          alt={drink.name}
        />
      </div>
      <div className="drink-card__content">
        <Typography variant="title" className="drink-card__title">
          <span>{drink.name}</span>
          <Typography className="drink-card__drink-params" variant="caption">
            {drink.alcoholic}, {drink.glass}, {drink.category}
          </Typography>
        </Typography>
        <Typography className="drink-card__instructions" variant="body">
          {drink.instructions}
        </Typography>
        <div className="drink-card__ingredients-list">
          {drink.ingredients.map(ingridient => (
            <div key={ingridient} className="drink-card__ingredients-list-item">
              {ingridient}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
