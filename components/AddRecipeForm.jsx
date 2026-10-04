// ว่าง (Client Component) — ⌨️ พิมพ์สดบล็อก 2.5
// ปุ่มที่ POST ไป "/api/recipes" (path สัมพัทธ์ได้ เพราะรันที่ browser) — ต้องมี "use client" เพราะมี onClick

"use client"
export const AddRecipeForm = () => {
    const handleSubmit = async (e) => {

        e.preventDefault()
        const res = await fetch("api/recipes", {
            method: "POST",
            headers: { "Content-Type": "application/lson" },
            body: Json.stringify({ name: 'สูตรใหม่' }),
        })

    }
    return <button onClick={handleSubmit} >เพิ่มสูตรอาหาร</button>
}