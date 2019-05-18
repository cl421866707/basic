export class TreeItem {

    key: string;

    title: string;

    expanded: boolean;

    folder: boolean;

    selected: boolean;

    checked: boolean;

    unselectable: boolean;

    extraClasses: string;

    tooltip: string;

    parentKey: string;

    lazy: boolean;

    type: string;

    icon: string;

    lng: number;

    lat: number;

    children: TreeItem[];

    /*
    是否叶子节点：NG-ZORRO树控件所需
     */
    isLeaf: boolean;
    /*
    是否禁用：NG-ZORRO树控件使用
     */
    disabled: boolean;

}
