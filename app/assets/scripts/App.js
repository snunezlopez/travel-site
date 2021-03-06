import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'

// React Related Code Goes Here
import React from 'react'
import ReactDOM from 'react-dom'


// Import React component that we created
import MyAmazingComponent from './modules/MyAmazingComponent'

ReactDOM.render(<MyAmazingComponent />, document.querySelector("#my-react-example"))


new ClientArea()
new StickyHeader();
new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
let model

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if(typeof model == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                model = new x.default()
                setTimeout(() => model.openTheModal(), 20)
            }).catch(() => console.log("There was a problem."))
        } else {
            model.openTheModal()
        }

    })
})


if(module.hot) {
    module.hot.accept()
}