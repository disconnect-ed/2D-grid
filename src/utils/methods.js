export const delObjSelector = (data, obj) => {
    const objIsExist = findObjSelector(data, obj)
    if (!objIsExist) return 'Объект не найден!'
    const newData = data.filter((item) => item.x !== obj.x && item.y !== obj.y)
    return newData
}

export const addObjSelector = (data, obj) => {
    const objIsExist = findObjSelector(data, obj)
    if (objIsExist) {
        return ('Объект с такими координатами уже существует!')
    }
    if (!isInt(obj)) {
        return ('Объект должен содержать целочисленные координаты!')
    }
    if (!objMaxMin(obj)) {
        return ('Координаты объекта должны быть не меньше 0 и не больше 10!')
    }
    const newData = [...data, obj]
    return newData
}

export const changeObjSelector = (data, obj, newObj) => {
    debugger
    if (findObjSelector(data, newObj)) {
        return ('Объект с такими координатами уже существует!')
    }
    if (!isInt(newObj)) {
        return ('Объект должен содержать целочисленные координаты!')
    }
    if (!objMaxMin(newObj)) {
        return ('Координаты объекта должны быть не меньше 0 и не больше 10!')
    }
    const newData = [...data]
    newData.forEach(item => {
        if (item.x === obj.x && item.y === obj.y) {
            item.x = newObj.x
            item.y = newObj.y
            item.fill = newObj.fill
            item.symbol = newObj.symbol
        }
    })
    return newData
}

export const findObjSelector = (data, obj) => {
    const objIsExist = data.find(item => item.x === obj.x && item.y === obj.y)
    if (objIsExist) {
        return objIsExist
    }
}


export const isInt = (obj) => {
    return (obj.x ^ 0) === obj.x && (obj.y ^ 0) === obj.y
}

export const objMaxMin = (obj) => {
    if ((0 <= obj.x && obj.x <= 10) && (0 <= obj.y && obj.y <= 10)) return true
}

export const showMessage = () => {
    const mess = document.querySelector('.error')
    mess.classList.add('error-active')
    setTimeout(() => {
        mess.classList.remove('error-active')
    }, 5000)
}

export const rotateObjSelector = (data, x, y, delay) => {
    const newData = [...data]
    newData.forEach((item) => {
        if (item.animate === true) {
            item.x = x
            item.y = y
        }
    })
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(newData)
        }, delay)
    })
    return promise
}

export const moveObjSelector = (data, obj, newObj) => {
    const objIsExist = findObjSelector(data, obj)
    if (!objIsExist) return 'Объект не найден!'
    if (!isInt(newObj)) {
        return ('Объект должен содержать целочисленные координаты!')
    }
    if (!objMaxMin(newObj)) {
        return 'Координаты объекта должны быть не меньше 0 и не больше 10!'
    }
    if (findObjSelector(data, newObj)) {
        return 'Объект с такими координатами уже существует!'
    }
    const objIndex = data.findIndex(item => item.x === obj.x && item.y === obj.y)
    const mutationArr = [...data]
    mutationArr[objIndex].x = newObj.x
    mutationArr[objIndex].y = newObj.y
    return mutationArr
}


