const messages = [
    "새해 복 많이 받으세요! 🌸✨ 2026년에는 하시는 모든 일이 순탄하고, 가족 모두 건강하며, 매일매일 행복한 웃음이 가득한 한 해가 되시길 진심으로 기원합니다.",
    "2026년 설날을 맞아 진심으로 축하드립니다! 🐰💖 올 한 해도 사랑하는 가족과 함께 따뜻하고 행복한 시간 보내시고, 늘 건강하고 평안하시길 바랍니다.",
    "새해에는 모든 소망이 이루어지시길! 🌟🎊 올해는 더 큰 기쁨, 더 많은 웃음, 더 깊은 사랑이 함께하는 특별한 한 해가 되시길 진심을 담아 기원합니다.",
    "즐거운 설날 연휴 보내세요! 👨‍👩‍👧‍👦💕 사랑하는 가족과 함께 맛있는 떡국도 먹고, 따뜻한 이야기 나누며, 소중한 추억 가득히 만드시길 바랍니다.",
    "새 봄처럼 따뜻하고 새해처럼 설레는 한 해 되세요! 🌷🌅 올 한 해는 꽃처럼 아름다운 일들로 가득 차고, 하루하루가 행복으로 물드시길 기원합니다.",
    "올 한 해도 웃음 가득하고 건강한 날들 보내세요! 😊🍀 2026년에는 좋은 인연, 좋은 기회, 좋은 소식이 끊이지 않는 풍요로운 한 해가 되시길 바랍니다.",
    "따뜻한 떡국 한 그릇에 담긴 정성처럼, 올 한 해도 따뜻하고 풍성한 새해가 되시길 바랍니다! 🥣💛 가족 모두 건강하시고 행복한 설날 보내세요.",
    "새해 첫날부터 행운이 가득하시길! 🎈🌟 2026년에는 바라시는 모든 소원이 하나하나 이루어지고, 매 순간이 감사와 기쁨으로 채워지시길 진심으로 기원합니다.",
    "가족과 함께하는 설날, 세상에서 가장 행복한 시간이 되세요! 🏡❤️ 따뜻한 정이 넘치는 명절 보내시고, 새해에도 늘 웃음꽃 피우시길 바랍니다.",
    "2026년에는 하시는 모든 일이 순조롭고 뜻하는 바 이루시길! 🎯💫 새해 복 많이 받으시고, 가족 모두 건강하며 행복한 한 해 되시길 기원합니다.",
    "새해에도 변함없이 건강하시고 행복하세요! 💪🌸 올 한 해는 사랑하는 사람들과 더 많은 시간을 함께하고, 더 깊은 행복을 느끼시는 한 해가 되시길 바랍니다.",
    "복주머니 가득 복이 찾아오는 행복한 설날 되세요! 🧧✨ 건강, 행복, 사랑, 성공이 모두 함께하는 풍성하고 넉넉한 2026년이 되시길 진심으로 기원합니다.",
    "올해도 좋은 인연, 좋은 기회가 가득하시길! 🌈💖 2026년 새해에는 만나는 모든 사람과 겪는 모든 일이 삶에 기쁨이 되는 특별한 한 해가 되세요.",
    "새해 소원 모두 이루시고, 매일이 행복하세요! ⭐🎉 설날을 맞아 가족과 함께 따뜻한 시간 보내시고, 올 한 해도 늘 건강하시길 진심으로 바랍니다.",
    "따뜻한 세배와 함께 건강과 행복을 기원합니다! 🙏🌺 2026년에는 근심 걱정은 모두 사라지고, 기쁨과 감사만 가득한 한 해가 되시길 바랍니다.",
    "2026년 새해, 모든 걱정은 훌훌 털어버리고 기쁨만 가득하세요! 🌤️💕 사랑하는 가족과 함께 행복한 설날 보내시고, 건강한 한 해 시작하시길 바랍니다.",
    "설날 맞이하여 온 가족이 함께 웃는 행복한 시간 되세요! 😄🎊 새해에는 더 많은 웃음, 더 깊은 사랑, 더 큰 행복이 함께하시길 진심으로 기원합니다.",
    "새해에는 더 좋은 일들이 기다리고 있을 거예요! 💪🌟 2026년에도 힘내시고, 하시는 모든 일에 좋은 결실을 맺으시길 바라며, 행복한 설날 되세요.",
    "한 살 더 먹는 만큼 더 행복해지시길 바랍니다! 🎂✨ 새해 복 많이 받으시고, 올 한 해도 건강하고 즐거운 날들로 가득하시길 진심으로 기원합니다.",
    "올 한 해도 감사와 기쁨이 넘치는 행복한 날들로 채워지세요! 🙏💖 설날을 맞아 가족과 함께 따뜻한 정을 나누시고, 아름다운 새해를 시작하세요.",
    "새해 아침 떠오르는 해처럼 밝고 따뜻한 한 해 되세요! 🌅❤️ 2026년에는 매일이 새롭고, 매 순간이 빛나는 특별한 한 해가 되시길 기원합니다.",
    "가족의 건강과 행복을 기원하며, 즐거운 설날 보내세요! 👪🌸 올 한 해도 웃음이 끊이지 않고, 사랑이 넘치는 따뜻한 가정이 되시길 바랍니다.",
    "2026년에도 좋은 일만 가득하시고 늘 웃음이 넘치세요! 😊🎈 새해 복 많이 받으시고, 바라시는 모든 것이 이루어지는 풍요로운 한 해가 되시길 기원합니다.",
    "설날에 받는 세뱃돈처럼, 올해도 풍성하고 넉넉하세요! 💰🌟 가족과 함께 따뜻한 명절 보내시고, 새해에도 행복과 건강이 가득하시길 바랍니다.",
    "새해에는 마음먹은 일 모두 이루시고 건강하세요! 🎯💛 2026년에는 도전하는 모든 일에 좋은 결과가 따르고, 매일이 보람찬 하루가 되시길 바랍니다.",
    "따뜻한 설날 연휴, 가족과 소중한 시간 보내세요! 🫂🌷 올 한 해도 서로를 아끼고 사랑하며, 행복한 추억을 가득히 만드시길 진심으로 기원합니다.",
    "올 한 해 하루하루가 선물 같은 행복한 날들이 되세요! 🎁✨ 새해 복 많이 받으시고, 2026년에는 작은 것에도 큰 기쁨을 느끼는 감사한 한 해가 되시길.",
    "새해 복 많이 받으시고 모든 것이 이루어지세요! 🙏🌈 가족과 함께 따뜻한 설날 보내시고, 올 한 해도 건강과 행복이 늘 함께하시길 진심으로 기원합니다.",
    "2026년 설날, 가족과 함께 따뜻한 정을 나누세요! 💕🏠 새해에는 서로에게 더 큰 힘이 되어주고, 함께 웃고 함께 행복한 아름다운 한 해가 되시길 바랍니다.",
    "밝고 희망찬 새해가 되시길 바라며, 행복한 설날 보내세요! 🌟💖 2026년에는 꿈꾸던 모든 것이 현실이 되고, 매일이 감사와 행복으로 빛나시길 기원합니다."
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

window.onload = () => {
    renewMessage();
};

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
