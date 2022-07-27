import { Component, OnInit } from '@angular/core';
import { DirRegional } from '../../../models/dirregional';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpBackend} from '@angular/common/http';
import { DirregionalService } from '../../../services/dirregional.service';


@Component({
  selector: 'app-manage-dirregional',
  templateUrl: './manage-dirregional.component.html',
  styleUrls: ['./manage-dirregional.component.css']
})
export class ManageDirregionalComponent implements OnInit {

  title = 'Manage Tips Directorio Regional';
  dirregionals: DirRegional;
  error: string;

  ServerUrl = environment.baseUrl;
  private http: HttpClient;

  p: Number = 1;
  count: Number = 5;

  constructor(
    public dirregionalService: DirregionalService,
    private location: Location,
    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    this.dirregionalService.getDirRegionals().subscribe(
      (data: DirRegional) => this.dirregionals = data,
      error => this.error = error
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.dirregionalService.deleteDirRegional(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        error => this.error = error
      );
    }
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

}
