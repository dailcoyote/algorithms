import CategoriesTree from "./mock/CategoriesTree.json";
import TreeDFS from "../TreeDFS";

var crossCategoryNodes = [
    {
        level: 1,
        name: "Без категории (14)",
        parent: "Корневой узел"
    },
    {
        level: 3,
        name: "Компьютерные колонки (1)",
        parent: "Аудиотехника"
    },
    {
        level: 3,
        name: "Микрофоны (1)",
        parent: "Аудиотехника"
    }, {
        level: 4,
        name: "Наушники Microlab Smart (1)",
        parent: "Наушники и гарнитуры"
    },
    {
        level: 3,
        name: "Умные колонки (1)",
        parent: "Аудиотехника"
    },
    {
        level: 3,
        name: "Интерактивные доски (1)",
        parent: "Видеотехника",
    },
    {
        level: 2,
        name: "Наборы инструментов (1)",
        parent: "Инструменты"
    }, {
        level: 2,
        name: "Телевизоры (3)",
        parent: "Телевизоры и аксессуары"
    },
    {
        level: 2,
        name: "Аксессуары (1)",
        parent: "Дом и офис"
    },
    {
        level: 2,
        name: "Smart устройства (1)",
        parent: "Дом и офис"
    }, {
        level: 3,
        name: "Дорожные сумки (1)",
        parent: "Багаж"
    }
]

describe('TreeDFS', () => {
    it('should match the grouped nodes', () => {
        const traversedResult = [
            'Без категории',
            'Компьютерные колонки',
            'Микрофоны',
            'Наушники и гарнитуры',
            'Умные колонки',
            'Видеотехника',
            'Инструменты',
            'Телевизоры и аксессуары',
            'Дом и офис',
            'Багаж'
        ];
        const dfsPrototype = new TreeDFS(CategoriesTree, crossCategoryNodes);

        expect(traversedResult)
            .toEqual(
                Array
                    .from(dfsPrototype.dfsVisitAndGroupNodes())
                    .map(value => value.replace(/(\()(\d+)(\))/mi, '').trim())
            );
    });
});

