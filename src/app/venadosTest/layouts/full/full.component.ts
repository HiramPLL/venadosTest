import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-full-layout',
    templateUrl: './full.template.html',
    styleUrls: ['./full.style.scss']
})
export class FullComponent implements OnInit {
    constructor(public router: Router) {}

    ngOnInit() {
        // if (this.router.url === '/') {
        //     this.router.navigate(['/dashboard/dashboard1']);
        // }
    }
}
