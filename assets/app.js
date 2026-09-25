const portfolioData={"portrait":["assets/images/portraits/001.jpg","assets/images/portraits/002.jpg","assets/images/portraits/003.jpg","assets/images/portraits/004.jpg","assets/images/portraits/005.jpg","assets/images/portraits/006.jpg","assets/images/portraits/007.jpg","assets/images/portraits/008.jpg","assets/images/portraits/009.jpg","assets/images/portraits/010.jpg","assets/images/portraits/011.jpg","assets/images/portraits/012.jpg","assets/images/portraits/013.jpg","assets/images/portraits/014.jpg","assets/images/portraits/015.jpg","assets/images/portraits/016.jpg","assets/images/portraits/017.jpg","assets/images/portraits/018.jpg","assets/images/portraits/019.jpg","assets/images/portraits/020.jpg","assets/images/portraits/021.jpg","assets/images/portraits/022.jpg","assets/images/portraits/023.jpg","assets/images/portraits/024.jpg","assets/images/portraits/025.jpg","assets/images/portraits/026.jpg","assets/images/portraits/027.jpg","assets/images/portraits/028.jpg","assets/images/portraits/029.jpg","assets/images/portraits/030.jpg","assets/images/portraits/031.jpg","assets/images/portraits/032.jpg","assets/images/portraits/033.jpg","assets/images/portraits/034.jpg","assets/images/portraits/035.jpg","assets/images/portraits/036.jpg","assets/images/portraits/037.jpg","assets/images/portraits/038.jpg","assets/images/portraits/039.jpg","assets/images/portraits/040.jpg","assets/images/portraits/041.jpg","assets/images/portraits/042.jpg","assets/images/portraits/043.jpg"],"hochzeit":["assets/images/hochzeiten/001.jpg","assets/images/hochzeiten/002.jpg","assets/images/hochzeiten/003.jpg","assets/images/hochzeiten/004.jpg","assets/images/hochzeiten/005.jpg","assets/images/hochzeiten/006.jpg","assets/images/hochzeiten/007.jpg","assets/images/hochzeiten/008.jpg","assets/images/hochzeiten/009.jpg","assets/images/hochzeiten/010.jpg","assets/images/hochzeiten/011.jpg","assets/images/hochzeiten/012.jpg","assets/images/hochzeiten/013.jpg","assets/images/hochzeiten/014.jpg","assets/images/hochzeiten/015.jpg","assets/images/hochzeiten/016.jpg","assets/images/hochzeiten/017.jpg","assets/images/hochzeiten/018.jpg","assets/images/hochzeiten/019.jpg","assets/images/hochzeiten/020.jpg","assets/images/hochzeiten/021.jpg","assets/images/hochzeiten/022.jpg","assets/images/hochzeiten/023.jpg","assets/images/hochzeiten/024.jpg","assets/images/hochzeiten/025.jpg","assets/images/hochzeiten/026.jpg","assets/images/hochzeiten/027.jpg","assets/images/hochzeiten/028.jpg","assets/images/hochzeiten/029.jpg","assets/images/hochzeiten/030.jpg","assets/images/hochzeiten/031.jpg","assets/images/hochzeiten/032.jpg","assets/images/hochzeiten/033.jpg","assets/images/hochzeiten/034.jpg","assets/images/hochzeiten/035.jpg","assets/images/hochzeiten/036.jpg","assets/images/hochzeiten/037.jpeg","assets/images/hochzeiten/038.jpeg","assets/images/hochzeiten/039.jpeg","assets/images/hochzeiten/040.jpeg","assets/images/hochzeiten/041.jpeg","assets/images/hochzeiten/042.jpeg","assets/images/hochzeiten/043.jpeg","assets/images/hochzeiten/044.jpeg","assets/images/hochzeiten/045.jpeg","assets/images/hochzeiten/046.jpeg","assets/images/hochzeiten/047.jpeg","assets/images/hochzeiten/048.jpeg","assets/images/hochzeiten/049.jpeg","assets/images/hochzeiten/050.jpeg","assets/images/hochzeiten/051.jpeg","assets/images/hochzeiten/052.jpeg","assets/images/hochzeiten/053.jpeg","assets/images/hochzeiten/054.jpeg","assets/images/hochzeiten/055.jpeg","assets/images/hochzeiten/056.jpeg","assets/images/hochzeiten/057.jpeg","assets/images/hochzeiten/058.jpeg","assets/images/hochzeiten/059.jpeg","assets/images/hochzeiten/060.jpeg","assets/images/hochzeiten/061.jpeg","assets/images/hochzeiten/062.jpeg","assets/images/hochzeiten/063.jpeg","assets/images/hochzeiten/064.jpeg","assets/images/hochzeiten/065.jpeg","assets/images/hochzeiten/066.jpeg","assets/images/hochzeiten/067.jpeg","assets/images/hochzeiten/068.jpg","assets/images/hochzeiten/069.jpeg","assets/images/hochzeiten/070.jpg","assets/images/hochzeiten/071.jpeg","assets/images/hochzeiten/072.jpeg","assets/images/hochzeiten/073.jpeg","assets/images/hochzeiten/074.jpg","assets/images/hochzeiten/075.jpg","assets/images/hochzeiten/076.jpg","assets/images/hochzeiten/077.jpeg","assets/images/hochzeiten/078.jpg","assets/images/hochzeiten/079.jpg","assets/images/hochzeiten/080.jpg","assets/images/hochzeiten/081.jpg","assets/images/hochzeiten/082.jpg","assets/images/hochzeiten/083.jpg","assets/images/hochzeiten/084.jpg"],"bts":["assets/images/event-bts/001.jpg","assets/images/event-bts/002.jpg","assets/images/event-bts/003.jpg","assets/images/event-bts/004.jpg","assets/images/event-bts/005.jpg","assets/images/event-bts/006.jpg","assets/images/event-bts/007.jpg","assets/images/event-bts/008.jpg","assets/images/event-bts/009.jpg","assets/images/event-bts/010.jpg","assets/images/event-bts/011.jpg","assets/images/event-bts/012.jpg","assets/images/event-bts/013.jpg","assets/images/event-bts/014.jpg","assets/images/event-bts/015.jpg","assets/images/event-bts/016.jpg","assets/images/event-bts/017.jpg","assets/images/event-bts/018.jpg","assets/images/event-bts/019.jpg","assets/images/event-bts/020.jpg","assets/images/event-bts/021.jpg","assets/images/event-bts/022.jpg","assets/images/event-bts/023.jpg"],"produkte":["assets/images/corporate/001.jpg","assets/images/corporate/002.jpg","assets/images/corporate/003.jpg","assets/images/corporate/004.jpg","assets/images/corporate/005.jpg","assets/images/corporate/006.jpg","assets/images/corporate/007.jpg","assets/images/corporate/008.jpg"],"about":["assets/images/about/portrait.jpg"]};

(()=>{
const data=portfolioData;
const g=document.querySelector('#gallery');
const names={portrait:'Portraits',hochzeit:'Hochzeiten',produkte:'Corporate',bts:'Event / BTS'};
const lb=document.querySelector('#lightbox');
const lbImg=lb.querySelector('img');
const closeBtn=lb.querySelector('.lightbox-close');
const prevBtn=lb.querySelector('.lightbox-prev');
const nextBtn=lb.querySelector('.lightbox-next');
let current='hochzeit';
let currentIndex=0;

function showImage(index){
  const images=data[current];
  currentIndex=(index+images.length)%images.length;
  lbImg.src=images[currentIndex];
  lbImg.alt=`${names[current]} – Portfolio ${currentIndex+1} von ${images.length}`;
}
function openLightbox(index){
  showImage(index);
  lb.classList.add('open');
  document.body.classList.add('locked');
}
function close(){
  lb.classList.remove('open');
  document.body.classList.remove('locked');
}
function render(filter='hochzeit'){
  current=filter;g.innerHTML='';
  const cols=window.innerWidth<=700?2:3;
  const holders=[];
  for(let c=0;c<cols;c++){
    const d=document.createElement('div');d.className='gallery-column';holders.push(d);g.appendChild(d)
  }
  data[filter].forEach((u,i)=>{
    const f=document.createElement('figure');
    f.innerHTML=`<img src="${u}" loading="lazy" alt="${names[filter]} – Portfolio ${i+1}">`;
    f.onclick=()=>openLightbox(i);
    holders[i%cols].appendChild(f)
  })
}
render();

function correctInitialAnchor(){
  const hash=window.location.hash;
  if(hash!=='#about' && hash!=='#contact') return;

  const target=document.querySelector(hash);
  if(!target) return;

  const correct=()=>target.scrollIntoView({
    behavior:'auto',
    block:'start'
  });

  correct();

  window.addEventListener('load',()=>{
    correct();
    setTimeout(correct,300);
    setTimeout(correct,1000);
  },{once:true});
}

correctInitialAnchor();
  
document.querySelectorAll('.portfolio-tabs button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.portfolio-tabs button').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-selected','false')});
  b.classList.add('active');b.setAttribute('aria-selected','true');render(b.dataset.filter)
});
let lastCols=window.innerWidth<=700?2:3;
window.addEventListener('resize',()=>{const c=window.innerWidth<=700?2:3;if(c!==lastCols){lastCols=c;render(current)}});
closeBtn.onclick=close;
prevBtn.onclick=e=>{e.stopPropagation();showImage(currentIndex-1)};
nextBtn.onclick=e=>{e.stopPropagation();showImage(currentIndex+1)};
lb.onclick=e=>{if(e.target===lb)close()};
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('open'))return;
  if(e.key==='Escape')close();
  if(e.key==='ArrowLeft')showImage(currentIndex-1);
  if(e.key==='ArrowRight')showImage(currentIndex+1);
});
let touchStartX=0,touchStartY=0;
lb.addEventListener('touchstart',e=>{if(e.touches.length!==1)return;touchStartX=e.touches[0].clientX;touchStartY=e.touches[0].clientY},{passive:true});
lb.addEventListener('touchend',e=>{
  if(e.changedTouches.length!==1)return;
  const dx=e.changedTouches[0].clientX-touchStartX;
  const dy=e.changedTouches[0].clientY-touchStartY;
  if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.2){showImage(currentIndex+(dx<0?1:-1))}
},{passive:true});
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('.menu').onclick=()=>document.querySelector('nav').classList.toggle('open');
const topBtn=document.querySelector('#backToTop');
const bottomBtn=document.querySelector('#toBottom');
const toggleScrollButtons=()=>{topBtn.classList.toggle('visible',window.scrollY>650);const nearBottom=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-180;bottomBtn.classList.toggle('hidden',nearBottom)};
window.addEventListener('scroll',toggleScrollButtons,{passive:true});window.addEventListener('resize',toggleScrollButtons);toggleScrollButtons();
topBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});bottomBtn.onclick=()=>window.scrollTo({top:document.documentElement.scrollHeight,behavior:'smooth'});
})();
