const target = new Date('2026-08-09T06:00:00+05:30').getTime();
const boxes = document.querySelectorAll('#countdown div b');
function tick(){
  const diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  [d,h,m,s].forEach((v,i)=> boxes[i].textContent = String(v).padStart(2,'0'));
}
tick(); setInterval(tick,1000);

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('registrationForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('successMsg').classList.remove('hidden');
  this.scrollIntoView({behavior:'smooth', block:'center'});
});
