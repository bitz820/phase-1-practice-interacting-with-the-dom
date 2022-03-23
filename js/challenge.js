window.addEventListener("DOMContentLoaded", () => {

    // See the timer increment every second once the page has loaded.
    const timerCounter = document.querySelector('h1#counter')
    const increment = document.querySelector('button#plus')
    const decrement = document.querySelector('button#minus')
    const likes = document.querySelector("button#heart")
    const ul = document.querySelector('ul.likes')
    const pause = document.querySelector('button#pause')
    const submit = document.querySelector('button#submit')
    const likesObj = {}


    let second = 0;


    // create a function to count upwards each second
    function increaseSeconds() {
        second++
        timerCounter.innerHTML = second
    }
    let counter = setInterval(increaseSeconds, 1000)

    // create a function to count downwards each second
    function decreaseSeconds() {
        second--
        timerCounter.innerHTML = second
    }

    increment.addEventListener('click', () => {
        increaseSeconds()
    })

    decrement.addEventListener('click', () => {
        decreaseSeconds()
    })
    // "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
    likes.addEventListener('click', () => {
        if (likesObj[second]){
            likesObj[second]['data-likes']++;
            likesObj[second].innerText = `${likesObj[second]['data-id']} has ${likesObj[second]['data-likes']} likes`
        } else {
            const li = document.createElement('li');
            li['data-id'] = second;
            li['data-likes'] = 1;
            li.textContent = `${second} has 1 likes`;
            likesObj[second] = li;
            ul.append(li)
        }
    })

    // Pause the counter, which should:
    // pause the counter
    // disable all buttons except the pause button
    // switch the label on the button from "pause" to "resume"
    
    pause.addEventListener('click', () => {
        if (pause.innerText === "Pause") {
            pause.innerText = "Resume"
            clearInterval(counter)
        } else {
            pause.innerText = "Pause"
            counter = setInterval(increaseSeconds, 1000)

        }
    })

    // A comment box that adds comments when submitted
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const comment = document.querySelector('input#comment-input').value
        const li = document.createElement('li')
        li.textContent = comment
        const div = document.querySelector('div.comments')
        div.append(li)
        document.getElementById('comment-input').value = " "
    })

})
