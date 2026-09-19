'use strict';
// Educational sample vacancies and compensation; not live recruitment listings.
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
  },
  {
    "id": "ml-engineer",
    "title": "Machine Learning Engineer",
    "company": "ModelWorks",
    "logo": "MW",
    "color": "tech-innovate",
    "type": "fulltime",
    "level": "expert",
    "min": 55000,
    "max": 95000,
    "location": "กรุงเทพฯ / Bangkok, Thailand",
    "date": "2026-09-19",
    "summary": "สร้างและนำโมเดล Machine Learning ไปใช้งานจริง",
    "duties": [
      "เตรียมข้อมูลและเปรียบเทียบโมเดลด้วยชุดทดสอบ",
      "ติดตามคุณภาพโมเดลหลังนำไปใช้งาน",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "มีประสบการณ์ Python และพัฒนาโมเดลพร้อมอธิบายผลการประเมินได้",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "Python",
      "Machine Learning / Statistics",
      "Model Deployment",
      "Model Evaluation"
    ],
    "benefits": [
      "งบพัฒนาทักษะ",
      "รูปแบบการทำงานตามข้อตกลง",
      "เครื่องมือที่จำเป็นสำหรับงาน"
    ],
    "contact": "careers@ml-engineer.example"
  },
  {
    "id": "prompt-specialist",
    "title": "Prompt Engineer",
    "company": "PromptLab",
    "logo": "PL",
    "color": "cloud-tech",
    "type": "fulltime",
    "level": "intermediate",
    "min": 35000,
    "max": 65000,
    "location": "ออนไลน์ / Remote, Thailand",
    "date": "2026-09-19",
    "summary": "ออกแบบ Prompt และประเมินผลลัพธ์ Generative AI",
    "duties": [
      "พัฒนา Prompt พร้อมบริบท ตัวอย่าง และเงื่อนไข",
      "ทดสอบความถูกต้องและความสม่ำเสมอของคำตอบ",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "มี Portfolio การทดลอง Prompt และเกณฑ์ตรวจผลลัพธ์",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "Prompt Engineering",
      "Test Design",
      "Output Analysis",
      "AI Ethics"
    ],
    "benefits": [
      "งบพัฒนาทักษะ",
      "รูปแบบการทำงานตามข้อตกลง",
      "เครื่องมือที่จำเป็นสำหรับงาน"
    ],
    "contact": "careers@prompt-specialist.example"
  },
  {
    "id": "ai-product",
    "title": "AI Product Manager",
    "company": "FutureFlow",
    "logo": "FF",
    "color": "data-analytics",
    "type": "fulltime",
    "level": "expert",
    "min": 60000,
    "max": 100000,
    "location": "ปทุมธานี / Pathum Thani, Thailand",
    "date": "2026-09-19",
    "summary": "วางทิศทางผลิตภัณฑ์ AI ให้ตอบโจทย์ผู้ใช้และธุรกิจ",
    "duties": [
      "กำหนดปัญหา Roadmap และตัวชี้วัด",
      "ประสานทีมออกแบบ วิศวกรรม และธุรกิจ",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "มีประสบการณ์ดูแลผลิตภัณฑ์ดิจิทัลและเข้าใจข้อจำกัดของ AI",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "User Research",
      "Product Strategy",
      "AI System Design",
      "AI Ethics"
    ],
    "benefits": [
      "งบพัฒนาทักษะ",
      "รูปแบบการทำงานตามข้อตกลง",
      "เครื่องมือที่จำเป็นสำหรับงาน"
    ],
    "contact": "careers@ai-product.example"
  },
  {
    "id": "ux-designer",
    "title": "AI Product UX/UI Designer",
    "company": "PixelMind",
    "logo": "PM",
    "color": "tech-innovate",
    "type": "fulltime",
    "level": "intermediate",
    "min": 35000,
    "max": 60000,
    "location": "เชียงใหม่ / Chiang Mai, Thailand",
    "date": "2026-09-19",
    "summary": "ออกแบบประสบการณ์ใช้งานผลิตภัณฑ์ AI ที่เข้าใจง่าย",
    "duties": [
      "สัมภาษณ์ผู้ใช้และสร้างต้นแบบด้วย Figma",
      "ทดสอบการใช้งานและปรับปรุงการเข้าถึง",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "มี Portfolio UX/UI พร้อมเหตุผลการออกแบบและผลทดสอบ",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "User Research",
      "Figma / Prototyping",
      "Interaction Design",
      "Accessibility"
    ],
    "benefits": [
      "งบพัฒนาทักษะ",
      "รูปแบบการทำงานตามข้อตกลง",
      "เครื่องมือที่จำเป็นสำหรับงาน"
    ],
    "contact": "careers@ux-designer.example"
  },
  {
    "id": "bi-analyst",
    "title": "Business Intelligence Analyst",
    "company": "InsightBridge",
    "logo": "IB",
    "color": "cloud-tech",
    "type": "fulltime",
    "level": "intermediate",
    "min": 30000,
    "max": 55000,
    "location": "กรุงเทพฯ / Bangkok, Thailand",
    "date": "2026-09-19",
    "summary": "แปลงข้อมูลธุรกิจเป็น Dashboard เพื่อช่วยตัดสินใจ",
    "duties": [
      "เขียน SQL และตรวจคุณภาพข้อมูล",
      "สร้าง Dashboard พร้อมอธิบายแนวโน้มและข้อจำกัด",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "ใช้ SQL และ Power BI ได้พร้อมตัวอย่างผลงาน",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "SQL",
      "Power BI",
      "Business Analysis",
      "Data Quality"
    ],
    "benefits": [
      "งบพัฒนาทักษะ",
      "รูปแบบการทำงานตามข้อตกลง",
      "เครื่องมือที่จำเป็นสำหรับงาน"
    ],
    "contact": "careers@bi-analyst.example"
  },
  {
    "id": "ai-qa",
    "title": "AI Software QA Engineer",
    "company": "QualityLoop",
    "logo": "QL",
    "color": "data-analytics",
    "type": "fulltime",
    "level": "intermediate",
    "min": 32000,
    "max": 60000,
    "location": "ออนไลน์ / Remote, Thailand",
    "date": "2026-09-19",
    "summary": "ทดสอบซอฟต์แวร์และผลลัพธ์ AI ตามข้อกำหนด",
    "duties": [
      "ออกแบบ Test Case และเกณฑ์ตรวจคำตอบ",
      "สร้างชุดทดสอบอัตโนมัติและรายงานข้อผิดพลาด",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "เข้าใจการทดสอบซอฟต์แวร์และใช้เครื่องมือ Automation Testing",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "Software Testing",
      "Test Automation",
      "LLM Evaluation",
      "AI Ethics"
    ],
    "benefits": [
      "งบพัฒนาทักษะ",
      "รูปแบบการทำงานตามข้อตกลง",
      "เครื่องมือที่จำเป็นสำหรับงาน"
    ],
    "contact": "careers@ai-qa.example"
  },
  {
    "id": "mlops",
    "title": "MLOps Engineer",
    "company": "CloudModel",
    "logo": "CM",
    "color": "tech-innovate",
    "type": "fulltime",
    "level": "expert",
    "min": 55000,
    "max": 100000,
    "location": "ปทุมธานี / Pathum Thani, Thailand",
    "date": "2026-09-19",
    "summary": "ดูแลโครงสร้างพื้นฐานสำหรับส่งมอบโมเดล AI",
    "duties": [
      "สร้าง Pipeline ฝึก ทดสอบ และปล่อยโมเดล",
      "ติดตามต้นทุน ความพร้อมใช้งาน และคุณภาพโมเดล",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "มีประสบการณ์ Cloud, Container และ CI/CD",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "Python / Linux",
      "Docker / Kubernetes",
      "CI/CD for ML",
      "Model Monitoring"
    ],
    "benefits": [
      "งบพัฒนาทักษะ",
      "รูปแบบการทำงานตามข้อตกลง",
      "เครื่องมือที่จำเป็นสำหรับงาน"
    ],
    "contact": "careers@mlops.example"
  },
  {
    "id": "security-analyst",
    "title": "Digital Security Analyst",
    "company": "SecureNext",
    "logo": "SN",
    "color": "cloud-tech",
    "type": "fulltime",
    "level": "intermediate",
    "min": 35000,
    "max": 65000,
    "location": "เชียงใหม่ / Chiang Mai, Thailand",
    "date": "2026-09-19",
    "summary": "เฝ้าระวังภัยคุกคามของระบบดิจิทัล",
    "duties": [
      "วิเคราะห์ Log และคัดกรองเหตุการณ์ผิดปกติ",
      "จัดทำขั้นตอนตอบสนองเหตุการณ์และรายงานช่องโหว่",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "เข้าใจเครือข่าย ระบบปฏิบัติการ และความปลอดภัยข้อมูล",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "Network Security",
      "Log Analysis / SIEM",
      "Incident Response",
      "Data Privacy"
    ],
    "benefits": [
      "งบพัฒนาทักษะ",
      "รูปแบบการทำงานตามข้อตกลง",
      "เครื่องมือที่จำเป็นสำหรับงาน"
    ],
    "contact": "careers@security-analyst.example"
  },
  {
    "id": "chatbot",
    "title": "AI Chatbot Developer",
    "company": "Converse Studio",
    "logo": "CS",
    "color": "data-analytics",
    "type": "project",
    "level": "intermediate",
    "min": 40000,
    "max": 75000,
    "location": "กรุงเทพฯ / Bangkok, Thailand",
    "date": "2026-09-19",
    "summary": "พัฒนา Chatbot เชื่อมข้อมูลธุรกิจอย่างมีขอบเขต",
    "duties": [
      "เชื่อม API และแหล่งความรู้สำหรับระบบสนทนา",
      "ทดสอบคำตอบและขั้นตอนส่งต่อเจ้าหน้าที่",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "มีตัวอย่าง Chatbot หรือระบบ API ที่พัฒนาเอง",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "Python / JavaScript",
      "REST API",
      "Prompt Engineering",
      "RAG / AI System Design"
    ],
    "benefits": [
      "งบพัฒนาทักษะ",
      "รูปแบบการทำงานตามข้อตกลง",
      "เครื่องมือที่จำเป็นสำหรับงาน"
    ],
    "contact": "careers@chatbot.example"
  },
  {
    "id": "automation",
    "title": "No-Code Automation Specialist",
    "company": "FlowCraft",
    "logo": "FC",
    "color": "tech-innovate",
    "type": "fulltime",
    "level": "entry",
    "min": 28000,
    "max": 50000,
    "location": "ออนไลน์ / Remote, Thailand",
    "date": "2026-09-19",
    "summary": "สร้างระบบอัตโนมัติเพื่อลดงานซ้ำของทีมธุรกิจ",
    "duties": [
      "วิเคราะห์กระบวนการและเชื่อมเครื่องมือผ่าน Webhook",
      "ทดสอบข้อผิดพลาดและเขียนคู่มือดูแล Workflow",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "เคยสร้าง Workflow ด้วย Make หรือ Zapier",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "Process Mapping",
      "Make / Zapier",
      "API / Webhooks",
      "AI Workflow Design"
    ],
    "benefits": [
      "งบพัฒนาทักษะ",
      "รูปแบบการทำงานตามข้อตกลง",
      "เครื่องมือที่จำเป็นสำหรับงาน"
    ],
    "contact": "careers@automation.example"
  },
  {
    "id": "ai-video",
    "title": "AI Video & Creative Producer",
    "company": "MotionSpark",
    "logo": "MS",
    "color": "cloud-tech",
    "type": "parttime",
    "level": "entry",
    "min": 25000,
    "max": 45000,
    "location": "ปทุมธานี / Pathum Thani, Thailand",
    "date": "2026-09-19",
    "summary": "ผลิตสื่อวิดีโอร่วมกับเครื่องมือ AI",
    "duties": [
      "วาง Storyboard และผลิตสื่อหลายรูปแบบ",
      "ตัดต่อ ตรวจคุณภาพ และสิทธิ์ใช้งานก่อนเผยแพร่",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "มี Portfolio วิดีโอและเข้าใจการสื่อสารกับกลุ่มเป้าหมาย",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "Content Planning",
      "Generative AI for Media",
      "Video Editing",
      "Copyright / AI Ethics"
    ],
    "benefits": [
      "งบพัฒนาทักษะ",
      "รูปแบบการทำงานตามข้อตกลง",
      "เครื่องมือที่จำเป็นสำหรับงาน"
    ],
    "contact": "careers@ai-video.example"
  },
  {
    "id": "data-intern",
    "title": "Data Analytics Intern",
    "company": "DataSpring",
    "logo": "DP",
    "color": "data-analytics",
    "type": "internship",
    "level": "entry",
    "min": 12000,
    "max": 18000,
    "location": "เชียงใหม่ / Chiang Mai, Thailand",
    "date": "2026-09-19",
    "summary": "ฝึกวิเคราะห์ข้อมูลภายใต้การดูแลของทีมข้อมูล",
    "duties": [
      "ทำความสะอาดข้อมูลและสรุปแนวโน้ม",
      "สร้างกราฟและตรวจสอบตัวเลขก่อนนำเสนอ",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "กำลังศึกษาด้านข้อมูล คอมพิวเตอร์ ธุรกิจ หรือที่เกี่ยวข้อง และใช้ Excel ได้",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "Excel",
      "SQL",
      "Data Visualization",
      "สถิติพื้นฐาน"
    ],
    "benefits": [
      "พี่เลี้ยงให้คำแนะนำ",
      "หนังสือรับรองการฝึกงาน",
      "ร่วมทำโครงการในทีม"
    ],
    "contact": "careers@data-intern.example"
  },
  {
    "id": "ai-governance",
    "title": "AI Governance Associate",
    "company": "ResponsibleAI",
    "logo": "RA",
    "color": "tech-innovate",
    "type": "fulltime",
    "level": "intermediate",
    "min": 40000,
    "max": 70000,
    "location": "กรุงเทพฯ / Bangkok, Thailand",
    "date": "2026-09-19",
    "summary": "วางแนวทางใช้ AI อย่างรับผิดชอบ",
    "duties": [
      "จัดทำทะเบียนระบบ AI และประเมินความเสี่ยง",
      "ประสานทีมเพื่อจัดทำแนวทางใช้งานและหลักฐานตรวจสอบ",
      "ทำงานร่วมกับทีมและตรวจสอบผลงานก่อนส่งมอบ"
    ],
    "qualifications": [
      "เข้าใจจริยธรรม AI การจัดการความเสี่ยง และการเขียนนโยบาย",
      "สื่อสารและทำงานร่วมกับทีมได้ พร้อมเรียนรู้เครื่องมือใหม่",
      "รับผิดชอบต่อข้อมูลและตรวจสอบความถูกต้องของผลงาน"
    ],
    "skills": [
      "AI Ethics / Risk Assessment",
      "Data Privacy",
      "Policy Documentation",
      "Human-Centered AI"
    ],
    "benefits": [
      "งบพัฒนาทักษะ",
      "รูปแบบการทำงานตามข้อตกลง",
      "เครื่องมือที่จำเป็นสำหรับงาน"
    ],
    "contact": "careers@ai-governance.example"
  }
];
