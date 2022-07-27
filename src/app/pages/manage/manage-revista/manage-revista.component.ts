import { Component, OnInit } from '@angular/core';
import { RevistaService } from '../../../services/revista.service';
import { Revista } from '../../../models/revista';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpBackend} from '@angular/common/http';

@Component({
  selector: 'app-manage-revista',
  templateUrl: './manage-revista.component.html',
  styleUrls: ['./manage-revista.component.css']
})
export class ManageRevistaComponent implements OnInit {

  title = 'Manage Revista';
  revistas: Revista;
  error: string;

  ServerUrl = environment.baseUrl;
  private http: HttpClient;

  p: Number = 1;
  count: Number = 10;

  constructor(
    public revistaService: RevistaService,
    private location: Location,
    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    this.revistaService.getRevistas().subscribe(
      (data: Revista) => this.revistas = data,
      error => this.error = error
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.revistaService.deleteRevista(+id).subscribe(
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
