export interface ImageTypes {
    id: number;
    title: string;
    img: string;
    imgSmall: string;
}

export interface State {
    // toggle: boolean;
    // tickets: TicketTypes[];
    switching: TabTypes[];
    select: TicketTypes[];
}



interface TabTypes {
    id: number;
    title: string;
    desc?: string;
    price: number;
    type: number;
}