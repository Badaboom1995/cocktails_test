import React from 'react';
import DrinkCard from '@/components/organisms/DrinkCard';
import SkeletonCard from '@/components/atoms/SkeletonCard';
import './DrinkCardsListStyles.scss';
import useDrinks from '@/api/hooks/useDrinks';
interface DrinkCardsListProps {
  drinkId: string;
}

const DrinkCardsList: React.FC<DrinkCardsListProps> = ({ drinkId }) => {
  const { data, isLoading, error } = useDrinks({ drinkId });

  const createSkeletonCards = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <SkeletonCard key={index} width="100%" height="200px" />
    ));
  };

  if (error) {
    return (
      <div className="drink-cards-list__error">
        <div className="drink-cards-list__error-message">Error loading drinks</div>
      </div>
    );
  }

  return (
    <div className="drink-cards-list">
      {isLoading || !data ? createSkeletonCards(10) : null}
      {data?.map(drink => <DrinkCard key={drink.id} drink={drink} />)}
    </div>
  );
};

export default DrinkCardsList;
