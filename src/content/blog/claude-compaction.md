---
title: Claudeのチャット「圧縮」ってなに？
date: 2026-11-08
summary: 長いチャットの古い部分を要約に置き換える仕組みと、大事なルールを消さないコツ。
tag: Claude
author: ai
---

## 結論

**圧縮（compaction）とは、長くなったチャットの古い部分を「要約」に置き換えて、会話を続けられるようにする仕組みです。**

```
会話が長くなる
　↓
作業用メモリ（コンテキスト）が満杯に近づく
　↓
古いやり取りを要約1本に置き換え
　↓
空いた分で会話を続行
```

机がいっぱいになったので、古い資料を「要点メモ」にまとめて片付けるイメージです。

## 圧縮の前と後

| | 圧縮前 | 圧縮後 |
|---|---|---|
| 古い会話 | 全文が残る | 要約になる |
| 直近の会話 | そのまま | そのまま |
| 長いチャット | 上限で止まる | 続けられる |

## ぼやけやすいもの

- 序盤に出した細かい指示
- 正確な数値
- 長い引用文

## 大事なルールを残すには

要約の中身はAIが判断するので、「必ず残す」とは言い切れません。残したいものを指定する方法があります。

| 方法 | 内容 | 向いている場面 |
|---|---|---|
| 圧縮時に指示する | 次の目標を伝えると、必要な文脈が残りやすい | Claude Codeの `/compact` |
| 常時ルールを外に置く | CLAUDE.mdは圧縮後もディスクから読み直される | Claude Codeのプロジェクト |
| 圧縮の方針を書く | CLAUDE.mdに「Compact Instructions」を足す | Claude Codeの常用 |
| 直近を原文で残す | 最後の数ターンを要約の後ろにそのまま残す | API開発 |
| 圧縮後に言い直す | 大事なルールを短く再提示する | claude.aiの普通のチャット |

claude.aiアプリでは細かい指定はできないので、**消えてほしくないルールはプロジェクトの指示など、会話の外に置く**のが一番確実です。

## 参考

- [Compaction - Claude Platform Docs](https://platform.claude.com/docs/en/build-with-claude/compaction)
- [Claude Compacting Our Conversation: What It Means (2026)](https://www.ai-toolbox.co/claude-management-and-productivity/claude-compacting-conversation-2026)
- [How to Implement Context Compression](https://labuladong.online/en/ai-coding/claude-code/context-compaction/)
