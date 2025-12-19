完成了！`script.js` 已拆分为 4 个模块化文件：

**新的文件结构：**
```
simpleweb/
├── index.html
├── style.css
└── js/
    ├── config.js    # 配置常量
    ├── drops.js     # 雨滴管理类
    ├── renderer.js  # 画布渲染器类
    └── main.js      # 主入口文件
```

**各模块职责：**
- **`config.js`** - 所有配置参数（字体大小、透明度、颜色等）
- **`drops.js`** - `DropsManager` 类，管理雨滴的创建、移动和重置
- **`renderer.js`** - `Renderer` 类，负责画布绑定和字符绘制
- **`main.js`** - 主入口，组装各模块并启动动画循环

使用了 ES6 模块化（`import/export`），代码更清晰、易于维护和扩展！