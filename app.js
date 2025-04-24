const API_URL =
  "https://script.google.com/macros/s/AKfycbwX9mynaqxRu9nfBWP2C1dhE_o9ZZW9_4UJASzLEmD9yXdJJZl-vvUURGuOuoo2s2ABHw/exec";
const form = document.getElementById("dataForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    time: document.getElementById("time").value,
    target: document.getElementById("target").value,
    sbl: document.getElementById("sbl").value,
    sbr: document.getElementById("sbr").value,
    dtnd: document.getElementById("dtnd").value,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();

    messageDiv.textContent = `✅ Data saved: ${result.row.join(", ")}`;
    messageDiv.className = "success";
    form.reset();
  } catch (error) {
    messageDiv.textContent = `❌ Error: ${error.message}`;
    messageDiv.className = "error";
  }
});
