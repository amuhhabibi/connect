const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}


const bgm = new Audio();
bgm.src = "bgm01.wav";
bgm.loop = true;
bgm.load();


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

// const textNodes = [
//   {
//     id: 1,
//     text: 'Pada suatu hari terjadi perang besar antara Varlen dan Granlin yang menghancuran banyak kota kecil di sekitarnya. Salah satunya adalah Bradford',
//     options: [
//       {
//         text: 'Lanjut',
//         nextText: 2
//       }
//     ]
//   },
//   {
//     id: 2,
//     text: 'Perang besar itu membekaskan rasa takut yang mendalam pada Masako dan Raiko',
//     options: [
//       {
//         text: 'Lanjut',
//         nextText: 3
//       }
//     ]
//   },
//   {
//     id: 3,
//     text: 'Bukan cuma itu, perang itu juga menumbuhkan dendam terhadap kematian ayahnya',
//     options: [
//       {
//         text: 'Lanjut',
//         nextText: 4
//       }
//     ]
//   },
//   {
//     id: 4,
//     text: 'Setelah perang redah, Masako dan Raiko tetap hidup dengan damai bersama ibunya, sampai saat ibunya menikah dengan seorang Jendral Perang bernama Hammock',
//     options: [
//       {
//         text: 'Lanjut',
//         nextText: 5
//       }
//     ]
//   },
//   {
//     id: 5,
//     text: 'Pada hari pertama tinggal bersama, Hammock datang bersama anaknya yang bernama Hervey dengan sifat sebagaimana layaknya seorang ayah,',
//     options: [
//       {
//         text: 'Lanjut',
//         nextText: 6
//       }
//     ]
//   },
//   {
//     id: 6,
//     text: 'namun . . .',
//     options: [
//       {
//         text: 'Lanjut',
//         nextText: 7
//       }
//     ]
//   },
//   {
//     id: 7,
//     text: 'hari demi hari sifat Ayah tirinya menjadi lebih kasar',
//     options: [
//       {
//         text: '. . .',
//         nextText: 8
//       }
//     ]
//   },
//   {
//     id: 8,
//     text: '. . .',
//     options: [
//       {
//         text: '. . .',
//         nextText: 9
//       }
//     ]
//   },
//   {
//     id: 9,
//     text: 'still work in progress :P',
//     options: [
//       {
//         text: '. . .'
//       },
//       {
//         text: '. . .'
//       },
//       {
//         text: '. . .'
//       },
//       {
//         text: '. . .'
//       }
//     ]
//   },
// ]

const textNodes = [
  {
    id: 1,
    text: 'You wake up in a strange place and you see a jar of blue goo near you.',
    options: [
      {
        text: 'Take the goo',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Leave the goo',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You venture forth in search of answers to where you are when you come across a merchant.',
    options: [
      {
        text: 'Trade the goo for a sword',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'Trade the goo for a shield',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: 'Ignore the merchant',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 4
      },
      {
        text: 'Find a room to sleep at in the town',
        nextText: 5
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame();
bgm.play();