// ว่าง — ⌨️ พิมพ์สดบล็อก 2.6 (fetch "/api/recipes" ของเราเอง + next: { revalidate: 15 } แล้วพิสูจน์ผ่าน Network tab)

import { AddRecipeForm } from "@/components/AddRecipeForm"

const MyRecipesPage = async () => {
    const res = await fetch("http://localhost:3000/api/recipes")
    const recipes = await res.json();
    return (
        <>
            <ul>
                {recipes.map((r) => (
                    <li key={r.id}>{r.name}</li>
                ))}
            </ul>
            <AddRecipeForm />
        </>
    )
}

    export default MyRecipesPage