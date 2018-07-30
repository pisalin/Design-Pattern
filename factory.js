// 文本工厂
class Text {
    constructor(text) {
        this.text = text
    }
    insert(where) {
        const txt = document.createTextNode(this.text)
        where.appendChild(txt)
    }
}

// 链接工厂
class Link {
    constructor(url) {
        this.url = url
    }
    insert(where) {
        const link = document.createElement('a')
        link.href = this.url
        link.appendChild(document.createTextNode(this.url))
        where.appendChild(link)
    }
}

// 图片工厂
class Image {
    constructor(url) {
        this.url = url
    }
    insert(where) {
        const img = document.createElement('img')
        img.src = this.url
        where.appendChild(img)
    }
}

// DOM工厂
class DomFactory {

  constructor(type) {
    return new (this[type]())
  }

  // 各流水线
  link() { return Link }
  text() { return Text }
  image() { return Image }
}

// 创建工厂
const linkFactory = new DomFactory('link')
const textFactory = new DomFactory('text')

linkFactory.url = 'https://github.com/'
linkFactory.insert(document.body)

textFactory.text = 'HI! I am tianlin.'
textFactory.insert(document.body)
