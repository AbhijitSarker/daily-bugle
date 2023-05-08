

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((response) => response.json())
        .then((data) => displayCategories(data.data.news_category));
};

const displayCategories = (categories) => {
    //   for (const category of countries) {
    //     console.log(category);
    //   }
    const categoriesContainer = document.getElementById("countries-container");
    categories.forEach((category) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
        categoryDiv.innerHTML = `
            <a href="#" onclick="loadNews(${category.category_id})" class="text-decoration-none text-black-50">${category.category_name}</a>
        `;
        categoriesContainer.appendChild(categoryDiv);
    });
};
loadCategories();

const loadNews = (category_id) => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then((res) => res.json())
        .then((data) => displayNews(data));
}

const displayNews = () => {

}