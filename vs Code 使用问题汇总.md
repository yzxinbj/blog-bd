# VS Code 使用问题汇总
## 1. VS Code如何移除资源管理器中的项目？
文件>>关闭文件夹

## 2. Markdown 插件
command+shift+p 输入 install extensions
预览插件：Markdown Preview Github Styling

## 3. 全局替换
1. command + f -> command + shift + L
2. 选中文字后 command + F2
3. 左侧有搜索面板

## 4. 自动保存
搜 autosave

## 5. 工作区 概念
vs code 有三种设置 用户设置 工作区设置 和 文件夹设置
不通的设置可以配置不通的环境
比如：java 工作区 和 python 工作区 使用的环境是不一样的，我们可以在python 工作区 禁止 java 相关的插件等等
```
工作区配置文件需要点击 文件->将工作区另存为 这样在项目下生成 code-workspace 配置文件  

注：如果多个相同项目，比如3个vue 项目想使用相同的工作区配置，则需要把工作区配置文件放到3个项目的父文件夹下
```

解决办法 硬链接
```
通过在工作区反复地重复地添加与删除文件夹来操作的话，对程序员来说，实在太不智能。
我想出了一个曲线救国的办法，先勉强这么用着吧。就是用 mklink /H 命令，将父文件夹下的工作区文件硬链接到需要使用这个工作区配置的项目文件夹中，这个创建硬链接的操作每个项目只需要做一次即可。
以后需要对项目A进行开发工作，就只需要在项目A上右键使用 VSCode 打开即可，与以前的工作习惯相同。
VSCode会自动识别到工作区文件，而且，如果你修改了工作区文件配置，所有添加了硬链接的同类项目都会自动使用最新的工作区文件配置。
```
### 5.1 用户设置&工作区设置
1. 用户设置的文件位置
```
- Window %APPDATA%\Code\User\settings.json
- Mac $HOME/Library/Application Support/Code/User/settings.json
- Linux $HOME/.config/Code/User/settings.json
```

2. 工作区设置文件在对应文件夹下的 `.vscode` 下

## 6. 折叠代码
mac: command + k + 0，折叠所有代码块。command + k + j，展开所有代码块。
0是代码折叠级别，同理可以换用1，2，3等

## 7. 如何让js 文件中的 html 变高亮
Highlight Matching Tag 插件

## 8. VSCode 如何打开终端
mac: ctrl + `

## 9. VSCode 如何跳转到定义，返回
定义
> 按住 command/ctrl 后鼠标点击即可跳转到定义处

返回
```
首选项 -> 键盘快捷方式 -> 搜 navigateBack 
查看你使用的是哪个 有的是 alt + 方向左 有的是 ctrl + 方向左
我的是 ctrl + 中杠 -
```
## 10. VSCode 如何查看git历史，之前的改动
插件里面安装 git history

## 11. VSCode 如何 点击 class id 直接跳转到定义的位置
安装 CSS Navigation

## 12 如何高亮 js/ts 中使用的 html
安装 lit-html

## 13 VSCode tab 自动补全html tag
setting 搜索 emmet.triggerExpansionOnTab

## 14 VSCode 装了vim插件 cmd+c 复制不管用，但是右键复制ok
首选项 -> 键盘快捷方式 -> 搜 extension.vim_cmd+c 改成其他键位映射

## 15 缩进参考线，对齐线设置
对齐线是根据 tabsize 来展示的，所以要在 setting 中 设置好tabsize 
其次搜索 renderIndentGuides 是设置是否展示缩进参考线

## 16 js 文件 大括号空格问题
javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces

## 17 format all files
安装此扩展程序，文件夹处右键format即可
Format in context menus
