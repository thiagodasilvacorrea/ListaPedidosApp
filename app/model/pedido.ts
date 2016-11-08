export class Pedido {

  private vendor: string;
  private frete: string;
  private transportadora: string;
  private status_pedido: string;
  private data_emissao: string;
  private data_atualizacao: string;
  private id: number;
  private usuario_matricula: number;


  constructor(vendor: string, frete: string, transportadora: string, status_pedido: string, data_emissao: string, data_atualizacao: string, id: number, usuario_matricula: number) {
    this.id = id;
    this.usuario_matricula = usuario_matricula;
    this.vendor = vendor;
    this.frete = frete;
    this.transportadora = transportadora;
    this.status_pedido = status_pedido;
    this.data_emissao = data_emissao;
    this.data_atualizacao = data_atualizacao;
  }

  public getVendor(): string {
    return this.vendor;
  }
  public getId(): number {
    return this.id;
  }
  public getFrete(): string {
    return this.frete;
  }
  public getTransportadora(): string {
    return this.transportadora;
  }
  public getStatusPedido(): string {
    return this.status_pedido;
  }
  public getDataEmissao(): string {
    return this.data_emissao;
  }
  public getDataAtualizacao(): string {
    return this.data_atualizacao;
  }
  public getUsuarioMatricula(): number {
    return this.usuario_matricula;
  }
  public setVendor(vendor: string) {
    this.vendor = vendor;
  }
  public setFrete(frete: string) {
    this.frete = frete;
  }
  public setTransportadora(transportadora: string) {
    this.transportadora = transportadora;
  }
  public setStatusPedido(status_pedido: string) {
    this.status_pedido = status_pedido;
  }
  public setDataEmissao(data_emissao: string) {
    this.data_emissao = data_emissao;
  }
  public setDataAtualizacao(data_atualizacao: string) {
    this.data_atualizacao = data_atualizacao;
  }

  public setUsuarioMatricula(usuario_matricula: number) {
    this.usuario_matricula = usuario_matricula;
  }
  public setId(id: number) {
    this.id = id;
  }


}



