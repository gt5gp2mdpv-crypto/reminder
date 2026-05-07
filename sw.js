// StudyFlow Service Worker
// Handles scheduled notifications via setTimeout

const CACHE_NAME = 'studyflow-v1';
let scheduledTimers = [];

// ── Install & Activate ──
self.addEventListener('install', e => {
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

// ── Message from main thread ──
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SCHEDULE_NOTIFICATIONS') {
    scheduleNotifications(e.data.notifications || []);
  }
});

// ── Schedule notifications ──
function scheduleNotifications(notifications) {
  // Clear existing timers
  scheduledTimers.forEach(id => clearTimeout(id));
  scheduledTimers = [];

  const now = Date.now();

  notifications.forEach(n => {
    const delay = n.time - now;
    if (delay <= 0) return;
    // Max setTimeout is ~24.8 days; for longer delays we skip (will reschedule on next app open)
    if (delay > 2073600000) return; // 24 days

    const id = setTimeout(() => {
      showNotification(n.title, n.body);
    }, delay);
    scheduledTimers.push(id);
  });

  console.log(`[SW] Scheduled ${scheduledTimers.length} notifications`);
}

function showNotification(title, body) {
  self.registration.showNotification(title, {
    body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: title + body, // prevent duplicate
    renotify: false,
    requireInteraction: false,
    data: { url: self.registration.scope }
  });
}

// ── Notification click → open app ──
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
      if (cs.length > 0) {
        cs[0].focus();
        return;
      }
      clients.openWindow(e.notification.data?.url || '/');
    })
  );
});
