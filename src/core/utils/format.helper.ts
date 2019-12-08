import 'intl';
import 'intl/locale-data/jsonp/vi';

export class FormatHelper {
    static formatVNCurrency(num: number): string {
        return Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND'}).format(num)
    }
}
