// 배경 음악을 재생, 일시중지하는 함수예요. 버튼을 클릭하면 버튼 이름도 변경됩니다.
let isPlaying = false;

function controlBgm() {
    const bgmElement = document.querySelector('.btn-bgm');
    const bgm = document.getElementById('audio-bgm');

    if (isPlaying) {
        bgm.pause();
        bgmElement.innerText = '재생';
        isPlaying = false;
    } else {
        bgm.play().then(() => {
            bgmElement.innerText = '일시중지';
            isPlaying = true;
        }).catch(error => {
            console.log("Autoplay prevented:", error);
        });
    }
}

// 첫 클릭 시 음악 재생 시도 (브라우저 정책 우회)
document.addEventListener('click', function firstClick() {
    if (!isPlaying) {
        controlBgm();
    }
    document.removeEventListener('click', firstClick);
}, { once: true });

// 페이지 로드 시 자동 재생 시도
window.onload = function () {
    const bgm = document.getElementById('audio-bgm');
    bgm.play().then(() => {
        isPlaying = true;
        document.querySelector('.btn-bgm').innerText = '일시중지';
    }).catch(error => {
        console.log("Autoplay blocked by browser policy. Waiting for user interaction.");
    });

    if (window.renewMessage) {
        window.renewMessage(); // index.js의 초기화 함수 호출
    }
};