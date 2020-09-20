import React, {useState} from "react";
import {Menu, Select} from 'antd';
import {PlusOutlined, MinusOutlined, UndoOutlined} from '@ant-design/icons'
import {MenuButton} from "./MenuButton";
import {MenuInput} from "./MenuInput";

const {SubMenu} = Menu;
const { Option } = Select;

export const MenuComponent = ({menuOpen, x, y, changeX, changeY, addObj, setSymbol, delObj, changeFill,
                                  fill, restart}) => {
    const activeStyle = {
        right: 0
    }
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

    const [state, setState] = useState([])

    const onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => state.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setState([openKeys]);
        } else {
            setState(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <div style={menuOpen ? activeStyle : null} className="menu-content">
            <Menu
                mode="inline"
                openKeys={state}
                onOpenChange={onOpenChange}
                style={{width: 256}}
            >
                <SubMenu
                    onTitleClick={restart}
                    key="sub1"
                    icon={<PlusOutlined />}
                    title='Добавить объект'
                >
                    <MenuInput id='addObjX' placeholder='Введите координату X' type='number'
                               htmlFor='addObjX' labelTitle='Введите координату X'
                               onChange={changeX} value={x}
                    />
                    <MenuInput id='addObjY' placeholder='Введите координату Y' type='number'
                               htmlFor='addObjY' labelTitle='Введите координату Y:'
                               onChange={changeY} value={y}
                    />
                    <div className="menu-content-block">
                        <label htmlFor='addSelect'>Выберите символ:</label>
                        <Select id='addSelect' defaultValue="circle" style={{ width: '100%' }} onChange={setSymbol}>
                            <Option value="circle">Круг</Option>
                            <Option value="star">Звезда</Option>
                            <Option value="square">Квадрат</Option>
                            <Option value="diamond">Алмаз</Option>
                            <Option value="triangleUp">Треугольник</Option>
                        </Select>
                    </div>
                    <MenuInput id='addObjColor' type='color'
                               htmlFor='addObjColor' labelTitle='Выберите цвет:'
                               onChange={changeFill} value={fill}
                    />
                    <MenuButton onClickAction={addObj} title='Добавить объект' />
                </SubMenu>
                <SubMenu icon={<MinusOutlined />}
                         key="sub2" title="Удалить объект"
                         onTitleClick={restart}
                >
                    <MenuInput id='delObjX' placeholder='Введите координату X' type='number'
                               htmlFor='delObjX' labelTitle='Введите координату X'
                               onChange={changeX} value={x}
                    />
                    <MenuInput id='delObjY' placeholder='Введите координату Y' type='number'
                               htmlFor='delObjY' labelTitle='Введите координату Y:'
                               onChange={changeY} value={y}
                    />
                    <MenuButton title='Удалить объект' onClickAction={delObj} />
                </SubMenu>
                <SubMenu key="sub3" icon={<UndoOutlined />} title="Вращать объект" onTitleClick={restart}>
                    <MenuInput id='delObjX' placeholder='Введите координату X' type='number'
                               htmlFor='delObjX' labelTitle='Введите координату X:'
                               onChange={changeX} value={x}
                    />
                    <MenuInput id='delObjY' placeholder='Введите координату Y' type='number'
                               htmlFor='delObjY' labelTitle='Введите координату Y:'
                               onChange={changeY} value={y}
                    />
                </SubMenu>
            </Menu>
        </div>
    );
}