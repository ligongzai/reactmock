// 利用package.json文件定义项目名称和版本
var meta = require('./package.json');

/**环境变量**/
fis.set('name',meta.name)
    .set('version',meta.version);

// 需要构建的文件
fis.set('project.fileType.text', 'vue,map');
fis.set('project.files', ['src/**']);
fis.set('project.ignore', fis.get('project.ignore').concat(['output/**', 'DS_store']));

fis.hook('commonjs', {
    extList: [
        '.js', '.coffee', '.es6', '.jsx', '.vue'
    ],
    umd2commonjs: true,
    ignoreDependencies: []
});

// 禁用components，启用node_modules
fis.unhook('components');
fis.hook('node_modules');

// 所有js文件
fis.match('{*.jsx,*:jsx}', {
    isMod: true,
    rExt: '.js',
    parser: [
        fis.plugin('babel-6.x',{
            sourceMaps: true
        })
    ]
}).match('static/**.js',{
    isMod:false
});

fis.match('::package', {
    postpackager: fis.plugin('loader')
});

fis.match('{app.jsx,/node_modules/**.js}', {
    isMod: true
});

fis.match("src/(*.html)",{
    release: '/$1',
    useCache : false
});