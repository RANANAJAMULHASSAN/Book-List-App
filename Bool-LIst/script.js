var btn = document.getElementById('btn')
var listItem = document.getElementsByClassName('list-Item')
list.addEventListener('click', removeItem)
btn.addEventListener('click', runEvent)
function runEvent(e) {
    e.preventDefault()
    var input = document.getElementById('input').value
    let li = document.createElement('li')
    let button = document.createElement('button')
    button.innerText = 'x'
    button.id = 'list,cutbtn'
    button.className='delete'
    li.appendChild(document.createTextNode(input))
    document.getElementById('list').appendChild(li)
    li.append(button)
    console.log(li)

}
document.getElementById('list').addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure')) {
            var li = e.target.parentElement;
            document.getElementById('list').removeChild(li);
        }
    }
}