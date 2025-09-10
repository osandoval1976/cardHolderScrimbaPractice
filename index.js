import {propertyForSaleArr} from "./properties/propertyForSaleArr.js"
import {placeholderPropertyObj} from "./properties/placeholderPropertyObj.js"

let renderHtml = []
function getPropertyHtml(x, y=undefined) {
if(x===0) {
return x.map((addTotal) =>
renderHtml =`
<section class="card">
    <img src="/images/${addTotal.image}">
    <div class="card-right">
        <h2>${addTotal.propertyLocation}</h2>
        <h3>${addTotal.priceGBP}</h3>
        <p>${addTotal.comment}</p>
        <h3>${addTotal.roomsM2.reduce((acc, currVal) => acc + currVal, 0)} m2</h3>
    </div>
</section> `

).join(' ')
}else if(x===undefined){
    
let [{propertyLocation, priceGBP, roomsM2,comment, image}] =y
return renderHtml =`
<section class="card">
    <img src="/images/${image}">
    <div class="card-right">
        <h2>${propertyLocation}</h2>
        <h3>${priceGBP}</h3>
        <p>${comment}</p>
        <h3>${roomsM2.reduce((acc, currVal) => acc + currVal, 0)} m2</h3>
    </div>
</section> `
    
}  

}


/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)

/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

The HTML and CSS have been done for you. 
This is the HTML template 👇. Replace everything in UPPERCASE with property data.

*/
/* Scrimba teacher solution

 `function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
    return propertyArr.map(property => {
        const {
            propertyLocation,
            priceGBP,
            roomsM2,
            comment,
            image
        } = property
        const totalRoomSizeM2 = roomsM2.reduce((total, current) => total + current)
        return `
            <section class="card">
                <img src="/images/${image}">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>${totalRoomSizeM2} m&sup2;</h3>
                </div>
            </section>` 
    }).join('')
}`*/
