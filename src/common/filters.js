// 数字转字符串
let numToString = value => value.toString();

// 货币格式, 并保留2位小数
let amount = value => {
  var n = 2;
  value = parseFloat((value + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  var l = value
      .split(".")[0]
      .split("")
      .reverse(),
    r = value.split(".")[1];
  var t = "";
  for (var i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
  }
  return (
    t
      .split("")
      .reverse()
      .join("") +
    "." +
    r
  );
};



// var b = a.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
export { numToString, amount};
