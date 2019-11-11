const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

const bgm = document.getElementById('bgm');
bgm.loop = true;
bgm.load();
bgm.play();

function startGame() {
  state = {}
  showTextNode(1)
}

function playClickSound(){
  const audio = document.getElementById('audio');
  audio.play();
}


var mute = document.getElementById('mute');
mute.addEventListener('click', mutee);

function mutee(){
  if(bgm.muted){
    bgm.muted = false;
    mute.style.backgroundImage = "url(unmute.png)";
  }else{
    bgm.muted = true;
    mute.style.backgroundImage = "url(mute.png)";
  }
}


function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  playClickSound();
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Pada suatu hari terjadi perang besar antara Varlen dan Granlin yang menghancuran banyak kota kecil di sekitarnya. Salah satunya adalah Bradford',
    options: [
      {
        text: 'Lanjut',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Perang besar itu membekaskan rasa takut yang mendalam pada Masako dan Raiko',
    options: [
      {
        text: 'Lanjut',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'Bukan cuma itu, perang itu juga menumbuhkan dendam terhadap kematian ayahnya',
    options: [
      {
        text: 'Lanjut',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'Setelah perang redah, Masako dan Raiko tetap hidup dengan damai bersama ibunya, sampai saat ibunya menikah dengan seorang Jendral Perang bernama Hammock',
    options: [
      {
        text: 'Lanjut',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'Pada hari pertama tinggal bersama, Hammock datang bersama anaknya yang bernama Hervey dengan sifat sebagaimana layaknya seorang ayah,',
    options: [
      {
        text: 'Lanjut',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: 'namun . . .',
    options: [
      {
        text: 'Lanjut',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'hari demi hari sifat Ayah tirinya menjadi lebih kasar',
    options: [
      {
        text: '. . .',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: '. . .',
    options: [
      {
        text: '. . .',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: 'still work in progress :P',
    options: [
      {
        text: '. . .'
      },
      {
        text: '. . .'
      },
      {
        text: '. . .'
      },
      {
        text: '. . .'
      }
    ]
  },
]

startGame();