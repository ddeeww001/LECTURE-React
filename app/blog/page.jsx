// ว่าง — ⌨️ พิมพ์สดบล็อก 2.2 (SSG — สูตรที่โพสต์แล้วไม่แก้ · TheMealDB lookup.php?i=52772)
const BlogPage = async () => {

    const res = await fetch(" https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772", {
        cache: "force-cache"
    }
    )

    const { meals } = await res.json();
    const recipe = meals[0];

    return (
        <article>
            <h1>{recipe.strMeal}</h1>
        </article>
    )
}
export default BlogPage