/**
 * Мы создаем рекламу, которая срабатывает
 * на клик по определенному элементу
 */

class ClickAdModule {
  //...
}

// Возможный html код
<div class="box">
  <div class="box__item"></div>
  <div class="box__item">
    <div class="no-click"></div>
  </div>
  <div class="box__item"></div>
</div>

/**
 * 1.
 * Наш клиент хочет, чтобы реклама срабатывала по селекторам:
 * 1. только на box__item
 * 2. Но ни при каких условиях не на no-click
 *
 * Как можно описать это параметрами, чтобы потом передать опции в модлуь
 */

const initOptions = {}
new ClickAdModule(initOptions);

/**
 * 2.
 * Как будут обрабатываться эти опции
 * внутри модуля
 */

const initOptions = {
  bind: ['.box__item'],
  ignore: ['.no-click']
}
new ClickAdModule(initOptions);







