const api = 'https://type.fit/api/quotes'

const  dataFatch = async ()=>{
    const data = await fetch(api)
    const respons = await data.json()
    return respons
}

let count=0

const clickToChangePrev = ()=>{
    const clickBtnL = document.querySelector('.Left')
    clickBtnL.addEventListener('click',(e)=>{
       count--
       if(count<=-1) alert('data is not avilable please click next')
       nextPrevFun(count);
    })
}

const clickToChangeNext = ()=>{
    const clickBtnR = document.querySelector('.Right')
    clickBtnR.addEventListener('click',(e)=>{
        count++   
        if(count>=16) alert('data is not avilable please click next')
            nextPrevFun(count);
    })
}


const nextPrevFun = (c)=>{
dataFatch().then(res=>{
    const Text = document.querySelector('.text-p')
    const Athour = document.querySelector('.athore-app')
    if(c<=-1 || c>=16) return
    Text.innerHTML=res[c].text
    Athour.innerHTML=res[c].author    
})
}

dataFatch().then(res=>{
    const Text = document.querySelector('.text-p')
    const Athour = document.querySelector('.athore-app')
    Text.innerHTML=res[0].text
    Athour.innerHTML=res[0].author    
    console.log(count);
    
})

setTimeout(()=>{
    clickToChangePrev()
    clickToChangeNext()
},1000)


