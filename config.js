window.CONFIG = {

  /* ===== ส่งผ่าน Worker ไม่มีกุญแจในหน้าเว็บ ===== */
  PROVIDER: "worker",

  // ที่อยู่ของ Worker ของคุณ (ห้ามมี / ปิดท้าย)
  WORKER_URL: "https://meth-chatbot.patipon-jeff.workers.dev",

  // เว้นว่างไว้ กุญแจอยู่ที่ Cloudflare Worker แล้ว
  KEY: "",


  /* ===== การค้นหา ===== */
  SEARCH_MODE: "vector", //vector or local
  EMBED_MODEL: "nvidia/nemotron-3.5-embed-1b:free",
  VECTORS_FILE: "vectors.json",


  /* ===== การตอบคำถาม ===== */
  MODEL: "nvidia/nemotron-3.5-super-vl:free",


  /* ===== เอกสาร ===== */
  DOCS_BASE: "docs",

  FILES: [
    "01-products.txt",
    "02-ordering.txt",
    "03-cancellation.txt",
    "04-promotions.txt",
    "05-apprentice.txt",
    "06-certificates.txt",
    "07-faq.txt",
    "08-contact.txt",
  ],


  /* ===== ปรับละเอียด ปกติไม่ต้องแก้ ===== */
  CHUNK_SIZE: 500,
  OVERLAP: 100,
  TOP_K: 3,

};