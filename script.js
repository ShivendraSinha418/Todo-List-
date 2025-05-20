 document.getElementsByClassName('inncont')[0].innerHTML = localStorage.getItem('all')
        function add(){
            var tnm = document.getElementsByClassName('taskname')[0].value
            var div = `<div class='task' onclick ="done(this)">
                <div class="desc">${tnm}</div>
                <button>done</button>
                </div>`
            div = div.trim()
            var inner = document.getElementsByClassName('inncont')[0].innerHTML
            localStorage.setItem('all',inner + div)
            document.getElementsByClassName('taskname')[0].value=""
            location.reload() 
        }
        function clr(){
            localStorage.clear()
            location.reload()
        }
        function done(element){
        element.remove()
        localStorage.setItem('all',document.getElementsByClassName('inncont')[0].innerHTML)
        location.reload()
        }