//Example fetch 
document.querySelector('button').addEventListener('click', getFetch)
const li = document.createElement('li')
document.querySelector('li').innerText = localStorage.getItem('BookTracker1')


function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  //const url = `https://openlibrary.org/isbn/${choice}.json$`
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (!localStorage.getItem('BookTracker1')){
            localStorage.setItem('BookTracker1',data.title)
        } else {
          let books = localStorage.getItem('BookTracker1') +"\n"+ data.title
          localStorage.setItem('BookTracker1', books)
        }
        //localStorage.setItem('BookTracker', data.title)
        //let books = localStorage.getItem('BookTracker') + ',' + data.title
        //localStorage.setItem('BookTracker', books)
        //document.querySelector('h2').innerText = data.title
        const li = document.createElement('li')
        li.textContent = data.title
        //li.textContent = books
        //document.querySelector('ul').appendChild(li)
        document.querySelector('#div1').appendChild(li)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getNYT(){
  const choice1 = document.querySelector('#div2')
  const urlNYT = `https://api.nytimes.com/svc/books/v3/lists.json`

  fetch(urlNYT)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (!localStorage.getItem('NYT')){
            localStorage.setItem('NYT',data.title)
        } else {
          let books = localStorage.getItem('NYT') +"\n"+ data.title
          localStorage.setItem('NYT', books)
        }
        //localStorage.setItem('BookTracker', data.title)
        //let books = localStorage.getItem('BookTracker') + ',' + data.title
        //localStorage.setItem('BookTracker', books)
        //document.querySelector('h2').innerText = data.title
        const li = document.createElement('div2')
        //li.textContent = data.title
        //li.textContent = books
        //document.querySelector('ul').appendChild(li)
        document.querySelector('#div1').appendChild(li)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}