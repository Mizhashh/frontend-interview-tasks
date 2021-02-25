/**
 * Кусок логики из service-worker
 * который обрабатывает клики
 * https://adv.com/api/v1/checkdata - { clickExist: boolean }
 * */

async function proceedClick(event) {
  const { id } = event.notification.data
  const {data} = await axios.get(`https://adv.com/api/v1/click/${id}`);

  if (!data.clickExist) {
    const { data } = await axios.post('https://adv.com/api/v1/click', { id });
    //...more async logic
  }
}

self.addEventListener('onnotificationclick', event => {
  event.waitUntil(proceedClick); // специальный хелпер инстанса event, который позволяет отложить засыпание service-worker
})