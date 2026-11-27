const stationInfo = {
  imagePath: 'images/station.png',
  parameters: [
    { name: 'Kİ Nominal Akımı [A]', value: '400' },
    { name: 'Besleme Gerilimi [V]', value: '190-520 / 330-560' },
    { name: 'Frekans [Hz]', value: '50' },
    { name: 'Çalışma Sıcaklığı [℃]', value: '-60...+50' },
    { name: 'Dolap Koruma Sınıfı', value: 'IP43 (veya IP54)' },
  ],
};

function renderStationInfo() {
  const container = document.getElementById('stationInfoContainer');
  if (!container) return;

  const rows = stationInfo.parameters
    .map(function (param) {
      return '<tr><td>' + param.name + '</td><td>' + param.value + '</td></tr>';
    })
    .join('');

  container.innerHTML =
    '<div class="station-info__image-cnr">' +
    '<img src="' +
    stationInfo.imagePath +
    '" alt="Control station image" class="station-info__img" />' +
    '</div>' +
    '<div class="station-info__table-cnr">' +
    '<table>' +
    '<colgroup>' +
    '<col class="station-info__first-col" />' +
    '<col class="station-info__second-col" />' +
    '</colgroup>' +
    '<tbody>' +
    rows +
    '</tbody>' +
    '</table>' +
    '</div>';
}

document.addEventListener('DOMContentLoaded', renderStationInfo);
