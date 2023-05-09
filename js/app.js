const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((response) => response.json())
        .then((data) => displayCategories(data.data.news_category));
};

const displayCategories = (categories) => {

    const categoriesContainer = document.getElementById("countries-container");
    categories.forEach((category) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
        categoryDiv.innerHTML = `
            <a href="#" onclick="loadNews('${category.category_id}')" class="text-decoration-none text-black-50">${category.category_name}</a>
        `;
        categoriesContainer.appendChild(categoryDiv);
        // console.log(category.category_id);
    });

};

const loadNews = (categoryId) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayNews(data.data));
    // .then((data) => console.log(data.status));
};

const displayNews = (newses) => {
    // console.log(newses);

    const newsContainer = document.getElementById('news-container');
    newses.forEach((news) => {
        // console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card', 'mb-3');
        newsDiv.innerHTML = `
            <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${news.thumbnail_url}"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  additional content. This content is a little bit longer.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary"
                    >Last updated 3 mins ago</small
                  >
                </p>
                <div class="d-flex justify-content-between">
                  <!-- author -->
                  <div class="d-flex">
                    <img
                      src="${news.author.img}"
                      style="height: 60px"
                      alt=""
                    />
                    <div class="">
                      <div class=""><small>${news.author.name}</small></div>
                      <div class=""><small>${news.author.published_date}</small></div>
                    </div>
                  </div>
                  <div class="d-flex">Views: ${news.total_view}</div>
                  <div>
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      read more
                    </button>

                    <!-- Modal -->
                    <div
                      class="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1
                              class="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              Modal title
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <!-- modal body -->
                          <div class="modal-body">
                            <!-- modal author -->
                            <div class="d-flex">
                              <img
                                src="pexels-jan-n-g-u-y-e-n-_-699953-removebg-preview.png"
                                style="height: 60px"
                                alt=""
                              />
                              <div class="">
                                <div class=""><small>dfdf</small></div>
                                <div class=""><small>dfdf</small></div>
                              </div>
                            </div>
                            <!-- modal image -->

                            <!-- modal details -->

                            <!-- modal footer -->
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">
                                Understood
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        newsContainer.appendChild(newsDiv);
    });
};

// loadNews();
loadCategories();