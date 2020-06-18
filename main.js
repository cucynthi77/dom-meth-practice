let bodyElement = document.querySelector("body")


let button = document.createElement("button")
button.append("remove")
bodyElement.append(button)

let mainElement = document.createElement("main")
bodyElement.append(mainElement)

let imgElement = document.createElement('img')
imgElement.src = "https://i.pinimg.com/236x/a0/98/62/a09862940529d60dfd0d1d065723d36e.jpg"
imgElement.className = "image"
mainElement.append(imgElement)

let anchorElement = document.createElement('a')
anchorElement.href = 'https://google.com'
anchorElement.className = "link"
anchorElement.append("google.com")
mainElement.append(anchorElement)

let scriptElement = document.createElement("script")
bodyElement.append(scriptElement)

button.addEventListener("click", function () {
    mainElement.remove()
})

let userInput = document.createElement("textarea")
bodyElement.append(userInput)
userInput.id="user"

let button2 = document.createElement("button")
button2.append("remove element")
bodyElement.append(button2)

button2.addEventListener("click", function () {

    userInput = document.getElementById("user")
     let userInputVal= userInput.value
     let elementToRemove= document.querySelector(userInputVal)
     elementToRemove.remove();
})

let button3 = document.createElement("button")
button3.append("create element")
bodyElement.append(button3)

let userInput2 = document.createElement("textarea")
bodyElement.append(userInput2)
userInput2.id="user2"



button3.addEventListener("click", function () {

    userInput2 = document.getElementById("user2")
     let userInputVal2= userInput2.value
     let elementToCreate= document.createElement("div")
     elementToCreate.append(userInputVal2);
     bodyElement.append(elementToCreate)
})

