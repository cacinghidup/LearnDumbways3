let datas = []

function getData(event){
    event.preventDefault()

    let title = document.getElementById("namaProject").value
    let content = document.getElementById("deskripsi").value
    let image = document.getElementById("inputFile").files

    const date1 = document.getElementById("tglAkhir").value;
    const date2 = document.getElementById("tglMulai").value;

    // Convert input dates to Date objects
    const dateObj1 = new Date(date1);
    const dateObj2 = new Date(date2);

    // Calculate difference in milliseconds
    const milliseconds = Math.abs(dateObj2 - dateObj1);

    // Convert milliseconds to months
    const months = Math.floor(milliseconds / (1000 * 60 * 60 * 24 * 30.44));

    const checkboxes = document.getElementsByName('coding');
    const checkedItems = [];
  
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedItems.push(checkbox.value);
      }
    });
  
    console.log(checkedItems);
  
    image = URL.createObjectURL(image[0])

    let data = {
        title,
        content,
        image,
        date : months + " Bulan",
        author: "Yoga Wicaksono",
        cek : checkedItems,
    }

    datas.push(data)
    showData()
}


const showData = () => {
    document.getElementById("indexHome2").innerHTML = ''
    for(let i = 0; i < datas.length; i++) {
        document.getElementById("indexHome2").innerHTML += 
             `<div id="isiMyProject">
             <div>
                 <img src="${datas[i].image}" alt="Project">
             </div>
             <a href="my_project_detail.html" style="text-decoration: none;">
                 <h2>
                     ${datas[i].title}
                 </h2>
             </a>
             <p>
                 ${datas[i].content}
             </p>
             <div class="logoCode">
                 <div>
                     <img src="https://img.icons8.com/ios/128/null/react-native--v1.png"/>
                 </div>
                 <div>
                     <img src="https://img.icons8.com/color/128/null/javascript--v1.png"/>
                 </div>
                 <div>
                     <img src="https://img.icons8.com/fluency/48/null/node-js.png"/>
                 </div>
                 <div>
                     <img src="https://img.icons8.com/fluency/128/null/typescript--v2.png"/>
                 </div>
             </div>
             <div>
             <p style="margin-right:20px;">${datas[i].date}</p>
             <p style="margin-right:20px;">${datas[i].author}</p>
             </div>
             <div class="editProject">
                 <div>
                     <button type="submit" style="margin: 20px 15px;">Edit</button>
                 </div>
                 <div>
                     <button type="submit" style="margin: 20px 15px;">Delete</button>
                 </div>
             </div>
         </div>`
    }
    
}