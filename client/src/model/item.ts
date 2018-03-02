export interface Item {
    id: string;
    image_small: string;
    image_big: string;
    name: string;
    description: string;
    current_price: string;
    vouch_price: string,
    min_vouch: number,
    vouch_qty: number,
    voucher_expiration: Date

  }