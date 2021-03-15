export interface TreeModel{

  urlFile: string;
  nombreFile: string;
  descripcionFile: string;
  childs?: TreeModel[];
  enabled: boolean;
  folder: boolean;
  filename:string;
  editable:boolean;
  uploadable:boolean;
}
