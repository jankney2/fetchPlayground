console.log('script works!')


let requestUrl='https://randomuser.me/api/'

let searchButton=document.getElementsByTagName('button')[1]

let generateUserButton=document.getElementsByTagName('button')[0]


generateUserButton.addEventListener('click', ()=>{
    fetch(requestUrl).then(data=>data.json()).then(res=>{
        let newUser=res.results[0]
        document.getElementById('userPhoto').src=newUser.picture.thumbnail
        document.getElementById('userName').innerText=newUser.name.first+ ' '+ newUser.name.last

        
        console.log(res.results, 'results')
    })
})



//fetch pokemon name
console.log(document.getElementsByClassName('pokemon')[0].attributes[0])

searchButton.addEventListener('click', ()=>{
    let input= document.getElementById('searchInput')
    console.log(input.value)
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value.toLowerCase()}`).then(data=>{
         return data.json()
    
    }).then(res=>{

        

        document.getElementById('pokeName').innerText=input.value
        
        
        document.getElementById('base').innerText='base experience: ' +res.base_experience

        document.getElementById('pokeImage').src=res.sprites.front_default

        
        if(+res.weight>200){
            document.getElementById('weight').innerText='Oooh he a thicc boi'

        }

        if(+res.weight<200){
            document.getElementById('weight').innerText=`he's a smol boi`            
        }


        input.value=''
    }).catch(err=>{
        alert('pokemon not found!')
        console.log(err)
    })

})



//return pokemon statz and the like 