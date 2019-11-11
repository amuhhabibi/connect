const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
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
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Pada suatu hari terjadi perang besar antara Negara Varlen dan Granlin yang menyebabkan kehancuran pada sebuah kota kecil bernama Bradford yang berada di sektar daerah peperangan.',
    options: [
      {
        text: 'Lanjut',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Perang itu membekaskan rasa takut yang sangat mendalam bagi Masako dan Raiko. Dan disusul oleh rasa dendam terhadap kematian Ayahnya.',
    options: [
      {
        text: 'Kembali',
        nextText: 1
      },
      {
        text: 'Lanjut',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'Masako dan Raiko dirawat dengan baik oleh Ibunya, sampai saat ia menikah dengan seorang jendral perang bernama Hammock.',
    options: [
      {
        text: 'Kembali',
        nextText: 2
      },
      {
        text: 'Lanjut',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'Pada hari pertama tinggal bersama, si Hammock membawa seorang anak yang bernama Hervey. Namun hari demi hari difat Ayah tirinya menjadi lebih kasar.',
    options: [
      {
        text: 'Kembali',
        nextText: 3
      },
      {
        text: 'Ulang',
        nextText: -1
      }
    ]
  },
]

startGame()