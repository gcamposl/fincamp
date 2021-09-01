const client = [
  {
    name: 'campos',
    income: 700.0
  },
  {
    name: 'taj',
    income: 1200.0
  },
  {
    name: 'joao',
    income: 2700.0
  }
]

let ul = document.createElement('first-ul')

let btn = document.getElementById('btn')

btn.addEventListener('click', function () {
  //console.log('clicked')

  client.forEach(function (e) {
    let li = document.createElement('li')
    li.innerText = e
    ul.append(li)
  })
})

//Inserir elementos na lista usando DOM

//client = document.createElement('li')
