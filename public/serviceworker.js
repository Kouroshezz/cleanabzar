const CACHE_NAME = 'verion-1';
const urlsToCache = ['index.html','offline-index.html'];

//  ========= install swj service
this.addEventListener('install',(e)=>{
  e.waitUntill(
    caches.open(CACHE_NAME)
    .then(e=>{
      console.log('opened cache');
      return e.addAll(urlsToCache)
    })
  )
})


// ========== Listening 
this.addEventListener('fetch',(e)=>{
  e.respondWith(
    caches.match(e.request)
    .then(()=>{
      return fetch(e.request)
      .catch(()=>{ 
        return caches.match('offline-index.html')
      })
    })
  )
})



// ========== response 
this.addEventListener('activate',(e)=>{
  const cahceWhiteList = [];
  cahceWhiteList.push(CACHE_NAME);
  e.waitUntill(
    caches.keys()
    .then((cacheNames)=> Promise.all(
      cacheNames.map(item=>{
        if(!cahceWhiteList.includes(item)){
          return caches.delete(item)
        }
      }))
  )
  )
})