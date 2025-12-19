import { CONFIG } from './config.js';

// 雨滴管理模块
export class DropsManager {
    constructor(canvasWidth) {
        this.drops = [];
        this.columns = Math.floor(canvasWidth / CONFIG.fontSize);
        this.initDrops();
    }

    // 初始化雨滴
    initDrops() {
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * -100;
        }
    }

    // 更新雨滴位置
    update(canvasHeight) {
        for (let i = 0; i < this.drops.length; i++) {
            // 随机重置雨滴位置
            if (this.drops[i] * CONFIG.fontSize > canvasHeight && Math.random() > CONFIG.dropResetThreshold) {
                this.drops[i] = 0;
            }
            // 移动雨滴
            this.drops[i]++;
        }
    }

    // 窗口大小改变时调整
    resize(canvasWidth) {
        const newColumns = Math.floor(canvasWidth / CONFIG.fontSize);
        if (newColumns !== this.columns) {
            this.drops.length = newColumns;
            for (let i = 0; i < newColumns; i++) {
                if (this.drops[i] === undefined) {
                    this.drops[i] = Math.random() * -100;
                }
            }
            this.columns = newColumns;
        }
    }

    // 获取雨滴数据
    getDrops() {
        return this.drops;
    }
}

