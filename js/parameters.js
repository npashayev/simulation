const PROBABILITY = 0.2;

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
        unit: "kVa",
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
        currentValue: 41,
        probability: PROBABILITY / 4,
        unit: "℃",
        isChangeable: true,
        decimalPlaces: 0,
      },
      {
        name: "Akım Dengesizliği",
        minValue: 0.2,
        maxValue: 1.1,
        currentValue: 0.8,
        probability: PROBABILITY,
        unit: "%",
        isChangeable: true,
        decimalPlaces: 1,
      },
      {
        name: "Gerilim Dengesizliği",
        minValue: 0.2,
        maxValue: 0.8,
        currentValue: 0.3,
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
        currentValue: 35,
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
        minValue: 498,
        maxValue: 502,
        currentValue: 500,
        probability: PROBABILITY / 4,
        unit: "V",
        isChangeable: true,
        decimalPlaces: 0,
      },
    ],
  },
  {
    id: "Motor",
    tableName: "DEM - Dalgıç Elektrik Motoru",
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
        currentValue: 0.495,
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
        name: "Kİ Tarih ve Saat",
        type: "current-time",
        unit: "",
        isChangeable: true,
      },
      {
        name: "Durma/Devreye Girme Zamanlayıcısı",
        type: "incremental-time",
        currentValue: "12:23:36",
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
        maxValue: 0.1,
        currentValue: 0.04,
        probability: PROBABILITY / 2,
        unit: "m/s²",
        isChangeable: true,
        decimalPlaces: 2,
      },
      {
        name: "Titreşim XYZ",
        minValue: 0.02,
        maxValue: 0.1,
        currentValue: 0.03,
        probability: PROBABILITY / 2,
        unit: "m/s²",
        isChangeable: true,
        decimalPlaces: 2,
      },
    ],
  },
];

function formatParamValue(param) {
  if (param.currentValue === null || param.currentValue === undefined) {
    return "-";
  }
  let valStr;
  if (typeof param.currentValue === "number") {
    if (param.maxValue !== null && param.maxValue <= 1.0) {
      valStr = param.currentValue.toFixed(2);
    } else if (Number.isInteger(param.currentValue)) {
      valStr = param.currentValue.toString();
    } else {
      valStr = param.currentValue.toFixed(1);
    }
  } else {
    valStr = param.currentValue;
  }
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
            '<td title="' +
            param.name +
            '">' +
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

function updateParameters() {
  const UPDATE_PROBABILITY = 0.25; // 40% chance to update each changeable parameter

  parameterTables.forEach(function (table) {
    table.parameters.forEach(function (param, pIndex) {
      // Rule 2: If isChangeable is false, do not dynamically change the currentValue at all
      if (!param.isChangeable) return;

      if (Math.random() < UPDATE_PROBABILITY) {
        if (
          param.minValue !== null &&
          param.maxValue !== null &&
          typeof param.currentValue === "number"
        ) {
          const range = param.maxValue - param.minValue;
          // Random variation between 0.5% and 2.5% of range
          const factor = 0.005 + Math.random() * 0.02;
          const sign = Math.random() < 0.5 ? -1 : 1;
          let nextVal = param.currentValue + sign * (range * factor);

          // Clamp strictly within [minValue, maxValue]
          nextVal = Math.max(param.minValue, Math.min(param.maxValue, nextVal));

          // Rule 3: Keep current value as a number in isChangeable: true objects
          const decimals = param.maxValue <= 1.0 ? 2 : 1;
          param.currentValue = Number(nextVal.toFixed(decimals));

          // Smooth in-place DOM update (preserves table scroll positions)
          const cell = document.querySelector(
            '[data-param-val="' + table.id + "-" + pIndex + '"]',
          );
          if (cell) {
            cell.textContent = formatParamValue(param);
          }
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderParameterTables();
  setInterval(updateParameters, 1000);
});
