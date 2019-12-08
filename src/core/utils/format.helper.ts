import 'intl';
import 'intl/locale-data/jsonp/vi';

export class FormatHelper {
    static formatVNCurrency(num: number): string {
        return Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND'}).format(num)
    }

    static maxCharacters(str: string, max: number): string {
        if (str.length <= max) {
            return str
        }

        return str.slice(0, max - 1) + "..."
    }
}
