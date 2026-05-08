// StudyFlow Service Worker
let scheduledTimers=[];

self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));

// メッセージ受信（アプリ開いてる時）
self.addEventListener('message',e=>{
  if(!e.data)return;
  if(e.data.type==='SCHEDULE_NOTIFICATIONS') scheduleAll(e.data.notifications||[]);
  if(e.data.type==='SHOW_NOTIFICATION') showNotif(e.data.title, e.data.body);
});

// Pushイベント受信（サーバーから・アプリ閉じてても届く）
self.addEventListener('push',e=>{
  console.log('[SW] Push received:', e.data?.text());
  let title='📚 StudyFlow';
  let body='通知があります';
  try{
    const data=e.data?.json();
    if(data?.title)title=data.title;
    if(data?.body)body=data.body;
  }catch(err){
    const text=e.data?.text()||'';
    if(text)body=text;
  }
  e.waitUntil(showNotif(title,body));
});

function showNotif(title,body){
  return self.registration.showNotification(title,{
    body,
    icon:'icon-192.png',
    badge:'icon-192.png',
    tag:title+'|'+body.slice(0,50),
    requireInteraction:false,
    vibrate:[200,100,200],
  });
}

function scheduleAll(notifications){
  scheduledTimers.forEach(id=>clearTimeout(id));
  scheduledTimers=[];
  const now=Date.now();
  notifications.forEach(n=>{
    const delay=n.time-now;
    if(delay<=0||delay>7*24*3600*1000)return;
    const id=setTimeout(()=>showNotif(n.title,n.body),delay);
    scheduledTimers.push(id);
  });
  console.log('[SW] Scheduled',scheduledTimers.length,'notifications');
}

self.addEventListener('notificationclick',e=>{
  e.notification.close();
  e.waitUntil(
    clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{
      if(cs.length>0){cs[0].focus();return;}
      return clients.openWindow(self.registration.scope);
    })
  );
});
