const wellInfo = {
  isOnline: true,
  oilField: 'Neft Daşları',
  cluster: 'Cluster 12',
  wellNo: '1547',
  stationModel: 'SU-45'
};

function renderWellInfo() {
  const container = document.getElementById('wellInfoContainer');
  if (!container) return;

  const onlineClass = wellInfo.isOnline ? 'well-info--online' : 'well-info--offline';
  const statusDotClass = wellInfo.isOnline ? 'well-info__status-dot--online' : '';
  const statusText = wellInfo.isOnline ? 'Online' : 'Offline';

  container.className = 'well-info ' + onlineClass;
  container.innerHTML =
    '<div class="well-info__details">' +
      '<div class="well-info__badge">' +
        '<div class="well-info__status-dot ' + statusDotClass + '"></div>' +
        '<p>' + statusText + '</p>' +
      '</div>' +
      '<div class="well-info__list">' +
        '<div class="well-info__item">' +
          '<p class="well-info__label">Oil Field:</p>' +
          '<p class="well-info__value">' + (wellInfo.oilField || '-') + '</p>' +
        '</div>' +
        '<div class="well-info__item">' +
          '<p class="well-info__label">Cluster:</p>' +
          '<p class="well-info__value">' + (wellInfo.cluster || '-') + '</p>' +
        '</div>' +
        '<div class="well-info__item">' +
          '<p class="well-info__label">Well №:</p>' +
          '<p class="well-info__value">' + (wellInfo.wellNo || '-') + '</p>' +
        '</div>' +
        '<div class="well-info__item">' +
          '<p class="well-info__label">Station Model:</p>' +
          '<p class="well-info__value">' + (wellInfo.stationModel || '-') + '</p>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="well-info__divider"></div>' +
    '<div class="pump-control">' +
      '<button class="pump-control__btn pump-control__btn--primary">Start</button>' +
      '<button class="pump-control__btn pump-control__btn--danger">Stop</button>' +
      '<button class="pump-control__btn pump-control__btn--info">Unblock</button>' +
    '</div>';
}

document.addEventListener('DOMContentLoaded', renderWellInfo);
