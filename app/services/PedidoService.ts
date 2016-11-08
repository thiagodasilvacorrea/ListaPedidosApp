import { Injectable } from '@angular/core';
import { Pedido } from '../model/Pedido';

@Injectable()
export class PedidoService {

  preencherPedidoList(data: any): Array<Pedido> {
    let jsonBody = data._body;
    let jsonList = JSON.parse(jsonBody);
    let pedido : Pedido;
    let PedidoList = new Array<Pedido>();
    for (let json of jsonList) {
      pedido = new Pedido(json.vendor,json.frete,json.transportadora,json.status_pedido,json.data_emissao,json.data_atualizacao, json.id,json.usuario_matricula);
      PedidoList.push(pedido);
    }
    return PedidoList
  }



}