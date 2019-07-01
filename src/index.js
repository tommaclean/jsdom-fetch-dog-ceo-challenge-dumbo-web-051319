console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {

    let dogUL = document.querySelector("#dog-breeds")
  // let dogImageContainer = document.getElementById("dog-image-container")
  // Challenge 1
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(handleImageAppending)

  // Challenge 2
  makeFetchHappen()
  .then(response => {
    let dogBreedsArr = Object.keys(response.message)
    dogBreedsArr.forEach(addLiToDOM)
    })


    // Challenge 3
    dogUL.addEventListener("click", function(event) {
        if (event.target.dataset.info === "breed") {
          event.target.style.color = "green"
        }
      })

    // Challenge 4
    let dogSelect = document.getElementById("breed-dropdown")
      dogSelect.addEventListener("change", (event) => {
        makeFetchHappen()
        .then(res => {
          let dogBreedsArr = Object.keys(res.message)
          let filteredArray = dogBreedsArr.filter(breed => {
            return breed.startsWith(event.target.value)
          })
            dogUL.innerHTML = ""

            filteredArray.forEach(addLiToDOM)
        })
      })

    //Challenge 4

  })


    // DOMContentLoaded


    function makeFetchHappen(){
      return fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
      }

  // Challenge 1 Stuff
  function handleImageAppending(jsonObject){
    let dogImageContainer = document.getElementById("dog-image-container")
    let arrOfDogsURLs = jsonObject.message
    arrOfDogsURLs.forEach(url => {
      dogImageContainer.innerHTML += makeImageTagString(url)
    })
  }
  function makeImageTagString(url){
    return `<img src="${url}"/>`
  }
  // Challenge 2 Stuff
  function addLiToDOM(breed){
    let dogUL = document.querySelector("#dog-breeds")
    dogUL.innerHTML += `<li data-info="breed">${breed}</li>`
  }
