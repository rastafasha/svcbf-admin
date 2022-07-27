import { Component, OnInit } from '@angular/core';
import { CongresoService } from '../../../services/congreso.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { Congreso } from '../../../models/congreso';
import { HttpClient, HttpBackend} from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-congreso',
  templateUrl: './view-congreso.component.html',
  styleUrls: ['./view-congreso.component.css']
})
export class ViewCongresoComponent implements OnInit {

  title = 'View Pago';
  congresos: Congreso;
  error: string;

  ServerUrl = environment.baseUrl;
  private http: HttpClient;

  p: Number = 1;
  count: Number = 5;

  congreso$: Observable<Congreso>;

  constructor(
    public congresoService: CongresoService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    this.congreso$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.congresoService.getCongreso(+params.get('id'))
      )
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure want to delete id = ' + id)) {
      this.congresoService.deleteCongreso(+id).subscribe(
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
