import { ReferenceBlockInterface, ReferenceItemInterface } from "../interfaces/interface";

const websiteReferences: ReferenceItemInterface[] =  [
    {
        nameTitle: "AELA, E. Heurísticas De Nielsen : 10 Dicas Para Melhorar a Usabilidade De Sua Interface",
        link: "https://aelaschool.com/pt/designdeinteracao/10-heuristicas-nielsen/",
        access: "16 set. 2023",
        accessable: true
      },
      {
        nameTitle: "BRUNO, M. 10 Heurísticas de Nielsen. Uma fórmula pra evitar erros básicos de usabilidade",
        link: "https://www.alura.com.br/artigos/10-heuristicas-de-nielsen-uma-formula-pra-evitar-erros-basicos-de-usabilidade",
        access: "15 set. 2023",
        accessable: true
      },
      {
        nameTitle: "COMO FUNCIONAM AS LEIS DE PROTEÇÃO DE DADOS NOS ESTADOS UNIDOS",
        link: "https://gatefy.com/pt-br/blog/como-funcionam-leis-protecao-dados-estados-unidos",
        access: "15 abr. 2023",
        accessable: true
      },
      {
        nameTitle: "IPEA-ATLAS DA VIOLÊNCIA V.2.7",
        link: "https://www.ipea.gov.br/atlasviolencia/filtros-series/5/bitos-por-armas-de-fogo",
        access: "15 abr. 2023",
        accessable: true
      },
      {
        nameTitle: "LEI GERAL DE PROTEÇÃO DE DADOS PESSOAIS (LGPD)",
        link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
        access: "15 abr. 2023",
        accessable: true
      },
      {
        nameTitle: "MOMA, G. 10 heurísticas de Nielsen para o design de interface",
        link: "https://brasil.uxdesign.cc/10-heur%C3%ADsticas-de-nielsen-para-o-design-de-interface-58d782821840",
        access: "16 set. 2023",
        accessable: true
      },
      {
        nameTitle: "NUMBER OF CIVILIAN GUNS PER CAPITA BY COUNTRY",
        link: "https://www.kaggle.com/datasets/kabhishm/number-of-civilian-guns-per-capita-by-country",
        access: "15 abr. 2023",
        accessable: true
      },
      {
        nameTitle: "PRIVATELY OWNED GUNS VS CRIME AND SAFETY INDEX",
        link: "https://www.kaggle.com/datasets/prasertk/privately-owned-guns-vs-crime-and-safety-index",
        access: "15 abr. 2023",
        accessable: true
      },
      {
        nameTitle: "US GUN DEATHS BY COUNTY 1999-2019",
        link: "https://www.kaggle.com/datasets/ahmedeltom/us-gun-deaths-by-county-19992019",
        access: "15 abr. 2023",
        accessable: true
      },
]

const articlesReferences: ReferenceItemInterface[] = [
    {
        nameTitle: "ANON. Armas de fogo e homicídios no Brasil",
        link: "hhttps://forumseguranca.org.br/publicacoes_posts/armas-de-fogo-e-homicidios-no-brasil/",
        access: "16 abr. 2023",
        accessable: true
      },
      {
          nameTitle: "CALDER, Alan; WATKINS, Steve G",
          link: "Information security risk management for ISO27001/ISO27002",
          access: "It Governance Ltd, 2010",
          accessable: false
        },
      {
          nameTitle: "CHEN, Daniel Y",
          link: "Análise de dados com Python e Pandas",
          access: "Novatec Editora, 2018",
          accessable: false
        },
      {
        nameTitle: "DERVICHE, A. Controle às armas nos EUA esbarra em fatores históricos e estruturais",
        link: "https://jornal.usp.br/atualidades/controle-as-armas-nos-eua-esbarra-em-fatores-historicos-e-estruturais/",
        access: "15 abr. 2023",
        accessable: true
      },
      {
        nameTitle: "ESCOBAR, H. Armas tendem a agravar violência urbana, dizem especialistas. São Paulo: Universidade de São Paulo, 2019.  Jornal da USP.",
        link: "https://jornal.usp.br/atualidades/armas-tendem-a-agravar-violencia-urbana-dizem-especialistas/",
        access: "15 abr. 2023",
        accessable: true
      },
      {
          nameTitle: "FELIX, S. A",
          link: "Armas versus vidas: Análise de regressão sobre o impacto da apreensão de armas nos homicídios",
          access: "Revista LEVS, n. 11, 31 dez. 1969",
          accessable: false
        },
      {
        nameTitle: "LEPES. Armas para viver mais seguros?",
        link: "http://lepes.fearp.usp.br/armas-para-viver-mais-seguros/",
        access: "15 abr. 2023",
        accessable: true
      },
]

export const referencesList: ReferenceBlockInterface[] = [
    {
        blockTitle: "Sites da internet",
        references: websiteReferences,
    },
    {
        blockTitle: "Livros e artigos",
        references: articlesReferences,
    }
]