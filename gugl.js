const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby7Ah0FWq1wDOROSQcLQcmcTFXSYlz_9AGinNl9mN_m21bbZPlbroxOAm4ADAlWhAK_8A/exec';
// const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwqpQRgbrT4AaRmD4Cw38TIEk8Jal8UCk9YDbd8rooedJtUmG9t0eYrQ0HqALQPzY7Fbg/exec';

document.getElementById('transportForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const dataObject = {};
  formData.forEach((value, key) => {
    dataObject[key] = value;
  });

  // Отправка в гугл таблицы
  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    contentType: 'application/json',
    body: JSON.stringify(dataObject)
  }).then(response => response.text())
    .then(res => {
      alert('Данные успешно отправлены!');
      e.target.reset();
    })
    .catch(error => {
      alert('Ошибка при отправке данных.');
      console.error(error);
    });
});

