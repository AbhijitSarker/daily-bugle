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
    categoryDiv.setAttribute("id", `category-${category.category_id}`);
    categoryDiv.innerHTML = `
            <a href="#" onclick="loadNews('${category.category_id}')" class="text-decoration-none sticky-top text-black-50">${category.category_name}</a>
        `;
    categoriesContainer.appendChild(categoryDiv);

    // console.log(category.category_id);
  });

};

const loadTrendPicks = () => {
  fetch('https://openapi.programming-hero.com/api/news/category/08')
    .then((res) => res.json())
    .then((data) => displayTrendPicks(data.data))
};

const displayTrendPicks = (newses) => {
  const newsContainer = document.getElementById('news-container');
  const trendingContainer = document.getElementById('todays-picks');
  newsContainer.innerHTML = "";
  newses.forEach((news) => {
    if (news.others_info.is_todays_pick === true) {
      const trendingDiv = document.createElement('div');
      trendingDiv.classList.add('card', 'bg-dark', 'text-white');
      trendingDiv.innerHTML = `
        <img src="${news.image_url}" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h1 class="card-title text-black">Todays Pick</h1>
    <h5 class="card-title text-black">${news.title}</h5>
    <p class="card-text">${news.details.slice(0, 300)}</p>
    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrops"
                    >
                      read more
                    </button>
                    <!-- Modal -->
                    <div
                      class="modal fade"
                      id="staticBackdrops"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropsLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog text-black modal-xl">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1
                              class="modal-title fs-5"
                              id="staticBackdropsLabel"
                            >
                              ${news.title}
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
                              <img class="rounded-circle me-3 mb-3"
                                src="${news.author.img}"
                                style="height: 50px"
                                alt=""
                              />
                              <div class="">
                                <div class=""><small>${news.author.name}</small></div>
                                <div class=""><small>${news.author.published_date}</small></div>
                              </div>
                            </div>
                            <!-- modal image -->
                                <img class="" src="${news.image_url}" alt="" width="700" height="">
                            <!-- modal details -->
                                <p>${news.details}</p>
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
  
      `;
      trendingContainer.appendChild(trendingDiv);
    }

    // console.log(news.others_info.is_todays_pick);
    if (news.others_info.is_trending === true) {

      const newsDiv = document.createElement('div');
      newsDiv.classList.add('card', 'mb-3', 'border-0', 'shadow', 'p-3', 'mb-5', 'bg-body-tertiary', 'rounded');
      newsDiv.innerHTML = `
            <div class="row g-0">
            <div class=" col-md-4 p-1">
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
                  ${news.details.slice(0, 300)}.....
                   <span
                      style="color: blue"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      read more
                    </span>
                </p>
                <p class="card-text">
                  <small class="text-body-secondary"
                    >Last updated 3 mins ago</small
                  >
                </p>
                <div class="d-flex justify-content-between">
                  <!-- author -->
                  <div class="d-flex">
                    <img class="rounded-circle me-3 mb-3"
                      src="${news.author.img}"
                      style="height: 50px"
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
                      <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1
                              class="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              ${news.title}
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
                              <img class="rounded-circle me-3 mb-3"
                                src="${news.author.img}"
                                style="height: 50px"
                                alt=""
                              />
                              <div class="">
                                <div class=""><small>${news.author.name}</small></div>
                                <div class=""><small>${news.author.published_date}</small></div>
                              </div>
                            </div>
                            <!-- modal image -->
                                <img class="" src="${news.image_url}" alt="" width="700" height="">
                            <!-- modal details -->
                                <p>${news.details}</p>
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
    }
  });

};

const loadNews = (categoryId) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data))
};

const displayNews = (newses) => {
  const newsContainer = document.getElementById('news-container');
  const trendingContainer = document.getElementById('todays-picks');
  const trendingButton = document.getElementById('trending-button');
  trendingButton.classList.add('d-none');
  trendingContainer.classList.add('d-none');
  // const categoryIdColor = document.getElementById(`category-${categoryId}`);
  // console.log(categoryIdColor);
  // categoryIdColor.classList.add('text-blue');
  newsContainer.innerHTML = "";
  newses.forEach((news) => {
    // console.log(news);
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('card', 'mb-3', 'border-0', 'shadow', 'p-3', 'mb-5', 'bg-body-tertiary', 'rounded');
    newsDiv.innerHTML = `
            <div class="row g-0">
            <div class=" col-md-4 p-1">
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
                  ${news.details.slice(0, 300)}.....
                   <span
                      style="color: blue"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      read more
                    </span>
                </p>
                <p class="card-text">
                  <small class="text-body-secondary"
                    >Last updated 3 mins ago</small
                  >
                </p>
                <div class="d-flex justify-content-between">
                  <!-- author -->
                  <div class="d-flex">
                    <img class="rounded-circle me-3 mb-3"
                      src="${news.author.img}"
                      style="height: 50px"
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
                      <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1
                              class="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              ${news.title}
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
                              <img class="rounded-circle me-3 mb-3"
                                src="${news.author.img}"
                                style="height: 50px"
                                alt=""
                              />
                              <div class="">
                                <div class=""><small>${news.author.name}</small></div>
                                <div class=""><small>${news.author.published_date}</small></div>
                              </div>
                            </div>
                            <!-- modal image -->
                                <img class="" src="${news.image_url}" alt="" width="700" height="">
                            <!-- modal details -->
                                <p>${news.details}</p>
                            <!-- modal footer -->
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
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
loadTrendPicks();