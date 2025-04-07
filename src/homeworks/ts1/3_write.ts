/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 **/
export type Category = {
    id: string;
    name: string;
    photo?: string;
}

 /** 
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 **/
export type Product = {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: Category;
}

 /** 
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 **/

type Operation = Cost | Profit;

/** Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 **/
export type Cost = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Cost'
}

 /** Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
 export type Profit = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Profit'
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
    const p: Product =  {
        id: "1",
        name: "Product name",
        photo: "Product photo",
        desc: "Product description",
        createdAt: createdAt,
        oldPrice: 100,
        price: 200,
        category:  {
            id: "2",
            name: "Category name",
            photo: "Category photo"
        }
    } 
    return p;
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
    if (Math.random() < 0.5) {
        const c: Cost = {
            id: "1",
            name: "Cost name",
            desc: "Cost description",
            createdAt: createdAt,
            amount: 100,
            category: {
                id: "1",
                name: "Category name",
                photo: "Category photo"
            },
            type: 'Cost'
        }
        return c;
    }

    const p: Profit = {
        id: "1",
        name: "Profit name",
        desc: "Profit description",
        createdAt: createdAt,
        amount: 100,
        category: {
            id: "1",
            name: "Category name",
            photo: "Category photo"
        },
        type: 'Profit'
    }
    return p;
};
