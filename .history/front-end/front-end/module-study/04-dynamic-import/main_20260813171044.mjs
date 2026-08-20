// 动态导入import()
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
