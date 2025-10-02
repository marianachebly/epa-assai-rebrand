export interface Store {
  name: string;
  address: string;
  phone: string;
  city: string;
  neighborhood: string;
}

export const stores: Store[] = [
  { name: "Epa Plus Alfenas", address: "Av. Jovino Fernandes Sales, 1121", phone: "(35) 3297-3027", city: "Alfenas", neighborhood: "Centro" },
  { name: "Epa Premium Savassi", address: "Rua Antônio Albuquerque, 1080 – Savassi/BH – MG.", phone: "(31) 3472-5205", city: "Belo Horizonte", neighborhood: "Savassi" },
  { name: "Epa Plus Floramar", address: "Rua José Vieira Muniz, 227", phone: "31 3208-2548", city: "Belo Horizonte", neighborhood: "Floramar" },
  { name: "EPA Plus Bernardo Vasconcelos", address: "Avenida Bernardo Vasconcelos, 2.323", phone: "(31) 3208-2548", city: "Belo Horizonte", neighborhood: "Bernardo Vasconcelos" },
  { name: "EPA Plus Shopping Cidade", address: "Rua São Paulo, 957 – Centro, Belo Horizonte", phone: "(31) 3298-7854", city: "Belo Horizonte", neighborhood: "Centro" },
  { name: "Epa Plus Centro", address: "Rua Curitiba, 1001", phone: "31 3472-5100", city: "Belo Horizonte", neighborhood: "Centro" },
  { name: "Epa Plus Sagrada Família", address: "Rua Conselheiro Lafaiete, 735", phone: "31 3472-5105", city: "Belo Horizonte", neighborhood: "Sagrada Família" },
  { name: "Epa Plus Pompéia", address: "Rua Mário Martins, 53", phone: "31 3472-5110", city: "Belo Horizonte", neighborhood: "Pompéia" },
  { name: "Epa Plus Tirol", address: "Av. Expedito de Faria Tavares, 32", phone: "(31) 3208-2551", city: "Belo Horizonte", neighborhood: "Tirol" },
  { name: "Epa Plus Jaraguá", address: "Rua Boaventura, 1757", phone: "31 3208-2555", city: "Belo Horizonte", neighborhood: "Jaraguá" },
  { name: "Epa Plus Milionários", address: "Rua Caetano Pirri, 110", phone: "31 3208-2560", city: "Belo Horizonte", neighborhood: "Milionários" },
  { name: "Epa Plus Nova Suíça", address: "Rua Joaquim Nabuco, 208", phone: "31 3472-5114", city: "Belo Horizonte", neighborhood: "Nova Suíça" },
  { name: "Epa Plus Padre Eustáquio", address: "Rua Pará de Minas, 750", phone: "31 3472-5117", city: "Belo Horizonte", neighborhood: "Padre Eustáquio" },
  { name: "Epa Plus Cidade Nova", address: "Av. Cristiano Machado, 2250", phone: "31 3481-7977", city: "Belo Horizonte", neighborhood: "Cidade Nova" },
  { name: "Epa Premium Cidade Jardim", address: "Rua Iraí, 235", phone: "31 3208-2585", city: "Belo Horizonte", neighborhood: "Cidade Jardim" },
  { name: "Epa Premium Santo Agostinho", address: "Rua Rodrigues Caldas, 455", phone: "31 3208-2573", city: "Belo Horizonte", neighborhood: "Santo Agostinho" },
  { name: "Epa Plus Serra", address: "Rua Caraça, 600", phone: "31 3472-5125", city: "Belo Horizonte", neighborhood: "Serra" },
  { name: "Epa Plus Ouro Preto", address: "Rua Monteiro Lobato, 488", phone: "31 3208-2575", city: "Belo Horizonte", neighborhood: "Ouro Preto" },
  { name: "Epa Plus Santa Terezinha", address: "Av. Santa Terezinha, 1234", phone: "(31) 3208-3340", city: "Belo Horizonte", neighborhood: "Santa Terezinha" },
  { name: "Epa Plus Sion", address: "Av. Uruguai, 1.045", phone: "31 3472 5148", city: "Belo Horizonte", neighborhood: "Sion" },
  { name: "Epa Plus Santa Efigênia", address: "Rua Tenente Garro, 120", phone: "31 3472-5155", city: "Belo Horizonte", neighborhood: "Santa Efigênia" },
  { name: "Epa Plus Renascença", address: "Rua Jacuí, 2330", phone: "31 3472-5165", city: "Belo Horizonte", neighborhood: "Renascença" },
  { name: "Epa Plus Coração Eucarístico", address: "Rua Coração Eucarístico de Jesus, 86", phone: "31 3208-2593", city: "Belo Horizonte", neighborhood: "Coração Eucarístico" },
  { name: "Epa Plus Estoril", address: "Av. Barão Homem de Melo, 3095", phone: "31 3208-3320", city: "Belo Horizonte", neighborhood: "Estoril" },
  { name: "Epa Plus Havaí", address: "Rua Manila, 425", phone: "31 3472-5178", city: "Belo Horizonte", neighborhood: "Havaí" },
  { name: "Epa Plus São Pedro", address: "Av. Nossa Senhora do Carmo, 1420", phone: "31 3472-5181", city: "Belo Horizonte", neighborhood: "São Pedro" },
  { name: "Epa Plus Venda Nova", address: "Rua Padre Pedro Pinto, 2450", phone: "31 34725184", city: "Belo Horizonte", neighborhood: "Venda Nova" },
  { name: "Epa Plus São Gabriel", address: "Rua São João da Serra, 30", phone: "31 3472-5190", city: "Belo Horizonte", neighborhood: "São Gabriel" },
  { name: "Epa Plus Silveira", address: "Rua Ilacir Pereira Lima, 595", phone: "31 3472-5192", city: "Belo Horizonte", neighborhood: "Silveira" },
  { name: "Epa Plus Caiçara", address: "Rua Francisco Bicalho, 2095", phone: "31 3472-5199", city: "Belo Horizonte", neighborhood: "Caiçara" },
  { name: "Epa Plus Santa Mônica", address: "Rua Dos Astecas, 2600", phone: "31 3472-5202", city: "Belo Horizonte", neighborhood: "Santa Mônica" },
  { name: "Epa Plus Floresta", address: "Av. Flávio dos Santos, 500", phone: "31 3468-4797", city: "Belo Horizonte", neighborhood: "Floresta" },
  { name: "Epa Plus Jardim Inconfidência", address: "Av. Abílio Machado, 3075", phone: "31 3208-3305", city: "Belo Horizonte", neighborhood: "Jardim Inconfidência" },
  { name: "Epa Plus Santa Lúcia", address: "Rua Kepler, 441", phone: "31 3472-5217", city: "Belo Horizonte", neighborhood: "Santa Lúcia" },
  { name: "Epa Plus São Lucas", address: "Av. Contorno, 4.255", phone: "31 3472-5220", city: "Belo Horizonte", neighborhood: "São Lucas" },
  { name: "Epa Plus Castelo", address: "Av. Miguel Perrela, 987", phone: "(31) 3208-3337", city: "Belo Horizonte", neighborhood: "Castelo" },
  { name: "Epa Plus Betânia", address: "Rua Úrsula Paulino, 2405", phone: "31 3472-5233", city: "Belo Horizonte", neighborhood: "Betânia" },
  { name: "Epa Premium Belvedere", address: "Av. Luiz Paulo Franco, 251", phone: "31 3472-5237", city: "Belo Horizonte", neighborhood: "Belvedere" },
  { name: "Epa Plus Guarani", address: "Rua Waldomiro Lobo, 1499", phone: "31 3472-5242", city: "Belo Horizonte", neighborhood: "Guarani" },
  { name: "Epa Plus Alípio de Melo", address: "Av. João XXIII, 495", phone: "31 3208-3310", city: "Belo Horizonte", neighborhood: "Alípio de Melo" },
  { name: "Epa Plus Calafate", address: "Rua Platina, 1600", phone: "31 3334-1387", city: "Belo Horizonte", neighborhood: "Calafate" },
  { name: "Epa Plus Petrópolis", address: "Av. Senador Levindo Coelho, 3321", phone: "31 3387-9811", city: "Belo Horizonte", neighborhood: "Petrópolis" },
  { name: "Epa Plus Anchieta", address: "Rua Francisco Deslandes, 900", phone: "(31) 3208-2595", city: "Belo Horizonte", neighborhood: "Anchieta" },
  { name: "Epa Plus Independência", address: "Rua Mariza Afonso, 226", phone: "31 3472-5259", city: "Belo Horizonte", neighborhood: "Independência" },
  { name: "Epa Plus Horto", address: "Av. Silviano Brandão, 1672", phone: "31 3472-5280", city: "Belo Horizonte", neighborhood: "Horto" },
  { name: "Epa Plus Buritis", address: "Av. Professor Mário Werneck, 1200", phone: "(31) 3378-8951", city: "Belo Horizonte", neighborhood: "Buritis" },
  { name: "Epa Plus Shopping Estação BH", address: "Av. Cristiano Machado, 11833", phone: "31 3472-5285", city: "Belo Horizonte", neighborhood: "Shopping Estação" },
  { name: "Epa Plus Céu Azul", address: "Rua Maria Gertrudes dos Santos, 170", phone: "31 3472-5290", city: "Belo Horizonte", neighborhood: "Céu Azul" },
  { name: "Epa Plus Boa Vista", address: "Rua Elísio de Brito, 239", phone: "31 3472-5295", city: "Belo Horizonte", neighborhood: "Boa Vista" },
  { name: "Epa Plus Araguaia", address: "Av. Menelick de Carvalho, 245", phone: "31 3208-2530", city: "Belo Horizonte", neighborhood: "Araguaia" },
  { name: "Epa Plus Lagoinha", address: "Av. Presidente Antônio Carlos, 735", phone: "31 3208-2540", city: "Belo Horizonte", neighborhood: "Lagoinha" },
  { name: "Epa Plus Paulo VI", address: "Rua João Lemos, 151", phone: "(31) 3208-3395", city: "Belo Horizonte", neighborhood: "Paulo VI" },
  { name: "Epa Premium Pampulha", address: "Alameda das Princesas, 245 – São Luiz, BH", phone: "(31) 3298-7822", city: "Belo Horizonte", neighborhood: "Pampulha" },
  { name: "Epa Plus Pedro II", address: "Av. Dom Pedro II, 2.930 – Carlos Prates, BH", phone: "(31) 3298-7826", city: "Belo Horizonte", neighborhood: "Carlos Prates" },
  { name: "Epa Premium Gutierrez", address: "Avenida Marquês de Valência, 170 – Gutierrez, BH", phone: "(31) 3298-7850", city: "Belo Horizonte", neighborhood: "Gutierrez" },
  { name: "Epa Plus Betim", address: "Av. Bandeirantes, 1000", phone: "31 3472-5244", city: "Betim", neighborhood: "Centro" },
  { name: "Epa Plus Betim", address: "Av. Das Américas, 675", phone: "31 3472-5260", city: "Betim", neighborhood: "Alterosas" },
  { name: "Epa Plus Carandaí", address: "Av. Afrânio de Melo franco, 40", phone: "(32) 3361-5500", city: "Carandaí", neighborhood: "Centro" },
  { name: "Epa Plus Congonhas", address: "Av. Júlia Kubitscheck, 1355", phone: "(31) 3732-0350", city: "Congonhas", neighborhood: "Centro" },
  { name: "Epa Plus Conselheiro Lafaiete", address: "Rua Desembargador Dayrell de Lima, 50", phone: "(31) 3762-4028", city: "Conselheiro Lafaiete", neighborhood: "Centro" },
  { name: "Epa Plus Contagem", address: "Rua Tiradentes, 2592", phone: "31 3472-5156", city: "Contagem", neighborhood: "Centro" },
  { name: "Epa Plus Contagem", address: "Rua Bernardo Monteiro, 900", phone: "(31) 3208-3376", city: "Contagem", neighborhood: "Eldorado" },
  { name: "Epa Plus Contagem", address: "Rua Tereza Cristina, 185", phone: "(31) 3468-8125", city: "Contagem", neighborhood: "Industrial" },
  { name: "Epa Plus Contagem", address: "Rua Extrema, 95", phone: "31 3472-5225", city: "Contagem", neighborhood: "Cinco" },
  { name: "Epa Plus Contagem", address: "Rua Santa Maria, 537", phone: "31 3208-2565", city: "Contagem", neighborhood: "Nova Contagem" },
  { name: "Epa Plus Contagem", address: "Rua Doutor João Augusto Fonseca e Silva, 1104", phone: "31 3472-5252", city: "Contagem", neighborhood: "Tropical" },
  { name: "Epa Plus Contagem", address: "Rua Rio Solimões, 347", phone: "31 3472-5299", city: "Contagem", neighborhood: "Ressaca" },
  { name: "Epa Plus Governador Valadares", address: "Av. Brasil, 3790", phone: "33 3273-1885", city: "Governador Valadares", neighborhood: "Centro" },
  { name: "Epa Plus Governador Valadares", address: "Rua Israel Pinheiro, 3411", phone: "33 3275-5372", city: "Governador Valadares", neighborhood: "Lourdes" },
  { name: "Epa Plus Ibirité", address: "Rua Leblon, 36", phone: "31 3208-2590", city: "Ibirité", neighborhood: "Centro" },
  { name: "Epa Plus Itabirito", address: "Rua Maria Bernardina, 565", phone: "(31) 3208-3365", city: "Itabirito", neighborhood: "Centro" },
  { name: "Epa Plus Itaúna", address: "Av. Jove Soares, 2450", phone: "(37) 3249-7400", city: "Itaúna", neighborhood: "Centro" },
  { name: "Epa Plus João Monlevade", address: "Av. Resplendor, 201", phone: "31 3852-6574", city: "João Monlevade", neighborhood: "Jardim das Oliveiras" },
  { name: "Epa Plus João Monlevade", address: "Av. Getúlio Vargas, 4507", phone: "31 3852-7440", city: "João Monlevade", neighborhood: "Centro" },
  { name: "Epa Plus Lagoa Santa", address: "Rua Academico Nilo Figueiredo, 2057", phone: "31 3208-2520", city: "Lagoa Santa", neighborhood: "Centro" },
  { name: "Epa Plus Bela Vista", address: "Rua Coronel Durães, 2.400 – Bela Vista, Lagoa Santa", phone: "(31) 3298-7806", city: "Lagoa Santa", neighborhood: "Bela Vista" },
  { name: "Epa Plus Nanuque", address: "Av. Mucuri, 1234", phone: "(33) 3622-3700", city: "Nanuque", neighborhood: "Centro" },
  { name: "Epa Plus Nova Lima", address: "Praça Bernardino de Lima, 120", phone: "(31) 3208-3385", city: "Nova Lima", neighborhood: "Centro" },
  { name: "Epa Plus Jardim Canadá", address: "Av. Toronto, 1320", phone: "31 3208-2508", city: "Nova Lima", neighborhood: "Jardim Canadá" },
  { name: "Epa Plus Ouro Branco", address: "Av. Maria Firmina da Silva, 201", phone: "(31) 3749-7800", city: "Ouro Branco", neighborhood: "Centro" },
  { name: "Epa Plus Ouro Preto", address: "Av. Juscelino Kubitscheck, 91", phone: "(31) 3552-8600", city: "Ouro Preto", neighborhood: "Centro" },
  { name: "Epa Plus Pedro Leopoldo", address: "Av. Gil Antonio Pereira, 1109", phone: "31 3472-5276", city: "Pedro Leopoldo", neighborhood: "Centro" },
  { name: "Epa Plus Ponte Nova", address: "Av. Doutor Otavio Soares, 408", phone: "(31) 3881-4992", city: "Ponte Nova", neighborhood: "Centro" },
  { name: "Epa Plus Ribeirão das Neves", address: "Av. Denise Cristina da Rocha, 320", phone: "31 3472-5160", city: "Ribeirão das Neves", neighborhood: "Centro" },
  { name: "Epa Plus Ribeirão das Neves", address: "Av. Ari Teixeira da Costa, 480", phone: "31 3472-5168", city: "Ribeirão das Neves", neighborhood: "Rosaneves" },
  { name: "Epa Plus Ribeirão das Neves", address: "Rua Trinta e Sete, 152", phone: "31 3472-5264", city: "Ribeirão das Neves", neighborhood: "Veneza" },
  { name: "Epa Plus Ribeirão das Neves", address: "Rua Helena Sapori Faluba, 552", phone: "31 3472-5272", city: "Ribeirão das Neves", neighborhood: "Sevilha" },
  { name: "Epa Plus Ribeirão das Neves", address: "Av. Monte Castelo, 265", phone: "31 3208-2512", city: "Ribeirão das Neves", neighborhood: "Monte Castelo" },
  { name: "Epa Plus Justinópolis", address: "Av. Gávea, 1200", phone: "31 3208-2545", city: "Ribeirão das Neves", neighborhood: "Justinópolis" },
  { name: "Epa Plus Sabará", address: "Av. Contagem, 1600", phone: "31 3472-5215", city: "Sabará", neighborhood: "Centro" },
  { name: "Epa Plus Sabará", address: "Rua Magno Moura, 140", phone: "31 3472-5270", city: "Sabará", neighborhood: "General Carneiro" },
  { name: "Epa Plus Santa Luzia", address: "Av. Brasília, 2160", phone: "31 3472-5210", city: "Santa Luzia", neighborhood: "Centro" },
  { name: "Epa Plus Santa Luzia", address: "Rua do Carmo, 165", phone: "(31) 3208-3380", city: "Santa Luzia", neighborhood: "Cristina" },
  { name: "Epa Plus Santa Luzia", address: "Rua Jaime Carlos Afonso Teixeira, 29", phone: "31 3208-3300", city: "Santa Luzia", neighborhood: "São Benedito" },
  { name: "Epa Plus Santos Dumont", address: "Rua 15 de fevereiro, 2123", phone: "(32)3251-9484", city: "Santos Dumont", neighborhood: "Centro" },
  { name: "Epa Plus Sete Lagoas", address: "R. Antônio Olinto, 447", phone: "(31) 3208-3346", city: "Sete Lagoas", neighborhood: "Centro" },
  { name: "Epa Plus Sete Lagoas", address: "Rua Senhor dos Passos, 43", phone: "(31) 3208-3350", city: "Sete Lagoas", neighborhood: "Canaan" },
  { name: "Epa Plus Sete Lagoas", address: "Rua Cachoeira da Prata, 80", phone: "(31) 3208-3355", city: "Sete Lagoas", neighborhood: "Jardim Arizona" },
  { name: "Epa Plus Teófilo Otoni", address: "Av. Sidonio Otoni, 685", phone: "(33) 3523-8075", city: "Teófilo Otoni", neighborhood: "Centro" },
  { name: "Epa Plus Teófilo Otoni", address: "Av. Luiz Boali Porto Salman, 545", phone: "(33) 3523-3135", city: "Teófilo Otoni", neighborhood: "Marajó" },
  { name: "Epa Plus Teófilo Otoni", address: "Rua Francisco Sá, 359", phone: "(33) 3536-1062", city: "Teófilo Otoni", neighborhood: "Jardim Iracema" },
  { name: "Epa Plus Teófilo Otoni", address: "Av. Sidonio Otoni, 1888", phone: "(33) 3523-4608", city: "Teófilo Otoni", neighborhood: "Grão Pará" },
  { name: "Epa Plus Teófilo Otoni", address: "Rua Engenheiro Argolo, 195", phone: "(31) 3521-1217", city: "Teófilo Otoni", neighborhood: "Centro" },
  { name: "Epa Plus Vespasiano", address: "Av. Rossana Murta, 311", phone: "(31) 3645-1507", city: "Vespasiano", neighborhood: "Centro" },
];

export const getCities = (): string[] => {
  const cities = [...new Set(stores.map(store => store.city))];
  return cities.sort();
};

export const getNeighborhoodsByCity = (city: string): string[] => {
  const neighborhoods = stores
    .filter(store => store.city === city)
    .map(store => store.neighborhood);
  return [...new Set(neighborhoods)].sort();
};

export const getStoresByCityAndNeighborhood = (city: string, neighborhood: string): Store[] => {
  return stores.filter(
    store => store.city === city && store.neighborhood === neighborhood
  );
};
