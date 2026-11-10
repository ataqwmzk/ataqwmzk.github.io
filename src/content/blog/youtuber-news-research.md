---
title: 【前編】YouTuberは海外の最新ニュースをどう集めている？ AIでどこまでできるか試した
date: 2026-11-10
summary: 海外ニュース系YouTuberの情報の集め方を調べ、Claude・ChatGPT・Dola・Grokに同じ頼み方をして、どこまでまねできるか比べた。
tag: 調べたこと
author: ai
---

この記事は2本立ての前編です。後編では、ここで分かったことを使って、ニュースを全自動で集める仕組みを作ります。

- 前編（この記事）：YouTuberの集め方と、AIでどこまでまねできるか
- 後編：[Grokで世界のニュースを毎時あつめる仕組みを作った](https://lzuna0032-design.github.io/izuna.github.io/blog/grok-news-collection/)

## 結論

- **YouTuberの速さの正体は「見張り続けていること」。** 何か起きてから検索するのではなく、情報源を前もって決めて、常に見ています
- **解説系なら、ClaudeやChatGPTだけでもかなりまねできる。** 数分単位の速報は、AIだけでは難しい
- **どのAIも、1つだけ信じると何かを取りこぼす。** 実験では、1回目と2回目で「一番よかったAI」が入れ替わりました
- **いちばん効いたのは役割分担。** 「速く拾うAI」と「慎重に確かめるAI」を分けて、最後は自分で元の記事を開く

## はじめの疑問

知りたかったのは、次の3つです。

1. YouTuberは、日本の外の最新ニュースをどうやって調べているのか
2. それは、ClaudeだけやChatGPTだけでもできるのか
3. AIエージェント（自分で動き続けるAI）でないと無理なのか

## ① YouTuberの集め方

調べると、海外ニュース系の作業はだいたい次の4段階でした。

```
情報源を見張る（X・RSS・通信社）
　↓
一次情報を確かめる（公式発表・原文）
　↓
翻訳・要約（AIや翻訳ツール）
　↓
台本・動画にする（日本向けに解説）
```

前の2つが「集める」、後ろの2つが「作る」部分です。AIが特に得意なのは、後ろの2つでした。

よく使われている情報源は次のとおりです。

| 情報源 | 例 | 特徴 |
|---|---|---|
| 通信社 | Reuters、AP、AFP | 多くのニュースが最初に出る場所 |
| 海外テレビ局のライブ | BBC、CNN など | YouTubeで配信していて、映像の確認にも使える |
| X（旧Twitter） | 記者・現地の人・公式アカウント | 第一報がいちばん速い。そのぶんデマも多い |
| RSS・ニュースアプリ | Feedly、Googleアラート | キーワードを登録すると自動で集まる |
| 一次情報 | 政府・企業の発表、論文 | 最後の確認用。ただし出るのが遅いこともある |

## ② AIだけでどこまでできるか

| やること | Claudeだけ | ChatGPTだけ | エージェント |
|---|---|---|---|
| 頼んだときに最新ニュースを調べる | ◎ | ◎ | ◎ |
| 毎朝などの定期チェック | ○ 定期タスク | ○ 定期タスク | ◎ |
| 変化があったときだけ知らせる | △ 頼み方しだい | ○ 見張る機能あり（最短1時間おき） | ◎ |
| Xの速報をすぐ拾う | ✕ 苦手 | ✕ 苦手 | ○ 仕組みしだい |
| 翻訳・要約・台本 | ◎ | ◎ | ◎ |

つまり、どれくらいの速さが必要かで分かれます。

```
速さはどのくらい必要？
　├─ 数時間〜1日遅れでOK（解説・まとめ系）
　│　　→ ClaudeかChatGPTだけで十分
　└─ 数分単位で一番乗りしたい（速報系）
　　　　→ 見張り続ける仕組み（エージェントや自動化ツール）が必要
```

## ③ 実験1：同じ頼み方で比べた

「今日の海外テックニュースを英語の情報源から3件」と、Claude・ChatGPT・Dolaに同じように頼みました。そのあと、出てきたニュースが本当にあるかを、検索で確かめました。

| AI | 結果 |
|---|---|
| Claude | 3件とも公式発表まで確認できた。ただし話題は地味め |
| ChatGPT | 読みやすい。ただし1件は数日前の話で、1件は元の記事が特定できなかった |
| Dola | 有名企業の大きな話が多く、話題性は一番。ただし1件は、会社名も数字も確認できなかった |

1回目だけを見ると、「正確さならClaude」という結果でした。

## ④ 実験2：「最新だと？」と聞き直した

続けて、それぞれに「最新だと？」とだけ送りました。今度はGrokも加えました。結果は1回目と逆になりました。

| AI | 結果 |
|---|---|
| Claude | 「最新です」と答えたが、**前日の大きな発表を見落としていた**。理由を「時差で記事が少ない」と説明したが、実際は検索で見つかる時間だった |
| Dola | 新しい大きなニュースを2つ拾った。数字も合っていた。ただし出典がニュースサイトのトップページで、記事そのものではなかった |
| Grok | 新しい話をいちばん多く拾った。確認できなかった話もあったが、Xで調べ直すと本当だった |
| ChatGPT | 1回目とほぼ同じ内容で、新しい話はあまり出なかった |

「最新だと？」と聞き直すのは、AIの見落としを見つけるのにとても効きました。

## ⑤ Xで確かめて分かったこと

Grokが出した「確認できない話」を、検索に載っているXの投稿から探しました。結果は、確認できなかった3件とも本当でした。

同時に、Xでのニュースの広がり方も見えました。

```
① 記者本人や速報アカウントの投稿　← いちばん速い
② ニュースサイトの記事　　　　　　← 少し遅れる
③ AIのまとめに出てくる
```

ただ、速報アカウントの中には、記者が確認した内容より話を大きくしているものがありました。Xは速いけれど、盛られて広がることもあります。

## ⑥ AIにAIを採点させると危ない

比べた結果を、Grokにも採点してもらいました。すると、気になることが2つありました。

| 起きたこと | 何が危ないか |
|---|---|
| 確認できなかった話を、Grokは「正しい」と書いた。自分で確かめた形跡はなかった | 2つのAIが同じことを言うと、本当っぽく見えてしまう |
| 見落としをしたClaudeを、Grokは「慎重で一番信頼できる」と評価した | 甘い採点で、ミスが隠れる |

| 採点のしかた | 信用できる度合い |
|---|---|
| AIが自分を採点 | 低い（甘くなりがち） |
| 別のAIが採点 | 中くらい（ずれることもある） |
| 元の記事や公式発表で確かめる | 高い |

## 分かったこと：役割を分ける

| 役割 | 向いているもの |
|---|---|
| 新しい話を速く広く拾う | Grok（Xに強い）、Dola |
| 拾った話を一次情報まで確かめる | Claude（ただし「最新だと？」で見落としをつつく） |
| 最後の判断 | 自分で元の記事を開く |

後編では、この役割分担をそのまま仕組みにしました。Grokに毎時ニュースを拾わせて、Claudeが朝と夕方にまとめて確かめます。

→ [後編：Grokで世界のニュースを毎時あつめる仕組みを作った](https://lzuna0032-design.github.io/izuna.github.io/blog/grok-news-collection/)

## まだ分からないこと

- 実験は2回だけです。回数を増やすと、AIごとの得意・不得意は変わるかもしれません
- 同じ頼み方でも、AIは毎回ちがうニュースを選びます。今回の結果は「その時の1回」です

この記事は2026年11月10日時点の内容です。各AIの機能はよく変わるので、使う前に最新の情報を確かめてください。

## 参考にした情報

- [ChatGPT Can Now Automate Tasks and Send Smart Alerts（SQ Magazine）](https://sqmagazine.co.uk/chatgpt-automate-tasks-send-smart-alerts.md)
- [ChatGPT Pulse Is Dying As Scheduled Tasks Become The New Hub（Yellow.com）](https://yellow.com/news/chatgpt-pulse-scheduled-tasks-hub)
- [Catch Today's Breaking News Live On YouTube（We Are Open）](https://discourse.weareopen.coop/news/catch-todays-breaking-news-live)
- [Anthropic Launches Claude Fable 5.2 and Mythos 5.2（MacRumors）](https://www.macrumors.com/2026/11/09/anthropic-launches-claude-fable-5-2/)
- [Introducing Claude Fable 5.2 on AWS（AWS Blog）](https://aws.amazon.com/blogs/machine-learning/introducing-claude-fable-5-2-on-aws/)
- [Claude Fable 5.2 in GitHub Copilot（GitHub Changelog）](https://github.blog/changelog/2026-11-09-claude-fable-5-2-in-github-copilot/)
- [Meta launches Muse Ember（Startup Fortune）](https://startupfortune.com/meta-launches-muse-ember-its-smallest-ai-model-on-the-day-anthropic-unveiled-fable-52-and-mythos-52/)

AIの回答を確かめるときに使った記事です。実験の結果そのものは、実際に試したものです。

感想は、Xの投稿のリプライ欄に書いてね！  
https://x.com/4xwmxr/status/2120012479522832635
