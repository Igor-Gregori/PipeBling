import jsontoxml from "jsontoxml";

class OrdersHelper {
  getXml(deal: any) {
    return jsontoxml({
      pedido: [
        {
          name: "cliente",
          children: [
            {
              name: "nome",
              text: deal.person_id.name
                ? deal.person_id.name
                : deal.org_id.name,
            },
            { name: "tipoPessoa", text: "F" },
            { name: "endereco", text: "Av. Testador Silva" },
            { name: "ie", text: "3067663000" },
            { name: "numero", text: "333" },
            { name: "bairro", text: "Cidade Teste" },
            { name: "cep", text: "95.700-000" },
            { name: "cidade", text: "Sao Teste" },
            { name: "uf", text: "SP" },
            { name: "fone", text: "0123456789" },
            {
              name: "email",
              text: deal.person_id.email ? deal.person_id.name : "",
            },
          ],
        },
        {
          name: "transporte",
          children: [
            { name: "transportadora", text: "Transportadora Teste" },
            { name: "tipo_frete", text: "R" },
            { name: "servico_correios", text: "SEDEX - CONTRATO" },
            {
              name: "dados_etiqueta",
              children: [
                { name: "nome", text: "Endereco de entrega" },
                { name: "endereco", text: "Rua dos testadores" },
                { name: "numero", text: "333" },
                { name: "complemento", text: "Sala 60" },
                { name: "municipio", text: "Teste Goncalves" },
                { name: "uf", text: "RS" },
                { name: "cep", text: "95.700-000" },
                { name: "bairro", text: "Cidade Baixa" },
              ],
            },
          ],
        },
        {
          name: "itens",
          children: [
            {
              name: "item",
              children: [
                { name: "codigo", text: 101 },
                { name: "descricao", text: "Computador Super X" },
                { name: "un", text: "Un" },
                { name: "qtde", text: 1 },
                { name: "vlr_unit", text: deal.value ? deal.value : 0 },
              ],
            },
          ],
        },
        { name: "vlr_frete", text: 0 },
        { name: "vlr_desconto", text: 0 },
        { name: "obs", text: "Sem demais observações" },
        { name: "obs_internas", text: "Sem demais observações internas" },
      ],
    });
  }
}

export { OrdersHelper };
