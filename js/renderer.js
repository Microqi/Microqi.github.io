import { CONFIG } from './config.js';

// 渲染器模块
export class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.resize();
    }

    // 调整画布大小
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    // 绘制背景（产生拖尾效果）
    drawBackground() {
        this.ctx.fillStyle = `rgba(0, 0, 0, ${CONFIG.trailOpacity})`;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // 绘制字符
    drawChar(char, x, y) {
        this.ctx.fillStyle = CONFIG.textColor;
        this.ctx.font = `${CONFIG.fontSize}px monospace`;
        this.ctx.fillText(char, x, y);
    }

    // 获取画布宽度
    getWidth() {
        return this.canvas.width;
    }

    // 获取画布高度
    getHeight() {
        return this.canvas.height;
    }
}

