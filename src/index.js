
fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramens => {
    ramens.forEach(ramen => renderRamen(ramen))
    
})
    function renderRamen(ramen) {
        const menuBar = document.querySelector("#ramen-menu")
        const img = document.createElement('img')

        img.src= ramen.image
        img.alt = ramen.image
        menuBar.append(img)

        img.addEventListener('click',(event)=> {
            showRamenDetails(ramen)
        })
    }

function showRamenDetails(details) {
    const name = document.querySelector('.name')
    const restaurant = document.querySelector('.restaurant')
    const detailImage = document.querySelector('.detail-image')
    const rating= document.querySelector('#rating-display')
    const comment = document.querySelector('#comment-display')

    name.textContent= details.name
    restaurant.textContent = details.restaurant 
    detailImage.src = details.image
    rating.textContent= details.rating
    comment.textContent = details.comment


}

function newForm(){
    const newForm = document.querySelector('#new-ramen')
    newForm.addEventListener('submit', event => {
        event.preventDefault()

        const newName= event.target.name.value
        const newRestaurant= event.target.restaurant.value
        const newRating= event.target.rating.value
        const newComment= event.target['new-comment'].value
        const newImage = event.target.image.value


        const loadNewRamen= {
            name: newName,
            restaurant: newRestaurant,
            rating: newRating,
            comment: newComment,
            image: newImage

        }
        renderRamen(loadNewRamen)
    })
}
newForm()














