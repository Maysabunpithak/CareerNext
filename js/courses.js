'use strict';
const COURSES = [
  {
    "code": "PROMPT",
    "title": "Generative AI Foundations & Prompt Engineering",
    "hours": 18,
    "price": 4500,
    "dimension": "Techniques & Applications",
    "thai": "เทคนิคและการประยุกต์ใช้ AI",
    "description": "เข้าใจ LLM ฝึกออกแบบคำสั่งพร้อมบริบทและตัวอย่าง เพื่อสรุปเอกสาร วิเคราะห์ข้อมูล และประเมินคำตอบของ AI",
    "outcome": "สร้างชุด Prompt และเกณฑ์ตรวจสอบคำตอบสำหรับงานจริง",
    "type": "อบรม",
    "tier": "Beginner",
    "color": "#1d4ed8"
  },
  {
    "code": "CREATE",
    "title": "Multimodal Generative AI for Business & Creative Content",
    "hours": 15,
    "price": 3900,
    "dimension": "Techniques & Applications",
    "thai": "เทคนิคและการประยุกต์ใช้ AI",
    "description": "ประยุกต์ AI กับข้อความ ภาพ เสียง และวิดีโอ เพื่อวางแผนแคมเปญและผลิตสื่อดิจิทัลที่เหมาะกับผู้ชม",
    "outcome": "ออกแบบแคมเปญพร้อมสื่อหลายรูปแบบและแนวทางตรวจคุณภาพ",
    "type": "อบรม",
    "tier": "Pioneer",
    "color": "#6d28d9"
  },
  {
    "code": "HUMAN",
    "title": "Human-Centered AI & Responsible Collaboration",
    "hours": 12,
    "price": 2900,
    "dimension": "Human-Centered Mindset",
    "thai": "แนวคิดที่ยึดมนุษย์เป็นศูนย์กลาง",
    "description": "วิเคราะห์ความต้องการของผู้ใช้ ออกแบบการทำงานร่วมกับ AI และกำหนดจุดที่มนุษย์ต้องตรวจทานหรือตัดสินใจ",
    "outcome": "สร้างแผนการใช้ AI ที่คงบทบาทและการตัดสินใจของมนุษย์",
    "type": "เวิร์กช็อป",
    "tier": "Beginner",
    "color": "#047857"
  },
  {
    "code": "ETHICS",
    "title": "AI Ethics, Privacy & Bias Awareness",
    "hours": 9,
    "price": 1900,
    "dimension": "Ethics of AI",
    "thai": "จริยธรรมของ AI",
    "description": "เรียนรู้ความเสี่ยงด้านข้อมูลส่วนบุคคล อคติ ลิขสิทธิ์ และความโปร่งใส ผ่านกรณีศึกษาและการตรวจสอบผลลัพธ์",
    "outcome": "จัดทำรายการตรวจสอบความรับผิดชอบก่อนนำ AI ไปใช้งาน",
    "type": "สัมมนา",
    "tier": "Beginner",
    "color": "#b45309"
  },
  {
    "code": "SYSTEM",
    "title": "AI System Design: RAG & Workflow Automation",
    "hours": 24,
    "price": 6900,
    "dimension": "AI System Design",
    "thai": "การออกแบบระบบ AI",
    "description": "ออกแบบระบบค้นคืนข้อมูลร่วมกับ LLM วาง Workflow ประเมินผล และกำหนดการดูแลระบบหลังเปิดใช้งาน",
    "outcome": "สร้างต้นแบบระบบ RAG พร้อมชุดทดสอบและแผนติดตามผล",
    "type": "อบรมเชิงปฏิบัติ",
    "tier": "Innovator",
    "color": "#0e7490"
  },
  {
    "code": "CERTIFY",
    "title": "AI Competency Certification Preparation",
    "hours": 18,
    "price": 4900,
    "dimension": "Human-Centered Mindset · Ethics of AI · Techniques & Applications · AI System Design",
    "thai": "ทบทวนสมรรถนะครบทั้ง 4 มิติ",
    "description": "ทบทวนความรู้ครบทั้ง 4 มิติ ทำแบบฝึกสถานการณ์ และเตรียม Portfolio เพื่อประเมินความพร้อมด้าน AI",
    "outcome": "ได้รับแผนพัฒนาทักษะจากการทบทวนและแบบประเมินจำลอง",
    "type": "เตรียมประเมิน",
    "tier": "Pioneer",
    "color": "#4338ca"
  }
];
