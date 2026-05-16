<div align="center">

# 🌀 Cloth Web

**3D布料物理模拟 · 网页内容贴在光滑布料表面**

[![Live Demo](https://img.shields.io/badge/Live-Demo-6366f1)](https://dipclawn.github.io/cloth-web/)
[![PWA](https://img.shields.io/badge/PWA-✅-brightgreen)](https://dipclawn.github.io/cloth-web/)
[![Three.js](https://img.shields.io/badge/Three.js-r128-blue)](https://threejs.org/)

</div>

## ✨ 功能

| 功能 | 说明 |
|------|------|
| 🌀 **布料物理** | 基于Verlet积分的GPU布料模拟，支持重力、风力、碰撞 |
| 🖱️ **拖拽交互** | 鼠标/触屏直接拖拽布料拉扯变形 |
| 🔄 **视角控制** | SHIFT+拖拽旋转视角，滚轮缩放 |
| 🌬️ **风力效果** | 可开关的实时风力，布料随风飘动 |
| 📄 **网页纹理** | 布料表面显示网页内容 |
| 🌟 **3D场景** | 多光源系统、阴影、星空背景 |
| 📱 **移动端** | 支持触屏拖拽和手势交互 |
| 🏗️ **PWA** | 可安装到桌面，离线可用 |

## 🔧 技术栈

- **Three.js r128** — 3D渲染引擎
- **Verlet Integration** — 布料物理模拟
- **MeshPhysicalMaterial** — 光滑布料效果（clearcoat + roughness）
- **Canvas 2D** — 网页内容渲染为纹理

## 🚀 快速开始

### 在线体验
https://dipclawn.github.io/cloth-web/

### 本地使用
```bash
# 直接用浏览器打开
open index.html

# 或使用任意HTTP服务器
python3 -m http.server 8080
```

### 交互说明
- 🖱️ **拖拽布料** — 点击布料任意位置拖拽
- 🔄 **SHIFT+拖拽** — 旋转3D视角
- 📏 **滚轮** — 缩放远近
- 🌬️ **风按钮** — 开关风力效果
- 📌 **固定角** — 切换上下角固定模式
- ↺ **重置** — 布料恢复初始状态

## 📸 效果

- 光滑布料表面，反射光泽
- 布料飘动时纹理自然跟随弯曲
- 风吹时布料舒展翻动
- 拖拽时产生真实物理形变

## 📜 License

MIT
