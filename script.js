console.log('script works!')

let searchButton=document.getElementsByTagName('button')[0]

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