// StudyFlow Service Worker
let scheduledTimers=[];

self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));

self.addEventListener('message',e=>{
  if(!e.data)return;
  if(e.data.type==='SCHEDULE_NOTIFICATIONS'){
    scheduleAll(e.data.notifications||[]);
  }
  if(e.data.type==='SHOW_NOTIFICATION'){
    self.registration.showNotification(e.data.title,{
      body:e.data.body,
      icon:'icon-192.png',
      badge:'icon-192.png',
      tag:e.data.title+'|'+e.data.body,
      requireInteraction:false,
    });
  }
});

function scheduleAll(notifications){
  scheduledTimers.forEach(id=>clearTimeout(id));
  scheduledTimers=[];
  const now=Date.now();
  notifications.forEach(n=>{
    const delay=n.time-now;
    if(delay<=0||delay>2073600000)return;
    const id=setTimeout(()=>{
      self.registration.showNotification(n.title,{
        body:n.body,
        icon:'icon-192.png',
        badge:'icon-192.png',
        tag:n.title+'|'+n.body+'|'+n.time,
        requireInteraction:false,
      });
    },delay);
    scheduledTimers.push(id);
  });
}

self.addEventListener('notificationclick',e=>{
  e.notification.close();
  e.waitUntil(
    clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{
      if(cs.length>0){cs[0].focus();return;}
      clients.openWindow(e.notification.data?.url||self.registration.scope);
    })
  );
});
