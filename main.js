//Example fetch 
/*document.querySelector('button').addEventListener('click', getFetch)
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
}*/

function getNYT(){
 // const choice1 = document.querySelector('div2')
  const urlNYT = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=CGkLRiA3jdI3aZLelCxbtrIiOl111hti`

  fetch(urlNYT)
      .then(res => res.json()) // parse response as JSON
      .then(data1 => {
        console.log(data1)

        //localStorage.setItem('BookTracker', data.title)
        //let books = localStorage.getItem('BookTracker') + ',' + data.title
        //localStorage.setItem('BookTracker', books)
        //document.querySelector('h2').innerText = data.title
        //const li = document.createElement('div2')
        //li.textContent = data.title
        //li.textContent = books
        //document.querySelector('ul').appendChild(li)
        //document.querySelector('#div2').appendChild(li)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=CGkLRiA3jdI3aZLelCxbtrIiOl111hti")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayNYT(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));


function displayNYT(data) {
 const nyt = data.results;
  const nytDiv = document.getElementById("nyt");
  const bookName = data.results.books[0].title;
  const heading = document.createElement("div");
  heading.innerHTML = bookName;
 // nytDiv.appendChild(heading);

  const rankDiv = document.getElementById("rank");
  const rank = data.results.books[0].rank;
  const rankHeading = document.createElement("div");
  rankHeading.innerHTML = rank
 // rankDiv.appendChild(rankHeading);

  let bookRankDiv = document.getElementById("rank")
  let bookRank =""
  for (let a = 0; a < data.results.books.length; a++){
    bookRank = data.results.books[a].rank;
    console.log(bookRank)
    let bookRankHead = document.createElement("ul")
    bookRankHead.innerHTML = bookRank
    bookRankDiv.appendChild(bookRankHead)

  }

  const buyDiv = document.getElementById("bb");
  const buy = data.results.books[0].buy_links[2].name
  const buyHeading = document.createElement("div")
  buyHeading.innerHTML = buy
  buyDiv.appendChild(buyHeading)



let bookTitleDiv=document.getElementById("nyt")
let bookTitle = ""

for(let i = 0; i < data.results.books.length; i++) {
  //`i` will take on the values `0`, `1`, `2`,..., i.e. in each iteration
  // we can access the next element in the array with `data.items[i]`, example:
  // 
  
   bookTitle = data.results.books[i].title; 
  console.log(bookTitle)
  let bookTitleHead = document.createElement("ul")
  bookTitleHead.innerHTML = bookTitle
  bookTitleDiv.appendChild(bookTitleHead)
  //bookTitleDiv.appendChild(document.createTextNode(bookTitle))
  //bookTitleDiv.appendChild(document.createDocumentFragmentbookTitle)
}
//const heading= document.createElement("div")
//heading.innerHTML = bookTitle;
//bookTitleDiv.appendChild(document.createTextNode(bookTitle))
//console.log(bookTitle)
}


