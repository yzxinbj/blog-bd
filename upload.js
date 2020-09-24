const BosClient = require('@baiducloud/sdk').BosClient
const path = require('path')
const fs = require('fs')
const exec = require('child_process').exec

let helper = {
  client: '',
  bucket: 'yap-console',
  env: process.argv[3] || 'test_by_yzx',
  fileDir: path.resolve(process.argv[2]),
  log (str) {
    let len = 120
    let res = str
    for (let i = 0; i < len - str.length; i++) {
      res += ' '
    }
    return res
  },
  gets (str, cb) {
    return new Promise((resolve, reject) => {
      process.stdin.setEncoding('utf8')
      process.stdin.resume()
      console.log(str)
      process.stdin.on('data', function (chunk) {
        process.stdin.pause()
        resolve(chunk)
      })
    })
  },
  push (filename, dir) {
    let wholeDir = `/${helper.env}/${dir ? dir + '/' : ''}${filename}`
    let wholeFilename = path.resolve(helper.fileDir, `./${dir}`, `${filename}`)
    // console.log(helper.log(wholeFilename), '>>success>> ', wholeDir)
    helper.client.putObjectFromFile(helper.bucket, wholeDir, wholeFilename)
      .then(response => console.log(helper.log(wholeFilename), '>>success>> ', wholeDir))
      .catch(error => console.error('error: ', error.message))

    let staticDir = `/static/${dir ? dir + '/' : ''}${filename}`
    helper.client.putObjectFromFile(helper.bucket, staticDir, wholeFilename)
      .then(response => console.log(helper.log(wholeFilename), '>>success>> ', staticDir))
      .catch(error => console.error('error: ', error.message))
  },
  exec () {
    return new Promise((resolve, reject) => {
      let path = `bos:/${helper.bucket}/${helper.env}`
      console.log('bos path: ', path)
      exec(`bce bos sync ./dist/spa ${path}; bce bos sync ./dist/spa bos:/${helper.bucket}/static`, (err, stdout, stderr) => {
        if (err) {
          reject(stderr)
          return
        }
        resolve(stdout)
      })
    })
  },
  /**
   *
   * @param dirPath 文件夹地址 dirName
   * @param file    相对于当前文件夹的文件名
   */
  fileDisplay (dirPath, file = '') {
    let files = fs.readdirSync(dirPath)
    files.forEach(fileName => {
      let fileLongName = path.join(dirPath, fileName) // 文件/文件夹 绝对路径
      fs.stat(fileLongName, (eror, stats) => {
        if (eror) {
          console.warn('获取文件stats失败')
        } else {
          if (stats.isFile()) {
            helper.push(fileName, file)
          }
          if (stats.isDirectory()) {
            helper.fileDisplay(fileLongName, `${file ? file + '/' : ''}${fileName}`)
          }
        }
      })
    })
  }
}

console.log('上传路径：', helper.fileDir)
console.log('******************************************************************************************')

const config = {
  endpoint: 'https://bj.bcebos.com',
  credentials: {
    ak: '',
    sk: ''
  }
}

helper.exec().then(stdout => {
  console.log(stdout)
}).catch(stderr => {
  console.log('未安装bce, 请按照以下提示操作\n')
  helper.gets('请输入ak: ')
    .then(result => {
      config.credentials.ak = result.split(/\n/).join('')
      helper.gets('请输入sk: ')
        .then(result => {
          config.credentials.sk = result.split(/\n/).join('')
          // console.log('config: ', config, '\n')
          helper.client = new BosClient(config)

          // 调用文件遍历方法
          helper.fileDisplay(helper.fileDir)
        })
        .catch(error => [error, null])
    })
    .catch(error => [error, null])
})
