// 创建一个XMLHttpRequest对象（AJAX方法）
var xhr = new XMLHttpRequest();

// 准备发送请求的数据
var requestData = {
  ip: userIpAddress,
  timestamp: new Date().toISOString()
  // 还可以包括其他信息
};

// 配置请求
xhr.open('POST', 'http://your-server.com/record-endpoint', true);
xhr.setRequestHeader('Content-Type', 'application/json');

// 发送请求
xhr.send(JSON.stringify(requestData));
