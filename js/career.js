'use strict';
// Self-reported levels and transparent learning rules; no external AI or storage.
const LearningPlan = (() => {
 const labels=['ยังไม่รู้ / ยังไม่ได้ระบุ','รู้พื้นฐาน','ใช้งานได้','เชี่ยวชาญ'];
 // Entries follow each role's skills; order expresses suggested prerequisites.
 const mapping={
"ml-engineer":{"order":[0,1,2,3],"codes":[null,null,null,null]},
"prompt-specialist":{"order":[0,1,2,3],"codes":["PROMPT",null,null,"ETHICS"]},
"ai-product":{"order":[0,1,2,3],"codes":["HUMAN",null,"SYSTEM","ETHICS"]},
"ux-designer":{"order":[0,1,2,3],"codes":["HUMAN",null,null,null]},
"bi-analyst":{"order":[0,1,2,3],"codes":[null,null,null,null]},
"ai-qa":{"order":[0,1,2,3],"codes":[null,null,null,"ETHICS"]},
"mlops":{"order":[0,1,2,3],"codes":[null,null,null,null]},
"security-analyst":{"order":[0,1,2,3],"codes":[null,null,null,"ETHICS"]},
"chatbot":{"order":[0,1,2,3],"codes":[null,null,"PROMPT","SYSTEM"]},
"automation":{"order":[0,1,2,3],"codes":[null,null,null,"SYSTEM"]},
"ai-video":{"order":[0,1,2,3],"codes":[null,"CREATE",null,"ETHICS"]},
"data-intern":{"order":[0,1,2,3],"codes":[null,null,null,null]},
"ai-governance":{"order":[0,1,2,3],"codes":["ETHICS","ETHICS",null,"HUMAN"]},
  frontend:{order:[0,3,1,2],codes:[null,null,'PROMPT',null]},
  devops:{order:[0,3,2,1],codes:['PROMPT','SYSTEM',null,'ETHICS']},
  data:{order:[0,1,3,2],codes:[null,null,'SYSTEM','ETHICS']},
  'ai-intern':{order:[0,3,1,2],codes:[null,null,null,null]},
  digital:{order:[1,0,3,2],codes:['CREATE','PROMPT',null,null]},
  mobile:{order:[1,3,2,0],codes:[null,null,null,null]},
  mentor:{order:[1,2,0],codes:[null,null,null]}
 };
 function build(job,levels,catalog){
  const config=mapping[job.id],steps=[];
  if(!config)return steps;
  config.order.forEach((index,order)=>{
   const skill=job.skills[index],level=Number(levels[skill]||0),code=config.codes[index];
   if(level===3)return;
   const course=catalog.find(c=>c.code===code);
   const stage=level===0?0:level===1?1:2;
   const advanced=stage===2;
   // Foundation courses are not presented as specialist-level training.
   const usable=course&&!advanced;
   const title=usable?course.title:(stage===0?'พื้นฐาน ':stage===1?'ฝึกใช้งานจริง: ':'ต่อยอดขั้นสูง: ')+skill;
   const reason=stage===0?'ยังไม่ได้ระบุว่ามีความรู้ ควรเริ่มพื้นฐานด้านนี้ก่อน':
    stage===1?'รู้พื้นฐานแล้ว ควรฝึกประยุกต์และตรวจสอบผลงานด้วยตนเอง':
    job.level==='expert'?'งานนี้ระบุระดับ Expert ควรต่อยอดการออกแบบ แก้ปัญหาซับซ้อน และอธิบายข้อจำกัด':
    'ใช้งานได้แล้ว แนะนำต่อยอดเพิ่มเติมเพื่อเพิ่มความมั่นใจและคุณภาพผลงาน';
   const practice=stage===0?'เรียนแนวคิดหลักและทำแบบฝึกเล็ก ๆ ก่อนเริ่มโครงการ':
    stage===1?'ทำโครงการที่ใช้ทักษะนี้ พร้อมทดสอบ อธิบายวิธีทำ และขอข้อเสนอแนะ':
    'ทำโครงการที่มีข้อจำกัดจริง เปรียบเทียบวิธีแก้ปัญหา และให้ผู้มีประสบการณ์ตรวจผลงาน';
   steps.push({stage,order,title,skills:[skill],level,reason,practice,course:usable?course:null,
    note:usable?'หลักสูตรนี้ช่วยเสริมส่วนที่เกี่ยวข้องกับทักษะดังกล่าว อาจต้องฝึกเฉพาะทางเพิ่มเติม':
    'หัวข้อเรียน / ฝึกเพิ่มเติม — ยังไม่มีหลักสูตรเฉพาะด้านนี้ในเว็บ',
    optional:advanced&&job.level!=='expert'});
  });
  steps.sort((a,b)=>a.stage-b.stage||a.order-b.order);
  // A shared course appears once and lists all the skills it supports.
  const merged=[];
  for(const step of steps){
   const prior=step.course&&merged.find(s=>s.course?.code===step.course.code);
   if(prior){prior.skills.push(...step.skills);continue;}
   merged.push(step);
  }
  // Role-related advanced AI courses require a foundation first.
  const needsAdvancedAI=merged.some(s=>s.course&&['CREATE','SYSTEM'].includes(s.course.code));
  const promptIndex=job.skills.findIndex(s=>/Prompt|Generative AI/i.test(s));
  const promptLevel=promptIndex<0?0:Number(levels[job.skills[promptIndex]]||0);
  if(needsAdvancedAI&&((promptIndex>=0&&promptLevel===0)||(promptIndex<0&&job.skills.some(skill=>/RAG|LLM|Generative AI/i.test(skill)&&!levels[skill])))&&!merged.some(s=>s.course?.code==='PROMPT')){
   const course=catalog.find(c=>c.code==='PROMPT');
   if(course)merged.unshift({stage:0,order:-1,title:course.title,skills:['พื้นฐาน Generative AI / Prompt'],level:0,
    reason:'ปูพื้นฐานการใช้และประเมินคำตอบของ AI ก่อนเรียนหลักสูตรประยุกต์หรือออกแบบระบบ',
    practice:'ฝึกเขียน Prompt และตรวจสอบคำตอบก่อนเริ่มหลักสูตรต่อไป',course,
    note:'ขั้นเตรียมพื้นฐานสำหรับหลักสูตรที่แนะนำ',optional:false});
  }
  const prerequisite=merged.findIndex(s=>s.course?.code==='PROMPT');
  const dependent=merged.findIndex(s=>s.course&&['CREATE','SYSTEM'].includes(s.course.code));
  if(prerequisite>=0&&dependent>=0&&prerequisite>dependent){const [step]=merged.splice(prerequisite,1);merged.splice(dependent,0,step);}
  return merged;
 }
 return {build,labels};
})();
(() => {
 const planner=$('#careerPlanner'),levels={};
 const interested=new Set();
 try{const saved=JSON.parse(localStorage.getItem('careernext.courses')||'[]');if(Array.isArray(saved))saved.filter(code=>COURSES.some(c=>c.code===code)).forEach(code=>interested.add(code));}catch{}
 function interestButton(code){
  const active=interested.has(code),course=COURSES.find(c=>c.code===code);
  return `<button type="button" class="course-interest" data-interest="${code}" aria-pressed="${active}" aria-label="สนใจหลักสูตร ${esc(course.title)}"><span aria-hidden="true">${active?'♥':'♡'}</span> ${active?'สนใจแล้ว':'สนใจหลักสูตร'}</button>`;
 }
 function filterCourses(){
  const only=$('#interestedCoursesOnly').checked;let count=0;
  $$('#training .training-card').forEach(card=>{const show=!only||interested.has(card.id.replace('course-',''));card.hidden=!show;if(show)count++;});
  $('#noInterestedCourses').hidden=count>0;
 }
 const grid=$('#training .training-grid');
 grid.insertAdjacentHTML('beforebegin','<label class="course-interest-filter"><input type="checkbox" id="interestedCoursesOnly"> แสดงเฉพาะหลักสูตรที่สนใจ</label><p id="noInterestedCourses" class="empty-state" hidden>ยังไม่มีหลักสูตรที่สนใจ ยกเลิกตัวกรองเพื่อดูหลักสูตรทั้งหมดแล้วกดหัวใจได้เลย</p>');
 COURSES.forEach(course=>$('#course-'+course.code+' .training-content').insertAdjacentHTML('beforeend',interestButton(course.code)));
 $('#interestedCoursesOnly').addEventListener('change',filterCourses);
 document.addEventListener('click',event=>{
  const button=event.target.closest('[data-interest]');if(!button)return;
  const code=button.dataset.interest;
  interested.has(code)?interested.delete(code):interested.add(code);
  try{localStorage.setItem('careernext.courses',JSON.stringify([...interested]));}catch{}
  $$('[data-interest]').filter(el=>el.dataset.interest===code).forEach(el=>{const active=interested.has(code);el.setAttribute('aria-pressed',String(active));el.innerHTML='<span aria-hidden="true">'+(active?'♥':'♡')+'</span> '+(active?'สนใจแล้ว':'สนใจหลักสูตร');});
  filterCourses();
 });
 let report=null;
 const results=document.createElement('section');
 results.id='careerResults';results.hidden=true;results.setAttribute('aria-label','สรุปแผนพัฒนาทักษะ');
 $('.upskill-workspace').append(results);
 $('#upskillJobId').innerHTML='<option value="">เลือกงานที่สนใจ</option>'+JOBS.map(j=>`<option value="${j.id}">${esc(j.title)}</option>`).join('');
 const job=()=>JOBS.find(j=>j.id===$('#upskillJobId').value);
 const stepsFor=j=>LearningPlan.build(j,levels,COURSES);
 function stepsHTML(steps){
  if(!steps.length)return '<div class="next-step">คุณระบุว่าเชี่ยวชาญครบทุกด้านแล้ว จึงไม่แนะนำให้เรียนพื้นฐานซ้ำ ลองทำ Portfolio ตามงานที่สนใจและขอให้ผู้มีประสบการณ์ประเมินผลงาน</div>';
  return '<p class="field-help">เรียงจากพื้นฐานที่ยังขาด → ฝึกใช้งาน → ต่อยอดขั้นสูง ภายในแต่ละช่วงเริ่มจากทักษะพื้นฐานของสายงานก่อน ลำดับนี้เป็นแนวทางจากข้อมูลที่คุณระบุ</p><ol class="recommended-courses">'+steps.map((s,i)=>`<li><span class="plan-tier">${i===0?'เริ่มที่นี่':`ลำดับ ${i+1}`} · ${['ปูพื้นฐาน','ฝึกประยุกต์','ต่อยอดขั้นสูง'][s.stage]}${s.optional?' · ทางเลือกเพิ่มเติม':''}</span><h4>${esc(s.title)}</h4><p><strong>พัฒนาด้าน:</strong> ${esc(s.skills.join(' · '))}</p><p>${esc(s.reason)}</p><p class="field-help">${esc(s.practice)}</p><p class="field-help">${esc(s.note)}</p>${s.course?`<p>${s.course.hours} ชั่วโมง · ฿${money(s.course.price)}</p><a class="details-link course-catalog-link" href="#course/${s.course.code}">ดูรายละเอียดหลักสูตร →</a>${interestButton(s.course.code)}`:''}</li>`).join('')+'</ol>';
 }
 function overview(j){
  const counts=[0,0,0,0];j.skills.forEach(s=>counts[levels[s]||0]++);
  return `<p class="skill-count" role="status">เริ่มเรียน ${counts[0]} ด้าน · ฝึกจากพื้นฐาน ${counts[1]} ด้าน · ต่อยอด ${counts[2]} ด้าน · เชี่ยวชาญแล้ว ${counts[3]} ด้าน</p><p class="field-help">ระดับมาจากการประเมินตนเอง ไม่ใช่ผลสอบหรือการรับรองความพร้อมสมัครงาน</p>`;
 }
 function updateRecommendations(){
  const j=job();if(!j)return;
  $('#skillComparison').innerHTML=overview(j);
  $('#learningRecommendations').innerHTML=stepsHTML(stepsFor(j));
 }
 function refresh(){
  const j=job();
  if(!j){planner.innerHTML='<p>เลือกงานที่สนใจเพื่อดูทักษะที่ควรเรียนและจัดลำดับการพัฒนา</p>';return;}
  planner.innerHTML=`<h3>เส้นทางพัฒนาทักษะสำหรับ ${esc(j.title)}</h3><p class="field-help">เลือกหลักสูตรที่สนใจและระบุระดับความรู้ของคุณ หากไม่เลือก จะถือว่าอยู่ในระดับพื้นฐาน</p><fieldset class="skill-picker"><legend>ความรู้ที่คุณมีในแต่ละด้าน</legend>${j.skills.map((skill,i)=>`<div class="skill-level-row"><label><input type="checkbox" data-skill-index="${i}" ${levels[skill]?'checked':''}> <span>${esc(skill)}</span></label><div id="skill-level-wrap-${i}" ${levels[skill]?'':'hidden'}><label for="skill-level-${i}">ระดับความรู้ด้าน ${esc(skill)}</label><select id="skill-level-${i}" data-level-index="${i}" ${levels[skill]?'':'disabled'}>${[1,2,3].map(n=>`<option value="${n}" ${levels[skill]===n?'selected':''}>${LearningPlan.labels[n]}</option>`).join('')}</select></div></div>`).join('')}</fieldset><div id="skillComparison"></div><h3>ควรเรียนอะไรก่อน?</h3><div id="learningRecommendations"></div>`;
  updateRecommendations();
 }
 planner.addEventListener('change',event=>{
  const j=job();if(!j)return;
  const checkbox=event.target.closest('[data-skill-index]'),select=event.target.closest('[data-level-index]');
  if(checkbox){
   const i=Number(checkbox.dataset.skillIndex);levels[j.skills[i]]=checkbox.checked?1:0;
   $('#skill-level-wrap-'+i).hidden=!checkbox.checked;
   const field=$('#skill-level-'+i);field.disabled=!checkbox.checked;field.value='1';
  }else if(select){levels[j.skills[Number(select.dataset.levelIndex)]]=Number(select.value);}
  else return;
  updateRecommendations();
 });

 $('#upskillJobId').addEventListener('change',()=>{Object.keys(levels).forEach(k=>delete levels[k]);refresh();});
 function clear(){
  Object.keys(levels).forEach(k=>delete levels[k]);report=null;results.innerHTML='';results.hidden=true;
  $('#upskillControls').hidden=false;$('#buildCareerPlan').hidden=false;$('#planError').textContent='';
 }
 function reset(){clear();$('#upskillJobId').value='';$('#interestedCoursesOnly').checked=false;filterCourses();refresh();$('#upskillJobId').focus();}
 $('#buildCareerPlan').addEventListener('click',()=>{
  const j=job();
  if(!j){
   $('#planError').textContent='กรุณาเลือกงานที่สนใจก่อนสร้างแผน';$('#upskillJobId').focus();return;
  }
  $('#planError').textContent='';
  report={job:j,levels:{...levels},steps:stepsFor(j)};
  results.innerHTML=`<div class="summary-heading"><h3>แผนพัฒนาทักษะของคุณ</h3><h4>${esc(j.title)}</h4></div><ul>${j.skills.map(s=>`<li>${esc(s)} — ${LearningPlan.labels[levels[s]||0]}</li>`).join('')}</ul>${overview(j)}${stepsHTML(report.steps)}<p class="field-help">เก็บแผนไว้โดยกดบันทึก PDF แล้วเลือก “บันทึกเป็น PDF” ในหน้าต่างที่เปิดขึ้น</p><div class="summary-actions"><button type="button" class="apply-btn" id="printCareerSummary">บันทึก PDF</button><button type="button" class="apply-btn" id="newCareerPlan" title="ล้างข้อมูลที่เลือกไว้และเริ่มแผนใหม่">ล้างตัวเลือก</button></div>`;
  planner.innerHTML='';$('#upskillControls').hidden=true;$('#buildCareerPlan').hidden=true;results.hidden=false;
  $('#printCareerSummary').addEventListener('click',()=>{document.body.classList.add('printing-career');try{window.print();}finally{document.body.classList.remove('printing-career');}});
  $('#newCareerPlan').addEventListener('click',reset);
  results.setAttribute('tabindex','-1');results.focus();
 });
 document.addEventListener('click',event=>{
  const button=event.target.closest('[data-upskill]');if(!button)return;
  clear();$('#upskillJobId').value=button.dataset.upskill;refresh();
  location.hash='upskill';setTimeout(()=>$('#upskillHeading').focus(),0);
 });
 refresh();
})();