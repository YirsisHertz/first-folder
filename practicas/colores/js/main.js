function run(){
	let simbolos = '0123456789abcdef'
	let color = '#'

	for(let i = 0; i < 6; i++)
		color += simbolos[Math.floor(Math.random() * 16)]

	document.body.style.background = color

	let texto = document.getElementById("hex")
	let btn_element = document.getElementById("btn-color")

	texto.innerHTML = color
	texto.style.color = 'snow'
	texto.style.textShadow = "2px 0 0 #000, -2px 0 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"


	btn_element.style.color = "snow"
	btn_element.style.textShadow = "2px 0 0 #000, -2px 0 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"

}
