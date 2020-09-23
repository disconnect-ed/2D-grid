const ERROR_COORD_EXIST = 'Объект с такими координатами уже существует!'
const ERROR_NOT_INT = 'Объект должен содержать целочисленные координаты!'
const ERROR_COORD_MAX_MIN = 'Координаты объекта должны быть не меньше 0 и не больше 10!'
const ERROR_NOT_FOUND = 'Объект не найден!'
const ERROR_GRID_MIN_MAX = 'Невозможно задать данный радиус! Объект не может выходить за пределы сетки.'
const ERROR_DATA_MAX = 'Максимальное количество объектов 10!'

export const delObjSelector = (data, obj) => {
    debugger
    const newData = [...data]
    // const objIsExist = findObjSelector(data, obj)
    const objInd = newData.findIndex(item => (item.x === obj.x) && (item.y === obj.y))
    if (objInd < 0) return ERROR_NOT_FOUND
    newData.splice(objInd, 1)
    // const newData = data.filter((item) => (item.x !== obj.x) && (item.y !== obj.y))
    return newData
}

export const addObjSelector = (data, obj) => {
    const objIsExist = findObjSelector(data, obj)
    if (data.length >= 10) {
        return ERROR_DATA_MAX
    }
    if (objIsExist) {
        return ERROR_COORD_EXIST
    }
    if (!isInt(obj)) {
        return ERROR_NOT_INT
    }
    if (!objMaxMin(obj)) {
        return ERROR_COORD_MAX_MIN
    }
    const newData = [...data, obj]
    return newData
}

export const changeObjSelector = (data, obj, newObj) => {
    if (obj.x !== newObj.x && obj.y !== newObj.y) {
        if (findObjSelector(data, newObj)) {
            return (ERROR_COORD_EXIST)
        }
        if (!isInt(newObj)) {
            return (ERROR_NOT_INT)
        }
        if (!objMaxMin(newObj)) {
            return (ERROR_COORD_MAX_MIN)
        }
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

export const rotateObjMinMaxSelector = (x, y, radius) => {
    if (radius === 0) return 'Радиус не может быть равен нулю!'
    const point1 = 0 <= (x + radius) && (x + radius <= 10)
    const point2 = 0 <= (y + radius) && (y + radius <= 10)
    const point3 = 0 <= (x - radius) && (x - radius <= 10)
    const point4 = 0 <= (y - radius) && (y - radius <= 10)
    if (!(point1 && point2 && point3 && point4)) {
        return ERROR_GRID_MIN_MAX
    }
}

export const moveObjSelector = (data, obj, newObj) => {
    const objIsExist = findObjSelector(data, obj)
    if (!objIsExist) return ERROR_NOT_FOUND
    if (!isInt(newObj)) {
        return ERROR_NOT_INT
    }
    if (!objMaxMin(newObj)) {
        return ERROR_COORD_MAX_MIN
    }
    if (findObjSelector(data, newObj)) {
        return ERROR_COORD_EXIST
    }
    const objIndex = data.findIndex(item => item.x === obj.x && item.y === obj.y)
    const mutationArr = [...data]
    mutationArr[objIndex].x = newObj.x
    mutationArr[objIndex].y = newObj.y
    return mutationArr
}


