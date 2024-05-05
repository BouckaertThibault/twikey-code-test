export interface CustomizerStyles {
  type: 'color';
  value: string;
  name: string;
}

export interface CustomizerCategories {
  category: 'header' | 'buttons';
  items: CustomizerStyles[];
}
