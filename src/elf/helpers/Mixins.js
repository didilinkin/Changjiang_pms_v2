// 混合方法(带参数)
let designWidth = 640

export const wH = (width, height) => {
    return {
        'width': width,
        'height': height
    }
}

export const fS = (fontSize) => {
    return {
        'font-size': fontSize
    }
}

// @function px2rem($px){
//     @return $px*320/$designWidth/20 + rem;
// }

// hotcss 转换px到rem
export const px2rem = (px) => {
    return {
        'font-size': px * 320 / designWidth / 20 + 'rem'
    }
}

// flex混合
export const flexCenter = () => {
    return {
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center'
    }
}
