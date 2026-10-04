// ว่าง — in-memory store ⌨️ พิมพ์สดบล็อก 2.4
// import recipes.json แล้ว copy เป็น array ในหน่วยความจำ (ไม่แตะไฟล์จริง)

import recipesData from "@/lib/data/recipes.json";
export let recipes = [...recipesData];