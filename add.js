//  fetch ('https://official-joke-api.appspot.com/jokes/programming/random')
//  .then ((res) => {
//     if (res.ok)
//         console.log('success')
//     else
//         console.log('failed')
//        return res.json()
//  }) 

//  .then ((msg)=>console.log( msg[0].setup,msg[0].punchline))
// .catch((err) => err)


// fetch('https://jsonplaceholder.typicode.com/todos',{
//     method:'POST',
//     headers:{'content-type':'application/json'},
//     body:JSON.stringify({
      
//         userId:1,
//         id:291,
//         name:'suabsh',
//         mail:'subash12234@gamil.com',
//         phone:'8190861895'
       
      
//     })

// })
// .then(response => response.json())
// .then(json => console.log(json))


var myArray = [
    {'name': 'Subash', 'age':'23', 'birthday': '20/04/2000'},
    {'name': 'Nithish', 'age':'19', 'birthday': '23/05/2001'},
    {'name': 'Bharathi', 'age':'20', 'birthday': '12/06/2006'},
    {'name': 'karthi', 'age':'25', 'birthday': '12/06/1999'},
    
]

    // $('th').on('click', function(){
    //     var column = $(this).data('column')
    //     var order = $(this).data('order')
    //     var text = $(this).html()
    //     text = text.substring(0, text.length - 1)

    //     if(order == 'desc'){
    //         $(this).data('order', "asc")
    //         myArray = myArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
    //         text += '&#9660'

    //     }else{
    //         $(this).data('order', "desc")
    //         myArray = myArray.sort((a,b) => a[column] < b[column] ? 1 : -1)
    //         text += '&#9650'
                
    //     }
    //     $(this).html(text)
    //     buildTable(myArray)
    //     })

buildTable(myArray)

function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i< data.length; i++){
        var row =`<tr>
                <td>${data[i].name}</td>
                <td>${data[i].age}</td>
                <td>${data[i].birthday}</td>
                </tr>`
        
        table.innerHTML += row 
       
    }
}
