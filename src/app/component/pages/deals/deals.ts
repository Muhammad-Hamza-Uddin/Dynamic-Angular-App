import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-deals',
   standalone : true,
  imports: [CommonModule, FormsModule],
  templateUrl: './deals.html',
  styleUrl: './deals.css',
})
export class Deals {

  searchtext : string = ''
  
  deals = [


  {
    id: '1',
    image: 'https://www.kfcpakistan.com/images/87ef3cb0-7be7-11f0-a76e-319aa2038f18-1-2025-08-18035759.png',
    title: 'Value Bucket',
    description: '9 pcs Signature Crispy Fried Chicken',
    price: '2050',
  },
  {
    id: '2',
    image: 'https://www.kfcpakistan.com/images/356c79d0-b1d4-11f0-9b43-bded89df9d26-Deal-PNG-2025-10-25185543.png',
    title: 'Xtreme Duo Box',
    description: '2 Zingers + 2 Chicken + Fries + Drinks',
    price: '750',
  },
  {
    id: '3',
    image: 'https://www.kfcpakistan.com/images/ff4103d0-9789-11f0-b6e5-d9c08b0eb28c-FamilyFestival3-2025-09-22075859.png',
    title: 'Family Festival 3',
    description: '4 Zingers + 4 Chicken + Drink',
    price: '2590',
  },
  {
    id: '4',
    image: 'https://www.kfcpakistan.com/images/fccb1390-51f5-11f0-a06d-7b4baa759cfb-13-min_variant_0-2025-06-25185539.png',
    title: 'Hot Wings Bucket',
    description: '10 pcs Hot & Crispy Wings',
    price: '670',
  },
  {
    id: '5',
    image: 'https://www.kfcpakistan.com/images/65428500-ea56-11ef-bf82-75f537a23a2b-Mighty_variant_0-2025-02-13220345.png',
    title: 'Mighty Zinger',
    description: 'Double Zinger fillet burger',
    price: '770',
  },
  {
    id: '6',
    image: 'https://www.kfcpakistan.com/images/4d32ff10-7324-11f0-983a-cd11b2e03b15-ZingerStackerCombocopy-2025-08-07002019.png',
    title: 'Zinger Stacker',
    description: 'Double stacked zinger burger',
    price: '620',
  },
  {
    id: '7',
    image: 'https://www.kfcpakistan.com/images/fd32bd40-9789-11f0-83b4-4163beaff48f-KrunchCombo-2025-09-22075856.png',
    title: 'Krunch Combo',
    description: 'Krunch burger + fries + drink',
    price: '520',
  },
  {
    id: '8',
    image: 'https://www.kfcpakistan.com/images/4d334d30-7324-11f0-b22b-41b1303a1fa3-TwisterCombocopy-2025-08-07002019.png',
    title: 'Twister Combo',
    description: 'Twister wrap + fries + drink',
    price: '600',
  },
  {
    id: '9',
    image: 'https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-chicken-n-chips_variant_0-2023-05-31115706.png',
    title: 'Chicken & Chips',
    description: '2 pcs chicken with fries',
    price: '480',
  },
  {
    id: '10',
    image: 'https://www.kfcpakistan.com/images/fccb1390-51f5-11f0-9396-67c8b1a67de1-2-min_variant_0-2025-06-25185539.png',
    title: 'Boneless Box',
    description: 'Boneless chicken with fries & dip',
    price: '540',
  },
  {
    id: '11',
    image: 'https://www.kfcpakistan.com/images/440cfeb0-7322-11f0-b954-a7e4d4e58325-KrunchChickenCombocopy-2025-08-07000545.png',
    title: 'Zinger chicken Combo',
    description: 'Zinger burger + fries + drink',
    price: '690',
  },
  {
    id: '12',
    image: 'https://www.kfcpakistan.com/images/87ef3cb0-7be7-11f0-a76e-319aa2038f18-1-2025-08-18035759.png',
    title: 'Family Bucket',
    description: '6 pcs chicken + fries + drink',
    price: '1890',
  },


  ]

   get filteredCard(){
    if(!this.searchtext)
      return this.deals
    const txt =this.searchtext.toLowerCase()

    return this.deals.filter(abc =>
    (abc.title || '').toLowerCase().includes(txt) ||
    (abc.description || '').toLowerCase().includes(txt)
    )
  }

};

