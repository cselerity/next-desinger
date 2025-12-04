# Next Designer

Next Designer 是一个使用 React 和 TypeScript 构建的数据库设计工具，它允许您通过拖放界面直观地创建和管理数据库模式。

![项目截图](#)

## 功能特性

- 可视化数据库模式设计
- 拖放式界面创建数据表
- 表编辑器用于定义表名和字段
- 连接编辑器用于定义表之间的关系
- 支持主键标识
- 可导出的设计
- 跨平台桌面应用程序支持

## 使用技术

- [React](https://reactjs.org/) - 用于构建用户界面的 JavaScript 库
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的类型超集
- [Vite](https://vitejs.dev/) - 快速构建工具和开发服务器
- [XY Flow](https://xyflow.com/) - 用于创建基于节点的 UI 的库
- [React Bootstrap](https://react-bootstrap.github.io/) - UI 组件
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [Tauri](https://tauri.app/) - 用于构建桌面应用程序的框架

## 入门指南

### 前提条件

- Node.js (版本 16 或更高)
- npm 或 yarn

### 安装

1. 克隆仓库：
   ```bash
   git clone https://github.com/your-username/next-desinger.git
   ```

2. 进入项目目录：
   ```bash
   cd next-desinger
   ```

3. 安装依赖：
   ```bash
   npm install
   ```

### 开发

以开发模式运行应用程序：

```bash
# 作为网页应用程序运行
npm run web

# 作为桌面应用程序运行
npm run desktop
```

### 构建

为生产环境构建应用程序：

```bash
# 构建网页应用程序
npm run build

# 构建桌面应用程序
npm run tauri build
```

## 使用方法

1. 打开应用程序
2. 使用顶部工具栏选择不同工具：
   - 选择工具：选择和移动元素
   - 表格工具：创建新表
   - 矩形工具：创建矩形（计划功能）
   - 连接工具：在元素之间创建连接
3. 点击表格以编辑其属性：
   - 更改表名
   - 添加/删除字段
   - 定义字段类型
   - 设置主键
4. 通过从一个表拖拽到另一个表来连接表
5. 点击连接以编辑其属性

## 项目结构

```
next-desinger/
├── app/                 # 主应用程序代码
│   ├── components/      # 可复用组件
│   ├── nodes/           # XY Flow 的自定义节点类型
│   └── app.tsx         # 主应用程序组件
├── desktop/             # Tauri 桌面应用程序配置
│   └── src-tauri/
├── dist/                # 构建的应用程序文件
├── index.html           # 主 HTML 文件
└── vite.config.ts       # Vite 配置
```

## 贡献

欢迎贡献！请随时提交拉取请求。

1. Fork 仓库
2. 创建您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开拉取请求

## 许可证

该项目根据 MIT 许可证授权 - 有关详细信息，请参见 [LICENSE](LICENSE) 文件。

## 作者

Kevin Peng - kevin.penn@outlook.com

## 致谢

- 感谢 XY Flow 提供了出色的创建基于节点的 UI 的库
- 感谢 React 和 TypeScript 社区提供了优秀的文档和资源