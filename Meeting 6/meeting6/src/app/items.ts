import { Item } from "./item";
export const Items: Item[] = [
    new Item(new Date(2001, 1, 1), 'name1', 1, true),
    new Item(new Date(2002, 2, 2), 'name2', 2, false),
    new Item(new Date(2003, 3, 3), 'name3', 3, true),
    new Item(new Date(2004, 4, 4), 'name4', 4, false),
    new Item(new Date(2005, 5, 5), 'name5', 5, true)
]