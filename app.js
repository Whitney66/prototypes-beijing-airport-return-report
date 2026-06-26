const storeOptions = [
  { value: '7222', label: '[7222]中免集团(北京)免税品有限公司' },
  { value: '7223', label: '[7223]中免集团北京大兴国际机场免税品有限公司' },
];

const shopOptionsByStore = {
  '7222': [
    { value: '722201', label: '[722201]' },
    { value: '722202', label: '[722202]监管出境免值品仓' },
    { value: '722203', label: '[722203]监管出境库待处....' },
    { value: '722204', label: '[722204]海关监管入境正...' },
    { value: '722205', label: '[722205]监管入境免值品仓' },
    { value: '722206', label: '[722206]监管入境库待处理' },
  ],
  '7223': [
    { value: '722301', label: '[722301]监管出境精品仓' },
    { value: '722302', label: '[722302]监管出境免值品仓' },
    { value: '722303', label: '[722303]监管出境库待处理' },
    { value: '722304', label: '[722304]海关监管入境正常品仓' },
    { value: '722305', label: '[722305]监管入境免值品仓' },
    { value: '722306', label: '[722306]监管入境库待处理' },
    { value: '722307', label: '[722307]监管入境精品仓' },
    { value: '722308', label: '[722308]监管出境暂存仓' },
    { value: '722309', label: '[722309]海关监管退运待处理仓' },
    { value: '722310', label: '[722310]监管入境暂存仓' },
  ],
};

const categoryOptions = [
  '[01]进口酒', '[02]进口烟', '[03]进口香化', '[04]国产酒', '[05]国产烟', '[06]进口精品', '[07]进口食品', '[08]代理品牌商品',
  '[09]有税国产品', '[10]奥运产品', '[11]退税国产品', '[12]船供商品', '[14]统购有税精品', '[15]退税精品', '[16]统购有税',
  '[19]有税进口酒', '[20]退税商品', '[21]农产品', '[22]海南免税', '[23]海口自采有税', '[24]海口自采有税', '[25]有税国产酒',
  '[26]免值品', '[27]自有品牌', '[28]电商一件代发',
].map((label) => ({ value: label, label }));

const counterOptions = [
  '[72225101]T3C11',
  '[72222201]T3E14香化',
  '[72231101]DXM 中心店',
  '[72221201]T3E02烟酒',
  '[72235105]DXA香化',
  '[72235103]DXA烟酒',
  '[72222501]T3E19',
  '[72222301]T3E15',
].map((label) => ({ value: label, label }));

const kindOptions = [
  '[060404]女士小皮具',
  '[060403]男士小皮具',
  '[060402]女士大皮具',
  '[060401]男士大皮具',
  '[060303]男女通用首饰',
  '[060302]女用首饰',
  '[060207]皮带',
  '[060202]围巾',
];

const brandCatalog = [
  {
    code: '060139',
    name: 'Bulgari 宝格丽',
    label: '[060139]Bulgari 宝格丽',
    productCode: 'C019872',
    barcode: '3473311400000',
    category: '[03]进口香化',
    counter: '[72222201]T3E14香化',
    supplier: '中免国际香化供应链',
    spec: '50ml/瓶',
    itemNo: 'BLG-50-001',
    kind: '[060404]女士小皮具',
    productName: 'Bulgari 宝格丽 晶灿女士香水',
  },
  {
    code: '030113',
    name: 'La Mer 海蓝之谜',
    label: '[030113]La Mer 海蓝之谜',
    productCode: 'F002499',
    barcode: '5000159452885',
    category: '[03]进口香化',
    counter: '[72235105]DXA香化',
    supplier: '中免国际香化供应链',
    spec: '60ml/瓶',
    itemNo: 'LAM-60-021',
    kind: '[060404]女士小皮具',
    productName: 'La Mer 海蓝之谜 精粹乳',
  },
  {
    code: '030017',
    name: 'Lancome 兰蔻',
    label: '[030017]Lancome 兰蔻',
    productCode: 'C019849',
    barcode: '3346470609716',
    category: '[03]进口香化',
    counter: '[72222301]T3E15',
    supplier: '兰蔻国际贸易',
    spec: '100ml/瓶',
    itemNo: 'LAN-100-018',
    kind: '[060404]女士小皮具',
    productName: 'Lancome 兰蔻 菁纯精华水',
  },
  {
    code: '030025',
    name: 'Estee Lauder 雅诗兰黛',
    label: '[030025]Estee Lauder 雅诗兰黛',
    productCode: 'A000383',
    barcode: '081128028183',
    category: '[03]进口香化',
    counter: '[72225101]T3C11',
    supplier: '雅诗兰黛集团',
    spec: '75ml/瓶',
    itemNo: 'ELD-75-099',
    kind: '[060404]女士小皮具',
    productName: 'Estee Lauder 雅诗兰黛 小棕瓶精华',
  },
  {
    code: '050001',
    name: '中华',
    label: '[050001]中华',
    productCode: 'D000078',
    barcode: '6972119550414',
    category: '[05]国产烟',
    counter: '[72221201]T3E02烟酒',
    supplier: '上海烟草集团',
    spec: '2条/盒',
    itemNo: 'ZH-2-668',
    kind: '烟酒',
    productName: '中华 硬盒香烟',
  },
  {
    code: '050002',
    name: '中华（金中支）',
    label: '[050002]中华（金中支）',
    productCode: 'D000079',
    barcode: '6972119550384',
    category: '[05]国产烟',
    counter: '[72235103]DXA烟酒',
    supplier: '上海烟草集团',
    spec: '2条/盒',
    itemNo: 'ZHJ-2-116',
    kind: '烟酒',
    productName: '中华 金中支香烟',
  },
];

const brandOptions = brandCatalog.map((item) => ({ value: item.label, label: item.label }));
const productCodeOptions = brandCatalog.map((item) => ({ value: item.productCode, label: item.productCode }));
const barcodeOptions = brandCatalog.map((item) => ({ value: item.barcode, label: item.barcode }));

const allShops = Object.entries(shopOptionsByStore).flatMap(([store, shops]) =>
  shops.map((shop) => ({ ...shop, store }))
);

const state = {
  filters: {
    store: storeOptions.map((item) => item.value),
    shop: allShops.map((item) => item.value),
    category: categoryOptions.map((item) => item.value),
    counter: counterOptions.map((item) => item.value),
    brand: brandOptions.map((item) => item.value),
    productCode: productCodeOptions.map((item) => item.value),
    barcode: barcodeOptions.map((item) => item.value),
  },
  page: 1,
  pageSize: 30,
  rows: [],
  filteredRows: [],
  filterComponents: {},
};

const elements = {
  tbody: document.getElementById('report-tbody'),
  footerTotal: document.getElementById('footer-total'),
  loading: document.getElementById('table-loading'),
  pageList: document.getElementById('page-list'),
  pageSize: document.getElementById('page-size-select'),
  gotoPage: document.getElementById('goto-page'),
  prevPage: document.getElementById('prev-page'),
  nextPage: document.getElementById('next-page'),
  gotoButton: document.getElementById('goto-button'),
  queryButton: document.getElementById('query-button'),
  resetButton: document.getElementById('reset-button'),
  exportButton: document.getElementById('export-button'),
};

function closeHeaderTips(exceptTip) {
  document.querySelectorAll('.th-tip.is-open').forEach((tip) => {
    if (tip !== exceptTip) {
      tip.classList.remove('is-open');
    }
  });
}

function formatMoney(value) {
  return Number(value).toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function pad(value, length = 4) {
  return String(value).padStart(length, '0');
}

function getValidShopValues(selectedStores) {
  return selectedStores.flatMap((storeValue) => (shopOptionsByStore[storeValue] || []).map((shop) => shop.value));
}

function buildMockRows() {
  const rows = [];
  const stores = storeOptions;

  for (let index = 0; index < 72; index += 1) {
    const brand = brandCatalog[index % brandCatalog.length];
    const store = stores[index % stores.length];
    const shops = shopOptionsByStore[store.value];
    const shop = shops[index % shops.length];
    const counter = brand.counter;
    const avgPrice = 65 + (index % 9) * 24 + (index % 3) * 5.5;
    const salePrice = avgPrice * (1.32 + (index % 4) * 0.08);
    const stockQty = 6 + (index % 15) * 3;
    const avgAmount = avgPrice * stockQty;
    const saleAmount = salePrice * stockQty;
    const receiveQty = Math.max(1, stockQty - (index % 4));
    const currencies = ['CNY', 'USD', 'EUR'];
    const currency = currencies[index % currencies.length];
    const nccCurrency = currency === 'CNY' ? 'USD' : currency;
    const ciboCurrency = currency === 'EUR' ? 'USD' : currency;

    const region = ['法国', '美国', '日本', '中国'][index % 4];
    const ingredient = ['香精', '玻尿酸', '烟叶', '植物萃取'][index % 4];
    const serial = `202606${pad((index % 28) + 1, 2)}`;

    rows.push({
      id: `ROW-${pad(index + 1, 3)}`,
      store: store.label,
      storeValue: store.value,
      shop: shop.label,
      shopValue: shop.value,
      counter,
      productCode: brand.productCode,
      productName: brand.productName,
      supplier: brand.supplier,
      spec: brand.spec,
      brand: brand.label,
      category: brand.category,
      barcode: brand.barcode,
      itemNo: `${brand.itemNo}-${pad(index + 1, 3)}`,
      region,
      ingredient,
      kind: kindOptions[index % kindOptions.length],
      avgPrice,
      salePrice,
      stockQty,
      avgAmount,
      saleAmount,
      eopOrderNo: `EOP${serial}-${pad(index + 1, 4)}`,
      eopInvoiceNo: `EINV${serial.slice(2)}-${pad((index % 28) + 1, 3)}`,
      eopReceiveQty: receiveQty,
      nccInvoiceNo: `NCC-INV-${serial}-${pad((index % 30) + 1, 3)}`,
      nccInvoicePrice: avgPrice + 6 + (index % 6) * 2.2,
      nccCurrency,
      ciboInvoiceNo: `CIBO-INV-${serial}-${pad((index % 35) + 1, 3)}`,
      ciboInvoicePrice: avgPrice + 8 + (index % 5) * 2.8,
      ciboCurrency,
    });
  }

  return rows;
}

function createMultiSelect({ key, containerId, options, searchable = false, placeholder = '全部' }) {
  const container = document.getElementById(containerId);
  const root = document.createElement('div');
  root.className = 'multi-select';

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'multi-select-trigger';
  trigger.innerHTML = `
    <span class="multi-select-summary"></span>
    <span class="multi-select-arrow">▼</span>
  `;

  const panel = document.createElement('div');
  panel.className = 'multi-select-panel hidden';

  const searchInput = document.createElement('input');
  searchInput.className = 'panel-search';
  searchInput.placeholder = '输入关键字搜索';
  if (!searchable) {
    searchInput.classList.add('hidden');
  }

  const toolbar = document.createElement('div');
  toolbar.className = 'panel-toolbar';
  toolbar.innerHTML = `
    <span>可多选</span>
    <div>
      <button type="button" class="panel-tool-btn" data-action="all">全选</button>
      <button type="button" class="panel-tool-btn" data-action="clear">清空</button>
    </div>
  `;

  const optionList = document.createElement('div');
  optionList.className = 'option-list';

  panel.appendChild(searchInput);
  panel.appendChild(toolbar);
  panel.appendChild(optionList);
  root.appendChild(trigger);
  root.appendChild(panel);
  container.appendChild(root);

  const component = {
    key,
    root,
    trigger,
    panel,
    optionList,
    searchInput,
    options: [...options],
    visibleOptions: [...options],
    placeholder,
  };

  function updateSummary() {
    const selected = state.filters[key];
    const summary = trigger.querySelector('.multi-select-summary');
    if (!selected.length) {
      summary.textContent = '未选择';
      return;
    }
    if (selected.length === component.options.length) {
      summary.textContent = placeholder;
      return;
    }
    if (selected.length === 1) {
      const target = component.options.find((item) => item.value === selected[0]);
      summary.textContent = target ? target.label : selected[0];
      return;
    }
    summary.textContent = `已选 ${selected.length} 项`;
  }

  function renderOptions() {
    optionList.innerHTML = '';
    if (!component.visibleOptions.length) {
      const empty = document.createElement('div');
      empty.className = 'option-item';
      empty.textContent = '无匹配项';
      optionList.appendChild(empty);
      return;
    }

    component.visibleOptions.forEach((option) => {
      const row = document.createElement('label');
      row.className = 'option-item';
      const checked = state.filters[key].includes(option.value) ? 'checked' : '';
      row.innerHTML = `
        <input type="checkbox" value="${option.value}" ${checked} />
        <span class="option-label">${option.label}</span>
      `;
      const checkbox = row.querySelector('input');
      checkbox.addEventListener('change', () => {
        toggleSelection(key, option.value, checkbox.checked);
      });
      optionList.appendChild(row);
    });
  }

  trigger.addEventListener('click', (event) => {
    event.stopPropagation();
    closeAllSelects(key);
    const isOpening = panel.classList.contains('hidden');
    panel.classList.toggle('hidden', !isOpening);
    root.classList.toggle('open', isOpening);
    if (isOpening && searchable) {
      searchInput.focus();
    }
  });

  toolbar.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (!action) return;
    if (action === 'all') {
      state.filters[key] = component.options.map((item) => item.value);
    }
    if (action === 'clear') {
      state.filters[key] = [];
    }
    if (key === 'store') {
      syncShopFilterWithStores();
    }
    refreshFilterUIs();
  });

  searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.trim().toLowerCase();
    component.visibleOptions = component.options.filter((option) => option.label.toLowerCase().includes(keyword));
    renderOptions();
  });

  component.updateSummary = updateSummary;
  component.renderOptions = renderOptions;
  state.filterComponents[key] = component;
  updateSummary();
  renderOptions();
}

function closeAllSelects(exceptKey) {
  Object.values(state.filterComponents).forEach((component) => {
    if (component.key !== exceptKey) {
      component.panel.classList.add('hidden');
      component.root.classList.remove('open');
    }
  });
}

function toggleSelection(key, value, checked) {
  const current = new Set(state.filters[key]);
  if (checked) {
    current.add(value);
  } else {
    current.delete(value);
  }
  state.filters[key] = Array.from(current);
  if (key === 'store') {
    syncShopFilterWithStores();
  }
  refreshFilterUIs();
}

function setFilterOptions(key, options) {
  const component = state.filterComponents[key];
  component.options = [...options];
  component.visibleOptions = [...options];
  component.searchInput.value = '';
  component.renderOptions();
  component.updateSummary();
}

function syncShopFilterWithStores() {
  const validShopValues = getValidShopValues(state.filters.store);
  const nextSelected = state.filters.shop.filter((shop) => validShopValues.includes(shop));
  state.filters.shop = nextSelected.length ? nextSelected : [...validShopValues];
  const nextShopOptions = allShops.filter((item) => validShopValues.includes(item.value));
  setFilterOptions('shop', nextShopOptions);
}

function refreshFilterUIs() {
  Object.values(state.filterComponents).forEach((component) => {
    component.renderOptions();
    component.updateSummary();
  });

}


function filterRows() {
  const filters = state.filters;
  return state.rows.filter((row) =>
    filters.store.includes(row.storeValue) &&
    filters.shop.includes(row.shopValue) &&
    filters.category.includes(row.category) &&
    filters.counter.includes(row.counter) &&
    filters.brand.includes(row.brand) &&
    filters.productCode.includes(row.productCode) &&
    filters.barcode.includes(row.barcode)
  );
}

function applyFilters() {
  elements.loading.classList.remove('hidden');
  elements.queryButton.disabled = true;

  window.setTimeout(() => {
    state.filteredRows = filterRows();
    state.page = 1;
    renderTable();
    elements.loading.classList.add('hidden');
    elements.queryButton.disabled = false;
  }, 320);
}

function getPagedRows() {
  const start = (state.page - 1) * state.pageSize;
  const end = start + state.pageSize;
  return state.filteredRows.slice(start, end);
}

function renderTable() {
  const rows = getPagedRows();
  elements.footerTotal.textContent = state.filteredRows.length;

  if (!rows.length) {
    elements.tbody.innerHTML = '<tr><td class="empty-cell" colspan="28">未查询到符合条件的数据，请调整筛选条件后重试。</td></tr>';
  } else {
    elements.tbody.innerHTML = rows.map((row) => `
      <tr>
        <td>${row.store}</td>
        <td>${row.shop}</td>
        <td>${row.counter}</td>
        <td>${row.productCode}</td>
        <td>${row.productName}</td>
        <td>${row.supplier}</td>
        <td>${row.spec}</td>
        <td>${row.brand}</td>
        <td>${row.category}</td>
        <td>${row.barcode}</td>
        <td>${row.itemNo}</td>
        <td>${row.region}</td>
        <td>${row.ingredient}</td>
        <td>${row.kind}</td>
        <td class="price">${formatMoney(row.avgPrice)}</td>
        <td class="price">${formatMoney(row.salePrice)}</td>
        <td class="qty">${row.stockQty}</td>
        <td class="money">${formatMoney(row.avgAmount)}</td>
        <td class="money">${formatMoney(row.saleAmount)}</td>
        <td>${row.eopOrderNo}</td>
        <td>${row.eopInvoiceNo}</td>
        <td class="qty">${row.eopReceiveQty}</td>
        <td>${row.nccInvoiceNo}</td>
        <td class="price">${formatMoney(row.nccInvoicePrice)}</td>
        <td>${row.nccCurrency}</td>
        <td>${row.ciboInvoiceNo}</td>
        <td class="price">${formatMoney(row.ciboInvoicePrice)}</td>
        <td>${row.ciboCurrency}</td>
      </tr>
    `).join('');
  }

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.max(1, Math.ceil(state.filteredRows.length / state.pageSize));
  if (state.page > totalPages) {
    state.page = totalPages;
  }

  const pages = [];
  for (let page = 1; page <= totalPages; page += 1) {
    pages.push(page);
  }

  const visiblePages = pages.length <= 7
    ? pages
    : [1, ...pages.filter((page) => Math.abs(page - state.page) <= 1 && page !== 1 && page !== totalPages), totalPages]
        .filter((value, index, array) => array.indexOf(value) === index)
        .sort((a, b) => a - b);

  elements.pageList.innerHTML = visiblePages.map((page, index) => {
    const previous = visiblePages[index - 1];
    const gap = previous && page - previous > 1 ? '<span class="page-item">...</span>' : '';
    return `${gap}<button type="button" class="page-item ${page === state.page ? 'active' : ''}" data-page="${page}">${page}</button>`;
  }).join('');

  elements.prevPage.disabled = state.page <= 1;
  elements.nextPage.disabled = state.page >= totalPages;
  elements.gotoPage.value = state.page;

  elements.pageList.querySelectorAll('[data-page]').forEach((button) => {
    button.addEventListener('click', () => {
      state.page = Number(button.dataset.page);
      renderTable();
    });
  });
}

function resetFilters() {
  state.filters.store = storeOptions.map((item) => item.value);
  state.filters.shop = allShops.map((item) => item.value);
  state.filters.category = categoryOptions.map((item) => item.value);
  state.filters.counter = counterOptions.map((item) => item.value);
  state.filters.brand = brandOptions.map((item) => item.value);
  state.filters.productCode = productCodeOptions.map((item) => item.value);
  state.filters.barcode = barcodeOptions.map((item) => item.value);

  setFilterOptions('shop', allShops);
  refreshFilterUIs();
  applyFilters();
}

function exportCurrentRows() {
  const headers = [
    '门店', '店面', '柜组', '商品编码', '商品名称', '供应商', '规格', '品牌', '大类', '商品条码', '货号', '产地', '主要成分', '类别',
    '平均不含税进价', '售价', '库存数量', '平均不含税进价金额', '售价金额', 'EOP销售订单号', 'EOP发票号', 'EOP实收数量',
    'NCC发票号', 'NCC发票价', 'NCC发票币种', 'CIBO发票号', 'CIBO发票价', 'CIBO发票币种',
  ];

  const lines = [headers.join(',')];
  state.filteredRows.forEach((row) => {
    const values = [
      row.store, row.shop, row.counter, row.productCode, row.productName, row.supplier, row.spec, row.brand, row.category, row.barcode, row.itemNo, row.region, row.ingredient, row.kind,
      row.avgPrice, row.salePrice, row.stockQty, row.avgAmount, row.saleAmount, row.eopOrderNo, row.eopInvoiceNo, row.eopReceiveQty,
      row.nccInvoiceNo, row.nccInvoicePrice, row.nccCurrency, row.ciboInvoiceNo, row.ciboInvoicePrice, row.ciboCurrency,
    ].map((value) => `"${String(value).replaceAll('"', '""')}"`);
    lines.push(values.join(','));
  });

  const blob = new Blob(['﻿' + lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `退运清关商品数据分析表_${state.filters.date}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  document.addEventListener('click', () => {
    closeAllSelects();
    closeHeaderTips();
  });
  Object.values(state.filterComponents).forEach((component) => {
    component.panel.addEventListener('click', (event) => event.stopPropagation());
  });
  document.querySelectorAll('.th-tip').forEach((tip) => {
    tip.addEventListener('click', (event) => {
      event.stopPropagation();
      const willOpen = !tip.classList.contains('is-open');
      closeHeaderTips(tip);
      tip.classList.toggle('is-open', willOpen);
    });
  });

  elements.pageSize.addEventListener('change', () => {
    state.pageSize = Number(elements.pageSize.value);
    state.page = 1;
    renderTable();
  });

  elements.prevPage.addEventListener('click', () => {
    if (state.page > 1) {
      state.page -= 1;
      renderTable();
    }
  });

  elements.nextPage.addEventListener('click', () => {
    const totalPages = Math.max(1, Math.ceil(state.filteredRows.length / state.pageSize));
    if (state.page < totalPages) {
      state.page += 1;
      renderTable();
    }
  });

  elements.gotoButton.addEventListener('click', () => {
    const totalPages = Math.max(1, Math.ceil(state.filteredRows.length / state.pageSize));
    const target = Number(elements.gotoPage.value);
    if (!Number.isNaN(target) && target >= 1 && target <= totalPages) {
      state.page = target;
      renderTable();
    }
  });

  elements.queryButton.addEventListener('click', applyFilters);
  elements.resetButton.addEventListener('click', resetFilters);
  elements.exportButton.addEventListener('click', exportCurrentRows);
}

function initFilters() {
  createMultiSelect({ key: 'store', containerId: 'store-filter', options: storeOptions });
  createMultiSelect({ key: 'shop', containerId: 'shop-filter', options: allShops });
  createMultiSelect({ key: 'category', containerId: 'category-filter', options: categoryOptions, searchable: true });
  createMultiSelect({ key: 'counter', containerId: 'counter-filter', options: counterOptions, searchable: true });
  createMultiSelect({ key: 'brand', containerId: 'brand-filter', options: brandOptions, searchable: true });
  createMultiSelect({ key: 'productCode', containerId: 'productCode-filter', options: productCodeOptions, searchable: true });
  createMultiSelect({ key: 'barcode', containerId: 'barcode-filter', options: barcodeOptions, searchable: true });
}

function init() {
  state.rows = buildMockRows();
  initFilters();
  bindEvents();
  refreshFilterUIs();
  state.filteredRows = filterRows();
  renderTable();
}

init();