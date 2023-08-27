const fs = require('fs');
module.exports = (app) => {
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') { return; }
    const route = require(`./${file}`);

    // 全局的一级路由
    route.prefix('/api');

    app.use(route.routes()).use(route.allowedMethods());
  });
}