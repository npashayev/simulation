document.addEventListener('DOMContentLoaded', function () {
  var sidebar = document.getElementById('wellSidebar');
  var toggleBtn = document.getElementById('sidebarToggle');
  var chevron = document.getElementById('sidebarChevron');

  function isTogglable() {
    return window.innerWidth < 1536;
  }

  var isOpen = false;

  function updateState() {
    if (isTogglable()) {
      if (isOpen) {
        sidebar.classList.add('well-sidebar--open');
        chevron.classList.remove('well-sidebar__chevron--rotated'); // points > (click to close)
        toggleBtn.setAttribute('aria-label', 'Close sidebar');
      } else {
        sidebar.classList.remove('well-sidebar--open');
        chevron.classList.add('well-sidebar__chevron--rotated'); // points < (click to open)
        toggleBtn.setAttribute('aria-label', 'Open sidebar');
      }
    } else {
      // 1536px and above: static sidebar, not togglable
      sidebar.classList.remove('well-sidebar--open');
      isOpen = false;
    }
  }

  toggleBtn.addEventListener('click', function () {
    if (!isTogglable()) return;
    isOpen = !isOpen;
    updateState();
  });

  window.addEventListener('resize', function () {
    updateState();
  });

  updateState();
});
