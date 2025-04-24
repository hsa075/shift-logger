document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('shiftForm');
  const status = document.getElementById('status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      time: document.getElementById('time').value,
      target: parseInt(document.getElementById('target').value),
      sbl: parseInt(document.getElementById('sbl').value),
      sbr: parseInt(document.getElementById('sbr').value),
      dtnd: parseInt(document.getElementById('dtnd').value),
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/YOUR_DEPLOYED_WEBAPP_URL/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.text();
      status.innerText = result;
      status.style.color = 'green';
      form.reset();
    } catch (error) {
      status.innerText = "Error submitting data.";
      status.style.color = 'red';
      console.error(error);
    }
  });
});
