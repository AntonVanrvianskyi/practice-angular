import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  page = signal(1);
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.navigate([], { queryParams: { page: 1 } });
  }
  onNext() {
    this.page.set(this.page() + 1);
    this._updateParams();
  }
  onPrev() {
    this.page.set(this.page() - 1);
    this._updateParams();
  }

  private _updateParams() {
    this.router.navigate([], {
      queryParams: { page: this.page() },
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge',
    });
  }
}
