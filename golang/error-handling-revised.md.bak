+++
title = "【改訂版】 Go 言語のエラー・ハンドリング"
date =  "2020-12-02T19:35:17+09:00"
description = "description"
image = "/images/attention/go-logo_blue.png"
tags = [ "programming", "golang", "error", "panic" ]
pageType = "text"
draft = true

[scripts]
  mathjax = false
  mermaidjs = false
+++

プログラミングにおいて，正常系は基本的に「一本道」だが，異常系は（予期しないものも含めて）無数にある。
エラー・ハンドリングは巨大迷路パズルを袋小路から順に塗りつぶして「正解」をあぶり出していく作業に似ていると思う。
下手くそな迷路の攻略はただの「作業」だが，よく考えられた迷路は袋小路の配置も美しい。

ある意味でプログラミング設計とはエラー（＝袋小路）をどのように記述するか，と言えるだろう。

私が [Go] のエラー・ハンドリングについて最初に記事にしたのは[2015年]({{< relref "./error-handling.md" >}} "エラー・ハンドリングについて（追記あり）")だが，あれから [Go] も少しずつ変わってるし，私も当時よりは多少なりと理解も進んだと思うので，ここらでイッパツ改訂版の記事を書いてみようと思う。

## 「例外」は Legacy

2020年代に入って Rust の勉強を少しだけ始めたが，改めて分かった。

{{< div-gen type="markdown" class="center" >}}
**もはや例外（Exception）は Legacy Code だ！**
{{< /div-gen >}}

たとえば Rust は[列挙型と match 式を組み合わせてエラーの抽出と評価を行う]({{<ref "/rust-lang/error-handling.md" >}} "エラー・ハンドリングのキホン")ことでエラー・ハンドリングを実装できる。

```rust
fn main() {
    let n = match parse_string("-1") {
        Ok(x) => x,
        Err(e) => panic!(e), //Output: thread 'main' panicked at 'Box<Any>', src/main.rs:8:19
    };
    println!("{}", n); //do not reach
}
```

（`Ok`, `Err` が列挙子で， `x` や `e` がそれぞれの値となる）

実にスマート！

### 「例外」の問題は “goto” と同じ[^goto1]

[^goto1]: ちなみに [Go] の `goto` や ラベル付きの `break`, `continue` は[飛び先に制約](https://golang.org/test/goto.go)があり，どこにでもジャンプできるわけではない。

「例外」では，あるオブジェクトに関する記述が少なくとも2つ（たとえば `try` と `catch`）下手をすると3つ以上のスコープに分割されてしまう。
しかもオブジェクトの状態ごと脱出するため，その状態（の可能性）の後始末をスコープ間で矛盾なく記述しきらなければならない。

この一連に不備があればバグやリークやその他の脆弱性のもとになる。
考えるだけで面倒な話である。

## [Go] におけるエラー・ハンドリングのキホン

[Go] のエラー・ハンドリングはとにかく「シンプル」の一言に尽きる。










[Go]: https://golang.org/ "The Go Programming Language"
[`builtin`]: https://golang.org/pkg/builtin/ "builtin - The Go Programming Language"
[`errors`]: https://golang.org/pkg/errors/ "errors - The Go Programming Language"
[`os`]: https://golang.org/pkg/os/ "os - The Go Programming Language"
[`bytes`]: https://golang.org/pkg/bytes/ "bytes - The Go Programming Language"
[Conversion]: https://golang.org/ref/spec#Conversions "The Go Programming Language Specification - The Go Programming Language"

## 参考図書

{{% review-paapi "4621300253" %}} <!-- プログラミング言語Go -->
