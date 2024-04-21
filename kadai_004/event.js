  // HTMLが読み込み完了した際に、「loadイベントが発生しました」とコンソールに出力される
$(window).on('load', () => {
  console.log("loadイベントが発生しました");
});

// 画面スクロールした際に、「scrollイベントが発生しました」とコンソールに出力されている
$(window).on('scroll', () => {
  console.log("scrollイベントが発生しました");
});