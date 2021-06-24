const path = require('path')
const fs = require('fs')
const glob = require('glob')
const process = require('process')

const docsPath = process.argv[2]

if (!docsPath) {
  throw new Error('No path specified')
}

const distPath = path.resolve(docsPath, '..', 'dist', 'docs')
const distPath2 = path.resolve(docsPath, '..', 'dist', 'docs', '**')
const assetsPath = path.resolve(distPath, 'assets')
const stylesPath = path.resolve(assetsPath, 'css')
const scriptsPath = path.resolve(assetsPath, 'js')

const processData = (filePath, process) => {
  const data = fs.readFileSync(filePath, 'utf8')
  const processesdData = process(data)

  fs.writeFileSync(filePath, processesdData, { encoding: 'utf8' })
}

const offlinifyPage = fileName => {
  processData(path.resolve(distPath, fileName), data => {
    const subdirs = fileName.match(/\//g) ? '/..'.repeat(fileName.match(/\//g).length) : ''

    // Links to root
    data = data.replace(/(href)="\/docs\/"/g, '$1="./index.html"')
    // Links to root anchors
    data = data.replace(/(href)="\/docs\/(#[^"]*)"/g, '$1="./index.html$2"')
    // Regular internal links
    const bodyMatch = data.match(/<body>(.*)<\/body>/ms)
    if (bodyMatch) {
      let body = bodyMatch[1].replace(/(href)="\/([^"#]*?)(\.html)?(#[^"]*)"/g, (_, p1, p2, p3, p4) => `${p1}=".${subdirs}/${p2.replace(/docs\//g, '')}${p3 || '.html'}${p4}"`)
      body = body.replace(/(href)="\/([^"]*?)(\.html)?"/g, (_, p1, p2, p3) => `${p1}=".${subdirs}/${p2.replace(/docs\//g, '')}${p3 || '.html'}"`)
      data = data.replace(/(<body>).*(<\/body>)/ms, `$1${body.replace(/\$/g, '$$$$')}$2`)
    }
    // Other links (styles and scripts)
    data = data.replace(/(href|src)="(\/docs\/[^"]*)"/g, (_, p1, p2) => `${p1}=.${subdirs}${p2.replace(/docs\//g, '')}`)

    return data
  })

  console.log(`Page offlinified: ${fileName}`)
}

const offlinifyStyle = fileName => {
  processData(path.resolve(stylesPath, fileName), data => {
    // Links to assets
    return data.replace(/url\((\/assets\/[^)]*)\)/g, 'url(../..$1)')
  })

  console.log(`Style offlinified: ${fileName}`)
}

const offlinifyAppScript = fileName => {
  processData(path.resolve(scriptsPath, fileName), data => {
    // Used for scripts path
    // data = data.replace(/(\Wa\.p)="\/"(\W)/g, '$1=window.location.href.replace(/\\/[^\\/]*$$/, "/")$2')
    // Initial page path
    // data = data.replace(/(\We)=decodeURI\(window\.location\.pathname\)(\W)/g, '$1=decodeURI((window.location.origin+window.location.pathname).replace(/^.*?(\\/[^\\/]*)$$/,"$$1"))$2')
    // Relative href for links overrided by vue router
    // data = data.replace(/(\Wc)=(o\.href)(\W)/g, '$1=($2.startsWith("/")?"."+(/^\\/(#.*)?$$/.test($2)?$2.replace(/^\\//,"/index.html"):$2):$2)$3')
    // Absolute path for vue router navigation
    // data = data.replace(/(var n=window.history;)/g, '$1t=window.location.href.replace(/\\/[^\\/]*$$/,"")+(t.match(/^\\/(#.*)?$$/)?t.replace(/^\\/(.*)$$/,"/index.html$$1"):t);')
    // return data
  })

  console.log(`Script offlinified: ${fileName}`)
}

const offlinifyBarsScript = fileName => {
  processData(path.resolve(scriptsPath, fileName), data => {
    // Search results links for pages
    // data = data.replace(/(\Wr.push)\((s)\)(\W)/g, '$1(Object.assign({},$2,{path:"."+($2.path==="/"?"/index.html":$2.path)}))$3')
    // Search results links for chapters
    // data = data.replace(/(\Wpath):(s\.path)(\+"#"\+u\.slug\W)/g, '$1:"."+($2==="/"?"/index.html":$2)$3')
    // return data
  })

  console.log(`Script offlinified: ${fileName}`)
}

const pages = glob.sync('**/*.html', { cwd: distPath })
pages.forEach(page => {
  const stats = fs.statSync(path.resolve(distPath, page))
  if (stats.isFile()) {
    offlinifyPage(page)
  }
})

const styles = fs.readdirSync(stylesPath)
styles.forEach(style => offlinifyStyle(style))

const scripts = fs.readdirSync(scriptsPath)
scripts.forEach(script => {
  if (script.startsWith('app.')) {
    offlinifyAppScript(script)
  } else if (script.startsWith('2.')) {
    // Hopefully that script keeps to be named this way no matter what
    offlinifyBarsScript(script)
  }
})
