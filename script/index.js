const messages = [
    "2026년 새해 복 많이 받으세요. 올 한 해, 여러분들의 삶이 따뜻한 햇살처럼 빛나길 바랍니다. 힘들었던 기억은 훌훌 털어버리고, 설레는 마음과 감사한 일들로 가득 채워지는 멋진 한 해가 되기를 진심으로 응원합니다. 늘 건강하세요!",
    "설날을 맞아 깊은 감사의 마음을 전합니다. 올 한 해는 당신이 꿈꾸던 모든 일들이 하나 하나 이뤄나가는 한 해가 되었으면 좋겠습니다. 때로는 지치더라도 여러분 곁에는 늘 응원하는 사람들이 있다는 걸 잊지 마세요. 건강과 행복이 늘 함께하길 바랍니다.",
];

let isAnimating = false;

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function toggleVisibility(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}

function typeMessage(callback) {
    if (isAnimating) return;
    isAnimating = true;

    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';

    let i = 0;

    function typeNextCharacter() {
        if (i < randomMessage.length) {
            messageElement.innerHTML += randomMessage[i];
            i++;
            setTimeout(typeNextCharacter, 60);
        } else {
            isAnimating = false;
            if (callback) {
                callback();
            }
        }
    }

    typeNextCharacter();
}

function renewMessage() {
    const postcardElement = document.getElementById('postcard');

    // 뒷면이 보이고 있으면 앞면으로 플립
    if (isFlipped) {
        flipImage();
    }

    toggleVisibility(postcardElement, false);

    setTimeout(() => {
        typeMessage();
        toggleVisibility(postcardElement, true);
    }, 1);
}

// window.onload moved to music.js to handle autoplay

// 이미지 반전
let isFlipped = false;

function flipImage() {
    const postcardElement = document.getElementById('postcard');

    if (isFlipped) {
        postcardElement.classList.remove('rotate-360');
        postcardElement.classList.add('rotate-0');
    } else {
        postcardElement.classList.add('rotate-360');
        postcardElement.classList.remove('rotate-0');
    }

    isFlipped = !isFlipped;

    postcardElement.addEventListener('transitionend', () => {
        if (isFlipped) {
            postcardElement.classList.remove('rotate-360');
            postcardElement.classList.add('rotate-180');
        } else {
            postcardElement.classList.remove('rotate-360', 'rotate-180');
            postcardElement.classList.add('rotate-0');
        }
    }, {
        once: true
    });
}
