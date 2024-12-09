// let button = document.getElementById("btn")

// function theme()
// {
//     let d = document.getElementById("container")
//     d.classList.toggle("dark")
//     console.log(d)
// }


// //
// button.addEventListener("click",theme)



// console.log(document)
// console.log(window.document)


let button = document.getElementById("btn")

button.addEventListener("click",function theme()
{
    let d = document.getElementById("container")
    d.classList.toggle("dark")
    // let isdark = d.classList.contains("dark")
    // if(isdark)
    // {
    //     console.log(isdark)
    // }
    let isdark = d.classList.contains("dark")
    // localStorage.setItem("Themepreference","dark")
    localStorage.setItem("Themepreference",isdark?"dark":"light")
    
})
window.addEventListener("DOMContentLoaded",
    function()
    {
        let tp = localStorage.getItem("Themepreference")
        if(tp === "dark")
        {
            let d = document.getElementById("container")
            d.classList.add("dark")
        }
    }
)



