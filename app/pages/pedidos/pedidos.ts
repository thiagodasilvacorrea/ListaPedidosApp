import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {SettingsEnum} from '../../enum/SettingsEnum';
import {UtilService} from '../../services/utilService';
import {PedidoService} from '../../services/PedidoService';
import { Pedido } from '../../model/pedido';


@Component({
    templateUrl: 'build/pages/pedidos/pedidos.html'
})
export class PedidosPage {
    
    private apiPedidoUrl:string;
    private PedidoList:Array<Pedido>;
    private mostrarDetalhes:boolean;
    private selectedPedido:Pedido ;

    constructor(private nav: NavController,
    private pedidoService: PedidoService,
    private http:Http) {
        this.apiPedidoUrl= UtilService.getEnumString(SettingsEnum, SettingsEnum.API_PEDIDO_URL);
        this.listarPedidos();
        this.mostrarDetalhes = false;
        this.selectedPedido = new Pedido("", "","","","","",null, null);

    }
    listarPedidos(){
         let creds = "";
         this.PedidoList = [];
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            let options = new RequestOptions({ headers: headers });
            this.http.get(this.apiPedidoUrl).subscribe(
                        data => this.preencherPedidoList(data),
                        err => console.log()
            );
    }
    viewPedido(selectedPedido: Pedido){
        this.selectedPedido = selectedPedido;
        this.mostrarDetalhes = true;
    }

    private preencherPedidoList(data: any){
        this.PedidoList =  this.pedidoService.preencherPedidoList(data);
    }

    getMostrarDetalhes() : boolean{
        return this.mostrarDetalhes;
    }
    setMostrarDetalhes(mostrarDetalhes: boolean){
        this.mostrarDetalhes = mostrarDetalhes;
    }
    getPedidoList() : Array<Pedido>{
        return this.PedidoList;
    }
    setPedidoList(PedidoList: Array<Pedido>){
        this.PedidoList = PedidoList;
    }
     getSelectedPedido() : Pedido{
        return this.selectedPedido;
    }
    setSelectedPedido(selectedPedido: Pedido){
        this.selectedPedido = selectedPedido;
    }

  }

