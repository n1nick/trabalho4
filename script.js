const gerarBtts = document.getElementById("criarBtts");
const iptMax = document.getElementById("qntd");

var tentativas = 0;

gerarBtts.addEventListener('click', () => {
    const buttons = iptMax.value;
    const number = generateRandomNumber(0, buttons-1);

    for(let i=0;i!=buttons;i++){
        if(i == number){
            document.body.appendChild(gerarBotoes(i+1, true));
            continue;
        };
        document.body.appendChild(gerarBotoes(i+1, false));
    }
});


function gerarBotoes(text, isButton) {
    const ctn = document.querySelector("#container");

    const elem = document.createElement('button');
    elem.setAttribute('class', 'btts');
    elem.setAttribute('id', text);
    if(isButton){
        elem.name = text;

        elem.onclick = () => {
            alert("Acertou!");
        }
    } else {
        elem.onclick = () => {
            alert("Errou :( ");
        }
    }
    elem.innerText = text;
    return elem;

    ctn.appendChild(elem);
}

    
function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}