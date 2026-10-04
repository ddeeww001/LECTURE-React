// ว่าง — ⌨️ พิมพ์สดบล็อก 2.4 (GET) · 🖐 #11 (?category=) · 2.5 (POST)
// ชื่อฟังก์ชันต้องเป็น GET / POST ตัวพิมพ์ใหญ่ล้วน


// 
import { recipes } from "@/lib/data/recipes.js";
export const GET = (request) => {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const result = category
        ? recipes.filter((r) => r.category === category)
        : recipes;

    return Response.json(result);
}

export const POST = async (request) => {
    const body = await request.json();
    console.log("request body", body);
    const newRecipe = { id: Date.now(), cetagory: "other", ...body };
    recipes.push(newRecipe);
    return Response.json(newRecipe, { status: 201 });

}