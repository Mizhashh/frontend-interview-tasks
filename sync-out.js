/**
 * Обработка notificationclick event service-worker
 * https://adv.com/api/v1/checkdata - { clickExist: boolean }
 * */

async function proceedClick(event) {
  const { id } = event.notification.data;
  const { data } = await axios.get(`https://adv.com/api/v1/click/${id}`);

  if (!data.clickExist) {
    const { data } = await axios.post('https://adv.com/api/v1/click', { id });
    //...more async logic
  }
}

self.addEventListener('notificationclick', event => {
  event.waitUntil(proceedClick); // специальный хелпер инстанса event, который позволяет отложить засыпание service-worker
})
