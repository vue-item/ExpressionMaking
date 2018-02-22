export const fileReader = (file, opt) => {
  const fr = new FileReader()

  if (opt.onabort) {
    fr.onabort = (e) => {
      opt.onabort(e)
    }
  }

  if (opt.onerror) {
    fr.onerror = (e) => {
      opt.onerror(e)
    }
  }

  if (opt.onload) {
    fr.onload = (e) => {
      opt.onload(e.target.result)
    }
  }

  if (opt.onloadend) {
    fr.onloadend = (e) => {
      opt.onloadend(e)
    }
  }

  if (opt.onloadstart) {
    fr.onloadstart = (e) => {
      opt.onloadstart(e)
    }
  }

  if (opt.onprogress) {
    fr.onprogress = (e) => {
      opt.onprogress(e)
    }
  }
  if (opt.readAsDataURL) {
    fr.readAsDataURL(file) // 二进制对象
  }
  if (opt.readAsArrayBuffer) {
    fr.readAsArrayBuffer(file) // buffer对象
  }

  return fr
}

export const loadGif = (buffer, opt) => {
  if (!Gif) return
  const gif = new Gif()

  if (opt.onprogress) {
    gif.onprogress = (e) => {
      opt.onprogress(e)
    }
  }

  if (opt.onparse) {
    gif.onparse = (e) => {
      opt.onparse(e)
    }
  }

  gif.parse(buffer)

  return gif
}

export const createElement = (name, opt) => {
  const el = document.createElement(name)

  if (opt.width) el.width = opt.width

  if (opt.height) el.height = opt.height

  if (opt.title) el.title = opt.title

  if (opt.src) el.src = opt.src

  if (opt.id) el.id = opt.id

  if (opt.father) opt.father.appendChild(el)

  if (opt.callback) opt.callback(el)

  return el
}

export const loadingImg = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = (e) => {
      resolve(img)
    }
    img.onerror = (e) => {
      reject(e)
    }
    img.src = src
  })
}

export const verifyAddress = (e) => {
  log(1) // 验证 url
}

export const isCanvasSupported = () => {
  const t = document.createElement("canvas");
  return !(!t.getContext || !t.getContext("2d"))
}

export const checkPlatform = () => {
  let t
  return navigator.userAgent.indexOf("Win") !== -1 && (t = "Windows"),
  navigator.userAgent.indexOf("Mac") !== -1 && (t = "Macintosh"),
  navigator.userAgent.indexOf("Linux") !== -1 && (t = "Linux"),
  navigator.userAgent.indexOf("Android") !== -1 && (t = "Android"),
  navigator.userAgent.indexOf("like Mac") !== -1 && (t = "IOS"),
  t
}

export const mobileCheck = () => {
  let t = !1;
  return function (e) {
      (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
        .test(e) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
        .test(e.substr(0, 4))) && (t = !
        0)
    }(navigator.userAgent ||
      navigator.vendor || window.opera
    ),
    window.innerWidth <= 768 && (t = !
      0),
    t
}
console.log(mobileCheck())
export const getOffset = (el, type) => {
  let off = el[type]
  let par = el.offsetParent
  while (par) {
    off += par[type]
    par = par.offsetParent
  }
  return off
}

export const computedHeight = (imgW, imgH, w) => {
  const obj = {}
  if (imgW < w) {
    obj.width = imgW
    obj.height = imgH
  } else {
    obj.width = w
    obj.height = imgH * w / imgW
  }
  return obj
}
