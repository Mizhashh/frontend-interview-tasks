/**
 * Наш код работе с сервисом
 */

const { data } = await axios.get('https://adv.com/api/v1/money');

/**
 * Приходит пользователь с включенным AdBlock расширением
 * и на странице происходит
 * 1. window.XMLHttpRequest - block
 * 2. window.fetch - block
 *
 * Что нам можно сделать, чтобы наш код
 * const { data } = await axios.get('https://adv.com/api/v1/money');
 * продолжал работать
 */


