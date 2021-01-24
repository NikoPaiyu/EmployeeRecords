export class TableActionIcons{
  iconList : IconListItem[] = [];
}

export class IconListItem {
    iconClassName: string = '';
    iconName: string = '';
}

export class TableActionEmit {

    constructor(payload: any, actionName: string){
      this.payload = payload;
      this.actionName = actionName;
    }

    payload: any;
    actionName: string;
}
