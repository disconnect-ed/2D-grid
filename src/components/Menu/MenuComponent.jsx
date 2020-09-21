import React, {useState} from "react";
import {Menu, Select} from 'antd';
import {PlusOutlined, MinusOutlined, UndoOutlined, SearchOutlined} from '@ant-design/icons'
import {MenuButton} from "./MenuButton";
import {MenuInput} from "./MenuInput";

const {SubMenu} = Menu;
const { Option } = Select;

export const MenuComponent = ({menuOpen, x, y, changeX, changeY, addObj, setSymbol, delObj, changeFill,
                                  fill, restart, rotateObj, changeRadius, radius, searchObj}) => {
    const activeStyle = {
        right: 0
    }
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];

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
                            <Option value="circle">circle</Option>
                            <Option value="star">star</Option>
                            <Option value="square">square</Option>
                            <Option value="diamond">diamond</Option>
                            <Option value="triangleUp">triangleUp</Option>
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
                <SubMenu icon={<SearchOutlined />}
                         key="sub3" title="Найти объект"
                         onTitleClick={restart}
                >
                    <MenuInput id='searchObjX' placeholder='Введите координату X' type='number'
                               htmlFor='searchObjX' labelTitle='Введите координату X'
                               onChange={changeX} value={x}
                    />
                    <MenuInput id='searchObjY' placeholder='Введите координату Y' type='number'
                               htmlFor='searchObjY' labelTitle='Введите координату Y:'
                               onChange={changeY} value={y}
                    />
                    <MenuButton title='Найти объект' onClickAction={searchObj} />
                </SubMenu>
                <SubMenu key="sub4" icon={<UndoOutlined />} title="Вращать объект" onTitleClick={restart}>
                    <MenuInput id='rotateObjX' placeholder='Введите координату X' type='number'
                               htmlFor='rotateObjX' labelTitle='Введите координату X:'
                               onChange={changeX} value={x}
                    />
                    <MenuInput id='rotateObjY' placeholder='Введите координату Y' type='number'
                               htmlFor='rotateObjY' labelTitle='Введите координату Y:'
                               onChange={changeY} value={y}
                    />
                    <MenuInput id='setRadius' placeholder='Введите радиус' type='number'
                               htmlFor='delObjY' labelTitle='Введите радиус:'
                               onChange={changeRadius} value={radius}
                    />
                    <MenuButton onClickAction={rotateObj} title='Вращать объект' />
                </SubMenu>
            </Menu>
        </div>
    );
}