import { Component } from '@angular/core'
import { PedidosPage } from '../pedidos/pedidos';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

	 tab0Root = PedidosPage;

}
