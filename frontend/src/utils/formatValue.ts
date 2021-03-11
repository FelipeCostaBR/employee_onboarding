const formatValue = (value: number): string =>
    Intl.NumberFormat('en-GB', { style: 'currency', currency: 'AUD' }).format(
        value,
    );

export default formatValue;
