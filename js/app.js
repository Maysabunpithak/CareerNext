'use strict';
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));
const typeNames={fulltime:'Full time',parttime:'Part time',internship:'Internship',project:'Project',volunteer:'Volunteer'};
const levelNames={entry:'Entry',intermediate:'Intermediate',expert:'Expert'};
const money=n=>n.toLocaleString('th-TH');
const dateLabel=s=>new Date(s+'T00:00:00').toLocaleDateString('th-TH',{day:'numeric',month:'short',year:'numeric'});
const salary=j=>j.max ? `฿${money(j.min)} – ฿${money(j.max)}/เดือน` : 'อาสาสมัคร (ไม่มีค่าตอบแทน)';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let saved=new Set();
try { const ids=JSON.parse(localStorage.getItem('opencareers.saved')||'[]'); if(Array.isArray(ids)) saved=new Set(ids.filter(id=>JOBS.some(j=>j.id===id))); } catch {}
let currentJob=null, returnFocus=null;
const state={keyword:'',location:''};
function saveJobs(){try{localStorage.setItem('opencareers.saved',JSON.stringify([...saved]));}catch{}}
function likeButton(j){return `<button class="heart-btn ${saved.has(j.id)?'liked':''}" data-like="${j.id}" aria-label="บันทึกงาน ${esc(j.title)}" aria-pressed="${saved.has(j.id)}">${saved.has(j.id)?'♥':'♡'}</button>`;}
function tags(j){return `<div class="job-tags"><span class="tag level">${levelNames[j.level]}</span><span class="tag type">${typeNames[j.type]}</span><span class="tag remote">${esc(j.location)}</span></div>`;}
function card(j){return `<article class="job-card show" data-id="${j.id}"><div class="job-header"><div class="job-company-info"><div class="company-logo ${j.color}" aria-hidden="true">${j.logo}</div><div class="job-info"><h3><a href="#job/${j.id}" class="job-title-link">${esc(j.title)}</a></h3><p class="job-company">${esc(j.company)}</p></div></div><div class="job-actions">${likeButton(j)}<button class="apply-btn" data-apply="${j.id}">สมัครงาน</button></div></div>${tags(j)}<p class="job-description">${esc(j.summary)}</p><div class="job-footer"><span class="job-salary">${salary(j)}</span><time class="job-posted" datetime="${j.date}">ประกาศ ${dateLabel(j.date)}</time></div><a class="details-link" href="#job/${j.id}">ดูรายละเอียดและคุณสมบัติ →</a></article>`;}
function renderJobs(){
 const types=Object.keys(typeNames).filter(id=>$('#'+id).checked), levels=Object.keys(levelNames).filter(id=>$('#'+id).checked);
 const minimum=Number($('#salaryRange').value); $('#minSalary').textContent='฿'+money(minimum);
 let jobs=JOBS.filter(j=>(!types.length||types.includes(j.type))&&(!levels.length||levels.includes(j.level))&&j.min>=minimum&&(!$('#savedOnly').checked||saved.has(j.id))&&(`${j.title} ${j.company} ${j.summary} ${j.skills.join(' ')}`.toLowerCase().includes(state.keyword))&&j.location.toLowerCase().includes(state.location));
 const sort=$('#sort').value;
 jobs.sort(sort==='salary'?((a,b)=>b.max-a.max):sort==='name'?((a,b)=>a.title.localeCompare(b.title)):((a,b)=>b.date.localeCompare(a.date)));
 $('#jobsList').innerHTML=jobs.map(card).join(''); $('#resultCount').textContent=`พบ ${jobs.length} ตำแหน่ง จากทั้งหมด ${JOBS.length} ตำแหน่ง`; $('#emptyState').hidden=jobs.length>0;
}
function resetSearch(){
 $$('.filters-panel input[type="checkbox"]').forEach(el=>el.checked=false); $('#savedOnly').checked=false;
 $('#salaryRange').value='0'; $('#searchForm').reset(); state.keyword='';state.location='';renderJobs();
}
function showSection(id){
 $$('.section').forEach(s=>s.classList.toggle('active',s.id===id));
 $$('.nav-link').forEach(a=>{const active=a.dataset.section===(id==='details'?'jobs':id);a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 window.scrollTo({top:0,behavior:'auto'});
}
function detail(j){
 const list=items=>'<ul>'+items.map(s=>`<li>${esc(s)}</li>`).join('')+'</ul>';
 $('#jobDetails').innerHTML=`<article class="detail-card"><div class="job-header"><div class="job-company-info"><div class="company-logo ${j.color}">${j.logo}</div><div><h1 tabindex="-1" id="detailHeading">${esc(j.title)}</h1><p class="job-company">${esc(j.company)}</p></div></div>${likeButton(j)}</div>${tags(j)}<p class="detail-summary">${esc(j.summary)}</p><div class="job-footer"><strong class="job-salary">${salary(j)}</strong><time datetime="${j.date}">ประกาศ ${dateLabel(j.date)}</time></div><div class="detail-grid"><section><h2>หน้าที่และความรับผิดชอบ</h2>${list(j.duties)}</section><section><h2>คุณสมบัติผู้สมัคร</h2>${list(j.qualifications)}</section><section><h2>ทักษะที่ต้องการ</h2>${list(j.skills)}</section><section><h2>สวัสดิการและสิ่งที่จะได้รับ</h2>${list(j.benefits)}</section></div><div class="detail-contact"><h2>ช่องทางติดต่อ</h2><p>ฝ่ายบุคคล — ${esc(j.company)}</p><p>${esc(j.contact)} <span class="sample-label">(อีเมลตัวอย่าง)</span></p></div><button class="submit-btn" data-apply="${j.id}">สมัครตำแหน่ง ${esc(j.title)}</button><button type="button" class="upskill-link" data-upskill="${j.id}">พัฒนาทักษะสำหรับงานนี้ →</button></article>`;
 showSection('details'); document.title=j.title+' | CareerNext'; $('#detailHeading').focus();
}
function route(){
 if($('#applyModal').classList.contains('active'))closeModal();
 const hash=location.hash.slice(1);
 if(hash.startsWith('course/')){
  const code=hash.slice(7),course=COURSES.find(c=>c.code===code);
  if(course){showSection('training');document.title=course.title+' | CareerNext';const target=$('#course-'+code);target.focus({preventScroll:true});target.scrollIntoView({block:'start'});return;}
 }
 if(hash.startsWith('job/')){const j=JOBS.find(j=>j.id===hash.slice(4));if(j){detail(j);return;}}
 const id=['jobs','training','upskill','about'].includes(hash)?hash:'jobs'; showSection(id);
 document.title=id==='upskill'?'วางแผน Upskill | CareerNext':id==='training'?'หลักสูตรอบรม | CareerNext':id==='about'?'เกี่ยวกับเรา | CareerNext':'หางานเทคโนโลยี | CareerNext';
}
$$('.nav-link').forEach(a=>a.href='#'+a.dataset.section);
window.addEventListener('hashchange',route);
$('#backToJobs').addEventListener('click',()=>{location.hash='jobs';});
$('#searchForm').addEventListener('submit',e=>{e.preventDefault();state.keyword=$('#searchInput').value.trim().toLowerCase();state.location=$('#locationInput').value.trim().toLowerCase();renderJobs();});
$$('.filters-panel input[type="checkbox"], #savedOnly, #sort').forEach(el=>el.addEventListener('change',renderJobs));
$('#salaryRange').addEventListener('input',renderJobs);
$('#clearFilters').addEventListener('click',e=>{e.preventDefault();resetSearch();});
$('#resetSearch').addEventListener('click',resetSearch);
const form=$('#jobApplicationForm'),modal=$('#applyModal'),success=$('#successMessage');
const fields=['prefix','fullname','phone','email','address','education','aiTier','applicationJobId','consent'];
$('#applicationJobId').innerHTML='<option value="">เลือกตำแหน่งงาน</option>'+JOBS.map(j=>`<option value="${j.id}">${esc(j.title)}</option>`).join('');

$('#applicationJobId').addEventListener('change',()=>{currentJob=JOBS.find(j=>j.id===$('#applicationJobId').value)||null;});
fields.forEach(id=>{
 const el=$('#'+id),errorId='error'+id[0].toUpperCase()+id.slice(1);
 if(!$('#'+errorId)){const slot=document.createElement('div');slot.id=errorId;slot.className='error-msg';el.after(slot);}
 el.setAttribute('aria-describedby',errorId);el.addEventListener('input',()=>{setError(id,'');success.style.display='none';});
});
function setError(id,message){const el=$('#'+id);$('#'+el.getAttribute('aria-describedby')).textContent=message;el.setAttribute('aria-invalid',String(Boolean(message)));}
function openModal(id){
 const j=JOBS.find(j=>j.id===id); currentJob=j||null; returnFocus=document.activeElement;
 form.reset();fields.forEach(id=>setError(id,''));success.style.display='none';$('#applicationJobId').value=j?.id||'';
 resetResume();
 $('#applyTitle').textContent='ลงทะเบียนสมัครงานและระบุระดับทักษะ AI';modal.classList.add('active');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');
 $$('.header,.main,.site-footer').forEach(el=>el.inert=true);$('#prefix').focus();
}
function closeModal(){resetResume();form.reset();fields.forEach(id=>setError(id,''));success.style.display='none';modal.classList.remove('active');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');$$('.header,.main,.site-footer').forEach(el=>el.inert=false);if(returnFocus?.isConnected)returnFocus.focus();}
$('#modalCloseBtn').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
modal.addEventListener('keydown',e=>{
 if(e.key==='Escape'){e.preventDefault();closeModal();}
 if(e.key==='Tab'){const elements=$$('button,input:not([type="hidden"]),select,textarea',modal).filter(el=>!el.disabled&&el.getClientRects().length);const first=elements[0],last=elements[elements.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
});
document.addEventListener('click',e=>{
 const apply=e.target.closest('[data-apply]');if(apply)openModal(apply.dataset.apply);
 const like=e.target.closest('[data-like]');if(like){const id=like.dataset.like;saved.has(id)?saved.delete(id):saved.add(id);saveJobs();if(like.closest('#jobsList')){renderJobs();const replacement=$(`[data-like="${id}"]`);if(replacement)replacement.focus();else $('#savedOnly').focus();}else{like.classList.toggle('liked',saved.has(id));like.setAttribute('aria-pressed',String(saved.has(id)));like.textContent=saved.has(id)?'♥':'♡';renderJobs();}}
});
function validateApplication(data){
 const errors={};
 if(!['นาย','นาง','นางสาว','ไม่ประสงค์ระบุ'].includes(data.prefix))errors.prefix='กรุณาเลือกคำนำหน้า';
 if(!['Beginner','Pioneer','Innovator'].includes(data.aiTier))errors.aiTier='กรุณาเลือกระดับสมรรถนะ AI';
 if(!JOBS.some(j=>j.id===data.jobId))errors.applicationJobId='กรุณาเลือกตำแหน่งงานที่มีในระบบ';
 if(data.consent!=='yes')errors.consent='กรุณาอ่านและให้ความยินยอมก่อนลงทะเบียน';
 if(!data.fullname||data.fullname.trim().length<2)errors.fullname='กรุณากรอกชื่อ–นามสกุล';
 if(!/^0\d{9}$/.test((data.phone||'').replace(/[\s()-]/g,'')))errors.phone='กรุณากรอกเบอร์โทรศัพท์ 10 หลัก เริ่มต้นด้วย 0';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((data.email||'').trim()))errors.email='กรุณากรอกอีเมลให้ถูกต้อง';
 if(!data.address||data.address.trim().length<5)errors.address='กรุณากรอกที่อยู่ให้ครบถ้วน';
 if(!['diploma','bachelor','master','doctorate'].includes(data.education))errors.education='กรุณาเลือกระดับการศึกษา';
 return errors;
}
form.addEventListener('submit',e=>{
 e.preventDefault();success.style.display='none';const data=Object.fromEntries(new FormData(form));const errors=validateApplication(data);const resumeError=validateResume($("#resume").files[0]);showResumeError(resumeError);if(resumeError){$("#resume").focus();return;}fields.forEach(id=>setError(id,errors[id]||''));
 if(Object.keys(errors).length){$('#'+Object.keys(errors)[0]).focus();return;}
 currentJob=JOBS.find(j=>j.id===data.jobId);
 success.textContent=`ลงทะเบียนความสนใจตำแหน่ง ${currentJob.title} เรียบร้อยแล้ว ระดับ AI: ${data.aiTier} (โหมดสาธิต ไม่มีการส่งหรือเก็บข้อมูลส่วนบุคคล)`;success.style.display='block';resetResume();form.reset();currentJob=null;success.focus();
});
$$('.training-card').forEach(el=>el.classList.add('show'));
renderJobs();route();

/* Editable location combobox anchored below its input. */
function setupSearchCombobox(inputId,listId,places,emptyMessage){
 const input=$(inputId), list=$(listId), box=input.closest('.location-combobox'), toggle=$('.location-toggle',box);
 let active=-1, visible=[];
 function close(){list.hidden=true;input.setAttribute('aria-expanded','false');toggle.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');active=-1;}
 function open(all=false){
  visible=places.filter(p=>all||p.toLowerCase().includes(input.value.trim().toLowerCase()));
  active=-1;input.removeAttribute('aria-activedescendant');
  list.innerHTML=visible.length?visible.map((p,i)=>`<li role="option" id="${list.id}-option-${i}" data-location-index="${i}" aria-selected="false">${esc(p)}</li>`).join(''):'<li class="location-empty" role="presentation">'+esc(emptyMessage)+'</li>';
  list.hidden=false;input.setAttribute('aria-expanded','true');toggle.setAttribute('aria-expanded','true');
 }
 function choose(i){if(!visible[i])return;input.value=visible[i];close();input.focus();}
 function highlight(){Array.from(list.querySelectorAll('[role="option"]')).forEach((el,i)=>{el.setAttribute('aria-selected',String(i===active));if(i===active){input.setAttribute('aria-activedescendant',el.id);el.scrollIntoView({block:'nearest'});}});}
 input.addEventListener('focus',()=>open(true));
 input.addEventListener('click',()=>{if(list.hidden)open(true);});
 input.addEventListener('input',()=>open());
 toggle.addEventListener('click',()=>{const wasOpen=!list.hidden;input.focus();if(wasOpen)close();else open(true);});
 list.addEventListener('pointerdown',e=>e.preventDefault());
 list.addEventListener('click',e=>{const option=e.target.closest('[data-location-index]');if(option)choose(Number(option.dataset.locationIndex));});
 input.addEventListener('keydown',e=>{
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(list.hidden)open(true);if(visible.length){active=(active+(e.key==='ArrowDown'?1:-1)+visible.length)%visible.length;highlight();}}
  else if(e.key==='Enter'&&!list.hidden&&active>=0){e.preventDefault();choose(active);}
  else if(e.key==='Escape'){e.preventDefault();close();}
  else if(e.key==='Tab')close();
 });
 box.addEventListener('focusout',e=>{if(!box.contains(e.relatedTarget))close();});
 document.addEventListener('pointerdown',e=>{if(!box.contains(e.target))close();});
 $('#searchForm').addEventListener('submit',close);
 $('#searchForm').addEventListener('reset',close);
}
setupSearchCombobox('#locationInput','#locationOptions',[...new Set(JOBS.map(j=>j.location))],'ไม่พบในรายการ — พิมพ์สถานที่แล้วกดค้นหางานได้');
setupSearchCombobox('#searchInput','#jobOptions',JOBS.map(j=>j.title),'ไม่พบในรายการ — พิมพ์คำค้นแล้วกดค้นหางานได้');
function validateResume(file){
 if(!file)return '';
 if(!/\.(pdf|doc|docx)$/i.test(file.name))return 'กรุณาเลือกไฟล์ PDF, DOC หรือ DOCX';
 if(file.size===0)return 'ไฟล์นี้ว่างเปล่า กรุณาเลือกไฟล์ใหม่';
 if(file.size>5*1024*1024)return 'ไฟล์ต้องมีขนาดไม่เกิน 5 MB';
 return '';
}
function showResumeError(message){$('#errorResume').textContent=message;$('#resume').setAttribute('aria-invalid',String(Boolean(message)));}
function resetResume(){$('#resume').value='';$('#resumeStatus').textContent='';$('#removeResume').hidden=true;showResumeError('');}
$('#resume').addEventListener('change',()=>{
 const file=$('#resume').files[0],error=validateResume(file);
 showResumeError(error);
 $('#resumeStatus').textContent=file&&!error?'ไฟล์ที่เลือก: '+file.name+' ('+(file.size/1024/1024).toFixed(2)+' MB) — ยังไม่ได้ส่งไฟล์':'';
 $('#removeResume').hidden=!file;
});
$('#removeResume').addEventListener('click',()=>{resetResume();$('#resume').focus();});