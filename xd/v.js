// 用法详见: https://github.com/smxl/500
let body=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>V 视频</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
</head>
<body>
<div class="container">
<div class="header text-center"><h1><small>Vip 视频 粘贴 解析 播放</small></h1></div>
<div class="main">
<form class="form-horizontal" method="post">
<div class="form-group">
<label for="api" class="col-sm-2 control-label">选取</label>
<div class="col-sm-10">
<select id="jk" size="1" onchange="fnChange()" class="form-control">
<optgroup label="支持搜索"><option value="https://vip.bljiex.com/?v=">BL 解析</option><option value="https://z1.m1907.cn/?jx=">M1907 有广</option></optgroup>
<optgroup label="备用"><option value="https://okjx.cc/?url=">OK 解析</option></optgroup>
</select>
</div>
</div>
<div class="form-group">
<label for="url" class="col-sm-2 control-label">输入</label>
<div class="col-sm-10"><input type="url" class="form-control" id="vipurl" placeholder="视频地址" /></div>
</div>
<div class="form-group">
<div class="col-sm-offset-2 col-sm-10"><button type="button" onclick="onPlay()" class="btn btn-primary">解析</button> <button type="button" onclick="onClear()" class="btn btn-primary">清空</button> <button type="button" onclick="onShare()" class="btn btn-primary">复制</button></div>
</div></form>
</div>
</div>
<iframe src="" id="play" width="100%" height="50%" frameborder="0" allowfullscreen scrolling="no" style="position:absolute"></iframe>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
function init() {
    document.getElementById("jk");
}
init();
function fnChange() {}
function onClear() {
    document.getElementById("vipurl").value = "";
}
function onShare() {
    navigator.clipboard.writeText("https://" + document.domain + "/v.html?vv=" + document.getElementById("vipurl").value)
}
function onPlay() {
    var e = document.getElementById("jk"),
        t = e.options[e.selectedIndex].value,
        n = document.getElementById("vipurl").value,
        o = document.getElementById("play");
    0 < n.length && (o.src = t + n);
}
function getQueryVariable(variable)
{
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
        }
        return(false);
}
function vipvideovalue()
{
    if (getQueryVariable("vv").length>1) {
        document.getElementById("vipurl").value = getQueryVariable("vv");
    } else {
        
    }
}
vipvideovalue();
</script>
</body>
</html>
`

const Status = "HTTP/1.1 200 OK";
const Headers = {};
const Data = body;
const Response = {
    status: Status,
    //headers: Headers, // Optional.
    body: Data // Optional.
};

$done(Response);
