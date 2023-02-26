<template>
    <div class="background">
        <img src="@/assets/imgs/background.png" class="backgroundImg" @click="playMusic">
        <audio ref="music" src="@/assets/MP3/backgroundMusic.mp3" class="backgroundMusic" autoplay="autoplay" loop
            preload="auto" controls></audio>
        <NiShiKi class="three"></NiShiKi>
    </div>
</template>

<script>
import NiShiKi from '@/components/NiShiKi'
export default {
    name: 'Background',
    components: {
        NiShiKi
    },
    methods: {
        // 该方法可以使页面刷新后自动继续播放背景音乐,阻止由于浏览器默认性能策略阻止用户交互前不能播放audio的bug
        playMusic() {
            this.$refs.music.play()
        }
    }
}
</script>

<style scoped>
.background {
    width: 100%;
    height: 100%;
    position: relative;
    /* 让div居中 */
    /* margin: auto; */
}

.backgroundImg {
    width: 100%;
    height: 100%;
}

.backgroundMusic {
    /* display: none; */
}

.three {
    position: absolute;
    bottom: 40px;
}
</style>