// console.log("Connection test");


const categoryContainer = document.getElementById("category_Container")


const newsContainer = document.getElementById("news_Container");




// Normal fetch function

const loadCategory = () => {




    fetch("https://news-api-fs.vercel.app/api/categories")
        .then(res => res.json())
        .then(data => {
            // console.log(data.categories);

            const categories = data.categories

            showCategory(categories);

        })
        .catch(err => {
            console.log(err);
        })
}

const showCategory = (cats) => {

    cats.forEach(element => {
        categoryContainer.innerHTML += ` 
            <li id="${element.id}" class="hover:border-b-4 hover:border-red-600 border-red-600 cursor-pointer">${element.title}</li>`
    });

    categoryContainer.addEventListener('click', (e) => {

        const allLi = document.querySelectorAll("li");

        allLi.forEach(li => {
            li.classList.remove("border-b-4")
        })

        if (e.target.localName === "li") {

            // console.log(e.target.id);


            e.target.classList.add("border-b-4");

            loadNewsByCategory(e.target.id);
        }
    })

}

const loadNewsByCategory = (categoryId) => {

    // console.log(categoryId);
    fetch(`https://news-api-fs.vercel.app/api/categories/${categoryId}
`)
        .then(res => res.json())
        .then(data => {
            showNewsByCategory(data.articles);
        })
        .catch(err => {
            console.log(err)
        })
}

const showNewsByCategory = (articles) => {

    // console.log(articles);

    newsContainer.innerHTML = ""

    articles.forEach(article => {
        newsContainer.innerHTML += `
        <div class=" rounded-lg shadow-md">
        <div>
        <img class="rounded-t-lg" src="${article.image.srcset[5].url}"/>
        </div>
        <div class="p-2">
        <h1 class="font-bold">${article.title}</h1>
        <p>${article.time}</p>
        
        </div>


        </div>
        `
    })

}




loadCategory()
loadNewsByCategory("main");

// loadCategoryAsync()



//Async Awake function

// const loadCategoryAsync = async () => {
//     try {
//         const res = await fetch("https://news-api-fs.vercel.app/api/categories");
//     const data = await res.json()
//     console.log(data)
//     } catch (error) {
//         console.log(err)

//     }
// }