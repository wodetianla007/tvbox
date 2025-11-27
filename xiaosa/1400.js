function init(ext) {
    let now = new Date();
    let expireTime = new Date('2025-11-27T14:00:00+08:00');

    if (now >= expireTime) {
        // ✅ 直接返回对象，不要 stringify！
        return {
            sites: [],
            lives: [],
            parses: [],
            rules: [],
            flags: [],
            wallpaper: "",
            disabled_wallpaper: ""
        };
    } else {
        let url = 'https://gh-proxy.org/https://raw.githubusercontent.com/wodetianla007/tvbox/master/xiaosa/2025120.json';
        try {
            let res = request(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
            if (res.code === 200 && res.content) {
                // ✅ 把 JSON 字符串解析成对象再返回
                return JSON.parse(res.content);
            }
        } catch (e) {
            console.log("请求或解析失败:", e);
        }

        // 失败时也返回对象
        return {
            sites: [],
            lives: [],
            parses: [],
            rules: [],
            flags: [],
            wallpaper: "",
            disabled_wallpaper: ""
        };
    }
}
