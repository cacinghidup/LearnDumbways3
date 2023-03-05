const testimonialServer = new Promise((resolve, reject) => {
    const xhr  = new XMLHttpRequest()

    xhr.open("GET","https://api.npoint.io/1599870d4991beab436d", true)

    xhr.onload = function () {
        if ( xhr.status === 200){
            resolve(JSON.parse(xhr.response))
        } else {
            reject("Server Error")
        }
    }
    xhr.send()
})

async function allTestimoniToHTML () {
    const responseServer = await testimonialServer;

    let testimoniHtml = ""
    
    responseServer.forEach((index) => {
        testimoniHtml += `
        <div class="detailTesti" id="detailTesti">
            <img src="${index.image}"/>
            <p class="content">"${index.content}"</p>
            <p class="author">-${index.author}</p>
            <p class="rating">${index.rating}  <i class="fa-solid fa-star"></i></p>
        </div>
        ` 
    })

    document.getElementById("isiTesti").innerHTML = testimoniHtml;

    // console.log(responseServer)
}

allTestimoniToHTML()

async function filterTestimoni(rating) {
    const responseServer = await testimonialServer;

    let testimoniHtml = "";

    const testimoniFilter = responseServer.filter((index) => {
        return index.rating === rating
    })

    if (testimoniFilter.length === 0) {
            testimoniHtml = `<h1>Data Not Found</h1>`
    } else {
            testimoniFilter.forEach ((index) => {
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