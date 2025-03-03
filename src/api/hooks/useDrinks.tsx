import { useQuery } from '@tanstack/react-query';
import { cocktailsService } from '@/api/services/cocktailsService';

type useDrinksProps = {
  drinkId: string;
};

const useDrinks = ({ drinkId }: useDrinksProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['drink', drinkId],
    queryFn: () => cocktailsService.getCocktailsByType(drinkId),
    staleTime: 1000 * 60 * 30,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  });

  return { data, isLoading, error };
};

export default useDrinks;
