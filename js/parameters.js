const PROBABILITY = 0.2;

// Change per update as a fraction of (maxValue - minValue)
const STEP_RANGE_MIN = 0.1;
const STEP_RANGE_MAX = 0.2;

// current-time parameter is shown this many seconds behind the PC clock
const CLOCK_LAG_SECONDS = 2;
const TIME_PARAM_TYPES = ["current-time", "incremental-time"];

const parameterTables = [
  {
    id: "ControlStation",
    tableName: "Kontrol İstasyonu",
    parameters: [
      {
        name: "Çıkışta Aktif Güç",
        minValue: 7.6,
        maxValue: 8,
        currentValue: 7.8,
        probability: PROBABILITY,
        unit: "kVt",
        isChangeable: true,
        decimalPlaces: 1,
      },
      {
        name: "Çıkışta Tam Güç",
        minValue: 15.8,
        maxValue: 16.2,
        currentValue: 15.9,
        probability: PROBABILITY,
        unit: "kVA",
        isChangeable: true,
        decimalPlaces: 1,
      },
      {
        name: "Çıkışta Reaktif Güç",
        minValue: 13.8,
        maxValue: 14.2,
        currentValue: 13.9,
        probability: PROBABILITY,
        unit: "kVAr",
        isChangeable: true,
        decimalPlaces: 1,
      },

      {
        name: "Uab - A ve B Fazları Arasındaki Gerilim",
        minValue: 360,
        maxValue: 390,
        currentValue: 364,
        probability: PROBABILITY,
        unit: "V",
        isChangeable: true,
        decimalPlaces: 0,
      },
      {
        name: "Ubc - B ve C Fazları Arasındaki Gerilim",
        minValue: 360,
        maxValue: 390,
        currentValue: 368,
        probability: PROBABILITY,
        unit: "V",
        isChangeable: true,
        decimalPlaces: 0,
      },
      {
        name: "Uca - C ve A Fazları Arasındaki Gerilim",
        minValue: 360,
        maxValue: 390,
        currentValue: 366,
        probability: PROBABILITY,
        unit: "V",
        isChangeable: true,
        decimalPlaces: 0,
      },

      {
        name: "Fçıkış - Kİ Çıkış Frekansı",
        currentValue: 35,
        unit: "Hz",
        isChangeable: false,
      },
      {
        name: "Iu - FÇ Çıkış Akımı",
        minValue: 35.6,
        maxValue: 36.4,
        currentValue: 36.1,
        probability: PROBABILITY,
        unit: "A",
        isChangeable: true,
        decimalPlaces: 1,
      },
      {
        name: "VFD - Sabit Akım Gerilimi (DC)",
        minValue: 528,
        maxValue: 540,
        probability: PROBABILITY,
        currentValue: 532,
        unit: "V",
        isChangeable: true,
        decimalPlaces: 0,
      },
      {
        name: "FÇ Radyatör Sıcaklığı",
        minValue: 40,
        maxValue: 42,
        currentValue: 41.0,
        probability: PROBABILITY / 4,
        unit: "℃",
        isChangeable: true,
        decimalPlaces: 1,
      },
      {
        name: "Akım Dengesizliği",
        minValue: 0.2,
        maxValue: 1.1,
        currentValue: 0.5,
        probability: PROBABILITY,
        unit: "%",
        isChangeable: true,
        decimalPlaces: 1,
      },
      {
        name: "Gerilim Dengesizliği",
        minValue: 0.2,
        maxValue: 0.6,
        currentValue: 0.2,
        probability: PROBABILITY,
        unit: "%",
        isChangeable: true,
        decimalPlaces: 1,
      },
      {
        name: "Faz Sırası",
        currentValue: "CBA",
        unit: "",
        isChangeable: false,
      },
      {
        name: "Türbin Dönüş Frekansı",
        currentValue: "-",
        unit: "Hz",
        isChangeable: false,
      },
      {
        name: "FÇ Çıkışında Gerilim",
        minValue: 232,
        maxValue: 245,
        currentValue: 235,
        probability: PROBABILITY,
        unit: "V",
        isChangeable: true,
        decimalPlaces: 0,
      },
    ],
  },
  {
    id: "Tmpn",
    tableName: "TMПН",
    parameters: [
      {
        name: "TMПН Çıkışında Gerilim",
        currentValue: 500,
        unit: "V",
        isChangeable: false,
      },
    ],
  },
  {
    id: "Motor",
    tableName: "DEM - Dalma Elektrik Motoru",
    parameters: [
      {
        name: "Dönüş Yönü",
        currentValue: "İleri dönüş",
        unit: "",
        isChangeable: false,
      },
      {
        name: "Ry - Yalıtım Direnci",
        currentValue: 9999,
        unit: "kΩ",
        isChangeable: false,
      },
      {
        name: "Ia - Motorun A Fazındaki Akım",
        minValue: 17,
        maxValue: 19,
        currentValue: 17.4,
        probability: PROBABILITY,
        unit: "A",
        isChangeable: true,
        decimalPlaces: 1,
      },
      {
        name: "Ib - Motorun B Fazındaki Akım",
        minValue: 17,
        maxValue: 19,
        currentValue: 17.8,
        probability: PROBABILITY,
        unit: "A",
        isChangeable: true,
        decimalPlaces: 1,
      },
      {
        name: "Ic - Motorun C Fazındaki Akım",
        minValue: 17,
        maxValue: 19,
        currentValue: 17.6,
        probability: PROBABILITY,
        unit: "A",
        isChangeable: true,
        decimalPlaces: 1,
      },
      {
        name: "COS(φ) - Güç Katsayısı",
        minValue: 0.48,
        maxValue: 0.5,
        currentValue: 0.491,
        probability: PROBABILITY,
        unit: "",
        isChangeable: true,
        decimalPlaces: 3,
      },
      {
        name: "DEM Yüklenmesi",
        minValue: 36.8,
        maxValue: 39.4,
        currentValue: 39.1,
        probability: PROBABILITY,
        unit: "%",
        isChangeable: true,
        decimalPlaces: 1,
      },
      {
        name: "Giriş Gerilimi Ua",
        minValue: 210,
        maxValue: 213,
        currentValue: 212,
        probability: PROBABILITY,
        unit: "V",
        isChangeable: true,
        decimalPlaces: 0,
      },
      {
        name: "Giriş Gerilimi Ub",
        minValue: 210,
        maxValue: 213,
        currentValue: 211,
        probability: PROBABILITY,
        unit: "V",
        isChangeable: true,
        decimalPlaces: 0,
      },
      {
        name: "Giriş Gerilimi Uc",
        minValue: 210,
        maxValue: 213,
        currentValue: 211,
        probability: PROBABILITY,
        unit: "V",
        isChangeable: true,
        decimalPlaces: 0,
      },
    ],
  },
  {
    id: "CurrentStatus",
    tableName: "Mevcut Durum",
    parameters: [
      {
        name: "FÇ Mevcut Çalışma Durumu",
        currentValue: "Operatör işlemi bulunmamaktadır",
        unit: "",
        isChangeable: false,
      },
      {
        name: "Kİ Saat",
        type: "current-time",
        unit: "",
        isChangeable: true,
      },
      {
        name: "Durma / Devreye Girme Zamanlayıcısı",
        type: "incremental-time",
        initialSeconds: 44616, // 12:23:36
        unit: "",
        isChangeable: true,
      },
      {
        name: "Son Durma Sebebi",
        currentValue: "Elektrik beslemesinde kesinti",
        unit: "",
        isChangeable: false,
      },
      {
        name: "Son Devreye Girme Sebebi",
        currentValue: "DEM manuel olarak devreye alındı",
        unit: "",
        isChangeable: false,
      },
      {
        name: "Kİ Kontrol Modu",
        currentValue: "Manuel",
        unit: "",
        isChangeable: false,
      },
      {
        name: "Devreye Girmenin Bloke Edilmesi",
        currentValue: "Bloke yok",
        unit: "",
        isChangeable: false,
      },
      {
        name: "DEM Durumu",
        currentValue: "Çalışıyor",
        unit: "",
        isChangeable: false,
      },
      {
        name: "Kİ Dolabında Kapı Durumu",
        currentValue: "Kapalı",
        unit: "",
        isChangeable: false,
      },
    ],
  },
  {
    id: "Tms",
    tableName: "TMS - Telemetri Sistemi",
    parameters: [
      {
        name: "TMS Durumu",
        currentValue: "Normal",
        unit: "",
        isChangeable: false,
      },
      {
        name: "Pompa Girişinde Sıcaklık",
        minValue: 31,
        maxValue: 32.4,
        currentValue: 31.28,
        probability: PROBABILITY / 4,
        unit: "℃",
        isChangeable: true,
        decimalPlaces: 2,
      },
      {
        name: "Pompa Çıkışında Sıcaklık",
        minValue: 35,
        maxValue: 36.4,
        currentValue: 35.55,
        probability: PROBABILITY / 4,
        unit: "℃",
        isChangeable: true,
        decimalPlaces: 2,
      },
      {
        name: "Motor Yağında Sıcaklık",
        minValue: 30,
        maxValue: 31.4,
        currentValue: 30.65,
        probability: PROBABILITY / 4,
        unit: "℃",
        isChangeable: true,
        decimalPlaces: 2,
      },
      {
        name: "Motor Sargılarında Sıcaklık",
        minValue: 39.5,
        maxValue: 40.5,
        currentValue: 40.15,
        probability: PROBABILITY / 4,
        unit: "℃",
        isChangeable: true,
        decimalPlaces: 2,
      },
      {
        name: "Pompa Girişinde Basınç",
        minValue: 17.6,
        maxValue: 17.8,
        currentValue: 17.68,
        probability: PROBABILITY / 2,
        unit: "kgf/cm²",
        isChangeable: true,
        decimalPlaces: 2,
      },
      {
        name: "Pompa Çıkışında Basınç",
        minValue: 17.6,
        maxValue: 17.8,
        currentValue: 17.72,
        probability: PROBABILITY / 2,
        unit: "kgf/cm²",
        isChangeable: true,
        decimalPlaces: 2,
      },
      {
        name: "DEM Yağında Basınç",
        currentValue: 0,
        unit: "kgf/cm²",
        isChangeable: false,
      },
      {
        name: "Titreşim X",
        minValue: 0.02,
        maxValue: 0.1,
        currentValue: 0.03,
        probability: PROBABILITY / 2,
        unit: "m/s²",
        isChangeable: true,
        decimalPlaces: 2,
      },
      {
        name: "Titreşim Y",
        minValue: 0.02,
        maxValue: 0.1,
        currentValue: 0.06,
        probability: PROBABILITY / 2,
        unit: "m/s²",
        isChangeable: true,
        decimalPlaces: 2,
      },
      {
        name: "Titreşim Z",
        minValue: 0.02,
        maxValue: 0.1,
        currentValue: 0.02,
        probability: PROBABILITY / 2,
        unit: "m/s²",
        isChangeable: true,
        decimalPlaces: 2,
      },
      {
        name: "Titreşim XY",
        minValue: 0.02,
        maxValue: 0.16,
        currentValue: 0.14,
        probability: PROBABILITY / 2,
        unit: "m/s²",
        isChangeable: true,
        decimalPlaces: 2,
      },
      {
        name: "Titreşim XYZ",
        minValue: 0.02,
        maxValue: 0.2,
        currentValue: 0.17,
        probability: PROBABILITY / 2,
        unit: "m/s²",
        isChangeable: true,
        decimalPlaces: 2,
      },
    ],
  },
];

function isTimeParam(param) {
  return TIME_PARAM_TYPES.includes(param.type);
}

function joinTimeParts(parts) {
  return parts.map((n) => String(n).padStart(2, "0")).join(":");
}

function formatDuration(totalSeconds) {
  return joinTimeParts([
    Math.floor(totalSeconds / 3600),
    Math.floor((totalSeconds % 3600) / 60),
    totalSeconds % 60,
  ]);
}

// Derived from timestamps so the value stays correct even if timers are throttled
function getTimeParamText(param) {
  if (param.type === "current-time") {
    const now = new Date(Date.now() - CLOCK_LAG_SECONDS * 1000);
    return joinTimeParts([now.getHours(), now.getMinutes(), now.getSeconds()]);
  }
  return formatDuration(Math.floor((Date.now() - param.startedAt) / 1000));
}

function initTimeParams() {
  parameterTables.forEach(function (table) {
    table.parameters.forEach(function (param) {
      if (param.type === "incremental-time") {
        param.startedAt = Date.now() - param.initialSeconds * 1000;
      }
    });
  });
}

// Returns null when there is nothing to show
function getParamDisplayValue(param) {
  if (isTimeParam(param)) return getTimeParamText(param);
  if (param.currentValue == null) return null;

  // Display precision comes from decimalPlaces; the stored value stays unrounded
  return typeof param.currentValue === "number"
    ? param.currentValue.toFixed(param.decimalPlaces ?? 0)
    : param.currentValue;
}

function formatParamValue(param) {
  const valStr = getParamDisplayValue(param);
  if (valStr === null) return "-";

  return param.unit ? valStr + " " + param.unit : String(valStr);
}

function renderParameterTables() {
  const container = document.getElementById("parameterTablesContainer");
  if (!container) return;

  container.innerHTML = parameterTables
    .map(function (table) {
      const rows = table.parameters
        .map(function (param, pIndex) {
          return (
            "<tr>" +
            "<td>" +
            param.name +
            "</td>" +
            '<td data-param-val="' +
            table.id +
            "-" +
            pIndex +
            '">' +
            formatParamValue(param) +
            "</td>" +
            "</tr>"
          );
        })
        .join("");

      return (
        '<div class="second-menu__table-cnr" data-name="' +
        table.id +
        '">' +
        "<table>" +
        "<colgroup>" +
        '<col class="first-col" />' +
        '<col class="second-col" />' +
        "</colgroup>" +
        "<thead>" +
        "<tr>" +
        '<th colspan="2">' +
        (table.tableName || table.title) +
        "</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        rows +
        "</tbody>" +
        "</table>" +
        "</div>"
      );
    })
    .join("");
}

function isNumericRangeParam(param) {
  return (
    param.isChangeable &&
    typeof param.currentValue === "number" &&
    Number.isFinite(param.minValue) &&
    Number.isFinite(param.maxValue)
  );
}

// Moves the value by 10-20% of (max - min), reflecting at the bounds
function getNextValue(param) {
  const range = param.maxValue - param.minValue;
  const step =
    range *
    (STEP_RANGE_MIN + Math.random() * (STEP_RANGE_MAX - STEP_RANGE_MIN));
  const direction = Math.random() < 0.5 ? -1 : 1;

  let next = param.currentValue + direction * step;
  if (next < param.minValue || next > param.maxValue) {
    next = param.currentValue - direction * step;
  }
  return Math.min(param.maxValue, Math.max(param.minValue, next));
}

// In-place DOM update keeps table scroll positions
function updateParameterCell(tableId, pIndex, param) {
  const cell = document.querySelector(
    '[data-param-val="' + tableId + "-" + pIndex + '"]',
  );
  if (!cell) return;

  // The marquee may have wrapped the text in .cell-text; keep that wrapper intact
  const textTarget = cell.querySelector(":scope > .cell-text") ?? cell;
  const text = formatParamValue(param);
  textTarget.textContent = text;
  if ("text" in textTarget.dataset) textTarget.dataset.text = text; // marquee copy
}

function updateParameters() {
  parameterTables.forEach(function (table) {
    table.parameters.forEach(function (param, pIndex) {
      if (!param.isChangeable) return;

      // Time parameters refresh every tick
      if (isTimeParam(param)) {
        updateParameterCell(table.id, pIndex, param);
        return;
      }

      if (!isNumericRangeParam(param)) return;
      if (Math.random() >= (param.probability ?? 0)) return;

      param.currentValue = getNextValue(param);
      updateParameterCell(table.id, pIndex, param);
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initTimeParams();
  renderParameterTables();
  setInterval(updateParameters, 1000);
});
