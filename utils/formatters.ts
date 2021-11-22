let defaultPriceFormatter = new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK' });

export function formatPrice(value: number, formatter = defaultPriceFormatter) {
  return formatter.format(value) || '';
};

export function formatWeight(value: number, unit = 'g') {
  return `${value}${unit ? ' ' + unit : ''}`;
};
