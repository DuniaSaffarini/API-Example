const srh = document.querySelector("#search");
const sbtn = document.querySelector("#sbtn");
const result = document.querySelector(".result");
const authorName = document.querySelector("#author");


sbtn.addEventListener('click', e => {

    e.preventDefault();
    if (srh.value && authorName.value) {
        const value = srh.value
        const author = authorName.value
        //giphy api example 
        // const url = 'https://api.giphy.com/v1/gifs/search?api_key=6eoKWOMkautLA4x6ntIr7gNiBQpJ4y9g&q=${value}&limit=12';
        let map;

        const url = `https://www.googleapis.com/books/v1/volumes?q=${value}+inauthor:${author}&key=AIzaSyANtYTLXMtah9A3rwn6WJE23OdcBvJUtMg`
        // `https://api.publicapis.org/entries?title=${value}`
        // or 'https://api.publicapis.org/entries?title='+value;

        fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                /* res.data.forEach(element => {
                     const el = document.createElement('img');
                     el.src = element.images.downsized_medium.url;
                     el.alt = element.title;
                     result.appendChild(el)
                 }); */
                for (var i = 0; i < res.items.length; i++) {
                    var item = res.items[i];
                    // in production code, item.text should have the HTML entities escaped.
                    document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
                }
            })
    }
})