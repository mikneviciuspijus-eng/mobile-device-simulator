const deviceButtons = document.querySelectorAll('.device-btn');
const device = document.getElementById('device');
const homescreen = document.getElementById('homescreen');
const lockscreen = document.getElementById('lockscreen');
const panel = document.getElementById('panel');
const panelTitle = document.getElementById('panelTitle');
const notifications = document.getElementById('notifications');
const controlCenter = document.getElementById('controlCenter');
const closePanelBtn = document.getElementById('closePanel');
const unlockBtn = document.getElementById('unlockBtn');
const appButtons = document.querySelectorAll('.app-icon');
const appCards = document.querySelectorAll('.app-card');
const toggles = document.querySelectorAll('.toggle');
const quickItems = document.querySelectorAll('.quick-item');
const notificationCard = document.getElementById('notificationCard');

function setDevice(type) {
  device.classList.remove('android', 'iphone');
  device.classList.add(type);

  deviceButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.device === type);
  });

  document.body.style.background =
    type === 'iphone'
      ? 'radial-gradient(circle at top, #2e3f66, #0b1220 50%)'
      : 'radial-gradient(circle at top, #1e2d4d, #070d18 48%)';
}

function showHome() {
  homescreen.classList.remove('hidden');
  lockscreen.classList.add('hidden');
  panel.classList.add('hidden');
  notifications.classList.add('hidden');
  controlCenter.classList.add('hidden');
}

function openApp(appName) {
  const titleMap = {
    settings: 'Settings',
    messages: 'Messages',
    camera: 'Camera',
    maps: 'Maps',
    weather: 'Weather',
    appstore: 'App Store',
    calendar: 'Calendar',
    music: 'Music'
  };

  panelTitle.textContent = titleMap[appName] || 'App';

  appCards.forEach((card) => {
    card.classList.toggle('active', card.dataset.name === appName);
  });

  panel.classList.remove('hidden');
}

deviceButtons.forEach((btn) => {
  btn.addEventListener('click', () => setDevice(btn.dataset.device));
});

unlockBtn.addEventListener('click', showHome);

appButtons.forEach((button) => {
  button.addEventListener('click', () => openApp(button.dataset.app));
});

closePanelBtn.addEventListener('click', () => {
  panel.classList.add('hidden');
});

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('on');
  });
});

quickItems.forEach((item) => {
  item.addEventListener('click', () => {
    quickItems.forEach((el) => el.classList.remove('active'));
    item.classList.add('active');

    if (item.dataset.quick === 'wifi') {
      controlCenter.classList.toggle('hidden');
    }
  });
});

notificationCard.addEventListener('click', () => {
  notifications.classList.toggle('hidden');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    panel.classList.add('hidden');
    notifications.classList.add('hidden');
    controlCenter.classList.add('hidden');
    showHome();
  }
});

setDevice('android');
lockscreen.classList.remove('hidden');
homescreen.classList.add('hidden');
