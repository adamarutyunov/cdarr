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
  let description = document.getElementById("protocol-description")
  let code = document.getElementById("protocol-code")
  
  description.innerHTML = packets[packet_id][0]
  code.innerHTML = "<pre>" + packets[packet_id][1] + "</pre>"
  
}

function clear_packet_description() {
  Object.keys(packets).forEach(function(key) {
    console.log(key)
    document.getElementById(key).classList.remove("active")
  })
}

window.set_verdict_description = set_verdict_description
window.clear_verdict_description = clear_verdict_description
window.set_packet_description = set_packet_description
