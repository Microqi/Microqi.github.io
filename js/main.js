import { CONFIG } from './config.js';
import { DropsManager } from './drops.js';
import { Renderer } from './renderer.js';

// 初始化
const canvas = document.getElementById('matrix');
const textInput = document.getElementById('textInput');

const renderer = new Renderer(canvas);
const dropsManager = new DropsManager(renderer.getWidth());

// 字符集
let chars = textInput.value + '❤';

// 监听输入框变化
textInput.addEventListener('input', () => {
    chars = textInput.value + '❤';
});

// 绘制函数
function draw() {
    renderer.drawBackground();
    
    const drops = dropsManager.getDrops();
    
    for (let i = 0; i < drops.length; i++) {
        // 随机选择字符
        const char = chars[Math.floor(Math.random() * chars.length)];
        // 绘制字符
        renderer.drawChar(char, i * CONFIG.fontSize, drops[i] * CONFIG.fontSize);
    }
    
    dropsManager.update(renderer.getHeight());
}

// 动画循环
setInterval(draw, CONFIG.frameInterval);

// 窗口大小改变时重新调整
window.addEventListener('resize', () => {
    renderer.resize();
    dropsManager.resize(renderer.getWidth());
});

