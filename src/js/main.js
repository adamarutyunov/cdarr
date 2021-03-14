function set_verdict_description(verdict) {
  let verdict_id = verdict.id
  let description = document.getElementById("verdict-description")

  description.innerHTML = verdicts[verdict_id][0]
  verdict.style.color = verdicts[verdict_id][1]
}

function clear_verdict_description(verdict) {
  let id = verdict.id
  verdict = document.getElementById(id)

  verdict.style.color = "#f1f1f1"
}

function set_packet_description(packet) {
  clear_packet_description()
  packet.classList.add("active")

  let packet_id = packet.id
  let code = document.getElementById("protocol-code")
  let inner_code = document.getElementById("protocol-inner-code")
  
  inner_code.innerHTML = "<pre>" + packets[packet_id] + "</pre>"
  code.style.height = inner_code.clientHeight + "px"
  
}

function clear_packet_description() {
  Object.keys(packets).forEach(function(key) {
    document.getElementById(key).classList.remove("active")
  })
}

function animate(obj) {
  obj.src = "/static/img/untitled/burning_man.gif"
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

window.set_verdict_description = set_verdict_description
window.clear_verdict_description = clear_verdict_description
window.set_packet_description = set_packet_description
window.animate = animate
