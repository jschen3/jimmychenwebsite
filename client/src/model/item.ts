export interface Item {
    id: string;
    image_small: string;
    image_big: string;
    name: string;
    description: string;
    current_price: string;
    vouched_price: string;
    min_voucher: number;
    voucher_expiration: Date;
    is_vouchable: boolean;
    
  }