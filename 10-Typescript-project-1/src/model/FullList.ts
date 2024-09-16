import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList()

    private constructor(  // a private constructor mean there will only be 1 instance of that constructor --> only 1 List
        private _list: ListItem[] = []  // default value of an empty []
    ){}


    get list(): ListItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")

        if (typeof storedList !== "string") return

        // Item in ListItem doesn't have an underscore (_) so we can't use that
        // so just create a type that looks a lot like it except it won't have an underscore
        // we're providing the type of the ParsedList
        const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)

            FullList.instance.addItem(newListItem)
        })
    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []  // clear the list
        this.save()  // save the change
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
}