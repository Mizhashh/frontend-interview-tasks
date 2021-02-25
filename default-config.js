/**
 * Наш стартовый код рекламного модуля
 * в который передаются опции и имеются
 * дефолтные значение для них
 */

class AdModule {
  constructor(options) {
    this.options = options;
    this.defaultOptions = {
      maxShows: 1,
      cappingTime: 3,
      // ... любые возможные
    }
  }
  //...
}

/**
 * 1.
 * При запуске были утеряны часть параметров
 * как нам подставить запасные значения
 */
const initOptions = {
  maxShows: 5,
}
new AdModule(initOptions);

/**
 * 2.
 * Что можно сказать про такой
 * options api, есть ли проблемы у него
 */
const initOptions = {
  limit: {
    maxHits: 5,
    ttl: 360
  }
}
new AdModule(initOptions);



