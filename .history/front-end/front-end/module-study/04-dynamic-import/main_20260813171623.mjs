// 动态导入import()，import返回的是一个Promise
async function showReport(shouldLoad) {
  if (!shouldLoad) {
    console.log("用户没有打开详细报告");
    return;
  }

  try {
    const reportModule = await import("./report.mjs");
    const createReport = reportModule.default;
    console.log(reportModule.reportType);
    console.log(createReport("萨卡", 3));
  } catch (error) {
    console.error("报告模块加载失败：", error.message);
  }
}

await showReport(true);


// 适用场景：

// - 用户打开某个页面时才加载对应功能。
// - 点击按钮时才加载大型编辑器或图表库。
// - 根据条件加载不同语言包。
// - 减少首屏代码体积。
