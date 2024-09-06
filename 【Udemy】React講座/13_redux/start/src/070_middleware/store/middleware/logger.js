const logger = (store) => {
    return (next) => {
      return (action) => {
        console.log(store.getState())
        next(action);
        console.log(store.getState())
        // storeはaction後の状態
      };
    }
  }

  export default logger;