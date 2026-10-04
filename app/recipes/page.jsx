"use client"
// ของเดิมจากวันที่ 6 — ยังเป็น client-fetch (useFetch แบบวันที่ 3)
// ⌨️ บล็อก 1.1: ลบ "use client" + useFetch ทิ้ง แล้วเขียนใหม่เป็น async Server Component
import { useFetch } from "@/hooks/useFetch"
import RecipeList from "@/components/RecipeList"

export default function RecipesPage() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
  )

  if (loading) return <p>กำลังโหลด...</p>
  if (error) return <p>{error}</p>
  return <RecipeList recipes={data.meals} />
}
