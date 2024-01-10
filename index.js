function updateTextPositions() {
  const image = document.querySelector(".img-fluid");
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  // 各テキスト位置要素を選択
  const textPosition0 = document.querySelector(".text-position0");
  const textPosition1 = document.querySelector(".text-position1");
  const subtextPosition1 = document.querySelector(".subtext-position1");
  const subtextPosition2 = document.querySelector(".subtext-position2");
  const subtextPosition3 = document.querySelector(".subtext-position3");
  const textPosition2 = document.querySelector(".text-position2");
  const textPosition3 = document.querySelector(".text-position3");
  const textPosition4 = document.querySelector(".text-position4");
  const textPosition5 = document.querySelector(".text-position5");
  // 他のテキスト位置要素も同様に選択

  // 画像の縦横比を判断（許容範囲を考慮）
  if (Math.abs(image.offsetWidth - viewportWidth) < 10) {
    // ワイドバージョンを適用
    textPosition0.classList.add("text-position0-wide");
    textPosition0.classList.remove("text-position0-tall");
    textPosition1.classList.add("text-position1-wide");
    textPosition1.classList.remove("text-position1-tall");
    subtextPosition1.classList.add("subtext-position1-wide");
    subtextPosition1.classList.remove("subtext-position1-tall");
    subtextPosition2.classList.add("subtext-position2-wide");
    subtextPosition2.classList.remove("subtext-position2-tall");
    subtextPosition3.classList.add("subtext-position3-wide");
    subtextPosition3.classList.remove("subtext-position3-tall");
    textPosition2.classList.add("text-position2-wide");
    textPosition2.classList.remove("text-position2-tall");
    textPosition3.classList.add("text-position3-wide");
    textPosition3.classList.remove("text-position3-tall");
    textPosition4.classList.add("text-position4-wide");
    textPosition4.classList.remove("text-position4-tall");
    textPosition5.classList.add("text-position5-wide");
    textPosition5.classList.remove("text-position5-tall");
    // 以下、他のテキスト位置要素に対しても同様の処理
  } else if (Math.abs(image.offsetHeight - viewportHeight * 0.8) < 10) {
    // トールバージョンを適用
    textPosition0.classList.add("text-position0-tall");
    textPosition0.classList.remove("text-position0-wide");
    textPosition1.classList.add("text-position1-tall");
    textPosition1.classList.remove("text-position1-wide");
    subtextPosition1.classList.add("subtext-position1-tall");
    subtextPosition1.classList.remove("subtext-position1-wide");
    subtextPosition2.classList.add("subtext-position2-tall");
    subtextPosition2.classList.remove("subtext-position2-wide");
    subtextPosition3.classList.add("subtext-position3-tall");
    subtextPosition3.classList.remove("subtext-position3-wide");
    textPosition2.classList.add("text-position2-tall");
    textPosition2.classList.remove("text-position2-wide");
    textPosition3.classList.add("text-position3-tall");
    textPosition3.classList.remove("text-position3-wide");
    textPosition4.classList.add("text-position4-tall");
    textPosition4.classList.remove("text-position4-wide");
    textPosition5.classList.add("text-position5-tall");
    textPosition5.classList.remove("text-position5-wide");
    // 以下、他のテキスト位置要素に対しても同様の処理
  }
}

// イベントリスナーを追加
window.addEventListener("resize", updateTextPositions);
window.addEventListener("load", updateTextPositions); // 画像読み込み完了時にも実行
