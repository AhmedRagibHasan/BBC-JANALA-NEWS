// console.log("Connection test");


 const categoryContainer = document.getElementById("category_Container")


// Normal fetch function

const loadCategory = () => {

    


    fetch("https://news-api-fs.vercel.app/api/categories")
    .then(res => res.json())
    .then(data => {
        console.log(data.categories);

        const categories = data.categories

        showCategory(categories);
       
    })
    .catch(err => {
        console.log(err);
    })
}

const showCategory = (cats) => {

     cats.forEach(element => {
            categoryContainer.innerHTML +=` 
            <li id="${element.id}" class="hover:border-b-4 hover:border-red-600 cursor-pointer">${element.title}</li>`
        });

}


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

loadCategory()

// loadCategoryAsync()