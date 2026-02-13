// 배경 음악 제어
let isPlaying = false;

function startBgm() {
    if (isPlaying) return; // 이미 재생 중이면 무시

    const bgm = document.getElementById('audio-bgm');
    bgm.play().then(() => {
        isPlaying = true;
    }).catch(error => {
        console.log("Autoplay prevented:", error);
    });
}

function stopBgm() {
    const bgm = document.getElementById('audio-bgm');
    bgm.pause();
    isPlaying = false;
}