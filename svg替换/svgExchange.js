// Svg替换方式
// 自定义标签
// var My_text = document.registerElement('my-text');
// document.body.appendChild(new My_text());
let p = document.getElementById("text")
p.innerHTML = input.text

function svgExchange(input) {
    let result = ''
    inputList = input.split('')
    for (let i = 0; i < inputList.length; i++) {
        if (fontmap.hasOwnProperty(inputList[i])) {
            result = result + '<span class="'+ fontmap[inputList[i]] +'"></span>'
        } else {
            result = result + inputList[i]
        }
    }
    return result
}


let content = document.getElementById("content")

content.innerHTML = svgExchange(input.text)
