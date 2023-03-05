// Data array of object

const testimoni = [
    {
        author: "Kosmas",
        content: "Efisiensi waktu terjaga",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        rating: 4,
    },
    {
        author: "Rosita",
        content: "Wow, sangat menakjubkan!",
        image: "https://media.istockphoto.com/id/1289220949/photo/successful-smiling-woman-wearing-eyeglasses-on-grey-wall.jpg?s=612x612&w=0&k=20&c=BjyPRn28F3mc6IiBCf4Ko-lFZisaNUYXBBnAcO47ZgE=",
        rating: 5,
    },
    {
        author: "Albert",
        content: "Masih perlu banyak perbaikan",
        image: "https://m.timesofindia.com/photo/83890830/83890830.jpg",
        rating: 1,
    },
    {
        author: "Meliana",
        content: "Butuh sentuhan seni",
        image: "https://purneauniversity.org/wp-content/uploads/2022/12/JC-.png",
        rating: 2,
    }
]

// Fungsi menampilkan semua data

function allTestimoniToHTML (){
    let testimoniHtml = "";

    testimoni.forEach((index) => {
        testimoniHtml += `
        <div class="detailTesti" id="detailTesti">
            <img src="${index.image}"/>
            <p class="content">"${index.content}"</p>
            <p class="author">-${index.author}</p>
            <p class="rating">${index.rating}  <i class="fa-solid fa-star"></i></p>
        </div>`
    })
    
    document.getElementById("isiTesti").innerHTML = testimoniHtml;
}

allTestimoniToHTML()

// Fungsi Filter by rating

function filterTestimoni (rating){
    let testimoniHtml = "";

    // FilterRating
    const testimoniFilter = testimoni.filter((index) => {
        return index.rating === rating
    })

    if (testimoniFilter.length === 0) {
        testimoniHtml = `<h1> Data not Found </h1>`
    } else {
        testimoniFilter.forEach((index) => {
            testimoniHtml += `<div class="detailTesti" id="detailTesti">
            <img src="${index.image}"/>
            <p class="content">"${index.content}"</p>
            <p class="author">-${index.author}</p>
            <p class="rating">${index.rating}  <i class="fa-solid fa-star"></i></p>
        </div>`
        })
    }

    document.getElementById("isiTesti").innerHTML = testimoniHtml

}