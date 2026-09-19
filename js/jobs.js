'use strict';
// Educational sample vacancies; not live recruitment listings.
const JOBS = [
  {
    "id": "frontend",
    "title": "AI-Assisted Web Developer",
    "company": "NexGen Innovations Co., Ltd.",
    "logo": "NG",
    "color": "tech-innovate",
    "type": "fulltime",
    "level": "intermediate",
    "min": 40000,
    "max": 70000,
    "location": "บางนา กรุงเทพฯ / Bang Na, Bangkok, Thailand",
    "date": "2026-09-15",
    "summary": "พัฒนาเว็บด้วย HTML5, CSS3 และ JavaScript พร้อมใช้ AI Coding Assistant ช่วยสร้างโค้ด ทดสอบ และปรับปรุงประสิทธิภาพ",
    "duties": [
      "แปลงงานออกแบบเป็นเว็บไซต์ที่รองรับมือถือ แท็บเล็ต และคอมพิวเตอร์",
      "ใช้ AI Coding Assistant ช่วยสร้าง ทบทวน แก้ไข และทดสอบโค้ด โดยตรวจสอบผลลัพธ์ทุกครั้ง",
      "เชื่อมต่อ REST API และทำงานร่วมกับทีมออกแบบ Backend และ QA",
      "ตรวจสอบการเข้าถึง ความเร็ว และความเข้ากันได้ระหว่างเบราว์เซอร์"
    ],
    "qualifications": [
      "ปริญญาตรีด้านคอมพิวเตอร์หรือมีประสบการณ์เทียบเท่าพร้อม Portfolio",
      "ใช้ HTML5, CSS3, JavaScript และ Git ได้",
      "มีประสบการณ์ใช้เครื่องมือ AI ช่วยพัฒนาโค้ดอย่างรับผิดชอบ",
      "สื่อสารและทำงานร่วมกับทีมได้ดี"
    ],
    "skills": [
      "HTML5 / CSS3 / JavaScript",
      "GitHub Copilot / Cursor",
      "Prompting & Code Review",
      "Git / REST API"
    ],
    "benefits": [
      "สิทธิ์ใช้งาน AI Coding Tools",
      "ประกันสุขภาพและทันตกรรม",
      "งบพัฒนาทักษะ",
      "กองทุนสำรองเลี้ยงชีพ"
    ],
    "contact": "careers@nexgen.example"
  },
  {
    "id": "devops",
    "title": "Digital & AI Transformation Associate",
    "company": "Siam Smart Solution Co., Ltd.",
    "logo": "SS",
    "color": "cloud-tech",
    "type": "fulltime",
    "level": "intermediate",
    "min": 30000,
    "max": 50000,
    "location": "กรุงเทพฯ / Bangkok, Thailand",
    "date": "2026-09-12",
    "summary": "วิเคราะห์ขั้นตอนธุรกิจและประยุกต์ Generative AI กับระบบ No-Code/Low-Code เพื่อลดงานซ้ำและยกระดับการทำงาน",
    "duties": [
      "วิเคราะห์ขั้นตอนทำงานและออกแบบกระบวนการที่ใช้ AI สนับสนุน",
      "เชื่อมต่อระบบอัตโนมัติด้วย Make, Zapier หรือ Power Automate",
      "จัดทำ Dashboard และประเมินผลลัพธ์ของโครงการ",
      "จัดอบรมการใช้ AI โดยคำนึงถึงข้อมูลส่วนบุคคลและจริยธรรม"
    ],
    "qualifications": [
      "ปริญญาตรีด้าน MIS ธุรกิจ วิทยาการข้อมูล วิศวกรรม หรือสาขาที่เกี่ยวข้อง",
      "เข้าใจ Generative AI และการออกแบบระบบอัตโนมัติ",
      "วิเคราะห์ข้อมูลและนำเสนอให้คนต่างสายงานเข้าใจได้",
      "ตระหนักถึงความเป็นส่วนตัวและข้อจำกัดของ AI"
    ],
    "skills": [
      "Generative AI",
      "Make / Zapier / Power Automate",
      "Power BI / Excel",
      "AI Literacy & Ethics"
    ],
    "benefits": [
      "อุปกรณ์ทำงาน",
      "งบเรียนรู้เพิ่มเติม",
      "สนับสนุนงานสัมมนา AI",
      "ประกันสุขภาพ"
    ],
    "contact": "careers@siamsmart.example"
  },
  {
    "id": "data",
    "title": "AI Data & Evaluation Engineer",
    "company": "DataAnalytics Pro",
    "logo": "DA",
    "color": "data-analytics",
    "type": "fulltime",
    "level": "expert",
    "min": 50000,
    "max": 90000,
    "location": "กรุงเทพฯ / Bangkok, Thailand",
    "date": "2026-09-10",
    "summary": "เตรียมข้อมูลและประเมินระบบ AI เพื่อให้ผลลัพธ์มีคุณภาพ ตรวจสอบได้ และเหมาะกับผู้ใช้งาน",
    "duties": [
      "สร้าง Data Pipeline และตรวจสอบคุณภาพข้อมูลสำหรับระบบ AI",
      "ออกแบบชุดทดสอบและตัวชี้วัดประเมินความถูกต้องและอคติ",
      "ทดสอบระบบ Retrieval-Augmented Generation (RAG)",
      "ติดตามผลลัพธ์หลังใช้งานและจัดทำเอกสารข้อจำกัด"
    ],
    "qualifications": [
      "ปริญญาตรีสาขาคอมพิวเตอร์หรือที่เกี่ยวข้อง",
      "ประสบการณ์ด้านข้อมูล 2–5 ปี"
    ],
    "skills": [
      "Python / SQL",
      "Data Pipeline",
      "LLM Evaluation / RAG",
      "Data Quality & Bias"
    ],
    "benefits": [
      "ทำงานแบบ Hybrid",
      "งบอบรมประจำปี",
      "ประกันสุขภาพ"
    ],
    "contact": "hr@dataanalytics.example"
  },
  {
    "id": "ai-intern",
    "title": "AI / Machine Learning Intern",
    "company": "NextAI Studio",
    "logo": "AI",
    "color": "tech-innovate",
    "type": "internship",
    "level": "entry",
    "min": 12000,
    "max": 18000,
    "location": "เชียงใหม่ / Chiang Mai, Thailand",
    "date": "2026-09-18",
    "summary": "ฝึกพัฒนาโมเดล Machine Learning และเตรียมข้อมูลกับทีมวิศวกร AI",
    "duties": [
      "เตรียมข้อมูลและทดลองโมเดลพื้นฐาน",
      "สรุปผลการทดลองและจัดทำเอกสาร"
    ],
    "qualifications": [
      "กำลังศึกษาสาขาคอมพิวเตอร์ วิทยาการข้อมูล หรือที่เกี่ยวข้อง",
      "ฝึกงานได้อย่างน้อย 3 เดือน"
    ],
    "skills": [
      "Python",
      "pandas",
      "scikit-learn",
      "สถิติพื้นฐาน"
    ],
    "benefits": [
      "มีพี่เลี้ยงให้คำแนะนำ",
      "เบี้ยเลี้ยงรายเดือน",
      "หนังสือรับรองการฝึกงาน"
    ],
    "contact": "careers@nextai.example"
  },
  {
    "id": "digital",
    "title": "AI-Powered Digital Content Specialist",
    "company": "Digital Spark",
    "logo": "DS",
    "color": "cloud-tech",
    "type": "parttime",
    "level": "entry",
    "min": 15000,
    "max": 25000,
    "location": "ออนไลน์ / Remote, Thailand",
    "date": "2026-09-16",
    "summary": "สร้างเนื้อหาดิจิทัลด้วย Generative AI พร้อมตรวจความถูกต้อง ลิขสิทธิ์ และความเหมาะสมก่อนเผยแพร่",
    "duties": [
      "วางแผนและผลิตเนื้อหาดิจิทัล",
      "ติดตามผลลัพธ์และปรับเนื้อหาให้เหมาะกับกลุ่มเป้าหมาย"
    ],
    "qualifications": [
      "มีทักษะการเขียนภาษาไทยและมีตัวอย่างผลงาน",
      "จัดสรรเวลาทำงานได้อย่างน้อย 20 ชั่วโมงต่อสัปดาห์"
    ],
    "skills": [
      "Generative AI for Content",
      "Prompt Engineering",
      "SEO / Analytics",
      "Fact-checking"
    ],
    "benefits": [
      "ทำงานจากที่บ้าน",
      "เวลาทำงานยืดหยุ่น",
      "มีทีมช่วยให้คำแนะนำ"
    ],
    "contact": "team@digitalspark.example"
  },
  {
    "id": "mobile",
    "title": "AI-Enabled Mobile App Developer",
    "company": "AppCraft Studio",
    "logo": "AC",
    "color": "data-analytics",
    "type": "project",
    "level": "intermediate",
    "min": 40000,
    "max": 65000,
    "location": "ออนไลน์ / Remote, Thailand",
    "date": "2026-09-14",
    "summary": "ร่วมพัฒนาแอปมือถือด้วย React Native ในโครงการระยะเวลา 6 เดือน",
    "duties": [
      "พัฒนาแอป iOS และ Android ตามแบบที่กำหนด",
      "เชื่อมต่อ API ทดสอบ และแก้ไขข้อผิดพลาด",
      "เชื่อมต่อบริการ AI โดยออกแบบการขออนุญาตและควบคุมข้อมูลอย่างเหมาะสม"
    ],
    "qualifications": [
      "ประสบการณ์พัฒนาแอป 1–3 ปี",
      "มีแอปหรือโค้ดตัวอย่างประกอบการสมัคร"
    ],
    "skills": [
      "React Native",
      "TypeScript",
      "REST API",
      "Git"
    ],
    "benefits": [
      "ทำงานจากที่บ้าน",
      "ค่าตอบแทนรายเดือนตลอดโครงการ",
      "ร่วมงานกับทีมออกแบบ"
    ],
    "contact": "jobs@appcraft.example"
  },
  {
    "id": "mentor",
    "title": "AI Literacy & Digital Skills Volunteer",
    "company": "Tech for Community",
    "logo": "TC",
    "color": "tech-innovate",
    "type": "volunteer",
    "level": "entry",
    "min": 0,
    "max": 0,
    "location": "ปทุมธานี / Pathum Thani, Thailand",
    "date": "2026-09-11",
    "summary": "อาสาสมัครช่วยสอนทักษะดิจิทัลพื้นฐานและการใช้อินเทอร์เน็ตอย่างปลอดภัยให้ชุมชน",
    "duties": [
      "ช่วยจัดกิจกรรมเรียนรู้ทักษะดิจิทัล",
      "จัดทำคู่มือและช่วยตอบคำถามผู้เรียน",
      "สอนการใช้ AI เบื้องต้น การตรวจสอบคำตอบ และการปกป้องข้อมูลส่วนตัว"
    ],
    "qualifications": [
      "ใช้คอมพิวเตอร์และอินเทอร์เน็ตพื้นฐานได้",
      "มีเวลาร่วมกิจกรรมเดือนละ 2 ครั้ง และชอบแบ่งปันความรู้"
    ],
    "skills": [
      "การสื่อสาร",
      "เครื่องมือสำนักงาน",
      "ความปลอดภัยดิจิทัล"
    ],
    "benefits": [
      "หนังสือรับรองกิจกรรม",
      "ประสบการณ์ทำงานเพื่อสังคม",
      "เครือข่ายอาสาสมัคร"
    ],
    "contact": "volunteer@techcommunity.example"
  }
];
