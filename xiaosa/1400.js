function init(ext) {
    let now = new Date();
    let expireTime = new Date('2025-11-27T14:30:00+08:00');

    if (now >= expireTime) {
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

    let url = 'https://gh-proxy.org/https://raw.githubusercontent.com/wodetianla007/tvbox/refs/heads/master/xiaosa/2025120.json';

    try {
        let res = request(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (res.code !== 200 || !res.content) {
            throw new Error("请求失败");
        }

        // 安全解析 JSON
        let json = JSON.parse(res.content);
        return json; // ✅ 返回对象
    } catch (e) {
        console.log("加载失败:", e);
        // ✅ 即使失败，也返回空配置对象
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
