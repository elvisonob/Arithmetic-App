import classes from './DisplayScreen.module.css';

const DisplayScreen = () => {
  return (
    <div className={classes.container}>
      <p className={classes['first-number']}>
        <div className={classes.top}></div>
        <div className={classes.middle}>First Num</div>
        <div className={classes.bottom}></div>
      </p>
      <p className={classes['arithmetic-sign']}>
        <div className={classes.top}></div>
        <div className={classes.middle}>+/-</div>
        <div className={classes.bottom}></div>
      </p>
      <p className={classes['second-number']}>
        <div className={classes.top}></div>
        <div className={classes.middle}>Second Number</div>
        <div className={classes.bottom}></div>
      </p>
      <p className={classes['equal-sign']}>
        <div className={classes.top}></div>
        <div className={classes.middle}>=</div>
        <div className={classes.bottom}></div>
      </p>
      <p className={classes.result}>
        <div className={classes.top}></div>
        <div className={classes.middle}>Result</div>
        <div className={classes.bottom}></div>
      </p>
    </div>
  );
};

export default DisplayScreen;
