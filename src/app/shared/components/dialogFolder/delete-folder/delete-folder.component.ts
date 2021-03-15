import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {FolderService} from '../../../../core/services/cursos/folders/folder.service';

@Component({
  selector: 'app-delete-folder',
  templateUrl: './delete-folder.component.html',
  styleUrls: ['./delete-folder.component.css']
})
export class DeleteFolderComponent implements OnInit {


  idfolder: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data, private folderService: FolderService, public dialog: MatDialog) {
    this.idfolder = data.id;

  }

  ngOnInit(): void {
  }


  async eliminarFolder() {
    this.folderService.borrarFolder(this.idfolder).subscribe(value => {


      alert('folder eliminado correctamente');
      this.dialog.closeAll();

    }, error => {

      alert('algo sucedio intente denuevo mas tarde');
    });
  }
}
