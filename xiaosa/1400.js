// check_time.js（适用于 GitHub 托管）
function init(ext) {
    let now = new Date();
    let expireTime = new Date('2025-11-27T14:00:00+08:00');

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
    } else {
        // ✅ 使用完整的 GitHub Raw URL（替换为你的实际用户名和仓库名）
        let url = 'https://gh-proxy.org/https://raw.githubusercontent.com/wodetianla007/tvbox/refs/heads/master/xiaosa/2025120.json';
        let res = request(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        return res.content;
    }

}
