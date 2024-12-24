import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Menu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeng-menu-bug';
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'New', icon: 'pi pi-plus' },
            { label: 'Search', icon: 'pi pi-search' },
            { label: 'Search', icon: 'pi pi-search' },
            { label: 'Search-Hidden', icon: 'pi pi-search', visible: false },
            { label: 'Search', icon: 'pi pi-search' },
            { label: 'Search', icon: 'pi pi-search' },
            { label: 'Search', icon: 'pi pi-search' },
        ];
    }
}
