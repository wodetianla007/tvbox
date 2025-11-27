function init(ext) {
    let now = new Date();
    let expireTime = new Date('2025-11-27T14:50:00+08:00');

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

    // 使用 jsDelivr CDN
    let url = 'https://cdn.jsdelivr.net/gh/wodetianla007/tvbox@master/xiaosa/2025120.json';

    try {
        let res = request(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        if (res.code !== 200 || !res.content || res.content.trim().length === 0) {
            console.log("请求失败或内容为空");
            throw new Error("无效响应");
        }

        // 安全解析 JSON
        let json;
        try {
            json = JSON.parse(res.content.trim());
        } catch (e) {
            console.log("JSON 解析失败:", e);
            throw new Error("JSON 格式错误");
        }

        // 强制确保字段存在
        if (!json.sites) json.sites = [];
        if (!json.lives) json.lives = [];
        if (!json.parses) json.parses = [];
        if (!json.rules) json.rules = [];
        if (!json.flags) json.flags = [];

        return json;

    } catch (e) {
        console.log("加载配置失败:", e);
        // 即使失败，也返回一个完整的空配置对象
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
