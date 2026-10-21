// Always open each page at the very top
try{if('scrollRestoration' in history)history.scrollRestoration='manual'}catch(e){}
function toTop(){var h=document.documentElement,b=h.style.scrollBehavior;h.style.scrollBehavior='auto';window.scrollTo(0,0);h.style.scrollBehavior=b}
toTop();window.addEventListener('load',toTop);window.addEventListener('pageshow',toTop);
// Mobile menu toggle
(function(){
  var btn=document.querySelector('.menu-btn'), menu=document.getElementById('menu');
  if(btn&&menu){
    btn.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
      btn.textContent=open?'Close':'Menu';
    });
  }
  // Copy buttons for phone and email
  document.querySelectorAll('.copy').forEach(function(b){
    b.addEventListener('click',function(){
      var t=b.getAttribute('data-copy');
      var done=function(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy'},1600)};
      var fallback=function(){var a=b.previousElementSibling;var r=document.createRange();r.selectNodeContents(a);var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Selected'};
      try{navigator.clipboard.writeText(t).then(done,fallback)}catch(e){fallback()}
    });
  });
})();
// Language switch (English / Ukrainian), remembered per browser
(function(){
  function set(l){
    document.documentElement.setAttribute('data-lang',l);
    document.documentElement.lang = l==='uk' ? 'uk' : 'en-CA';
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed', b.dataset.l===l ? 'true':'false')});
    try{localStorage.setItem('rez-lang',l)}catch(e){}
  }
  var saved='en'; try{saved=localStorage.getItem('rez-lang')||'en'}catch(e){}
  set(saved);
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.l)})});
})();
