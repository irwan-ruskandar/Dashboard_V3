/* ========================================================
   🌐 FRONTEND — Memanggil API GAS
   ======================================================== */

function loadSDM() {
  fetch(`${GAS_API}?action=getSDM`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").textContent =
        "SDM DATA:\n\n" + JSON.stringify(data, null, 2);
    })
    .catch(err => console.error(err));
}

function loadLHI() {
  fetch(`${GAS_API}?action=getLHI`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").textContent =
        "LHI DATA:\n\n" + JSON.stringify(data, null, 2);
    })
    .catch(err => console.error(err));
}

