---
title: "tmux 完整使用指南：從入門到效率工作流"
description: "從 session 管理到快捷鍵配置，完整介紹 tmux 的使用方式與我的工作流設定。"
date: "2026-06-15"
tags: ["Tools", "tmux", "Terminal"]
---

## 為什麼要用 tmux

SSH 連線斷掉、終端機視窗太多切換費力——這兩件事促使我開始用 tmux。tmux 讓你的工作在遠端伺服器上持續執行，不依賴連線狀態，也能在單一終端機內開多個視窗和面板。

## 核心概念

tmux 有三個層級：

- **Session**：最外層，可以有多個，每個 session 獨立存在
- **Window**：session 裡的分頁（tab）
- **Pane**：window 裡切分出的面板

## 常用快捷鍵

前置鍵預設是 `Ctrl+b`（本文以 `<prefix>` 代替）。

| 動作 | 快捷鍵 |
|------|--------|
| 新建 session | `tmux new -s name` |
| 列出 sessions | `<prefix> s` |
| 分離 session | `<prefix> d` |
| 水平切割 | `<prefix> "` |
| 垂直切割 | `<prefix> %` |
| 切換 pane | `<prefix> 方向鍵` |
| 新建 window | `<prefix> c` |
| 切換 window | `<prefix> 數字` |

## 我的 `.tmux.conf` 設定

```bash
# 改前置鍵為 Ctrl+a（更順手）
unbind C-b
set-option -g prefix C-a
bind-key C-a send-prefix

# 滑鼠支援
set -g mouse on

# 從 1 開始編號
set -g base-index 1
setw -g pane-base-index 1

# 更直覺的分割鍵
bind | split-window -h
bind - split-window -v

# 快速重載設定
bind r source-file ~/.tmux.conf \; display "Reloaded!"
```

## 工作流範例

連進遠端伺服器開始工作：

```bash
# 建立具名 session
tmux new -s work

# 在裡面開三個 window
# Window 1: 編輯器
# Window 2: 執行程式
# Window 3: 監控 log

# 工作結束，分離 session（程式繼續跑）
Ctrl+a d

# 第二天回來
tmux attach -t work
```

這樣即使網路斷線，程式也不會中斷，下次 attach 回來就能繼續看輸出。
