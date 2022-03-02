import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Ndole',
    description: 'Légumes',
    price: 1500,
  },
  {
    id: 'm2',
    name: 'Eru',
    description: 'Healthy...and green...',
    price: 1000,
  },
  {
    id: 'm3',
    name: 'Pommes plantain viande',
    description: 'spécialité',
    price: 2000,
  },
  {
    id: 'm4',
    name: 'Bifteck',
    description: 'Beacoup de viande',
    price: 2700,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
