const API_URL = 'YOUR_APPS_SCRIPT_URL';

document.getElementById('dataForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = 'Submitting...';

  const data = {
    shift: document.getElementById('shift').value,
    time: document.getElementById('time').value,
    target: document.getElementById('target').value,
    sbl: document.getElementById('sbl').value,
    sbr: document.getElementById('sbr').value,
    dtnd: document.getElementById('dtnd').value
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    const result = await response.json();
    
    if (result.error) {
      messageDiv.textContent = `❌ ${result.error}`;
      messageDiv.className = 'error';
    } else {
      messageDiv.textContent = `✅ ${result.success}`;
      messageDiv.className = 'success';
      document.getElementById('dataForm').reset();
    }
  } catch (error) {
    messageDiv.textContent = `❌ Network error: ${error.message}`;
    messageDiv.className = 'error';
  }
});
