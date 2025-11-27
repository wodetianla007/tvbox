function init(ext) {
    let now = new Date();
    let expireTime = new Date('2025-11-27T14:25:00+08:00');

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

    let url = 'https://gh-proxy.org/https://raw.githubusercontent.com/wodetianla007/tvbox/master/xiaosa/2025120.json';
    try {
        let res = request(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (res.code === 200 && res.content) {
            return JSON.parse(res.content.trim());
        }
    } catch (e) {
        console.log("Error:", e);
    }

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
