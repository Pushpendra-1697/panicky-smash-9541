import { fitness } from "./fitness_data.js";


let append=()=>{
    console.log(fitness);

    let main=document.getElementById('container')
    main.innerHTML=null;
    fitness.forEach((el)=>{
        let div=document.createElement('div')
        let img=document.createElement('img')
        img.src=el.img;
        let h3=document.createElement('p')
        h3.innerText=el.name;
        let p=document.createElement('p')
        p.innerText=el.price;
        let btn=document.createElement('button')
        btn.innerText='Add to Cart'
        btn.addEventListener('click',()=>{
            addTocart()
        })
        
        div.append(img,h3,p,btn)
        main.append(div)
    })
}
append()

