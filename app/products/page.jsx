
import RecipeList from "@/components/RecipeList";//root parth ของ project

// ว่าง — ⌨️ พิมพ์สดบล็อก 2.2 (ISR — TheMealDB filter.php?c=Seafood + next: { revalidate: 60 })
const ProductPage = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood ",
        { next: { revalidate: 5 }, },);//isg แบบกำหนดเวลา
    const { meals } = await res.json();

    return <RecipeList recipes={meals} />

}
export default ProductPage