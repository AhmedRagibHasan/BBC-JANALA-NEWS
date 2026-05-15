// console.log("Connection test");


const categoryContainer = document.getElementById("category_Container")


const newsContainer = document.getElementById("news_Container");


const bookMarkContainer = document.getElementById("bookmarkcontainer");

const bookMarkCount = document.getElementById("bookmarkcount")

const newsDetailsModal = document.getElementById("news_details_modal")

const modalContainer = document.getElementById("modal_Container")

let bookmarks = []




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

            showLoading()


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
            // console.log(err)
            showError()
        })
}

const showNewsByCategory = (articles) => {

    // console.log(articles);
    if (articles.length === 0) {
        showEmptyMessage()
        return;
    }

    newsContainer.innerHTML = ""

    articles.forEach(article => {
        newsContainer.innerHTML += `
        <div class=" rounded-lg shadow-md ">
        <div>
        <img class="rounded-t-lg" src="${article.image.srcset[5].url}"/>
        </div>
        <div id="${article.id}" class="p-2">
        <h1 class="font-bold">${article.title}</h1>
        <p>${article.time}</p>

        <button class="btn">Bookmark</button>

        <button class="btn">View Details</button>

        
        </div>

        


        </div>
        `
    })

}


newsContainer.addEventListener('click', (e) => {

    if (e.target.innerText === "Bookmark") {
        handleBookmarks(e);
    }

    if (e.target.innerText === "View Details") {
        handViewDetails(e)
        
    }

})

const handleBookmarks = (e) => {

    // console.log("bookmark button clicked")

    const title = e.target.parentNode.children[0].innerText

    const id = e.target.parentNode.id

    // console.log(id)
    // console.log(title)


    bookmarks.push({
        title: title,
        id: id
    })

    showBookmarks(bookmarks);



}

const showBookmarks = (bookmarks) => {
    bookMarkContainer.innerHTML = ""
    bookmarks.forEach(bookmark => {
        bookMarkContainer.innerHTML += `
        <div class="border my-2 p-1">
         <h1>${bookmark.title}</h1>
         <button onclick="handleDeleteBookmark('${bookmark.id}')" class="btn btn-xs">Delete</button>
        </div>
        `
    })

    bookMarkCount.innerText = bookmarks.length;
}

const handleDeleteBookmark = (bookmarkId) => {
    const filteredBookmarks = bookmarks.filter(bookmark => bookmark.id !== bookmarkId)
    // console.log(filteredBookmarks)

    bookmarks = filteredBookmarks
    showBookmarks(bookmarks)
}


handViewDetails = (e) => {

     const id = e.target.parentNode.id;
     fetch(`https://news-api-fs.vercel.app/api/news/${id}`)
     .then(res => res.json())
     .then(data => {
        
        showDtailsNews(data.article);
     })
     .catch(err => {
        console.log(err)
     })
     

}

const showDtailsNews = (article) =>{

    // console.log(article);

    newsDetailsModal.showModal();

    modalContainer.innerHTML =`
    <h1 class="font-bold">${article.title}</h1>
    <img class="py-5" src="${article.images[0].url}"/>
    <p>${article.content.join("")}</p>
    `

}


const showLoading = () => {

    newsContainer.innerHTML = `<div class="bg-green-700 p-3 text-white">Loading...</div>`

}

const showError = () => {
    newsContainer.innerHTML = `<div class="bg-red-500 p-3 text-white">Something Went Wrong</div>`
}

const showEmptyMessage = () => {
    newsContainer.innerHTML = `<div class="bg-orange-500 p-3 text-white">No news found for this category</div>`

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