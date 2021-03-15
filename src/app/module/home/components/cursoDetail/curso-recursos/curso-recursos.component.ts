import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {SesionesModel} from '../../../../../shared/models/SesionesModel';
import {TreeModel} from '../../../../../shared/models/TreeModel';
import {SesionesService} from '../../../../../core/services/cursos/sesiones/sesiones.service';
import {saveAs} from 'file-saver';
import {CookieService} from 'ngx-cookie-service';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../../../../shared/components/dialogSesion/dialog/dialog.component';
import {MatMenuTrigger} from '@angular/material/menu';
import {DialogFileComponent} from '../../../../../shared/components/dialogFile/dialog-file/dialog-file.component';
import {DialogFolderComponent} from '../../../../../shared/components/dialogFolder/dialog-folder/dialog-folder.component';
import {DeleteSesionComponent} from '../../../../../shared/components/dialogSesion/delete-sesion/delete-sesion.component';
import {DeleteFolderComponent} from '../../../../../shared/components/dialogFolder/delete-folder/delete-folder.component';
import {DeleteFileComponent} from '../../../../../shared/components/dialogFile/delete-file/delete-file.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-curso-recursos',
  templateUrl: './curso-recursos.component.html',
  styleUrls: ['./curso-recursos.component.css']
})
export class CursoRecursosComponent implements OnInit, AfterViewInit {

  @ViewChildren(MatMenuTrigger) matMenuTrigger: QueryList<MatMenuTrigger>;
  id;

  menuTopLeftPosition = {x: '0', y: '0'};

  _listasesiones: SesionesModel[] = null;
  teacher: boolean = false;

  treeControl = new NestedTreeControl<TreeModel>(node => node.childs);
  dataSource = new MatTreeNestedDataSource<TreeModel>();
  panelOpenState = false;

  constructor(private service: SesionesService, private cookieService: CookieService, public dialog: MatDialog,public router:Router) {


    this.id=this.router.getCurrentNavigation().extras.state.id;

    if (this.cookieService.get('teacher') == 'true') {
      this.teacher = true;
    } else {
      this.teacher = false;
    }
    console.log(this.teacher);

  }

  hasChild = (_: number, node: TreeModel) => !!node.childs && node.childs.length > 0;

  ngOnInit(): void {


    this.service.obtenerSesiones(this.id).subscribe(value => {

      this._listasesiones = value;
    });




  }

  ngAfterViewInit(): void {


  }


  togleable(node: any, id: number) {
    console.log(node);
    if (node == true) {
      this.service.dataSesion(id).subscribe(value => {

        this.dataSource.data = value;
        this.treeControl.dataNodes = value;
      });
    } else {


      this.dataSource.data = null;
      this.treeControl.dataNodes = null;
    }

    return true;
  }

  descargar(url: string, nombre) {
    this.service.descargar(url).subscribe(value => {

      saveAs(value, nombre);

    });

  }


  loadSesion(){

    this.dataSource.data = null;
    this.treeControl.dataNodes = null;
    this.service.obtenerSesiones(this.id).subscribe(value => {

      this._listasesiones = value;
    });

  }

  agregarSesion(idcurso) {


    this.dialog.open(DialogComponent, {
      data: {
        id: idcurso
      }, id: 'sesion'
    }).afterClosed().subscribe(value => {

      this.loadSesion();
    });

  }


  eliminarSesionn(event: MouseEvent, id: number, editable: boolean) {

    event.preventDefault();


    console.log('me hiciste click');


    if (editable == false) {
      return;
    }

    this.menuTopLeftPosition.x = event.clientX + 'px';
    this.menuTopLeftPosition.y = event.clientY + 'px';


    this.matMenuTrigger.get(0).menuData = {item: id};


    this.matMenuTrigger.get(0).openMenu();

  }


  agregarSesiones(event: MouseEvent, idcurso: number) {


    event.preventDefault();


    console.log('me hiciste click');


    if (this.teacher == false) {
      return;

    }


    this.menuTopLeftPosition.x = event.clientX + 'px';
    this.menuTopLeftPosition.y = event.clientY + 'px';

    this.matMenuTrigger.get(1).menuData = {item: idcurso};

    this.matMenuTrigger.get(1).openMenu();

  }

  folderEliminar(event: MouseEvent, id: number, uploadble:boolean,editable: boolean) {

    if(!uploadble){
      return;
    }




    event.preventDefault();


    console.log('me hiciste click');


    this.matMenuTrigger.get(2).menuData = {
      item: {
        id: id,
        editable: editable


      }
    };
    this.menuTopLeftPosition.x = event.clientX + 'px';
    this.menuTopLeftPosition.y = event.clientY + 'px';


    this.matMenuTrigger.get(2).openMenu();
  }


  agregarArchivo(idfolder: number) {

    this.dialog.open(DialogFileComponent, {
      data: {

        id: idfolder

      }
    }).afterClosed().subscribe(value => {

      this.loadSesion();

    });

  }


  elimimarFile(event: MouseEvent, id: number, editable: boolean) {
    event.preventDefault();

    if (editable == false) {
      return;
    }

    console.log('me hiciste click');


    this.menuTopLeftPosition.x = event.clientX + 'px';
    this.menuTopLeftPosition.y = event.clientY + 'px';

    this.matMenuTrigger.get(3).menuData = {item: id};


    this.matMenuTrigger.get(3).openMenu();
  }


  deleteSesion(id) {

    this.dialog.open(DeleteSesionComponent, {
        data: {id: id},
        id: 'deletesesion'

      },
    ).afterClosed().subscribe(value => {

      this.loadSesion();

    });

  }

  deleteFolder(id) {

    this.dialog.open(DeleteFolderComponent, {

      id: 'folder',
      data: {
        id: id
      }
    }).afterClosed().subscribe(value => {
      this.loadSesion();
    });
  }

  deleteFile(id) {

    this.dialog.open(DeleteFileComponent,{

      data:{
        id:id
      }

    }).afterClosed().subscribe(value => {

      this.loadSesion();

    })
  }


  focus(event: MouseEvent) {
    event.preventDefault();
    console.log('focus wuu');

  }

  agregarFolder(id: number) {

    this.dialog.open(DialogFolderComponent, {
      data: {

        id: id

      }
    }).afterClosed().subscribe(value => {
      this.loadSesion();

    });
  }


}
