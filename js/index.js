const bgHome = document.body.querySelector('#linkHome')
const bgUniverse = document.body.querySelector('#linkUniverse')
const bgExplore = document.body.querySelector('#linkExplore')


function backgroundHome(){
    document.body.classList.remove("universe")
    document.body.classList.remove("explore")
    document.body.classList.add("home")
}

function backgroundUniverse (){
    document.body.classList.add("universe")
    document.body.classList.remove("explore")
    document.body.classList.remove("home")
}

function backgroundExplore (){
    document.body.classList.remove("universe")
    document.body.classList.add("explore")
    document.body.classList.remove("home")
}

if(bgHome){
    bgHome.addEventListener("click", function(){
        backgrounds.backgroundHome()
    })
}

if(bgUniverse){
    bgUniverse.addEventListener("click",function(){
        backgrounds.backgroundUniverse()
    })
}

if(bgExplore){
    bgExplore.addEventListener("click",function(){
        backgrounds.backgroundExplore()
    })
}


//router

import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explore", "/pages/explore.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()