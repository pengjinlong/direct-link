chrome.storage.sync.get("linkOpen", ({ linkOpen }) => {
  if (linkOpen) {
    document.body.addEventListener("click", function (event) {
      const target = event.target;
      // 判断点击的是否a标签
      if (target.nodeName.toLocaleLowerCase() === "a") {
        const href = target.getAttribute("href");
        if (href.indexOf("://link") > -1) {
          // 禁止默认的跳转行为
          event.preventDefault();
          const link = href.split("target=")[1];
          const url = decodeURIComponent(link);
          // 处理完 a 标签的内容，重新触发跳转，根据原来 a 标签页 target 来判断是否需要新窗口打开
          if (target.getAttribute("target") === "_blank") {
            // 新窗口打开  
            window.open(url);
          } else {
            // 当前窗口打开  
            window.location.href = url;
          }
        }
      }
    });
  }
});
