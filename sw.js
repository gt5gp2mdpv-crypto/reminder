// StudyFlow Service Worker
// Supports Declarative Web Push (iOS 18.4+) + legacy fallback

let scheduledTimers = [];

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

// ── Legacy Push handler (fallback for iOS < 18.4 and Android) ──
// Declarative Web Push bypasses this entirely - OS renders directly
self.addEventListener('push', e => {
  if (!e.data) return;
  let title = '📚 StudyFlow';
  let body = '通知があります';
  try {
    const data = e.data.json();
    // Declarative format has nested notification object
    if (data?.notification) {
      title = data.notification.title || title;
      body = data.notification.body || body;
    } else {
      title = data?.title || title;
      body = data?.body || body;
    }
  } catch {
    body = e.data.text() || body;
  }
  e.waitUntil(showNotif(title, body));
});

// ── Message from main thread ──
self.addEventListener('message', e => {
  if (!e.data) return;
  if (e.data.type === 'SCHEDULE_NOTIFICATIONS') scheduleAll(e.data.notifications || []);
  if (e.data.type === 'SHOW_NOTIFICATION') showNotif(e.data.title, e.data.body);
});

function showNotif(title, body) {
  return self.registration.showNotification(title, {
    body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: (title + '|' + body).slice(0, 64),
    requireInteraction: false,
    vibrate: [200, 100, 200],
  });
}

function scheduleAll(notifications) {
  scheduledTimers.forEach(id => clearTimeout(id));
  scheduledTimers = [];
  const now = Date.now();
  notifications.forEach(n => {
    const delay = n.time - now;
    if (delay <= 0 || delay > 7 * 24 * 3600 * 1000) return;
    const id = setTimeout(() => showNotif(n.title, n.body), delay);
    scheduledTimers.push(id);
  });
  console.log('[SW] Scheduled', scheduledTimers.length, 'notifications');
}

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
      if (cs.length > 0) { cs[0].focus(); return; }
      return clients.openWindow(self.registration.scope);
    })
  );
});
