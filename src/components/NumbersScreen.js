import classes from './NumbersScreen.module.css';

const NumbersScreen = () => {
  return (
    <div className={classes.container2}>
      <p className={classes.one}>1</p>
      <p className={classes.two}>2</p>
      <p className={classes.three}>3</p>
      <p className={classes.four}>4</p>
      <p className={classes.five}>5</p>
      <p className={classes.six}>6</p>
      <p className={classes.seven}>7</p>
      <p className={classes.eight}>8</p>
      <p className={classes.nine}>9</p>
      <p className={classes.zero}>0</p>
      <p className={classes.addition}>+</p>
      <p className={classes.subtraction}>-</p>
    </div>
  );
};

export default NumbersScreen;
