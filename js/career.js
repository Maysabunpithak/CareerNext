'use strict';
// Explainable rules over the six project courses; no remote AI or applicant storage.
(() => {
  const planner = $('#careerPlanner');
  const selected = new Set();
  let report = null;
  const tierCourses = {
    Beginner: ['PROMPT', 'HUMAN', 'ETHICS'],
    Pioneer: ['CREATE', 'CERTIFY', 'ETHICS'],
    Innovator: ['SYSTEM', 'CERTIFY', 'ETHICS']
  };
  const jobCourses = {
    frontend: ['PROMPT', 'ETHICS'], devops: ['SYSTEM', 'HUMAN'],
    data: ['SYSTEM', 'ETHICS'], 'ai-intern': ['PROMPT', 'ETHICS'],
    digital: ['CREATE', 'ETHICS'], mobile: ['SYSTEM', 'HUMAN'],
    mentor: ['HUMAN', 'ETHICS']
  };
  const results = document.createElement('section');
  results.id = 'careerResults'; results.hidden = true;
  results.setAttribute('aria-label', 'สรุปแผนพัฒนาทักษะ');
  // Keep the confirmation visible when the completed form is hidden.
  $('.upskill-workspace').append(results);
$('#upskillJobId').innerHTML='<option value="">เลือกงานที่สนใจ</option>'+JOBS.map(j=>`<option value="${j.id}">${esc(j.title)}</option>`).join('');

  function recommendations(job, tier) {
    if (!tierCourses[tier]) return [];
    const relevant = job ? jobCourses[job.id] || [] : [];
    const codes = [...tierCourses[tier]];
    // Beginner starts with foundational courses. Other tiers include role relevance.
    if (tier !== 'Beginner' && relevant.length) {
      const candidate = relevant.find(code => !codes.includes(code));
      if (candidate) codes[1] = candidate;
    }
    return [...new Set(codes)].map(code => {
      const course = COURSES.find(c => c.code === code);
      const reason = relevant.includes(code)
        ? `เกี่ยวข้องกับงาน ${job.title} และช่วยเสริมพื้นฐานการใช้ AI อย่างรับผิดชอบ`
        : `เหมาะสำหรับแผนเรียนระดับ ${tier} ที่คุณเลือก`;
      return { ...course, reason };
    });
  }

  function comparison(job) {
    const matched = job.skills.filter(skill => selected.has(skill));
    const gaps = job.skills.filter(skill => !selected.has(skill));
    return { matched, gaps };
  }
  const list = (items, empty) => items.length
    ? `<ul>${items.map(s => `<li>${esc(s)}</li>`).join('')}</ul>`
    : `<p class="field-help">${esc(empty)}</p>`;
  function comparisonHTML(job, match) {
    return `<div class="skill-count" role="status">คุณระบุว่ามีทักษะตรงกับรายการงาน ${match.matched.length} จาก ${job.skills.length} กลุ่ม</div>
      <p class="field-help">เป็นการเปรียบเทียบจากคำตอบของคุณ ไม่ใช่คะแนนความสามารถหรือโอกาสได้รับงาน</p>
      <div class="skill-comparison"><div><h4>ทักษะที่คุณระบุว่ามี</h4>${list(match.matched, 'ยังไม่ได้เลือกทักษะที่มี')}</div>
      <div><h4>ทักษะที่ยังไม่ได้ระบุ / ควรทบทวน</h4>${list(match.gaps, 'ระบุครบทุกกลุ่มแล้ว ลองเตรียมผลงานเพื่อแสดงทักษะเหล่านี้')}</div></div>`;
  }
  function courseHTML(courses) {
    return `<ol class="recommended-courses">${courses.map(c => `<li><span class="plan-tier">${esc(c.dimension)}</span><h4>${esc(c.title)}</h4><p>${esc(c.reason)}</p><p class="field-help">${c.hours} ชั่วโมง · ฿${money(c.price)}</p><button type="button" class="course-more" data-course-preview="${c.code}">อ่านรายละเอียดหลักสูตร</button><div id="preview-${c.code}" hidden><p>${esc(c.description)}</p><p><strong>สิ่งที่จะได้รับ:</strong> ${esc(c.outcome)}</p></div><a class="details-link course-catalog-link" href="#course/${c.code}">ดูหลักสูตรนี้ในหน้าอบรม →</a></li>`).join('')}</ol>`;
  }
  function refresh() {
    const job = JOBS.find(j => j.id === $('#upskillJobId').value);
    const tier = $('#upskillTier').value;
    let html = '<h3>เส้นทางพัฒนาทักษะของคุณ</h3><p class="field-help">เลือกงานและระดับ AI เพื่อดูทักษะที่ต้องใช้และหลักสูตรที่เกี่ยวข้อง</p>';
    if (job) {
      html += `<fieldset class="skill-picker"><legend>ทักษะที่คุณมีสำหรับ ${esc(job.title)} (เลือกได้หลายข้อ)</legend><p class="field-help">เลือกเฉพาะกลุ่มที่คุณมั่นใจ ใช้เพื่อวางแผนเรียนเท่านั้น</p>${job.skills.map((skill, i) => `<label><input type="checkbox" data-skill-index="${i}" ${selected.has(skill) ? 'checked' : ''}> <span>${esc(skill)}</span></label>`).join('')}</fieldset><div id="skillComparison">${comparisonHTML(job, comparison(job))}</div>`;
    }
    if (tierCourses[tier]) {
      html += '<h3>หลักสูตรที่แนะนำสำหรับคุณ</h3>' + courseHTML(recommendations(job, tier));
      html += '<p class="field-help">แนะนำจากระดับที่เลือกและความเกี่ยวข้องกับงาน ไม่ใช่การวัดระดับอัตโนมัติ หลักสูตร AI เหล่านี้ไม่ครอบคลุมทักษะเฉพาะทางทั้งหมดของงาน</p>';
    }
    planner.innerHTML = html;
  }
  planner.addEventListener('change', event => {
    const input = event.target.closest('[data-skill-index]');
    if (!input) return;
    const job = JOBS.find(j => j.id === $('#upskillJobId').value);
    const skill = job?.skills[Number(input.dataset.skillIndex)];
    if (!skill) return;
    input.checked ? selected.add(skill) : selected.delete(skill);
    // Update only the comparison so keyboard focus stays on the checkbox.
    $('#skillComparison').innerHTML = comparisonHTML(job, comparison(job));
  });
  $('#upskillTier').addEventListener('change', refresh);
  $('#upskillJobId').addEventListener('change',()=>{selected.clear();refresh();});
  $('#upskill').addEventListener('click', event => {
    const button = event.target.closest('[data-course-preview]');
    if (!button) return;
    const panel = button.nextElementSibling;
    panel.hidden = !panel.hidden;
    button.setAttribute('aria-expanded', String(!panel.hidden));
    button.textContent = panel.hidden ? 'อ่านรายละเอียดหลักสูตร' : 'ซ่อนรายละเอียด';
  });

  function plainText(data) {
    return ['OpenCareers — สรุปแผนพัฒนาทักษะ AI',
      `ตำแหน่ง: ${data.job.title}`, `บริษัท: ${data.job.company}`, `ระดับ AI ที่ประเมินตนเอง: ${data.tier}`,
      `ทักษะที่ระบุว่ามี (${data.matched.length}/${data.job.skills.length} กลุ่ม):`,
      ...data.matched.map(s => '- ' + s),
      'ทักษะที่ยังไม่ได้ระบุ / ควรทบทวน:', ...data.gaps.map(s => '- ' + s),
      'หลักสูตรแนะนำ:', ...data.courses.map((c, i) => `${i + 1}. ${c.title} (${c.hours} ชั่วโมง / ฿${money(c.price)})\n   เหตุผล: ${c.reason}`),
      'ขั้นถัดไป: ทบทวนทักษะที่ยังไม่ได้ระบุ → เรียนหลักสูตรที่เกี่ยวข้อง → สร้างผลงาน → เตรียมสมัครงาน',
      'เอกสารสาธิต ไม่ใช่ผลรับรองทักษะหรือใบสมัครที่ส่งถึงบริษัท',
      'สรุปนี้ไม่รวมชื่อ เบอร์โทร อีเมล หรือที่อยู่'].join('\n');
  }
  function complete(job, data) {
    report = { job, tier: data.aiTier, ...comparison(job), courses: recommendations(job, data.aiTier) };
    results.innerHTML = `<div class="summary-heading"><span class="plan-tier">YOUR NEXT STEP</span><h3>แผนพัฒนาทักษะของคุณ</h3><h4>${esc(job.title)}</h4><p>${esc(job.company)} · ระดับ AI: ${esc(data.aiTier)}</p></div>
      ${comparisonHTML(job, report)}<h3>เส้นทางเรียนที่แนะนำ</h3>${courseHTML(report.courses)}
      <p class="next-step">ขั้นถัดไป: ทบทวนทักษะ → เรียนเพิ่มเติม → สร้างผลงาน → เตรียมสมัครงาน</p>
      <p class="field-help">สรุปนี้ไม่รวมชื่อหรือข้อมูลติดต่อ และจะหายเมื่อรีเฟรชหน้า ดาวน์โหลดเก็บไว้ได้ ไม่ใช่ผลสอบหรือการสมัครงานจริง</p>
      <div class="summary-actions"><button type="button" class="apply-btn" id="printCareerSummary">พิมพ์ / บันทึก PDF</button><button type="button" class="apply-btn" id="downloadCareerSummary">ดาวน์โหลดสรุป (.txt)</button><button type="button" class="apply-btn" id="newCareerPlan">เริ่มแผนใหม่</button></div>`;
    // Remove the draft before showing the summary: IDs and course previews remain unique.
    planner.innerHTML = ''; $('#upskillControls').hidden=true;$('#buildCareerPlan').hidden=true;results.hidden = false;
    $('#printCareerSummary').addEventListener('click', () => {
      document.body.classList.add('printing-career');
      try { window.print(); } finally { document.body.classList.remove('printing-career'); }
    });
    $('#downloadCareerSummary').addEventListener('click', () => {
      const url = URL.createObjectURL(new Blob(['\uFEFF' + plainText(report)], { type: 'text/plain;charset=utf-8' }));
      const a = document.createElement('a'); a.href = url; a.download = `OpenCareers-plan-${report.job.id}.txt`;
      document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
    $('#newCareerPlan').addEventListener('click', reset);
    results.setAttribute('tabindex','-1');results.focus();
  }
  function clear() {
    selected.clear(); report = null; results.innerHTML = ''; results.hidden = true; $('#upskillControls').hidden=false;$('#buildCareerPlan').hidden=false;planner.innerHTML = '';$('#planError').textContent='';
  }
  function reset() { clear();$('#upskillTier').value=''; refresh(); }
  $('#buildCareerPlan').addEventListener('click',()=>{
 const job=JOBS.find(j=>j.id===$('#upskillJobId').value),tier=$('#upskillTier').value;
 if(!job||!tierCourses[tier]){$('#planError').textContent='กรุณาเลือกงานที่สนใจและระดับ AI ก่อนสร้างแผน';(!job?$('#upskillJobId'):$('#upskillTier')).focus();return;}
 $('#planError').textContent='';complete(job,{aiTier:tier});
});
document.addEventListener('click',event=>{
 const button=event.target.closest('[data-upskill]');if(!button)return;
 clear();$('#upskillJobId').value=button.dataset.upskill;$('#upskillTier').value='';refresh();
 location.hash='upskill';setTimeout(()=>$('#upskillHeading').focus(),0);
});
  refresh();
})();
