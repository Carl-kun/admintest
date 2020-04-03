//引入http模块
var http = require("http")
//创建服务器
var server = http.createServer(function (req, res) {
    //设置响应头
    res.writeHead(200, {
        "content-type": "text/html;charset=utf-8"
    })
    console.log(req.url)
    //req.url   获取地址栏路径
    // switch (res.url) {
    //     case "lujin":
    //         //写入
    //         res.write("lujin")
    //         break;
    //     default:
    //         res.write("我是默认的")
    // }
    if (req.url == "/lujin") {
        res.write("lujin")
    } else {
        res.write("我是默认的")
    }
    //结束响应
    res.end()
})
//监听端口
server.listen(3000)