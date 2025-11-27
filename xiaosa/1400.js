function init(ext) {
    let now = new Date();
    let expireTime = new Date('2025-11-27T14:06:00+08:00');

    if (now >= expireTime) {
        return JSON.stringify({
            sites: [],
            lives: [],
            parses: [],
            rules: [],
            flags: [],
            wallpaper: "",
            disabled_wallpaper: ""
        });
    }

    let url = 'https://gh-proxy.org/https://raw.githubusercontent.com/wodetianla007/tvbox/master/xiaosa/2025120.json';

    try {
        let res = request(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (res.code === 200 && res.content && res.content.trim().length > 0) {
            return res.content; // 已经是 JSON 字符串
        }
    } catch (e) {
        console.log("请求失败:", e);
    }

    // 如果所有都失败，返回空配置
    return JSON.stringify({
        sites: [],
        lives: [],
        parses: [],
        rules: [],
        flags: [],
        wallpaper: "",
        disabled_wallpaper: ""
    });
}

