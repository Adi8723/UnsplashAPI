const imageContainer = document.getElementById('imageContainer');
const loader = document.getElementById('loader')

let photosArray = [];

// Helper function to set attr on dom elem

function setAttributes(elem, attr){
    for(const key in attr){
        elem.setAttribute(key, attr[key])
    }
}




// Create Element for Links & photos, ass to dom
function displayPhotos(){
    photosArray.forEach((photo) =>{
        //Creata <a> </a> to link to unsplash
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create iamage for photo

        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);

        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Put img inside a , then put both inside imagecantainer Element

        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}




//Unsplash API
const count = 10;
const apiKey ='QxHzO05DQWrMUZMXgxLt4NHnA_gQGc6OygjAPyYn4Ho'
const url =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//get photos from Unsplash API

async function getPhotos(){
    try {
        const response = await fetch(url);
        photosArray = await response.json();
        // const data = await response.json()
       displayPhotos();
       console.log('photoArray :>> ', data);

    } catch (error) {
        // catch error here
    }
}

getPhotos();
