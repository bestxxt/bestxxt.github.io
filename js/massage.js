const url = 'https://api2.pushdeer.com/message/push?pushkey=PDU23628TB79hXjKEe2tCsrv81ZKEk3wKRjdlWTNj';
const text = 'someone is in your site';

// 创建一个包含请求信息的对象
const data = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ text: text }),
};

// 使用fetch发送POST请求
fetch(url, data)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    // 在这里处理服务器响应
  })
  .catch(error => {
    console.error('Error:', error);
    // 在这里处理错误
  });
