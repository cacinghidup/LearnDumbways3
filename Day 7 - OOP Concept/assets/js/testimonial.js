class Testimonial {
    constructor(content, image) {
        this._content = content
        this._image = image
    }

    get content() {
        return this._content
    }

    get image() {
        return this._image
    }

    get html() {
        return `<div class="detailTesti">
            <img src="${this.image}"/>
            <p class="content">"${this.content}"</p>
            <p class="author">- ${this.author}</p>
        </div>`
    }
}

class AuthorTestimonial extends Testimonial {
    constructor(author, content, image) {
        super(content, image)
        this._author = author
    }

    get author() {
        return this._author
    }
}

class CompanyTestimonial extends Testimonial {
    constructor(company, content, image) {
        super(content, image)
        this._company = company
    }

    get author() {
        return this._company + " Company"
    }
}

const testimonial1 = new AuthorTestimonial("Kosmas", "Mantap!", "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")

const testimonial2 = new AuthorTestimonial("Albert", "Cukup memuaskan", "https://m.timesofindia.com/photo/83890830/83890830.jpg")

const testimonial3 = new CompanyTestimonial("Google", "Terjamin!", "https://purneauniversity.org/wp-content/uploads/2022/12/JC-.png")

let testimonialData = [testimonial1, testimonial2, testimonial3]
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
    testimonialHTML += testimonialData[i].html
}

document.getElementById("isiTesti").innerHTML = testimonialHTML



