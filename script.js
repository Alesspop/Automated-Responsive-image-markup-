const IMAGES = document.querySelectorAll("img");

// create an object and have each of the properties of that object map to the different sizes.
const SIZES = {
    showcase: "100vw"
};

function makeSrcset(imgSrc) {
    let markup = [];
    let width = 400;  //*400 because the smallest number used is 400.

    for (let i = 0; i<2; i ++) {  // *2 because 2 types of each image.
        markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
        width+=400;  // +400 because when added to the above 400 get 800 (for the other image).
    }

    return markup.join();  // seperate in console with comma.
}

for (let i = 0; i <IMAGES.length; i ++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc = imgSrc.slice(0, -8);  //removing the "-800.jpg" from every img source
    let srcset = makeSrcset(imgSrc); 
    IMAGES[i].setAttribute("srcset", srcset);
    console.log(srcset);

    let type = IMAGES[i].getAttribute("data-type"); // shows the data-type
    let sizes =SIZES[type];
    IMAGES[i].setAttribute("sizes", sizes);
    console.log(sizes);
}