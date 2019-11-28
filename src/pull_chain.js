const trigger1 = () => {
    swing = [[349, 2879], [340, 2933], [327, 2986], [309, 3038], [288, 3089], [263, 3138], [233, 3184], [199, 3228], [162, 3268], [123, 3306], [-47, 3306]];
    for (let i = 0, j =6; i < swing.length; i++) {
        const element = document.getElementsByClassName(`bob_${j}`)[0];
        let pixel_val = swing[i];
        element.style.transition = "transform 1.8s";
        element.style.transform = `translate(${pixel_val[0]}px, ${pixel_val[1]}px)`;
        j++;
    }
}

const trigger2 = () => {
    swing = [[354, 2875], [354, 2929], [354, 2983], [354, 3037], [354, 3091], [359, 3145], [368, 3198], [383, 3249], [403, 3299], [430, 3346], [436, 3372]];
    for (let i = 0, j =6; i < swing.length; i++) {
        const element = document.getElementsByClassName(`bob_${j}`)[0];
        let pixel_val = swing[i];
        element.style.transition = "transform 1.6s";
        element.style.transform = `translate(${pixel_val[0]}px, ${pixel_val[1]}px)`;
        j++;
    }
}

const trigger3 = () => {
    swing = [[354, 2875], [354, 2929], [354, 2983], [354, 3037], [354, 3091], [354, 3145], [354, 3199], [354, 3253], [354, 3307], [354, 3361], [284, 3415]];
    for (let i = 0, j =6; i < swing.length; i++) {
        const element = document.getElementsByClassName(`bob_${j}`)[0];
        let pixel_val = swing[i];
        element.style.transition = "transform 1.2s";
        element.style.transform = `translate(${pixel_val[0]}px, ${pixel_val[1]}px)`;
        j++;
    }
}

setTimeout(() => {trigger1()}, 1000);
setTimeout(() => {trigger2()}, 2000);
setTimeout(() => {trigger3()}, 4000);