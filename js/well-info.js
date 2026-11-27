const wellInfo = {
  isOnline: true,
  isPumpWorking: true,
  oilField: "Neft Daşları",
  cluster: "Cluster 12",
  wellNo: "1547",
  stationModel: "SU-45",
};

// Simulated device latency for start/stop operations
const PUMP_OPERATION_DELAY_MS = 1500;

const CONFIRM_TEXT = {
  heading: "Bu işlemi yapmak istediğinizden emin misiniz?",
  confirm: "Onayla",
  cancel: "İptal",
};

const WELL_FIELDS = [
  { label: "Oil Field:", key: "oilField" },
  { label: "Cluster:", key: "cluster" },
  { label: "Well №:", key: "wellNo" },
  { label: "Station Model:", key: "stationModel" },
];

let confirmDialog = null;
let pendingAction = null; // "start" | "stop", set while the dialog is open
let isOperationRunning = false;

function renderWellField({ label, key }) {
  return `
    <div class="well-info__item">
      <p class="well-info__label">${label}</p>
      <p class="well-info__value">${wellInfo[key] || "-"}</p>
    </div>`;
}

function renderPumpControl() {
  const startDisabled = wellInfo.isPumpWorking || isOperationRunning;
  const stopDisabled = !wellInfo.isPumpWorking || isOperationRunning;

  return `
    <div class="pump-control">
      <button class="pump-control__btn pump-control__btn--primary"
        data-pump-action="start" ${startDisabled ? "disabled" : ""}>Start</button>
      <button class="pump-control__btn pump-control__btn--danger"
        data-pump-action="stop" ${stopDisabled ? "disabled" : ""}>Stop</button>
    </div>`;
}

function renderBubbles() {
  const bubbles = document.querySelector(".bubbles-cnr");
  if (bubbles) {
    bubbles.classList.toggle("bubbles-cnr--hidden", !wellInfo.isPumpWorking);
  }
}

function renderWellInfo() {
  const container = document.getElementById("wellInfoContainer");
  if (!container) return;

  const status = wellInfo.isOnline ? "online" : "offline";

  container.className = `well-info well-info--${status}`;
  container.innerHTML = `
    <div class="well-info__details">
      <div class="well-info__badge">
        <div class="well-info__status-dot ${
          wellInfo.isOnline ? "well-info__status-dot--online" : ""
        }"></div>
        <p>${wellInfo.isOnline ? "Online" : "Offline"}</p>
      </div>
      <div class="well-info__list">${WELL_FIELDS.map(renderWellField).join("")}</div>
    </div>
    <div class="well-info__divider"></div>
    ${renderPumpControl()}`;

  renderBubbles();
}

function runPumpOperation(action) {
  isOperationRunning = true;
  renderWellInfo(); // locks both buttons while the operation is in progress

  setTimeout(function () {
    try {
      wellInfo.isPumpWorking = action === "start";
    } finally {
      isOperationRunning = false;
      renderWellInfo();
    }
  }, PUMP_OPERATION_DELAY_MS);
}

function createConfirmDialog() {
  const dialog = document.createElement("dialog");
  dialog.className = "confirm-modal";
  dialog.innerHTML = `
    <form method="dialog" class="confirm-modal__body">
      <h2 class="confirm-modal__title">${CONFIRM_TEXT.heading}</h2>
      <div class="confirm-modal__actions">
        <button value="cancel" class="confirm-modal__btn confirm-modal__btn--cancel">${CONFIRM_TEXT.cancel}</button>
        <button value="confirm" class="confirm-modal__btn confirm-modal__btn--confirm">${CONFIRM_TEXT.confirm}</button>
      </div>
    </form>`;

  // Backdrop click: the dialog element itself is the target, not its content
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close("cancel");
  });

  // Fires for confirm, cancel, backdrop click and Esc alike
  dialog.addEventListener("close", function () {
    const action = pendingAction;
    pendingAction = null;
    if (dialog.returnValue === "confirm" && action) runPumpOperation(action);
  });

  document.body.appendChild(dialog);
  return dialog;
}

function handlePumpControlClick(event) {
  const button = event.target.closest("[data-pump-action]");
  if (!button || button.disabled || isOperationRunning) return;

  pendingAction = button.dataset.pumpAction;
  confirmDialog.returnValue = ""; // Esc keeps the previous value otherwise
  confirmDialog.showModal();
}

function initWellInfo() {
  confirmDialog = createConfirmDialog();

  // Delegated: the container's content is re-rendered on every state change
  const container = document.getElementById("wellInfoContainer");
  if (container) container.addEventListener("click", handlePumpControlClick);

  renderWellInfo();
}

document.addEventListener("DOMContentLoaded", initWellInfo);
