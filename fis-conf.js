// 利用package.json文件定义项目名称和版本
var meta = require('./package.json');
var path = require('path')
/**环境变量**/
fis.set('name',meta.name)
    .set('version',meta.version);

// 需要构建的文件
fis.set('project.fileType.text', 'vue,map');
fis.set('project.files', ['src/**']);
fis.set('project.ignore', fis.get('project.ignore').concat(['output/**', 'DS_store']));

fis.hook('commonjs', {
    extList: [
        '.js', '.coffee', '.es6', '.jsx', '.vue',".less"
    ],
    umd2commonjs: true,
    ignoreDependencies: []
});

// 禁用components，启用node_modules
fis.unhook('components');
fis.hook('node_modules');

// 所有js文件
/**
 * @description 1.将less编译成css
 *   2.进行css属性补全
 *   3.配置css module
 * **/
fis.match('{*.jsx,*:jsx}', {
    isMod: true,
    rExt: '.js',
    parser: [
        fis.plugin('babel-6.x',{
            sourceMaps: true  //产出源码表，方便调试
        })
    ]
}).match('static/**.js',{
    isMod:false
}).match("src/**.less",{
    parser:fis.plugin('less-2.x'),
    rExt:'.css'
}).match('**.{css,less,sass,scss}', {
    postprocessor: fis.plugin('postcss'),
}
).match('*.{js,es,es6,jsx}', {
    preprocessor: fis.plugin('js-require-css')
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

fis.media('debug')
    .match('**.{js,jsx,css,less,png,jpg,gif}', {
        useHash: true
    })
    .match('**', {
        deploy: fis.plugin('local-deliver', {
            to: path.join(__dirname, './output')
        })
    });