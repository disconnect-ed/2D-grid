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

export const findObjSelector = (data, obj) => {
    const objIsExist = data.find(item => item.x === obj.x && item.y === obj.y)
    if (objIsExist) {
        return obj
    }
}

export const isInt = (obj) => {
    return (obj.x ^ 0) === obj.x && (obj.y ^ 0) === obj.y
}

export const objMaxMin = (obj) => {
    if ((0 <= obj.x && obj.x <= 10 ) && (0 <= obj.y && obj.y <= 10 )) return true
}

export const showMessage = () => {
    const mess = document.querySelector('.error')
    mess.classList.add('error-active')
    setTimeout(() => {
        mess.classList.remove('error-active')
    }, 5000)
}