import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import MealItem from './MealItem';
import { mealsState } from '../store/atoms';
import useHttp from '../hooks/useHttp';
import Error from './Error';

const requestConfig = {};

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useRecoilState(mealsState);
  const { isLoading, error, sendRequest } = useHttp('http://localhost:3000/meals', requestConfig, []);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await sendRequest();
        setLoadedMeals(response);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchMeals();
  }, [sendRequest, setLoadedMeals]);

  if (isLoading) {
    return <p className='center'>Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
